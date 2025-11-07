# Aspirae Website

A website for Aspirae - a career and personal growth coaching company. Built with Next.js, TypeScript, and TailwindCSS.

## Features

- **Modern Design**: Premium design with wine red and gold dark theme, and teal/coral light theme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Complete SEO setup with meta tags, sitemap, and structured data
- **Accessibility**: Built with accessibility best practices
- **Contact Forms**: Aesthetic contact forms (portfolio demonstration only - no actual submission)
- **Multiple Sections**: Hero, About, Services, Team, Testimonials, Blog, and Contact sections

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Or use the provided batch file (Windows):
```bash
start-local.bat
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage (single-page app with sections)
│   └── globals.css      # Global styles
├── components/          # Reusable components
│   ├── ui/              # Basic UI components (Button, Card, ThemeToggle)
│   ├── sections/        # Page sections (Hero, About, Services, Team, Testimonials, Blog, Contact)
│   ├── Navigation.tsx   # Navigation component
│   ├── Footer.tsx       # Footer component
│   ├── Logo.tsx         # Logo component
│   ├── LogoText.tsx     # Logo text component
│   ├── BackgroundMusic.tsx # Background music player
│   └── ScrollPopup.tsx  # Scroll popup component
├── config/              # Configuration files
│   └── site.ts          # Site configuration and content
├── contexts/            # React contexts
│   └── ThemeContext.tsx # Theme management context
├── hooks/               # Custom React hooks
│   └── useSoundEffects.ts # Sound effects hook
└── utils/               # Utility functions
    └── cn.ts            # Class name helper (clsx/tailwind-merge)
```

## Customization

### Content Updates

All client-editable content is stored in `/src/config/site.ts`. This includes:

- Company information
- Contact details
- Services and pricing
- Team members
- Testimonials
- Navigation links
- SEO metadata

### Styling

The website uses a custom color scheme defined in `tailwind.config.js`:

- **Light Theme**: Teal (#1FA2A0), Coral (#FF6B6B), Deep Navy (#1C2541)
- **Dark Theme**: Wine Red (#722F37), Gold (#D4AF37), Dark backgrounds

### Images

Replace placeholder images in the following locations:
- Hero section logo
- Service illustrations
- Team member photos
- Blog post images

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

This is a portfolio project created for demonstration purposes. The design and code are available for reference, but the content (company information, services, etc.) are placeholder examples and not real business information.
