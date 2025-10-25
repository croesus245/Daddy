import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--color-primary)', color: 'white', marginTop: 'var(--sp-2xl)', padding: 'var(--sp-2xl) var(--sp-md)' }}>
      <style>{`
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-brand {
          display: flex;
          align-items: center;
          gap: var(--sp-sm);
          margin-bottom: var(--sp-lg);
          padding-bottom: var(--sp-md);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .footer-brand img {
          width: 40px;
          height: 40px;
          border-radius: 6px;
        }
        
        .footer-brand h2 {
          font-size: var(--font-lg);
          font-weight: var(--font-weight-bold);
          margin: 0;
          color: white;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--sp-2xl);
          margin-bottom: var(--sp-2xl);
        }
        
        .footer-col h3 {
          font-size: var(--font-base);
          font-weight: var(--font-weight-semibold);
          margin: 0 0 var(--sp-md) 0;
          color: white;
        }
        
        .footer-col ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: var(--sp-sm);
        }
        
        .footer-col a, .footer-col p {
          color: rgba(255,255,255,0.75);
          font-size: var(--font-base);
          transition: color var(--transition-base);
          text-decoration: none;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }
        
        .footer-col a:hover {
          color: white;
        }
        
        .footer-col p {
          display: block;
          margin: 0;
        }
        
        .footer-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.1);
          margin: var(--sp-2xl) 0;
        }
        
        .footer-copyright {
          text-align: center;
          font-size: var(--font-sm);
          color: rgba(255,255,255,0.6);
        }
        
        .footer-copyright a {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: color var(--transition-base);
        }
        
        .footer-copyright a:hover {
          color: white;
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
