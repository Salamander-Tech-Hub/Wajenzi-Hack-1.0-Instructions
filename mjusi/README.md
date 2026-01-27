# Salamander - Modern Landing Page

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS. Salamander is designed to showcase team members, services, and provide a platform for user engagement through blogs and contact forms.

## Team Members

- **Kevin Mongare** - kmongar4@gmail.com
- **Fortune Maweu** - fortunemuoki@gmail.com
- **Ngeta John** - jpngeta@gmail.com
- **Fadhili Ibrahim** - ibrahimfadhili46@gmail.com

## Live Repository

[https://github.com/kevmongare/landing-page-v2.git](https://github.com/kevmongare/landing-page-v2.git)

## Tech Stack

- **Frontend Framework:** React 19.2.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.1.17
- **Bundler:** Vite
- **Routing:** React Router DOM 7.9.6
- **Icons:** React Icons 5.5.0
- **Graphics:** OGL (WebGL library) 1.0.11
- **Code Quality:** ESLint

## Project Structure

```
Salamander/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Button.tsx     # Custom button component
│   │   ├── DarkVeil.tsx   # Modal/overlay component
│   │   ├── Footer.tsx     # Footer section
│   │   ├── Inquire.tsx    # Inquiry/form component
│   │   └── Navbar.tsx     # Navigation bar
│   ├── pages/             # Page components (routes)
│   │   ├── Hero.tsx       # Home/landing page
│   │   ├── About.tsx      # About page
│   │   ├── Blog.tsx       # Blog listing page
│   │   └── Contact.tsx    # Contact page
│   ├── data/              # Static data and constants
│   │   └── Menu.ts        # Navigation menu data
│   ├── assets/            # Images and media files
│   ├── App.tsx            # Main app component with routing
│   ├── App.css            # Global app styles
│   ├── main.tsx           # React entry point
│   └── index.css          # Global styles
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── index.html             # HTML entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd Salamander
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Features

- **Responsive Design:** Fully responsive layout optimized for all device sizes
- **Modern UI:** Built with Tailwind CSS for a clean, professional appearance
- **Smooth Navigation:** Client-side routing with React Router for fast page transitions
- **Interactive Components:** Reusable components for consistent UI/UX
- **Performance Optimized:** Vite for fast development and optimized builds
- **Type Safe:** Full TypeScript support for safer development
- **SEO Ready:** Structured for search engine optimization

## Pages Overview

### Home (Hero Page)
Landing page showcasing the main value proposition with CTAs and engaging visuals.

### About
Team information, company mission, vision, and achievements.

### Blog
Blog post listing and individual post views for sharing insights and updates.

### Contact
Contact form and information for user inquiries and engagement.

## Component Guide

### Navbar
Main navigation component with links to all pages and mobile-responsive menu.

### Button
Custom button component with multiple variants for different use cases.

### Footer
Footer section with links, company information, and social media.

### DarkVeil
Modal/overlay component for popups and dialogs.

### Inquire
Component for handling user inquiries and form submissions.

## Styling Guidelines

- Use Tailwind CSS utility classes for styling
- Follow the existing component structure
- Maintain consistency with the current color scheme and typography
- Test responsive design on mobile, tablet, and desktop viewports
- Use semantic HTML for accessibility

## Performance Optimization

- Images should be optimized and compressed
- Lazy load images when appropriate
- Minimize CSS and JavaScript bundle sizes
- Use code splitting for better performance
- Monitor Core Web Vitals

## Accessibility

- Ensure proper contrast ratios
- Use semantic HTML elements
- Add alt text to all images
- Test with keyboard navigation
- Follow WCAG 2.1 guidelines

## Contributing

1. Create a new branch for your feature/fix
2. Make your changes following the project structure
3. Run linting: `npm run lint`
4. Test your changes locally
5. Commit with clear, descriptive messages
6. Push and create a pull request

## Deployment

The application can be deployed to various platforms:

- **Vercel:** Connected to GitHub, automatic deployments
- **Netlify:** Drag and drop or git integration
- **GitHub Pages:** Static hosting
- **Traditional Hosting:** Build and upload `dist/` folder

### Deployment Checklist

- [ ] All tests passing
- [ ] ESLint errors resolved
- [ ] Production build tested locally (`npm run preview`)
- [ ] Environment variables configured
- [ ] SEO meta tags verified
- [ ] Analytics configured (if applicable)

## Troubleshooting

### Port Already in Use
If port 5173 is in use, Vite will automatically use the next available port.

### Dependencies Issues
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Ensure TypeScript compilation succeeds:
```bash
npx tsc -b
```

## Future Enhancements

- [ ] Dark/light mode toggle
- [ ] Multi-language support
- [ ] Animation library integration
- [ ] Backend API integration
- [ ] User authentication
- [ ] Database integration for blog posts
- [ ] Email notification system
- [ ] Analytics dashboard

## License

[Add your license information here]

## Support & Questions

For questions or support, please contact the team members or visit the GitHub repository.

---

**Last Updated:** January 2025
