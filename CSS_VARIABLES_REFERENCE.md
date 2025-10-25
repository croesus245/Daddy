/* Design System CSS Variables - Complete Reference */

:root {
  /* ============================================
     COLOR SYSTEM
     ============================================ */
  --color-primary: #1a1a1a;           /* Main brand color - dark charcoal */
  --color-accent: #0066cc;            /* Accent color - vibrant blue */
  --color-text: #222222;              /* Primary text color */
  --color-text-light: #666666;        /* Secondary/muted text */
  --color-border: #e5e5e5;            /* Border color - light gray */
  --color-bg-light: #f9f9f9;          /* Light background */
  
  /* ============================================
     TYPOGRAPHY - FLUID SCALING WITH CLAMP()
     ============================================ */
  /* Font Stack */
  --font-sans-preferred: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'Courier New', monospace;
  
  /* Fluid Font Sizes */
  --font-xs: clamp(0.75rem, 1vw, 0.875rem);           /* Extra small: 12-14px */
  --font-sm: clamp(0.875rem, 1.2vw, 1rem);           /* Small: 14-16px */
  --font-base: clamp(1rem, 1.5vw, 1.125rem);         /* Base: 16-18px */
  --font-lg: clamp(1.125rem, 1.8vw, 1.375rem);       /* Large: 18-22px */
  --font-xl: clamp(1.375rem, 2vw, 1.75rem);          /* Extra large: 22-28px */
  --font-2xl: clamp(1.75rem, 2.5vw, 2.25rem);        /* 2XL: 28-36px */
  --font-3xl: clamp(2.25rem, 3vw, 3rem);             /* 3XL: 36-48px */
  --font-4xl: clamp(3rem, 4vw, 4rem);                /* 4XL: 48-64px */
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* ============================================
     SPACING SYSTEM - 8px BASE
     ============================================ */
  --sp-xs: 0.5rem;    /* 8px - Extra small spacing */
  --sp-sm: 0.75rem;   /* 12px - Small spacing */
  --sp-md: 1rem;      /* 16px - Medium/default spacing */
  --sp-lg: 1.5rem;    /* 24px - Large spacing */
  --sp-xl: 2rem;      /* 32px - Extra large spacing */
  --sp-2xl: 3rem;     /* 48px - 2XL spacing */
  
  /* ============================================
     BORDER RADIUS
     ============================================ */
  --radius-sm: 0.375rem;    /* 6px - Small radius */
  --radius-md: 0.5rem;      /* 8px - Medium radius */
  --radius-lg: 0.75rem;     /* 12px - Large radius */
  --radius-xl: 1rem;        /* 16px - Extra large radius */
  
  /* ============================================
     TRANSITIONS & ANIMATIONS
     ============================================ */
  --transition-fast: all 150ms ease-in-out;
  --transition-base: all 200ms ease-in-out;
  --transition-slow: all 300ms ease-in-out;
  
  /* ============================================
     SHADOWS
     ============================================ */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
}

/* ============================================
   COMPONENT UTILITY CLASSES
   ============================================ */

/* Container - Responsive max-width */
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--sp-md);
  padding-right: var(--sp-md);
}

/* Screen Reader Only - Hide visually but keep for a11y */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Buttons */
.btn {
  display: inline-block;
  font-weight: var(--font-weight-semibold);
  padding: var(--sp-md) var(--sp-lg);
  border-radius: var(--radius-md);
  transition: var(--transition-base);
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-sans-preferred);
}

.btn-primary {
  background: var(--color-accent);
  color: white;
}

.btn-primary:hover {
  background: color-mix(in srgb, var(--color-accent) 90%, #000);
}

/* Grid utilities */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--sp-lg);
}

.grid-auto-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--sp-lg);
}

/* ============================================
   USAGE EXAMPLES
   ============================================ */

/*
  EXAMPLE 1: Using CSS Variables in Components
  
  .my-component {
    color: var(--color-text);
    font-size: var(--font-lg);
    padding: var(--sp-md);
    border-radius: var(--radius-lg);
    transition: var(--transition-base);
  }

  EXAMPLE 2: Creating Responsive Typography
  
  h1 {
    font-size: var(--font-4xl);
    line-height: 1.2;
  }

  EXAMPLE 3: Using Color System for Hover States
  
  .card:hover {
    background: var(--color-bg-light);
    border-color: var(--color-accent);
  }

  EXAMPLE 4: Implementing Consistent Spacing
  
  .section {
    padding: var(--sp-xl) var(--sp-lg);
    margin-bottom: var(--sp-2xl);
  }

  EXAMPLE 5: Creating Responsive Grids
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--sp-lg);
  }
*/

/* ============================================
   MAINTENANCE & CUSTOMIZATION GUIDE
   ============================================ */

/*
  CHANGING BRAND COLORS:
  1. Update --color-primary for main brand
  2. Update --color-accent for secondary brand
  3. All components automatically update via CSS variable inheritance

  ADJUSTING TYPOGRAPHY SCALE:
  1. Modify clamp() values in --font-* variables
  2. Change first value for minimum size
  3. Change middle value for viewport ratio (1vw = 1% of viewport width)
  4. Change third value for maximum size

  UPDATING SPACING SYSTEM:
  1. All --sp-* values inherit from 8px base unit
  2. Multiply by factor to scale entire system
  3. Example: --sp-xs from 0.5rem to 0.75rem = 1.5x scaling

  ADDING NEW VARIABLES:
  1. Follow naming convention: --category-name
  2. Document in comments
  3. Update components to use new variables
  4. Test responsiveness at multiple breakpoints

  BEST PRACTICES:
  - Always use CSS variables instead of hard-coded values
  - Keep consistency across all components
  - Test responsive behavior at 320px, 768px, 1024px, 1440px
  - Use calc() for dynamic calculations: calc(var(--sp-md) * 2)
  - Use color-mix() for color variations: color-mix(in srgb, var(--color-primary) 50%, white)
*/
