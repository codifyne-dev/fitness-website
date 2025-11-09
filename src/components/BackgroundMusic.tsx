'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, ChevronRight, ChevronLeft } from 'lucide-react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const hasOpenedOnceRef = useRef(false);

  const lofiTracks = [
    '/audio/lofi-track-1.mp3',
    '/audio/lofi-track-2.mp3',
    '/audio/lofi-track-3.mp3'
  ];

  const [audioError, setAudioError] = useState<string | null>(null);

  const loadAudioFile = async (url: string): Promise<AudioBuffer> => {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioContext = audioContextRef.current!;
      return await audioContext.decodeAudioData(arrayBuffer);
    } catch (error) {
      console.error('Error loading audio file:', error);
      throw error;
    }
  };

  const startAmbientMusic = async () => {
    try {
      setIsLoading(true);
      setAudioError(null);
      
      let audioContext = audioContextRef.current;
      if (!audioContext || audioContext.state === 'closed') {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioContextRef.current = audioContext;
      }
      
      if (audioContext.state === 'suspended') {
        await audioContext.resume();
      }

      const audioBuffer = await loadAudioFile(lofiTracks[currentTrack]);
      audioBufferRef.current = audioBuffer;

      const sourceNode = audioContext.createBufferSource();
      sourceNode.buffer = audioBuffer;
      sourceNode.loop = true;

      const gainNode = audioContext.createGain();
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume * 0.3, audioContext.currentTime + 1);

      const filter = audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2000, audioContext.currentTime);
      filter.Q.setValueAtTime(0.5, audioContext.currentTime);

      const compressor = audioContext.createDynamicsCompressor();
      compressor.threshold.setValueAtTime(-20, audioContext.currentTime);
      compressor.knee.setValueAtTime(15, audioContext.currentTime);
      compressor.ratio.setValueAtTime(4, audioContext.currentTime);
      compressor.attack.setValueAtTime(0.01, audioContext.currentTime);
      compressor.release.setValueAtTime(0.1, audioContext.currentTime);

      sourceNode.connect(filter);
      filter.connect(compressor);
      compressor.connect(gainNode);
      gainNode.connect(audioContext.destination);

      sourceNodeRef.current = sourceNode;
      gainNodeRef.current = gainNode;

      sourceNode.start();
      setIsLoading(false);
      
    } catch (error) {
      console.error('Error starting ambient music:', error);
      setAudioError('Audio file not found. Please add lofi tracks to public/audio/ directory.');
      setIsLoading(false);
    }
  };


  const stopAmbientMusic = () => {
    if (sourceNodeRef.current) {
      sourceNodeRef.current.stop();
      sourceNodeRef.current.disconnect();
      sourceNodeRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const nextTrack = () => {
    if (isPlaying) {
      stopAmbientMusic();
    }
    setCurrentTrack((prev) => (prev + 1) % lofiTracks.length);
    if (isPlaying) {
      setTimeout(() => startAmbientMusic(), 100);
    }
  };

  const previousTrack = () => {
    if (isPlaying) {
      stopAmbientMusic();
    }
    setCurrentTrack((prev) => (prev - 1 + lofiTracks.length) % lofiTracks.length);
    if (isPlaying) {
      setTimeout(() => startAmbientMusic(), 100);
    }
  };

  const togglePlay = async () => {
    if (isPlaying) {
      stopAmbientMusic();
      setIsPlaying(false);
    } else {
      await startAmbientMusic();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.setValueAtTime(isMuted ? volume * 0.3 : 0, audioContextRef.current!.currentTime);
    }
    setIsMuted(!isMuted);
  };

  const updateVolume = (newVolume: number) => {
    setVolume(newVolume);
    if (gainNodeRef.current && !isMuted) {
      gainNodeRef.current.gain.setValueAtTime(newVolume * 0.3, audioContextRef.current!.currentTime);
    }
  };

  const playClickSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
    }
  };

  // Auto-play when user first opens the music tab
  useEffect(() => {
    if (!isHidden && !hasOpenedOnceRef.current && !isPlaying) {
      hasOpenedOnceRef.current = true;
      startAmbientMusic().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Failed to start music:', error);
      });
    }
  }, [isHidden, isPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (sourceNodeRef.current) {
        sourceNodeRef.current.stop();
        sourceNodeRef.current.disconnect();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  {/* Music Controls */}
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black/80 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden"
      >
        {isHidden ? (
          <motion.button
            onClick={() => setIsHidden(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 text-white hover:text-orange-500 transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Show music player"
          >
            <Music className="w-5 h-5" />
          </motion.button>
        ) : (
          <>
            <div className="flex items-center space-x-3 px-4 py-3">
              {/* Hide Button */}
              <motion.button
                onClick={() => setIsHidden(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-orange-500 transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Hide music player"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
          {/* Music Icon */}
          <motion.button
            onClick={() => {
              playClickSound();
              setShowControls(!showControls);
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="transition-colors cursor-pointer hover:text-orange-500"
            style={{ color: showControls ? '#f97316' : '#ffffff' }}
          >
            <Music className="w-5 h-5" />
          </motion.button>

          {/* Previous Track */}
          <motion.button
            onClick={() => {
              playClickSound();
              previousTrack();
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-orange-500 transition-colors cursor-pointer"
            disabled={isLoading}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"/>
            </svg>
          </motion.button>

          {/* Play/Pause Button */}
          <motion.button
            onClick={() => {
              playClickSound();
              togglePlay();
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-orange-500 transition-colors cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </motion.button>

          {/* Next Track */}
          <motion.button
            onClick={() => {
              playClickSound();
              nextTrack();
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-orange-500 transition-colors cursor-pointer"
            disabled={isLoading}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"/>
            </svg>
          </motion.button>

          {/* Mute Button */}
          <motion.button
            onClick={() => {
              playClickSound();
              toggleMute();
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-orange-500 transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Extended Controls */}
        {showControls && (
          <div className="pt-3 px-4 pb-3 border-t border-white/20">
              {/* Track Info */}
              <div className="mb-3 text-center">
                {audioError ? (
                  <>
                    <p className="text-red-400 text-sm font-medium">No Audio Files</p>
                    <p className="text-red-300 text-xs">{audioError}</p>
                    <p className="text-white/70 text-xs mt-1">
                      Download tracks from: Pixabay, Freesound, or YouTube Audio Library
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-white text-sm font-medium">
                      Track {currentTrack + 1} of {lofiTracks.length}
                    </p>
                    <p className="text-white/70 text-xs">
                      {lofiTracks[currentTrack].split('/').pop()?.replace('.mp3', '')}
                    </p>
                  </>
                )}
              </div>

              {/* Volume Control */}
              <div className="flex items-center justify-center space-x-2">
                <VolumeX className="w-4 h-4 text-white" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => updateVolume(parseFloat(e.target.value))}
                  className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #f97316 0%, #f97316 ${volume * 100}%, #ffffff20 ${volume * 100}%, #ffffff20 100%)`
                  }}
                />
                <Volume2 className="w-4 h-4 text-white" />
              </div>
          </div>
        )}
          </>
        )}
      </motion.div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          border: 2px solid #ffffff;
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          border: 2px solid #ffffff;
        }
      `}</style>
    </div>
  );
};

export default BackgroundMusic;