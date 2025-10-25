'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          background: var(--brand-black);
          border-bottom: 1px solid var(--color-border);
          z-index: var(--z-sticky);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .site-header.is-scrolled {
          box-shadow: 0 2px 8px rgba(212, 175, 55, 0.1);
        }
        
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.75rem var(--gap-md);
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--brand-gold);
          font-weight: 700;
          font-size: var(--font-lg);
          transition: color var(--transition-base);
        }
        
        .nav-brand:hover {
          color: #e8c547;
        }
        
        .nav-brand img {
          width: 36px;
          height: 36px;
          border-radius: 6px;
          background: var(--color-border);
        }
        
        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-links a {
          color: var(--color-text-light);
          font-weight: 500;
          font-size: var(--font-base);
          transition: color var(--transition-base), border-color var(--transition-base);
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
          border-bottom: 2px solid transparent;
        }
        
        .nav-links a:hover {
          color: var(--brand-gold);
          border-bottom-color: var(--brand-gold);
        }
        
        .mobile-nav-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          padding: var(--gap-sm);
          color: var(--color-text);
          transition: color var(--transition-base);
        }
        
        .mobile-nav-toggle:hover {
          color: var(--brand-gold);
        }
        
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--color-bg);
          border-bottom: 2px solid var(--brand-gold);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          padding: var(--gap-md);
          gap: var(--gap-sm);
          z-index: var(--z-dropdown);
          animation: slideDown 200ms ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-menu a {
          color: var(--color-text-light);
          padding: var(--gap-sm) var(--gap-md);
          border-radius: var(--radius-md);
          transition: all var(--transition-base);
          text-decoration: none;
          display: block;
          border-left: 3px solid transparent;
        }
        
        .mobile-menu a:hover {
          background: var(--color-bg-light);
          color: var(--brand-gold);
          border-left-color: var(--brand-gold);
          padding-left: calc(var(--gap-md) + 4px);
        }
        
        @media (max-width: 768px) {
          .nav-inner {
            padding: 0.75rem var(--gap-sm);
          }

          .nav-links {
            display: none;
          }
          
          .mobile-nav-toggle {
            display: block;
          }
        }
      `}</style>
      
      <nav className="nav-inner">
        <Link href="/" className="nav-brand">
          <Image
            src="/logo.png"
            alt="Dr. Semiu Akanni"
            width={36}
            height={36}
            priority
          />
          <span>Dr. Semiu</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <button
          className="mobile-nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {isMenuOpen && (
        <nav className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
