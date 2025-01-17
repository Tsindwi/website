# Kuyesela Community Website

A platform for individuals who are passionate about creating real change and tired of ineffective systems, particulary those that affect the public at large. We bring together technical enthusiasts and changemakers to build scalable, innovative solutions to global challenges.

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later
- A Supabase account and project

### Environment Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/kuyesela/website.git kuysela-community-website
   cd kuysela-community-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Supabase credentials:
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
   ```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

1. Build the application:

   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## 🏗️ Project Structure

```
├── components/       # Vue components
├── composables/      # Composable functions
├── pages/           # Application pages
├── plugins/         # Nuxt plugins
├── public/          # Static assets
└── supabase/        # Supabase migrations and configurations
```

## 🔧 Technologies Used

- [Nuxt 3](https://nuxt.com/) - Vue.js Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Supabase](https://supabase.com/) - Open source Firebase alternative
- [Vue Motion](https://motion.vueuse.org/) - Animation library
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Vue3 Lottie](https://www.npmjs.com/package/vue3-lottie) - Lottie animation player

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Team

- Roy Chanunkha - Founding Member
- Joel Fickson - Founding Member
- Kyton Thaundi - Founding Member
