# Deployment Verification Guide

## Live Deployment
**URL**: https://semiu-akanni.vercel.app/

## Local Testing
**URL**: http://localhost:3000

---

## Verification Checklist

### Homepage (`/`)
- [ ] Hero section with name "Dr. Semiu Akanni, AYINDE" displays
- [ ] Title "Director, Internal Boundary Department" visible
- [ ] Quick contact info cards show (Email, Phone, Location)
- [ ] Professional highlights display (25+, 50+, 6, 15+)
- [ ] Contact form section visible
- [ ] Download CV button works
- [ ] Get in Touch CTA button works

### About Page (`/about`)
- [ ] Professional summary displays
- [ ] Download PDF button is visible
- [ ] Education timeline shows 6 entries
- [ ] Certifications grouped by year display
- [ ] Work experience section shows
- [ ] Memberships section displays
- [ ] Appointments section displays
- [ ] Awards section shows 15+ awards
- [ ] Publications section displays
- [ ] Conferences section shows

### Projects Page (`/projects`)
- [ ] Project statistics display at top
- [ ] Projects are organized by category
- [ ] Each project shows title, date, location, role
- [ ] Project descriptions and specs are visible
- [ ] "Get in Touch" CTA button visible

### Contact Form Testing
- [ ] Form fields are visible (Name, Email, Message)
- [ ] Form validation works (try submitting empty)
- [ ] Success message displays after submission
- [ ] Email is received at ayindesemiu@yahoo.com

### PDF Download
- [ ] Click "Download CV" button
- [ ] PDF downloads with name "cv-semiu-akanni.pdf"
- [ ] PDF contains all CV sections

### Navigation
- [ ] Header navigation links work on all pages
- [ ] Mobile menu opens/closes on small screens
- [ ] All links navigate correctly

### Styling & Responsiveness
- [ ] Content displays well on desktop (1440px)
- [ ] Content displays well on tablet (768px)
- [ ] Content displays well on mobile (375px)
- [ ] Colors are consistent
- [ ] Text is readable
- [ ] No layout breaks

---

## If Content Not Showing

### Issue: Content Blank on Vercel
**Solution**: The issue might be temporary caching. Try:
1. Hard refresh Vercel URL (Ctrl+Shift+R or Cmd+Shift+R)
2. Incognito/Private browsing
3. Wait 5 minutes and retry (CDN cache)
4. Check browser console for errors (F12)

### Issue: Styles Not Loading
**Solution**:
1. Verify Tailwind CSS is compiled: Check `.next/static/css/` has CSS files
2. Clear browser cache
3. Hard refresh the page
4. Check network tab (F12) for failed CSS requests

### Issue: Data Not Loading
**Solution**:
1. Check browser console for JS errors
2. Verify cv.json is in `src/data/cv.json`
3. Run `npm run build` locally and verify no build errors
4. Check API responses in Network tab (F12)

### Issue: Contact Form Not Working
**Solution**:
1. Verify SMTP environment variables are set in Vercel
2. Check `.env.local` has correct SMTP credentials
3. Test email API: `curl http://localhost:3000/api/contact`
4. Check Vercel logs for backend errors

---

## Environment Variables Setup (for Email)

In Vercel Project Settings → Environment Variables, add:

```
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
RECIPIENT_EMAIL=ayindesemiu@yahoo.com
```

**Note**: For Gmail, use an [App Password](https://myaccount.google.com/apppasswords), not your main password.

---

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production build
npm start

# Run tests
npm test
```

Dev server will start at: http://localhost:3000

---

## Vercel Redeploy Steps

If you need to redeploy to Vercel:

1. Push changes to GitHub
2. Vercel auto-deploys on push
3. Or redeploy manually in Vercel dashboard:
   - Go to https://vercel.com
   - Select "semiu-akanni" project
   - Click "Redeploy"

---

## Browser Console Debugging (F12)

1. Open Developer Tools (F12)
2. Go to Console tab
3. Look for error messages (red text)
4. Go to Network tab to see failed requests
5. Check Sources tab to debug React code

---

## Performance Check

Run Lighthouse audit in browser:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"
4. Target scores:
   - Performance: ≥90
   - Accessibility: ≥90
   - Best Practices: ≥90
   - SEO: ≥90

---

## Support

If issues persist:
1. Check build logs in Vercel dashboard
2. Review local build: `npm run build`
3. Verify all pages work locally first
4. Check `.env.example` for required variables
5. Review error logs in browser console

