# QA Checklist & Deployment Guide

## Pre-Deployment QA Checklist

### 1. Functionality Tests ✅

#### Home Page
- [ ] Page loads without errors
- [ ] Hero section displays correctly with all text
- [ ] Professional highlights (25+ years, 50+ projects, etc.) visible
- [ ] Contact CTA buttons functional
- [ ] Quick contact info displayed (email, phone, address)
- [ ] All links clickable and properly styled

#### About Page
- [ ] Page loads without errors
- [ ] Professional summary displays
- [ ] Education timeline shows all entries
- [ ] Work experience displays with dates and descriptions
- [ ] Professional memberships displayed
- [ ] Awards section shows all awards
- [ ] Publications section visible
- [ ] Download CV button works
- [ ] All navigation links work

#### Projects Page
- [ ] Page loads without errors
- [ ] Project categories display correctly
- [ ] Projects grouped properly (Government, Survey, Piling, Infrastructure)
- [ ] Each project card shows title, date, location, role, description
- [ ] Project statistics display accurately
- [ ] CTA button to contact form works

#### Contact Form
- [ ] Form fields are visible and enabled
- [ ] Name field accepts text input
- [ ] Email field validates email format
- [ ] Message field accepts multi-line text
- [ ] Submit button is clickable
- [ ] Form validation works (required fields)
- [ ] Error messages display for invalid inputs
- [ ] Success message displays after submission
- [ ] Rate limiting prevents spam (5 requests/min per IP)
- [ ] Honeypot field is hidden from users

#### PDF CV Generation
- [ ] CV download link exists on home page
- [ ] CV download link exists on about page
- [ ] PDF downloads successfully
- [ ] PDF opens in browser or downloads to disk
- [ ] PDF contains all key sections (summary, education, experience, etc.)
- [ ] PDF formatting is clean and professional
- [ ] PDF is readable on mobile and desktop

### 2. Accessibility Tests ✅

- [ ] All interactive elements are keyboard focusable (Tab key)
- [ ] Focus indicators are visible (outline/highlight)
- [ ] All buttons have accessible labels
- [ ] All form fields have associated labels
- [ ] Alt text present on all images
- [ ] Semantic HTML used throughout (header, nav, main, section, footer)
- [ ] Color contrast ≥ 7:1 (WCAG AAA)
- [ ] Links are distinguishable from plain text
- [ ] Mobile buttons are ≥44x44px touch targets
- [ ] Form errors clearly indicated and linked to fields
- [ ] Skip navigation link available (if needed)

### 3. Responsive Design Tests ✅

#### Mobile (375px - iPhone SE)
- [ ] Page loads fully
- [ ] No horizontal scrolling
- [ ] Text is readable (font size ≥ 16px on inputs)
- [ ] Buttons are large enough to tap (≥44x44px)
- [ ] Navigation menu is accessible (hamburger or stacked)
- [ ] Images scale appropriately
- [ ] Contact form is usable on mobile
- [ ] Footer links work

#### Tablet (768px)
- [ ] Layout adjusts properly
- [ ] Columns display appropriately
- [ ] Navigation is accessible
- [ ] No horizontal scrolling

#### Desktop (1440px)
- [ ] Full navigation visible
- [ ] Multi-column layouts display correctly
- [ ] Whitespace is appropriate
- [ ] No text overflow issues
- [ ] Images display at full quality

### 4. Performance Tests ✅

#### Lighthouse Scores (Chrome DevTools)
- [ ] Performance: ≥ 90
- [ ] Accessibility: ≥ 95
- [ ] Best Practices: ≥ 90
- [ ] SEO: ≥ 90

#### Performance Metrics
- [ ] First Contentful Paint (FCP): < 2.5s
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] Time to Interactive (TTI): < 3.8s
- [ ] Images are optimized
- [ ] CSS is minified
- [ ] JavaScript is minified

### 5. Browser Compatibility Tests ✅

- [ ] Chrome (latest) - works perfectly
- [ ] Firefox (latest) - works perfectly
- [ ] Safari (latest) - works perfectly
- [ ] Edge (latest) - works perfectly
- [ ] Mobile Chrome - works perfectly
- [ ] Mobile Safari - works perfectly

### 6. SEO Tests ✅

- [ ] Page titles are descriptive and include keywords
- [ ] Meta descriptions present and unique
- [ ] Heading hierarchy is correct (h1, h2, h3)
- [ ] No duplicate titles or descriptions
- [ ] Open Graph tags present
- [ ] JSON-LD structured data present
- [ ] robots.txt file exists
- [ ] sitemap.xml file exists
- [ ] All URLs are indexable
- [ ] No broken internal links

### 7. Security Tests ✅

