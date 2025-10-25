# Dr. Semiu Akanni, AYINDE - Professional Portfolio

A modern, image-rich, responsive, and accessible portfolio website built with Next.js and Tailwind CSS for Dr. Semiu Akanni, AYINDE - Director at the Office of The Surveyor General of the Federation (OSGOF).

## ✨ What's New (v2.0)

- 🖼️ **Professional Images** - High-quality portraits and professional photos
- 🎨 **Redesigned Homepage** - Modern image-first hero layout
- ⚡ **Enhanced Visual Design** - Better spacing, colors, and animations
- ❌ **No PDF Downloads** - CV content integrated into About page
- 📱 **Improved Mobile UX** - Better responsive layouts and interactions

## Features

✅ **Professional Images** - Showcase with responsive image gallery
✅ **Fully Responsive Design** - Optimized for mobile (320px), tablet, and desktop (1440px+)
✅ **Accessible** - WCAG 2.1 AA compliant with semantic HTML, ARIA labels, and keyboard navigation
✅ **SEO Optimized** - Meta tags, Open Graph, JSON-LD structured data, and robots.txt
✅ **Contact Form** - Email integration with rate limiting and spam protection (honeypot)
✅ **CV Integration** - Complete curriculum vitae on About page
✅ **Performance Optimized** - Lighthouse score target ≥ 90
✅ **Production Ready** - Ready for deployment to Vercel  

## Pages

- **Home** - Hero section with professional headline, contact CTA, and highlights
- **About & CV** - Comprehensive professional biography, education, certifications, work experience, and appointments
- **Projects** - 50+ executed projects organized by category (Government, Survey, Piling, Infrastructure)
- **Contact** - Email form with validation and contact methods

## Tech Stack

- **Framework**: Next.js 14+
- **Styling**: Tailwind CSS
- **Email**: Nodemailer (SMTP)
- **PDF Generation**: jsPDF
- **Icons**: React Icons
- **Deployment**: Vercel

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Email configuration for contact form
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
RECIPIENT_EMAIL=ayindesemiu@yahoo.com
```

### Gmail Setup (Recommended)

1. Enable 2-Factor Authentication on your Gmail account
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Use the generated 16-character password as `SMTP_PASS`

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-semiu
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` with your email configuration (see above)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

```
portfolio-semiu/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer with contact info
│   │   ├── ContactForm.jsx     # Email contact form
│   │   ├── Timeline.jsx        # Timeline component for education/experience
│   │   └── ProjectCard.jsx     # Project card component
│   ├── pages/
│   │   ├── _app.jsx            # App wrapper
│   │   ├── _document.jsx       # Custom document
│   │   ├── index.jsx           # Home page
│   │   ├── about.jsx           # About & CV page
│   │   ├── projects.jsx        # Projects page
│   │   └── api/
│   │       ├── contact.js      # Contact form endpoint
│   │       └── generate-cv.js  # PDF CV generation endpoint
│   ├── data/
│   │   └── cv.json             # Structured CV data
│   └── styles/
│       └── globals.css         # Global styles
├── public/                     # Static files
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## API Endpoints

### Contact Form (`POST /api/contact`)

Sends an email via SMTP with contact form data.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Features:**
- Rate limiting (5 requests per minute per IP)
- Email validation
- Honeypot field for spam protection
- Message length limit (5000 characters)

### Generate CV (`GET /api/generate-cv`)

Generates and downloads a PDF version of the CV.

**Response:** PDF file (application/pdf)

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `RECIPIENT_EMAIL`
4. Deploy automatically on push

### Alternative: Manual Deployment

```bash
npm run build
npm start
```

## Accessibility Features

- ✅ Semantic HTML (header, main, section, nav, footer)
- ✅ ARIA labels and descriptions
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus indicators (visible outlines)
- ✅ Color contrast ≥ 7:1 (WCAG AAA)
- ✅ Alt text for all images
- ✅ Form validation with error messages
- ✅ Screen reader support
- ✅ Responsive touch targets (≥44x44px)

## Performance Optimizations

- ✅ Image optimization and lazy loading
- ✅ CSS-in-JS with Tailwind CSS
- ✅ Code splitting and dynamic imports
- ✅ API route optimization
- ✅ Minification and compression

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Testing

### Manual Testing Checklist

- [ ] Desktop layout (1440px) - all sections render correctly
- [ ] Mobile layout (375px) - responsive and readable
- [ ] Tablet layout (768px) - medium screen optimization
- [ ] Contact form submission - email received
- [ ] PDF CV download - file downloads correctly
- [ ] All links functional (external and internal)
- [ ] No console errors in DevTools
- [ ] Keyboard navigation - all elements accessible via Tab
- [ ] Form validation - required fields checked
- [ ] Rate limiting - contact form limits requests

### Lighthouse Testing

Run Lighthouse audit in Chrome DevTools:

```
Target Scores:
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 90
- SEO: ≥ 90
```

## Troubleshooting

### Contact Form Not Sending Emails

1. Check `.env.local` variables are set correctly
2. Verify SMTP credentials (Gmail requires App Password)
3. Check that recipient email is correct
4. Look for error logs in browser console and server console

### PDF Download Not Working

1. Clear browser cache
2. Check that `/api/generate-cv` endpoint responds with PDF
3. Verify jsPDF is installed: `npm install jspdf`

### Mobile Layout Issues

1. Clear browser cache
2. Check viewport meta tag in `_document.jsx`
3. Test in Chrome DevTools device emulation
4. Verify Tailwind CSS responsive classes

## License

© 2025 Dr. Semiu Akanni, AYINDE. All rights reserved.

## Contact

- **Email**: ayindesemiu@yahoo.com
- **Phone**: +234 803 402 5477
- **Address**: Hse 3, Ajagungbade Street, Ikosi Ketu, Lagos, Nigeria

---

**Built with ❤️ using Next.js and Tailwind CSS**
