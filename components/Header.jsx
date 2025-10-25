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
        .site-header.is-scrolled {
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          background: rgba(255,255,255,0.95);
        }
        
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--color-text);
          font-weight: var(--font-weight-bold);
          font-size: var(--font-lg);
          transition: opacity var(--transition-base);
        }
        
        .nav-brand:hover {
          opacity: 0.8;
        }
        
        .nav-brand img {
          width: 36px;
          height: 36px;
          border-radius: 6px;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-links a {
          color: var(--color-text-light);
          font-weight: var(--font-weight-medium);
          font-size: var(--font-base);
          transition: color var(--transition-base);
          text-decoration: none;
        }
        
        .nav-links a:hover {
          color: var(--color-accent);
        }
        
        .mobile-nav-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          padding: var(--sp-sm);
          color: var(--color-text);
          transition: color var(--transition-base);
        }
        
        .mobile-nav-toggle:hover {
          color: var(--color-accent);
        }
        
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          padding: var(--sp-md);
          gap: var(--sp-sm);
          z-index: 40;
        }
        
        .mobile-menu a {
          color: var(--color-text-light);
          padding: var(--sp-sm);
          border-radius: var(--radius-md);
          transition: all var(--transition-base);
          text-decoration: none;
          display: block;
        }
        
        .mobile-menu a:hover {
          background: var(--color-bg-light);
          color: var(--color-accent);
        }
        
        @media (max-width: 768px) {
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