- [ ] Contact form validates and sanitizes input
- [ ] Honeypot field prevents bot submissions
- [ ] Rate limiting prevents abuse
- [ ] HTTPS required for production (Vercel auto-handles)
- [ ] No sensitive data in console logs
- [ ] No hard-coded secrets in code
- [ ] Environment variables used for sensitive config

### 8. Content Tests ✅

- [ ] Dr. Semiu Akanni's full name is correct
- [ ] Title and organization are correct
- [ ] All contact information is correct
  - [ ] Email: ayindesemiu@yahoo.com
  - [ ] Phones: +234 803 402 5477, +234 802 428 0611
  - [ ] Address: Hse 3, Ajagungbade Street, off Jimoh Balogun Street, off CMD Road, Ikosi Ketu, Lagos
- [ ] All education entries are present and accurate
- [ ] All work experience entries are present with correct dates
- [ ] All projects are listed with accurate information
- [ ] All awards are listed
- [ ] All publications are listed
- [ ] All certifications are listed
- [ ] All professional memberships are listed
- [ ] No spelling or grammar errors
- [ ] Dates are formatted consistently

### 9. Link & Navigation Tests ✅

- [ ] Home link works from all pages
- [ ] About link navigates to /about
- [ ] Projects link navigates to /projects
- [ ] Contact link scrolls to contact section
- [ ] All internal links use relative paths
- [ ] External links open in new tab (target="_blank")
- [ ] Email links use `mailto:`
- [ ] Phone links use `tel:`
- [ ] Address links to Google Maps
- [ ] No broken links (404 errors)

### 10. Console & Error Tests ✅

- [ ] No JavaScript errors in browser console
- [ ] No CSS errors or warnings
- [ ] No console.log() statements left in code
- [ ] No network errors for resources
- [ ] No CORS issues
- [ ] No 404 errors for images or assets

## Deployment Steps

### Prerequisites
1. GitHub account with repository
2. Vercel account
3. Email SMTP credentials (Gmail recommended)
4. GitHub personal access token (if using private repo)

### Step 1: Push to GitHub

```bash
cd portfolio-semiu
git init
git add .
git commit -m "Initial commit: Semiu Akanni portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-semiu.git
git push -u origin main
```

### Step 2: Create Vercel Deployment

1. Go to https://vercel.com
2. Click "New Project"
3. Select GitHub integration
4. Authorize Vercel with GitHub
5. Find and select `portfolio-semiu` repository
6. Click "Import"

### Step 3: Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

```
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
RECIPIENT_EMAIL=ayindesemiu@yahoo.com
```

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Vercel will assign you a URL like `https://portfolio-semiu-xyz.vercel.app`

### Step 5: Configure Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS to propagate (up to 48 hours)

### Step 6: Post-Deployment Verification

- [ ] Visit deployed URL
- [ ] Test all pages load
- [ ] Test contact form submission
- [ ] Test PDF download
- [ ] Check Lighthouse scores on production
- [ ] Verify SEO meta tags in page source
- [ ] Test on mobile device

## Troubleshooting

### Contact Form Not Sending
1. Verify `SMTP_USER` and `SMTP_PASS` in Vercel dashboard
2. For Gmail: Enable 2FA and create App Password
3. Check email isn't in spam folder
4. Check Vercel function logs for errors

### PDF Download Not Working
1. Verify `/api/generate-cv` responds with PDF
2. Check browser allows downloads
3. Clear browser cache and try again

### Performance Score Low
1. Run Lighthouse audit
2. Optimize images if needed
3. Check for unused CSS/JS
4. Verify caching headers are set

### Mobile Layout Broken
1. Check viewport meta tag in HTML
2. Test with Chrome DevTools device emulation
3. Check Tailwind CSS responsive classes
4. Clear browser cache

## Monitoring & Maintenance

### Regular Checks
- [ ] Monitor form submissions in email
- [ ] Check Vercel analytics dashboard
- [ ] Review error logs weekly
- [ ] Update content as needed
- [ ] Monitor for security updates

### Content Updates
To update CV content:

1. Edit `src/data/cv.json`
2. Test locally: `npm run dev`
3. Build and test: `npm run build && npm start`
4. Push to GitHub: `git add . && git commit -m "Update CV content" && git push`
5. Vercel auto-deploys on push

### Backup & Recovery
- GitHub repo serves as backup
- All content in version control
- Easy to rollback to previous versions
- `git log` shows all changes

## Deployment URLs

Production: `https://semiu-akanni.vercel.app` (or custom domain)
Preview: Available for each PR

## Support & Help

For issues:
1. Check Vercel build logs
2. Check Vercel function logs
3. Use browser DevTools
4. Test locally with `npm run dev`
5. Check GitHub issues/discussions

---

**Deployment Status**: ✅ Ready for Production
**Last Updated**: October 24, 2025
**Version**: 1.0.0
