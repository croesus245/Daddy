# Portfolio Semiu Akanni

## Project Structure

```bash
portfolio-semiu/
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/              # Next.js pages and API routes
│   ├── data/               # Static data (CV content)
│   └── styles/             # Global styles
├── public/                 # Static files, robots.txt, sitemap
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── vercel.json             # Vercel deployment config
└── README.md               # Main documentation
```

## Git Workflow

```bash
# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website for Dr. Semiu Akanni"

# Create feature branch
git checkout -b semiuakanni/site-final

# Make changes and commit
git add .
git commit -m "Your message here"

# Push to remote
git push origin semiuakanni/site-final
```

## Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your SMTP credentials

# Start dev server
npm run dev

# Open http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Connect GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

---

See README.md for complete documentation.
