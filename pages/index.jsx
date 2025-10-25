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
              color: var(--color-text);
              margin: 0 0 var(--sp-xs) 0;
              line-height: 1.1;
            }
            
            .hero-role {
              font-size: var(--font-xl);
              font-weight: var(--font-weight-semibold);
              color: var(--color-accent);
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
              background: var(--color-accent);
              color: white;
              padding: 1rem 1.5rem;
              border-radius: var(--radius-md);
              font-weight: var(--font-weight-semibold);
              transition: all var(--transition-base);
              text-decoration: none;
              border: none;
              cursor: pointer;
            }
            
            .hero-cta:hover {
              background: #0052a3;
              transform: translateY(-2px);
              box-shadow: var(--shadow-md);
            }
            
            .contact-cards {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: var(--sp-lg);
              background: var(--color-bg-light);
              border: 1px solid var(--color-border);
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
              background: var(--color-accent);
              color: white;
              border-radius: var(--radius-md);
            }
            
            .contact-info h4 {
              font-size: var(--font-base);
              font-weight: var(--font-weight-semibold);
              color: var(--color-text);
              margin: 0 0 0.25rem 0;
            }
            
            .contact-info p,
            .contact-info a {
              font-size: var(--font-base);
              margin: 0;
            }
            
            .contact-info a {
              color: var(--color-accent);
              text-decoration: none;
              transition: color var(--transition-base);
            }
            
            .contact-info a:hover {
              color: #0052a3;
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
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
              {cvData.profile.summary}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '25+', label: 'Years of Experience' },
                { number: '50+', label: 'Projects Executed' },
                { number: '6', label: 'Professional Fellowships' },
                { number: '15+', label: 'Awards & Recognition' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <p className="text-sm text-gray-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA to Explore */}
        <section className="py-16 px-4 bg-primary-50">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Learn More</h3>
            <p className="text-lg text-gray-700 mb-8">
              Explore complete professional history, education, certifications, and executed projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
              >
                View Full CV
                <FiArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
              >
                Explore Projects
                <FiArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Have a question, proposal, or opportunity? I'd love to hear from you. 
              Feel free to reach out and I'll get back to you as soon as possible.
            </p>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
                <ContactForm />
              </div>

              {/* Contact Methods */}
              <div>
                <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="bg-blue-600 p-2 rounded-lg">
                        <FiMail className="w-5 h-5 text-white" />
                      </div>
                      Email
                    </h4>
                    <a
                      href="mailto:ayindesemiu@yahoo.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors break-all font-medium"
                    >
                      ayindesemiu@yahoo.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="bg-green-600 p-2 rounded-lg">
                        <FiPhone className="w-5 h-5 text-white" />
                      </div>
                      Phone
                    </h4>
                    <div className="space-y-2">
                      <a
                        href="tel:+2348034025477"
                        className="block text-green-600 hover:text-green-700 transition-colors font-medium"
                      >
                        +234 803 402 5477
                      </a>
                      <a
                        href="tel:+2348024280611"
                        className="block text-green-600 hover:text-green-700 transition-colors font-medium"
                      >
                        +234 802 428 0611
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="bg-purple-600 p-2 rounded-lg">
                        <FiMapPin className="w-5 h-5 text-white" />
                      </div>
                      Address
                    </h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Hse 3, Ajagungbade Street, off Jimoh Balogun Street,<br />
                      off CMD Road, Ikosi Ketu, Lagos, Nigeria
                    </p>
                    <a
                      href="https://www.google.com/maps/search/Ajagungbade+Street+Ikosi+Ketu+Lagos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors font-medium inline-flex items-center gap-1"
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
