# SALAMANDER TECH HUB - VISUAL DESIGN REFERENCE

## Color Palette Reference

```
┌─────────────────────────────────────────────────────┐
│ PRIMARY COLORS                                      │
├─────────────────────────────────────────────────────┤
│ ⬜ WHITE       #FFFFFF     Main backgrounds         │
│ ⬛ BLACK       #0B0B0B     Text & strong accents    │
│ 🟨 YELLOW      #FFD400     CTAs, highlights        │
│ ⬜ LIGHT GRAY  #F5F5F6     Section backgrounds     │
│ 🔘 MUTED GRAY  #9B9B9B     Secondary text          │
│ ⬜ BORDER      #E8E8E8     Dividers, borders       │
└─────────────────────────────────────────────────────┘
```

## Typography Scale

```
H1:  56px (3.5rem)  — Page titles, hero headings
H2:  40px (2.5rem)  — Section titles
H3:  32px (2rem)    — Subsections
H4:  24px (1.5rem)  — Component titles
H5:  18px (1.125rem) — Small headings
H6:  16px (1rem)    — Uppercase labels
Body: 16px (1rem)   — Default text
Caption: 14px (0.875rem) — Meta information
Small: 12px (0.75rem) — Captions, labels
```

## Spacing Scale

```
xs:  8px   (0.5rem)
sm:  16px  (1rem)
md:  24px  (1.5rem)
lg:  32px  (2rem)
xl:  48px  (3rem)
2xl: 64px  (4rem)
3xl: 96px  (6rem)
```

## Component Library

### Buttons

```
PRIMARY BUTTON
┌──────────────────┐
│  Explore Projects │  ← Yellow background
└──────────────────┘    Black text
Hover: Scale up + lift shadow
Focus: Yellow outline

SECONDARY BUTTON
┌──────────────────┐
│  Get in Touch    │  ← Transparent background
└──────────────────┘    Black border & text
Hover: Black background, white text
Focus: Yellow outline
```

### Cards

```
PROJECT CARD
┌────────────────────┐
│  [Project Image]   │
│  Title             │
│  Tagline           │
│  [tag] [tag]       │
│ View  Case Study   │  ← Hidden until hover
└────────────────────┘
Hover: Shadow lift + translateY

BLOG CARD
┌────────────────────┐
│  [Article Image]   │
│  [Category Badge]  │  ← Yellow background
│  Title             │
│  Excerpt...        │
│  Date  Reading time│  ← Gray text
│  Read More →       │  ← Yellow text
└────────────────────┘
```

### Form Elements

```
INPUT FIELD
┌─────────────────────────┐
│ Label                   │
├─────────────────────────┤
│ Placeholder text...     │ ← Border: #E8E8E8
└─────────────────────────┘

FOCUSED INPUT
├─────────────────────────┤
│ Placeholder text...     │ ← Border: #FFD400 (yellow)
└─────────────────────────┘ ← Box-shadow with yellow

ERROR INPUT
├─────────────────────────┤
│ Placeholder text...     │ ← Border: #DC2626 (red)
└─────────────────────────┘
Error message in red text
```

### Navigation

```
DESKTOP NAV
[Logo]  Home  About  Projects  Blog  Contact

MOBILE NAV
[Logo] [☰]
        ↓ (on click)
    [Home]
    [About]
    [Projects]
    [Blog]
    [Contact]
    ↑ Menu slides in
```

### Section Layouts

```
HERO (2-column on desktop, 1 on mobile)
┌────────────────────────────────────────┐
│ [Title]      │  [Large Image Card]    │
│ [Paragraph]  │  with shadow + hover   │
│ [CTA Buttons]│                        │
└────────────────────────────────────────┘

GRID (3 columns desktop, 2 tablet, 1 mobile)
┌─────────────────────────────────────────┐
│ [Card] [Card] [Card]                   │
│ [Card] [Card] [Card]                   │
│ [Card] [Card] [Card]                   │
└─────────────────────────────────────────┘
```

## Responsive Breakpoints

```
Mobile    < 576px     Full width, single column
Tablet    576-992px   2 columns, hamburger menu
Desktop   992-1200px  3 columns, full nav
Large     1200px+     Max-width containers
```

## Animation Speeds

```
Fast    150ms   Button hover, micro-interactions
Base    300ms   Card hover, modal, menu
Slow    500ms   Reveal on scroll, page transitions
```

## Shadow System (No Gradients)

```
xs: 0 1px 2px rgba(0,0,0,0.05)     ← Very subtle
sm: 0 2px 4px rgba(0,0,0,0.08)     ← Light
md: 0 4px 12px rgba(0,0,0,0.1)     ← Medium
lg: 0 8px 24px rgba(0,0,0,0.12)    ← Deep

Used on:
- Card hover (md → lg)
- Modal dialog (lg)
- Hero image card (lg)
- Button hover (md)
```

