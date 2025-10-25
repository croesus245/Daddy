'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when navigating
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--color-bg)',
        borderBottom: `1px solid ${isScrolled ? 'var(--color-border)' : 'transparent'}`,
        boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'all var(--transition-base)',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'var(--sp-md)',
          gap: 'var(--sp-md)',
        }}
      >
        {/* Logo & Brand */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--sp-sm)',
            textDecoration: 'none',
            color: 'var(--color-text)',
            fontWeight: 'var(--font-weight-bold)',
            transition: 'opacity var(--transition-base)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <div style={{ position: 'relative', width: '40px', height: '40px' }}>
            <Image
              src="/logo.png"
              alt="Dr. Semiu Akanni"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <span style={{ fontSize: 'var(--font-lg)', fontWeight: 'var(--font-weight-bold)' }}>
            Dr. Semiu Akanni
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'none',
            gap: 'var(--sp-xl)',
            '@media (min-width: 768px)': {
              display: 'flex',
            },
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--color-text-light)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'color var(--transition-base)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-light)')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            padding: 'var(--sp-sm)',
            '@media (max-width: 767px)': {
              display: 'block',
            },
          }}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-bg)',
            borderBottom: `1px solid var(--color-border)`,
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            padding: 'var(--sp-md)',
            gap: 'var(--sp-sm)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--color-text-light)',
                padding: 'var(--sp-sm)',
                borderRadius: 'var(--radius-md)',
                transition: 'all var(--transition-base)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-bg-light)';
                e.currentTarget.style.color = 'var(--color-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-text-light)';
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
