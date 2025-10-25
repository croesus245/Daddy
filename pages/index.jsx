import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import cvData from '@/data/cv.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Semiu Akanni, AYINDE - Director, Internal Boundary Department (OSGOF)</title>
        <meta
          name="description"
          content="Professional portfolio of Dr. Semiu Akanni, AYINDE - Director at OSGOF with 25+ years in surveying, geo-informatics, and land administration."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Surveyor, Surveying, Geo-informatics, OSGOF, Lagos, Nigeria" />
        <meta property="og:title" content="Dr. Semiu Akanni, AYINDE - Professional Portfolio" />
        <meta
          property="og:description"
          content="Director at OSGOF with extensive expertise in surveying and geospatial technology."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dr. Semiu Akanni, AYINDE" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Dr. Semiu Akanni, AYINDE',
              jobTitle: 'Director, Internal Boundary Department',
              affiliation: {
                '@type': 'Organization',
                name: 'Office of The Surveyor General of the Federation (OSGOF)',
              },
              email: 'ayindesemiu@yahoo.com',
              telephone: '+2348034025477',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hse 3, Ajagungbade Street',
                addressLocality: 'Lagos',
                addressCountry: 'NG',
              },
              url: 'https://semiu-akanni.vercel.app',
            }),
          }}
        />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero container">
          <style>{`
            .hero-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: var(--sp-2xl);
              align-items: start;
              margin-bottom: var(--sp-2xl);
            }
            
            @media (min-width: 1024px) {
              .hero-grid {
                grid-template-columns: 1fr 1fr;
              }
            }
            
            .hero-media {
              border-radius: var(--radius-lg);
              overflow: hidden;
              box-shadow: var(--shadow-lg);
            }
            
            .hero-media img {
              width: 100%;
              height: auto;
              display: block;
            }
            
            .hero-content h1 {
              margin-bottom: var(--sp-sm);
              line-height: 1.05;
            }
            
            .hero-title {
              font-size: var(--font-3xl);
              font-weight: var(--font-weight-bold);
              color: var(--brand-gold);
              margin: 0 0 var(--sp-xs) 0;
              line-height: 1.1;
            }
            
            .hero-role {
              font-size: var(--font-xl);
              font-weight: var(--font-weight-semibold);
              color: var(--brand-gold);
              margin: 0 0 var(--sp-xs) 0;
            }
            
            .hero-org {
              font-size: var(--font-base);
              color: var(--color-text-light);
              margin-bottom: var(--sp-lg);
            }
            
            .hero-desc {
              font-size: var(--font-lg);
              color: var(--color-text-light);
              line-height: var(--lh-relaxed);
              margin-bottom: var(--sp-lg);
            }
            
            .hero-cta {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              background: var(--brand-gold);
              color: var(--brand-black);
              padding: 1rem 1.5rem;
              border-radius: var(--radius-md);
              font-weight: var(--font-weight-semibold);
              transition: all var(--transition-base);
              text-decoration: none;
              border: none;
              cursor: pointer;
            }
            
            .hero-cta:hover {
              background: #e8c547;
              transform: translateY(-2px);
              box-shadow: 0 8px 16px rgba(212, 175, 55, 0.25);
            }
            
            .contact-cards {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: var(--sp-lg);
              background: var(--color-surface);
              border: 1px solid var(--brand-gold);
              border-radius: var(--radius-lg);
              padding: var(--sp-2xl) var(--sp-lg);
              margin-top: var(--sp-2xl);
            }
            
            .contact-card {
              display: flex;
              gap: var(--sp-md);
              align-items: flex-start;
            }
            
            .contact-icon {
              flex-shrink: 0;
              width: 48px;
              height: 48px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: var(--brand-gold);
              color: var(--brand-black);
              border-radius: var(--radius-md);
            }
            
            .contact-info h4 {
              font-size: var(--font-base);
              font-weight: var(--font-weight-semibold);
              color: var(--brand-gold);
              margin: 0 0 0.25rem 0;
            }
            
            .contact-info p,
            .contact-info a {
              font-size: var(--font-base);
              margin: 0;
            }
            
            .contact-info a {
              color: var(--color-text-light);
              text-decoration: none;
              transition: color var(--transition-base);
            }
            
            .contact-info a:hover {
              color: var(--brand-gold);
              text-decoration: underline;
            }
          `}</style>
          
          <div className="hero-grid">
            {/* Left: Main Portrait */}
            <div>
              <div className="hero-media">
                <Image
                  src="/IMG-20251023-WA0082.jpg"
                  alt="Dr. Semiu Akanni, AYINDE - Professional Portrait"
                  width={600}
                  height={700}
                  priority
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="hero-content">
              <h1 className="hero-title">Dr. Semiu Akanni AYINDE</h1>
              <p className="hero-role">Director, Internal Boundary Department</p>
              <p className="hero-org">Office of The Surveyor General of the Federation (OSGOF)</p>
              
              <p className="hero-desc">
                Accomplished surveyor with 25+ years of expertise in surveying, geo-informatics, and land administration. 
                Fellow of Nigeria Institution of Surveyors with proven leadership in geospatial technology implementation and survey coordination.
              </p>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hero-cta"
              >
                Get in Touch <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="contact-cards">
            {[
              {
                icon: FiMail,
                label: 'Email',
                value: 'ayindesemiu@yahoo.com',
                href: 'mailto:ayindesemiu@yahoo.com',
              },
              {
                icon: FiPhone,
                label: 'Phone',
                value: '+234 803 402 5477',
                href: 'tel:+2348034025477',
              },
              {
                icon: FiMapPin,
                label: 'Location',
                value: 'Ikosi Ketu, Lagos, Nigeria',
                href: null,
              },
            ].map((item, idx) => (
              <div key={idx} className="contact-card">
                <div className="contact-icon">
                  <item.icon size={24} />
                </div>
                <div className="contact-info">
                  <h4>{item.label}</h4>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20 px-4" style={{ background: 'var(--brand-black)' }}>
          <div className="max-w-6xl mx-auto">
            <h2 style={{ fontSize: 'var(--font-3xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--brand-gold)', marginBottom: 'var(--sp-lg)' }}>Professional Summary</h2>
            <p style={{ fontSize: 'var(--font-lg)', color: 'var(--color-text-light)', lineHeight: 'var(--lh-relaxed)', maxWidth: '800px', marginBottom: 'var(--sp-2xl)' }}>
              {cvData.profile.summary}
            </p>

            {/* Quick Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--sp-lg)', marginTop: 'var(--sp-2xl)' }}>
              {[
                { number: '25+', label: 'Years of Experience' },
                { number: '50+', label: 'Projects Executed' },
                { number: '6', label: 'Professional Fellowships' },
                { number: '15+', label: 'Awards & Recognition' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--brand-gold)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--sp-lg)',
                    transition: 'all var(--transition-base)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.15)'}
                  onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
                >
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--brand-gold)', marginBottom: 'var(--sp-sm)' }}>{stat.number}</div>
                  <p style={{ fontSize: 'var(--font-base)', color: 'var(--color-text-light)', fontWeight: '500', margin: 0 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA to Explore */}
        <section className="py-16 px-4" style={{ background: 'var(--color-surface)' }}>
          <div className="max-w-6xl mx-auto text-center">
            <h3 style={{ fontSize: 'var(--font-2xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--sp-lg)', color: 'var(--brand-gold)' }}>Learn More</h3>
            <p style={{ fontSize: 'var(--font-lg)', color: 'var(--color-text-light)', marginBottom: 'var(--sp-2xl)' }}>
              Explore complete professional history, education, certifications, and executed projects.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <style>{`
                @media (min-width: 640px) {
                  .cta-button-group {
                    flex-direction: row;
                  }
                }
              `}</style>
              <div className="cta-button-group" style={{ display: 'flex', justifyContent: 'center', gap: 'var(--sp-md)' }}>
                <a
                  href="/about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: 'var(--brand-gold)',
                    color: 'var(--brand-black)',
                    fontWeight: 'var(--font-weight-semibold)',
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--transition-base)',
                    textDecoration: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#e8c547';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--brand-gold)';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  View Full CV
                  <FiArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/projects"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    border: '2px solid var(--brand-gold)',
                    color: 'var(--brand-gold)',
                    fontWeight: 'var(--font-weight-semibold)',
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'transparent',
                    transition: 'all var(--transition-base)',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(212, 175, 55, 0.1)';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  Explore Projects
                  <FiArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4" style={{ background: 'var(--brand-black)' }}>
          <div className="max-w-6xl mx-auto">
            <h2 style={{ fontSize: 'var(--font-3xl)', fontWeight: 'var(--font-weight-bold)', textAlign: 'center', marginBottom: 'var(--sp-md)', color: 'var(--brand-gold)' }}>Get in Touch</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginBottom: 'var(--sp-2xl)', maxWidth: '600px', margin: '0 auto var(--sp-2xl)', fontSize: 'var(--font-lg)' }}>
              Have a question, proposal, or opportunity? I'd love to hear from you. 
              Feel free to reach out and I'll get back to you as soon as possible.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--sp-2xl)' }}>
              {/* Contact Form */}
              <div>
                <h3 style={{ fontSize: 'var(--font-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--sp-lg)', color: 'var(--brand-gold)' }}>Send a Message</h3>
                <ContactForm />
              </div>

              {/* Contact Methods */}
              <div>
                <h3 style={{ fontSize: 'var(--font-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--sp-lg)', color: 'var(--brand-gold)' }}>Contact Information</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
                  {/* Email */}
                  <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: 'var(--sp-lg)', border: '1px solid var(--brand-gold)' }}>
                    <h4 style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--brand-gold)', marginBottom: 'var(--sp-md)', display: 'flex', alignItems: 'center', gap: '0.75rem', margin: 0 }}>
                      <div style={{ background: 'var(--brand-gold)', padding: '0.5rem', borderRadius: 'var(--radius-md)' }}>
                        <FiMail className="w-5 h-5" style={{ color: 'var(--brand-black)' }} />
                      </div>
                      Email
                    </h4>
                    <a
                      href="mailto:ayindesemiu@yahoo.com"
                      style={{ color: 'var(--color-text-light)', textDecoration: 'none', fontWeight: '500', transition: 'color var(--transition-base)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--brand-gold)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--color-text-light)'}
                    >
                      ayindesemiu@yahoo.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: 'var(--sp-lg)', border: '1px solid var(--brand-gold)' }}>
                    <h4 style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--brand-gold)', marginBottom: 'var(--sp-md)', display: 'flex', alignItems: 'center', gap: '0.75rem', margin: 0 }}>
                      <div style={{ background: 'var(--brand-gold)', padding: '0.5rem', borderRadius: 'var(--radius-md)' }}>
                        <FiPhone className="w-5 h-5" style={{ color: 'var(--brand-black)' }} />
                      </div>
                      Phone
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <a
                        href="tel:+2348034025477"
                        style={{ color: 'var(--color-text-light)', textDecoration: 'none', fontWeight: '500', transition: 'color var(--transition-base)' }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--brand-gold)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--color-text-light)'}
                      >
                        +234 803 402 5477
                      </a>
                      <a
                        href="tel:+2348024280611"
                        style={{ color: 'var(--color-text-light)', textDecoration: 'none', fontWeight: '500', transition: 'color var(--transition-base)' }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--brand-gold)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--color-text-light)'}
                      >
                        +234 802 428 0611
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: 'var(--sp-lg)', border: '1px solid var(--brand-gold)' }}>
                    <h4 style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--brand-gold)', marginBottom: 'var(--sp-md)', display: 'flex', alignItems: 'center', gap: '0.75rem', margin: 0 }}>
                      <div style={{ background: 'var(--brand-gold)', padding: '0.5rem', borderRadius: 'var(--radius-md)' }}>
                        <FiMapPin className="w-5 h-5" style={{ color: 'var(--brand-black)' }} />
                      </div>
                      Address
                    </h4>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--sp-md)', lineHeight: 'var(--lh-relaxed)', margin: 0 }}>
                      Hse 3, Ajagungbade Street, off Jimoh Balogun Street,<br />
                      off CMD Road, Ikosi Ketu, Lagos, Nigeria
                    </p>
                    <a
                      href="https://www.google.com/maps/search/Ajagungbade+Street+Ikosi+Ketu+Lagos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--brand-gold)', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', transition: 'color var(--transition-base)' }}
                      onMouseEnter={(e) => e.target.style.color = '#e8c547'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--brand-gold)'}
                    >
                      View on Maps
                      <FiArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
