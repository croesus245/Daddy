import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import cvData from '@/data/cv.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Semiu Akanni - Surveyor & Geospatial Expert</title>
        <meta name="description" content="Professional surveyor, geospatial consultant, and government liaison with 25+ years of experience in surveying, mapping, and infrastructure projects across Nigeria." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Dr. Semiu Akanni - Surveyor & Geospatial Expert" />
        <meta property="og:description" content="Professional surveyor and geospatial expert with 25+ years in surveying, mapping, and infrastructure projects." />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="hero pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="container">
            <div className="hero-inner grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Portrait */}
              <div className="order-2 md:order-1">
                <div className="relative w-full max-w-md mx-auto md:mx-0">
                  <Image
                    src="/IMG-20251023-WA0082.jpg"
                    alt="Dr. Semiu Akanni"
                    width={400}
                    height={500}
                    priority
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 md:order-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-gold">
                  Dr. Semiu Akanni
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-3 text-brand-white">
                  Surveyor & Geospatial Expert
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  25+ years of experience in surveying, geospatial analysis, and infrastructure development across Nigeria. 
                  Expert in cadastral surveys, topographical mapping, and government coordination.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {cvData.profile.summary}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/#projects"
                    className="btn btn-primary flex items-center gap-2"
                  >
                    View Projects <FiArrowRight size={18} />
                  </Link>
                  <a
                    href="/#contact"
                    className="btn btn-secondary"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 bg-brand-black border-t border-gray-800">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email */}
              <a href="mailto:ayindesemiu@yahoo.com" className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded bg-brand-gold text-brand-black">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-brand-gold font-semibold">ayindesemiu@yahoo.com</p>
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+2348033654320" className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded bg-brand-gold text-brand-black">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-brand-gold font-semibold">+234 803 3654 320</p>
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="p-6 rounded-lg bg-gray-900 border border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded bg-brand-gold text-brand-black">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-brand-gold font-semibold">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className="py-16 md:py-24 bg-brand-black">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-gold">
                About
              </h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                With over two decades of professional experience, I have established a strong reputation in surveying, 
                geospatial analysis, and infrastructure development. My work spans government coordination, cadastral surveys, 
                topographical mapping, and complex engineering projects.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-yellow-300 transition-colors">
                View Full CV & Experience <FiArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