## Micro-interactions

```
BUTTON HOVER
Click me → Scale 1.02 + translateY(-2px) + shadow↑

CARD HOVER
Card → Box-shadow lift + translateY(-4px)

REVEAL ON SCROLL
Element → Fade-in (0→1) + Slide (20px↓→0)

NAV SCROLL EFFECT
Page top → Nav: transparent, no shadow
Page scroll → Nav: white bg, shadow ✓

FORM ERROR
Invalid field → Border red + Error text ✓
Valid field → Border normal + No error text

SUCCESS MODAL
Submit form → Modal slides up + Fade in
Close button → Modal fades out + Slides down
```

## Accessibility Standards

```
✓ Color Contrast
  Text:  4.5:1 (minimum for WCAG AA)
  UI:    3:1 (minimum for WCAG AA)

✓ Focus States
  All interactive elements have visible outline
  Outline color: #FFD400 (yellow)
  Outline width: 2px
  Outline offset: 2px

✓ Alt Text
  All images have descriptive alt attributes
  Example: "Team collaboration at Salamander workspace"

✓ Form Labels
  All form fields have associated labels
  Labels use <label for="field-id"> syntax

✓ Keyboard Navigation
  Tab through all interactive elements
  Enter to activate buttons/links
  Space to toggle buttons
  Escape to close modals
```

## Common UI Patterns

### Section Background Colors

- Default (white): #FFFFFF
- Alternate (gray): #F5F5F6
- Footer/CTA (black): #0B0B0B

### Link Styling

Text color: #0B0B0B
Hover color: #FFD400
Underline: None (except in prose)

### Badge/Tag Styling

Background: #F5F5F6 (light gray)
Text: #9B9B9B (muted gray)
Padding: 4px 8px
Border-radius: 4px

### Success/Error Messages

Success: Green background, white text
Error: Red border, red text (#DC2626)
Info: Yellow background, black text

## CSS Variable Reference

```css
/* Colors */
--color-white: #FFFFFF
--color-black: #0B0B0B
--color-yellow: #FFD400
--color-gray-light: #F5F5F6
--color-gray-neutral: #9B9B9B
--color-text-muted: #6B6B6B
--color-border: #E8E8E8

/* Spacing */
--spacing-xs: 0.5rem
--spacing-sm: 1rem
--spacing-md: 1.5rem
--spacing-lg: 2rem
--spacing-xl: 3rem
--spacing-2xl: 4rem
--spacing-3xl: 6rem

/* Typography */
--font-size-xs: 0.75rem
--font-size-sm: 0.875rem
--font-size-base: 1rem
--font-size-lg: 1.125rem
--font-size-xl: 1.5rem
--font-size-2xl: 2rem
--font-size-3xl: 2.5rem
--font-size-4xl: 3.5rem

/* Line Heights */
--line-height-tight: 1.2
--line-height-normal: 1.6
--line-height-relaxed: 1.8

/* Shadows */
--shadow-xs: 0 1px 2px rgba(0,0,0,0.05)
--shadow-sm: 0 2px 4px rgba(0,0,0,0.08)
--shadow-md: 0 4px 12px rgba(0,0,0,0.1)
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12)

/* Transitions */
--transition-fast: 150ms ease-out
--transition-base: 300ms ease-out
--transition-slow: 500ms ease-out
```

## Typography Pairing

```
Headings:   Poppins (Google Fonts)
            Weight: 600, 700
            Letter-spacing: -0.02em (tight)

Body:       Inter (Google Fonts)
            Weight: 400, 500, 600
            Letter-spacing: 0.02em (loose)
            Line-height: 1.6

Fallback stack:
-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

## Icon System

```
Simple emoji icons used throughout:
🦎  Brand/Salamander
🤝  Collaboration
💡  Innovation
🌱  Growth
✉️  Email
📞  Phone
📍  Location
⏰  Hours
𝕏   Twitter/X
◉   GitHub
in   LinkedIn
D   Discord

All icons with clear, single-color styling
```

## Design Principles Applied

1. **Clarity** - Clear hierarchy, readable typography
2. **Consistency** - Repeated patterns, unified spacing
3. **Contrast** - Strong black text on white, yellow accents
4. **Accessibility** - WCAG AA compliant, keyboard nav
5. **Responsiveness** - Mobile-first, flexible layouts
6. **Performance** - Optimized assets, no gradients
7. **Simplicity** - Minimal visual noise, purposeful elements

---

**Visual Reference Card | Salamander Tech Hub Redesign**  
**Use this for design consistency across your customizations**
