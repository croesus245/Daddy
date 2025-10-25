import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { FiDownload, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

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
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
                Dr. Semiu Akanni, AYINDE
              </h1>
              <p className="text-xl md:text-2xl text-primary-700 font-semibold mb-2">
                Director, Internal Boundary Department
              </p>
              <p className="text-lg text-primary-600 mb-6">
                Office of The Surveyor General of the Federation (OSGOF)
              </p>
              <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-base md:text-lg">
                Accomplished surveyor with 25+ years of experience in surveying, geo-informatics,
                and land administration. Fellow of Nigeria Institution of Surveyors with extensive
                leadership in survey coordination and geospatial technology implementation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <a
                  href="/api/generate-cv"
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                  download="cv-semiu-akanni.pdf"
                >
                  <FiDownload className="w-5 h-5" />
                  Download CV (PDF)
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-4">
                <FiMail className="w-8 h-8 text-primary-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a
                    href="mailto:ayindesemiu@yahoo.com"
                    className="font-semibold text-gray-900 hover:text-primary-600 transition-colors break-all"
                  >
                    ayindesemiu@yahoo.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone className="w-8 h-8 text-primary-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a
                    href="tel:+2348034025477"
                    className="font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    +234 803 402 5477
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiMapPin className="w-8 h-8 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold text-gray-900">Ikosi Ketu, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Highlights</h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                <p className="text-gray-700">Years of Experience</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-gray-700">Projects Executed</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                <p className="text-gray-700">Professional Fellowships</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <p className="text-gray-700">Awards & Recognition</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-primary-50 py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get in Touch</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Have a question or proposal? Feel free to reach out. I'll respond as soon as possible.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <ContactForm />
              </div>

              {/* Contact Methods */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Other Ways to Connect</h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <FiMail className="w-5 h-5 text-primary-600" />
                      Email
                    </h4>
                    <a
                      href="mailto:ayindesemiu@yahoo.com"
                      className="text-primary-600 hover:text-primary-700 transition-colors break-all"
                    >
                      ayindesemiu@yahoo.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FiPhone className="w-5 h-5 text-primary-600" />
                      Phone
                    </h4>
                    <div className="space-y-2">
                      <a
                        href="tel:+2348034025477"
                        className="block text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        +234 803 402 5477
                      </a>
                      <a
                        href="tel:+2348024280611"
                        className="block text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        +234 802 428 0611
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <FiMapPin className="w-5 h-5 text-primary-600" />
                      Address
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Hse 3, Ajagungbade Street, off Jimoh Balogun Street, off CMD Road, Ikosi Ketu,
                      Lagos, Nigeria
                    </p>
                    <a
                      href="https://www.google.com/maps/search/Ajagungbade+Street+Ikosi+Ketu+Lagos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
                    >
                      View on Google Maps →
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
