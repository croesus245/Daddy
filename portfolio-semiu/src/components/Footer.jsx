import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-700">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Dr. Semiu Akanni"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-bold">Dr. Semiu Akanni</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FiMail className="w-4 h-4" />
                <a
                  href="mailto:ayindesemiu@yahoo.com"
                  className="hover:text-white transition-colors"
                >
                  ayindesemiu@yahoo.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="w-4 h-4" />
                <a href="tel:+2348034025477" className="hover:text-white transition-colors">
                  +234 803 402 5477
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Hse 3, Ajagungbade Street, Ikosi Ketu, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About & CV
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Professional Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Professional</h3>
            <p className="text-sm text-gray-300 mb-4">
              Director, Internal Boundary Department at Office of The Surveyor General of the
              Federation (OSGOF)
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:ayindesemiu@yahoo.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
              <a
                href="tel:+2348034025477"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <FiPhone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Dr. Semiu Akanni, AYINDE. All rights reserved. | Built with{' '}
            <a href="https://nextjs.org" className="hover:text-white transition-colors">
              Next.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
