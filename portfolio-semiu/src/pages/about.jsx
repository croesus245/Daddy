import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';
import cvData from '@/data/cv.json';
import { FiDownload } from 'react-icons/fi';

export default function About() {
  const formatYearRange = (start, end = null) => {
    if (!end) return `${start}`;
    return `${start} – ${end}`;
  };

  const educationItems = cvData.education.map((edu) => ({
    title: edu.field,
    organization: edu.institution,
    location: edu.location,
    startMonth: 'Year',
    startYear: edu.year,
    description: `${edu.degree} • ${edu.institution}`,
  }));

  const certificationGroups = {};
  cvData.certifications.forEach((cert) => {
    if (!certificationGroups[cert.year]) {
      certificationGroups[cert.year] = [];
    }
    certificationGroups[cert.year].push(cert.title);
  });

  return (
    <>
      <Head>
        <title>About & CV - Dr. Semiu Akanni, AYINDE</title>
        <meta
          name="description"
          content="Full CV and professional biography of Dr. Semiu Akanni, AYINDE. Education, certifications, work experience, and achievements."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="About & CV - Dr. Semiu Akanni, AYINDE" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About & Curriculum Vitae</h1>
            <p className="text-lg text-primary-100">
              Complete professional history, education, and achievements
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          {/* Professional Summary */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Professional Summary</h2>
              <a
                href="/api/generate-cv"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                download="cv-semiu-akanni.pdf"
              >
                <FiDownload className="w-4 h-4" />
                Download PDF
              </a>
            </div>
            <div className="bg-primary-50 rounded-lg p-8 border border-primary-200">
              <p className="text-gray-800 text-lg leading-relaxed">{cvData.profile.summary}</p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <Timeline items={educationItems} />
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Professional Certifications</h2>
            <div className="space-y-8">
              {Object.entries(certificationGroups)
                .sort((a, b) => b[0] - a[0])
                .map(([year, certs]) => (
                  <div key={year}>
                    <h3 className="text-lg font-semibold text-primary-600 mb-4">{year}</h3>
                    <ul className="space-y-2 grid md:grid-cols-2 gap-4">
                      {certs.map((cert, idx) => (
                        <li key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                          <span className="text-primary-600 font-bold mt-1">✓</span>
                          <span className="text-gray-900">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
            <Timeline items={cvData.workExperience} />
          </section>

          {/* Professional Memberships */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Professional Memberships & Status</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cvData.memberships.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 flex-grow">{member.title}</h3>
                    <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                      {member.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Since {member.yearJoined}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Appointments & Leadership */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Appointments & Leadership Roles</h2>
            <div className="space-y-6">
              {cvData.appointments.map((apt, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{apt.title}</h3>
                    <p className="text-sm text-gray-500">
                      {apt.startMonth} {apt.startYear}
                      {apt.endYear ? ` – ${apt.endMonth} ${apt.endYear}` : ' – Present'}
                    </p>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">{apt.organization}</p>
                  {apt.location && <p className="text-sm text-gray-600 mb-2">{apt.location}</p>}
                  {apt.description && <p className="text-gray-700">{apt.description}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Awards & Recognition */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Awards & Recognition</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cvData.awards
                .sort((a, b) => b.year - a.year)
                .map((award, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 flex-grow">{award.title}</h3>
                      <span className="text-sm font-semibold text-yellow-700 ml-2">{award.year}</span>
                    </div>
                    <p className="text-sm text-gray-700">{award.awardingBody}</p>
                  </div>
                ))}
            </div>
          </section>

          {/* Publications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Publications & Papers</h2>
            <div className="space-y-4">
              {cvData.publications
                .sort((a, b) => b.year - a.year)
                .map((pub, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex items-start gap-4"
                  >
                    <span className="text-primary-600 font-bold text-lg mt-1">»</span>
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-900">{pub.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{pub.year}</p>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Conferences & Speaking */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Conferences & Professional Development</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cvData.conferences
                .sort((a, b) => {
                  const aYear = typeof a.year === 'string' ? parseInt(a.year.split('-')[1]) : a.year;
                  const bYear = typeof b.year === 'string' ? parseInt(b.year.split('-')[1]) : b.year;
                  return bYear - aYear;
                })
                .map((conf, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <p className="text-sm text-primary-600 font-semibold mb-2">{conf.year}</p>
                    <p className="font-semibold text-gray-900">{conf.title}</p>
                  </div>
                ))}
            </div>
          </section>

          {/* Hobbies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Interests & Hobbies</h2>
            <div className="flex flex-wrap gap-3">
              {cvData.hobbies.map((hobby, idx) => (
                <span
                  key={idx}
                  className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </section>

          {/* Download Section */}
          <section className="bg-primary-50 rounded-lg p-8 border border-primary-200 text-center">
            <h3 className="text-2xl font-bold mb-4">Download Full CV</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Download a complete PDF version of the curriculum vitae for offline reference or
              printing.
            </p>
            <a
              href="/api/generate-cv"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              download="cv-semiu-akanni.pdf"
            >
              <FiDownload className="w-5 h-5" />
              Download CV (PDF)
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
