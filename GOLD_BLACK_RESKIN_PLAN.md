# Gold & Black Reskin - Complete Implementation Plan

**Objective:** Clone reference site layout (https://sanajitjana.github.io/) with Dr. Semiu Akanni's content, styled in gold (#D4AF37) & black (#000000)

**Branch:** `feature/gold-black-reskin`

---

## Phase 1: Design System ✅ IN PROGRESS

### Completed
- ✅ Updated `tailwind.config.js` with brand gold/black colors
- ✅ Updated `styles/globals.css` with gold/black CSS variables
- ✅ Configured form, button, and link styles for gold/black theme
- ✅ Build passes: `✓ Compiled successfully`

### Status
- All global styling updated
- Colors applied: `--brand-gold: #D4AF37`, `--brand-black: #000000`
- Button styles: gold background, hover to lighter gold, transforms on click
- Links: gold by default, hover with underline
- Dark theme fully implemented

---

## Phase 2: Component Refactor (PENDING)

### 2.1 Header Component
**File:** `components/Header.jsx`
- [ ] Remove current header code
- [ ] Create new header with:
  - Dark background (brand-black) with gold accents
  - Sticky positioning with gold bottom border
  - Logo section with gold/black branding
  - Nav links in gold with hover underline
  - Mobile hamburger that opens gold/black styled menu
  - Smooth transitions

**Expected Result:**
```
[Logo] [Home] [About] [Projects] [Contact]
```

### 2.2 Hero Section
**File:** `pages/index.jsx` (hero section)
- [ ] Update hero to use gold text for name
- [ ] Portrait image on left (mobile: top) in responsive grid
- [ ] Content on right with gold/black styling
- [ ] CTA buttons using new btn-primary/btn-secondary styles
- [ ] Contact cards with gold icons and borders

### 2.3 Footer Component
**File:** `components/Footer.jsx`
- [ ] Dark background (brand-black)
- [ ] Gold divider line
- [ ] Logo, contact, links, copyright
- [ ] All text white/light gray
- [ ] Links in gold

### 2.4 ProjectCard Component
**File:** `components/ProjectCard.jsx`
- [ ] Dark card background (gray-900)
- [ ] Gold accents on hover
- [ ] Title in white
- [ ] Metadata in gray
- [ ] Responsive hover lift with gold shadow

### 2.5 Other Components
- [ ] ContactForm: dark inputs with gold focus state
- [ ] Timeline: gold left border, white text, gray dots
- [ ] Tags/Badges: gold background for highlights

---

## Phase 3: Page Updates (PENDING)

### 3.1 Homepage (`pages/index.jsx`)
- [x] Base structure (hero + contact cards)
- [ ] Full gold/black restyling
- [ ] CTA buttons styled
- [ ] Responsive on mobile

### 3.2 About Page (`pages/about.jsx`)
- [ ] Replace Tailwind classes with gold/black styling
- [ ] Education section: gold left border, white text
- [ ] Certifications: gold badge styling
- [ ] Work experience: gold timeline
- [ ] Awards/publications: gold accents

### 3.3 Projects Page (`pages/projects.jsx`)
- [ ] Project grid with new ProjectCard styling
- [ ] Category headers in gold
- [ ] Stats box: gold background accents
- [ ] CTA section: gold button

---

## Phase 4: Assets & Branding (PENDING)

### 4.1 Logo
- [ ] Ensure logo uses gold (#D4AF37) + black
- [ ] Verify at all sizes (favicon, header 36px, hero)
- [ ] Add to `/public` if new

### 4.2 Images
- [ ] Portrait: check if needs gold border frame (optional)
- [ ] Optimize for WebP with lazy loading
- [ ] Ensure proper aspect ratios

### 4.3 Favicons/Meta
- [ ] Update favicon to gold + black
- [ ] Meta theme-color: #D4AF37
- [ ] OG image with gold branding

---

## Phase 5: Features (PENDING)

### 5.1 Contact Form (`pages/api/contact.js`)
- [ ] Mock success if SMTP not configured
- [ ] Gold button with black text
- [ ] Dark input fields with gold focus state
- [ ] Honeypot field (`_honeypot`)
- [ ] Rate limiting headers

### 5.2 CV Download
- [ ] Generate multi-page PDF if not provided
- [ ] Button: `<a href="/public/semiu-akanni-cv.pdf" download>` styled gold
- [ ] Link appears in hero and footer

### 5.3 Links
- [ ] Email: clickable `tel:` + `mailto:` everywhere
- [ ] Phone: clickable with country code

---

## Phase 6: Responsiveness (PENDING)

### Breakpoints to Test
- [ ] 320px (mobile small)
- [ ] 375px (mobile standard)
- [ ] 412px (mobile large)
- [ ] 768px (tablet)
- [ ] 1024px (desktop)
- [ ] 1440px (large desktop)

### Checklist
- [ ] No horizontal scroll at any size
- [ ] Nav collapses to hamburger at ≤768px
- [ ] Typography readable (clamp scales properly)
- [ ] Buttons ≥44px tap target
- [ ] Images responsive with srcset
- [ ] Grid auto-reflow on smaller screens

---

## Phase 7: Quality Assurance (PENDING)

### 7.1 Console Errors
- [ ] Zero console errors on desktop
- [ ] Zero console errors on mobile
- [ ] All warnings addressed or justified

### 7.2 Accessibility
- [ ] ARIA labels on nav, buttons, form inputs
- [ ] Keyboard navigation works (tab, enter, space)
- [ ] Focus visible rings (gold outline)
- [ ] Color contrast ≥4.5:1 for text

### 7.3 Performance
- [ ] Lighthouse scores:
  - Performance ≥ 85
  - Accessibility ≥ 90
  - Best Practices ≥ 90
  - SEO ≥ 90
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

### 7.4 Browser Support
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari

---

## Phase 8: Deployment (PENDING)

### 8.1 Pre-Deploy
- [ ] `npm run build` succeeds
- [ ] `npm run dev` runs locally without errors
- [ ] All pages accessible at localhost:3000

### 8.2 Deploy to Vercel
- [ ] Push feature branch to GitHub
- [ ] Vercel auto-deploys
- [ ] Verify production build
- [ ] Test live URL

### 8.3 Documentation
- [ ] Screenshot: 1440px desktop
- [ ] Screenshot: 375px mobile
- [ ] GIF: hero, nav, CTA interactions
- [ ] Lighthouse report
- [ ] Console log (no errors)
- [ ] README with setup instructions

---

## File Modification Checklist

| File | Status | Priority |
|------|--------|----------|
| `tailwind.config.js` | ✅ Done | High |
| `styles/globals.css` | ✅ Done | High |
| `components/Header.jsx` | ⏳ Pending | High |
| `components/Footer.jsx` | ⏳ Pending | High |
| `components/ProjectCard.jsx` | ⏳ Pending | High |
| `pages/index.jsx` | ⏳ Pending | High |
| `pages/about.jsx` | ⏳ Pending | Medium |
| `pages/projects.jsx` | ⏳ Pending | Medium |
| `pages/api/contact.js` | ⏳ Pending | Medium |
| `public/semiu-akanni-cv.pdf` | ⏳ Check | Medium |
| `public/logo-gold-black.png` | ⏳ Check | Low |

---

## Color Palette Reference

```css
/* Primary */
--brand-gold: #D4AF37
--brand-black: #000000

/* Blacks */
--color-bg: #000000
--color-bg-light: #111111
--color-border: #333333

/* Whites */
--color-text: #ffffff
--color-text-light: #cccccc
--color-text-muted: #999999

/* Hover States */
Gold hover: #e8c547 (lighter gold)
Gold shadow: rgba(212, 175, 55, 0.2)
```

---

## Expected Final Result

**Visual Style:**
- Dark theme with gold accents
- All text white on black
- Gold buttons, links, highlights
- Smooth transitions and hover states
- Professional, premium feel

**Functionality:**
- Fully responsive (mobile-first)
- Working contact form
- CV download button
- Clickable phone/email
- No console errors
- Lighthouse scores 85+

**Content:**
- Dr. Semiu Akanni's CV content
- Projects, education, certifications
- Contact information
- Professional summary

---

## Next Steps

1. **Immediately:** Start with Phase 2.1 - Header Component refactor
2. **Then:** Update components in order (Footer, ProjectCard)
3. **Parallel:** Update pages (index, about, projects)
4. **End:** Test, QA, optimize, deploy

**Timeline:** ~4-6 hours of focused development to complete all phases

**Commit Strategy:**
- Atomic commits per component
- Format: `🎨 feat: Gold/black Header component`, etc.
- Include "gold-black-reskin" branch in commit messages

---

**Status:** Starting Phase 2 - Component refactor
**Last Updated:** 2025-10-25
