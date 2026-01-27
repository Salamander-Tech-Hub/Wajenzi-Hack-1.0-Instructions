# Manchooter

## Team Members

- **Name:** Member One | **Email:** member1@example.com
- **Name:** Member Two | **Email:** member2@example.com
- **Name:** Member Three | **Email:** member3@example.com
- **Name:** Member Four | **Email:** member4@example.com

## Remote Repository

[Your forked repo link here]

## What Makes This Website Special?

Our version of Salamander Tech Hub Landing Page V2 is special because:

### **1. Fully Responsive & Accessible Design**

- WCAG AA compliant with proper contrast ratios, keyboard navigation, and semantic HTML
- Mobile-first responsive design (works beautifully on all devices)
- Proper ARIA labels and accessibility features throughout

### **2. Modern, Clean Aesthetic**

- Minimalist design with white background, strategic yellow and black accents
- No linear gradients—uses solid fills, subtle shadows, and motion for depth
- Consistent typography with Poppins headings and Inter body text
- Professional spacing and grid system throughout

### **3. Rich Interactive Features**

- Sticky navigation with active page highlighting
- Mobile hamburger menu with proper focus management
- Project filtering with smooth animations (client-side)
- Reveal-on-scroll animations using IntersectionObserver
- Contact form with real-time validation and accessible success modal
- Blog "Load More" functionality with progressive disclosure
- Micro-interactions on buttons, cards, and hover states

### **4. Production-Ready Code**

- Pure HTML, CSS, and vanilla JavaScript (no frameworks)
- Bootstrap 5 for grid and responsive utilities
- Single custom CSS file with design tokens and BEM-like naming
- Clean, well-commented code for easy maintenance
- Zero build step required—works locally out of the box
- Optimized images with lazy loading and proper alt text
- JSON-LD structured data for SEO

### **5. User Experience Excellence**

- Smooth scrolling navigation
- Clear visual hierarchy and typography scale
- Consistent color system with accessible pairings
- Fast performance with optimized assets
- Dark footer contrast for readability
- Intuitive navigation structure across 5 pages

### **6. Easy to Customize**

- CSS variables at the top of `styles.css` for quick color/spacing changes
- Reusable header and footer patterns
- Placeholder images from Unsplash with easy replacement
- Well-organized file structure
- README comments in `index.html` for customization guide

## Project Structure

```
Manchooter/
├── index.html              # Home page with hero and featured projects
├── about.html              # Team, mission, and values
├── projects.html           # Project portfolio with filtering
├── blog.html               # Blog with load more functionality
├── contact.html            # Contact form with validation
├── assets/
│   ├── css/
│   │   └── styles.css      # All styling, animations, and design tokens
│   ├── js/
│   │   └── main.js         # Vanilla JS for interactivity
│   └── images/             # Placeholder images from Unsplash
└── README.md               # This file
```

## How to Use

### 1. **View Locally**

- Open any `.html` file directly in your browser
- No server or build step required
- All images and assets load immediately

### 2. **Customize Colors**

Edit the CSS variables in `assets/css/styles.css`:

```css
:root {
  --color-white: #ffffff; /* Main background */
  --color-yellow: #ffd400; /* Primary accent */
  --color-black: #0b0b0b; /* Text and strong accents */
  --color-gray-light: #f5f5f6; /* Panel backgrounds */
  --color-gray-neutral: #9b9b9b; /* Muted text */
}
```

### 3. **Swap Images**

Replace image URLs (currently using Unsplash):

```html
<!-- Download image and save to assets/images/my-image.jpg -->
<img src="assets/images/my-image.jpg" alt="Description" loading="lazy" />
```

### 4. **Edit Content**

All copy is in the HTML files. Simply update heading, paragraph, and button text directly.

### 5. **Deploy**

Upload all files to your hosting provider maintaining this structure:

```
/your-domain/
├── index.html
├── about.html
├── projects.html
├── blog.html
├── contact.html
└── assets/
    ├── css/
    ├── js/
    └── images/
```

## Key Features Implemented

✅ **Navigation**

- Sticky top nav with brand and menu
- Mobile hamburger menu with accessibility
- Active page highlighting
- Smooth scroll for anchors

✅ **Hero Section**

- Left-aligned heading and paragraph
- Two CTAs (primary yellow button, secondary outlined)
- Right-side image card with hover micro-interaction
- CSS + JS reveal animations

✅ **Projects Page**

- 3-column grid (responsive: 2 cols tablet, 1 col mobile)
- Project cards with images, titles, taglines, tags
- Hover reveal for "View" and "Case Study" actions
- Client-side filtering by category with smooth animations
- 9 sample projects with multiple tags

✅ **Blog Page**

- Featured article at top (large image + excerpt)
- 2-column grid of blog cards (responsive)
- Category badges, date, reading time
- "Load More" button progressively reveals posts
- Newsletter subscription section

✅ **About Page**

- Mission statement section
- 3 core values cards
- Team section with circular avatars and social links
- Company story with image

✅ **Contact Page**

- Accessible contact form with labels and validation
- Client-side validation with inline error messages
- Animated success modal after submission
- Contact information section
- Social links
- Map placeholder area
- FAQ section

✅ **Accessibility**

- Semantic HTML5 structure
- Proper form labels and ARIA attributes
- Keyboard navigable components
- Focus states visible on all interactive elements
- Color contrast WCAG AA compliant
- Alt text on all images
- Respects prefers-reduced-motion

✅ **Performance**

- Lazy loading on images
- Optimized CSS and JS (single files each)
- No external animations libraries
- Minimal DOM bloat
- Fast paint performance

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Design System

### Colors

- **Primary:** #FFD400 (Yellow) – CTAs, highlights, active states
- **Secondary:** #0B0B0B (Black) – Text, strong accents, footer
- **Background:** #FFFFFF (White) – Main surface
- **Neutral:** #F5F5F6 (Light Gray) – Sections, panels
- **Text Muted:** #9B9B9B (Gray) – Secondary text

### Typography

- **Headings:** Poppins 600/700 weight
- **Body:** Inter 400/500/600 weight
- **Scale:** 12px → 56px with 1.125x modular scale
- **Line Height:** 1.2 (headings), 1.6 (body)

### Spacing

- **Base Unit:** 8px (0.5rem)
- **Scale:** xs (8px) → 3xl (96px)
- **Gutters:** 32px desktop, 24px tablet, 16px mobile

### Shadows

- Subtle, elevation-based shadows
- No gradients (solid fills only)
- Box-shadow for depth on hover/interaction

### Animations

- **Duration:** 150ms (fast), 300ms (base), 500ms (slow)
- **Easing:** ease-out for all transitions
- **Transforms:** translateY, scale, opacity only
- **Respects:** prefers-reduced-motion preference

## Additional Notes

- All form submissions are client-side validated (no backend required for demo)
- Images can be replaced with your own or sourced from stock photo sites
- The site is ready for deployment to GitHub Pages, Netlify, Vercel, or any static host
- No database or build process required
- Easy to integrate with a backend email service (adjust form submission in `main.js`)

---

**Created by Manchooter Team | Nov 2025**

This website showcases a modern, accessible, and responsive redesign of the Salamander Tech Hub landing page with professional UI/UX best practices.
