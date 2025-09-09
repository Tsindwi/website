# Tsidwi Website

The official website for Tsidwi - a technology company transforming Africa's digital landscape.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/Tsindwi/website.git
cd website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
\`\`\`

## 📊 Monitoring & Analytics

### Sentry Setup
1. Create a Sentry account at [sentry.io](https://sentry.io)
2. Create a new project for "Next.js"
3. Copy your DSN and add it to `.env.local`:
   \`\`\`
   NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
   \`\`\`

### Installing Sentry
\`\`\`bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
\`\`\`

### What Sentry Tracks
- **Performance Monitoring**: Page load times, API response times
- **Error Tracking**: JavaScript errors, unhandled exceptions
- **User Sessions**: User interactions and navigation patterns
- **Custom Events**: Contact form submissions, newsletter signups

### Sentry Configuration Files
After running the wizard, you'll get:
- `sentry.client.config.ts` - Client-side error tracking
- `sentry.server.config.ts` - Server-side error tracking
- `sentry.edge.config.ts` - Edge runtime error tracking

### Environment Variables Needed
\`\`\`env
# Required for Sentry
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn@sentry.io/project-id
SENTRY_ORG=your-organization
SENTRY_PROJECT=your-project-name
SENTRY_AUTH_TOKEN=your-auth-token

# Optional for source maps upload
SENTRY_SILENT=false
\`\`\`

## 🔧 Additional Analytics

### Google Analytics (Optional)
Add to `.env.local`:
\`\`\`
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
\`\`\`

## 📱 Features

- **Responsive Design**: Mobile-first approach with perfect Lighthouse scores
- **Performance Optimized**: Fast loading with modern web standards
- **SEO Ready**: Comprehensive meta tags and structured data
- **Error Handling**: Graceful error boundaries and 404 pages
- **Legal Compliance**: Privacy Policy and Terms of Service included

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion & CSS animations
- **Monitoring**: Sentry (when configured)
- **Deployment**: Vercel (recommended)

## 📄 Legal Pages

- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## 🚨 Error Handling

- `app/not-found.tsx` - Custom 404 page
- `app/error.tsx` - Error boundary for recoverable errors  
- `app/global-error.tsx` - Global error handler for critical errors

## 📈 Performance

The website is optimized for:
- 100% Lighthouse Performance Score
- Core Web Vitals compliance
- Mobile-first responsive design
- Accessibility (WCAG 2.1 AA)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical issues or questions:
- Email: tech@tsidwi.com
- GitHub Issues: [Create an issue](https://github.com/Tsindwi/website/issues)

## 📄 License

Copyright © 2025 Tsidwi. All rights reserved.
