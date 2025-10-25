import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--brand-black)', color: 'white', marginTop: 'var(--sp-2xl)', padding: 'var(--sp-2xl) var(--sp-md)', borderTop: '2px solid var(--brand-gold)' }}>
      <style>{`
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-brand {
          display: flex;
          align-items: center;
          gap: var(--gap-md);
          margin-bottom: var(--sp-lg);
          padding-bottom: var(--sp-lg);
          border-bottom: 2px solid var(--brand-gold);
        }
        
        .footer-brand img {
          width: 44px;
          height: 44px;
          border-radius: 6px;
          background: var(--color-border);
        }
        
        .footer-brand h2 {
          font-size: var(--font-lg);
          font-weight: 700;
          margin: 0;
          color: var(--brand-gold);
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--sp-2xl);
          margin-bottom: var(--sp-2xl);
        }
        
        .footer-col h3 {
          font-size: var(--font-base);
          font-weight: 600;
          margin: 0 0 var(--gap-md) 0;
          color: var(--brand-gold);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }
        
        .footer-col ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: var(--gap-md);
        }
        
        .footer-col a, .footer-col p {
          color: var(--color-text-light);
          font-size: var(--font-base);
          transition: all var(--transition-base);
          text-decoration: none;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          line-height: 1.5;
        }
        
        .footer-col a:hover {
          color: var(--brand-gold);
          padding-left: 4px;
        }
        
        .footer-col p {
          display: block;
          margin: 0;
        }
        
        .footer-divider {
          border: none;
          border-top: 1px solid var(--color-border);
          margin: var(--sp-2xl) 0;
        }
        
        .footer-copyright {
          text-align: center;
          font-size: var(--font-sm);
          color: var(--color-text-muted);
        }
        
        .footer-copyright a {
          color: var(--brand-gold);
          text-decoration: none;
          transition: color var(--transition-base);
        }
        
        .footer-copyright a:hover {
          color: #e8c547;
        }
      `}</style>
      
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <Image
            src="/logo.png"
            alt="Dr. Semiu Akanni"
            width={40}
            height={40}
            priority
          />
          <h2>Dr. Semiu Akanni</h2>
        </div>

        {/* Grid */}
        <div className="footer-grid">
          {/* Contact */}
          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:ayindesemiu@yahoo.com">
                  <FiMail size={16} />
                  <span>ayindesemiu@yahoo.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+2348034025477">
                  <FiPhone size={16} />
                  <span>+234 803 402 5477</span>
                </a>
              </li>
              <li>
                <p>
                  <FiMapPin size={16} />
                  <span>Hse 3, Ajagungbade Street, Ikosi Ketu, Lagos, Nigeria</span>
                </p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About & CV</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Professional */}
          <div className="footer-col">
            <h3>Professional</h3>
            <p style={{ display: 'block' }}>
              Director, Internal Boundary Department at Office of The Surveyor General of the Federation (OSGOF)
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            &copy; {currentYear} Dr. Semiu Akanni, AYINDE. All rights reserved. | Built with{' '}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
