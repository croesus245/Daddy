import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';
import cvData from '@/data/cv.json';

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
        <style>{`
          .about-page-header {
            background: linear-gradient(135deg, var(--color-primary) 0%, color-mix(in srgb, var(--color-primary) 80%, #000) 100%);
            color: white;
            padding: var(--sp-lg) var(--sp-md);
            margin-bottom: var(--sp-2xl);
          }

          .about-page-header h1 {
            font-size: var(--font-4xl);
            font-weight: 700;
            margin-bottom: var(--sp-md);
          }

          .about-page-header p {
            font-size: var(--font-lg);
            opacity: 0.9;
          }

          .about-section {
            margin-bottom: var(--sp-2xl);
          }

          .about-section h2 {
            font-size: var(--font-2xl);
            font-weight: 700;
            margin-bottom: var(--sp-lg);
            color: var(--color-primary);
          }

          .summary-box {
            background: color-mix(in srgb, var(--color-primary) 5%, white);
            border: 1px solid color-mix(in srgb, var(--color-primary) 15%, white);
            border-radius: var(--radius-lg);
            padding: var(--sp-lg);
          }

          .summary-box p {
            font-size: var(--font-lg);
            line-height: 1.6;
            color: var(--color-text);
          }

          .cert-year-label {
            font-size: var(--font-sm);
            font-weight: 600;
            color: var(--color-accent);
            margin-bottom: var(--sp-md);
          }

          .cert-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: var(--sp-md);
            margin-bottom: var(--sp-lg);
          }

          .cert-item {
            display: flex;
            gap: var(--sp-md);
            background: color-mix(in srgb, #f9f9f9 100%, transparent);
            padding: var(--sp-md);
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
          }

          .cert-item-check {
            color: var(--color-accent);
            font-weight: 700;
            flex-shrink: 0;
            margin-top: 2px;
          }

          .cert-item-text {
            font-size: var(--font-base);
            color: var(--color-text);
          }

          .member-card,
          .appointment-card,
          .award-card,
          .publication-card,
          .conference-card {
            background: white;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            padding: var(--sp-lg);
            transition: box-shadow var(--transition-base);
          }

          .member-card:hover,
          .appointment-card:hover,
          .award-card:hover,
          .publication-card:hover,
          .conference-card:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }

          .member-status-badge {
            font-size: var(--font-xs);
            background: color-mix(in srgb, var(--color-accent) 10%, white);
            color: var(--color-accent);
            padding: var(--sp-xs) var(--sp-sm);
            border-radius: 99px;
            white-space: nowrap;
            font-weight: 600;
          }

          .appointment-title {
            font-size: var(--font-lg);
            font-weight: 600;
            color: var(--color-primary);
            margin-bottom: var(--sp-sm);
          }

          .appointment-org {
            font-size: var(--font-base);
            font-weight: 500;
            color: var(--color-accent);
            margin-bottom: var(--sp-sm);
          }

          .award-year {
            font-size: var(--font-sm);
            font-weight: 600;
            color: #d97706;
          }

          .award-card {
            background: linear-gradient(135deg, rgba(253, 243, 208, 0.3) 0%, rgba(254, 240, 138, 0.2) 100%);
            border-color: #fcd34d;
          }

          .publication-bullet {
            color: var(--color-accent);
            font-weight: 700;
            font-size: var(--font-lg);
            margin-top: 4px;
            flex-shrink: 0;
          }

          .hobby-tag {
            display: inline-block;
            background: color-mix(in srgb, var(--color-accent) 10%, white);
            color: var(--color-accent);
            padding: var(--sp-sm) var(--sp-md);
            border-radius: 99px;
            font-weight: 500;
            font-size: var(--font-base);
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: var(--sp-lg);
          }

          .stat-item {
            text-align: center;
          }

          .stat-number {
            font-size: var(--font-3xl);
            font-weight: 700;
            color: var(--color-accent);
            margin-bottom: var(--sp-sm);
          }

          .stat-label {
            font-size: var(--font-base);
            color: var(--color-text);
          }

          @media (max-width: 768px) {
            .about-page-header h1 {
              font-size: var(--font-2xl);
            }

            .about-page-header p {
              font-size: var(--font-base);
            }

            .about-section h2 {
              font-size: var(--font-xl);
            }
          }
        `}</style>

        {/* Page Header */}
        <section className="about-page-header">
          <div className="container">
            <h1>About & Curriculum Vitae</h1>
            <p>Complete professional history, education, and achievements</p>
          </div>
        </section>

        <div className="container" style={{ paddingTop: 'var(--sp-2xl)', paddingBottom: 'var(--sp-2xl)' }}>
          {/* Professional Summary */}
          <section className="about-section">
            <h2>Professional Summary</h2>
            <div className="summary-box">
              <p>{cvData.profile.summary}</p>
            </div>
          </section>

          {/* Education */}
          <section className="about-section">
            <h2>Education</h2>
            <Timeline items={educationItems} />
          </section>

          {/* Certifications */}
          <section className="about-section">
            <h2>Professional Certifications</h2>
            {Object.entries(certificationGroups)
              .sort((a, b) => b[0] - a[0])
              .map(([year, certs]) => (
                <div key={year}>
                  <div className="cert-year-label">{year}</div>
                  <div className="cert-grid">
                    {certs.map((cert, idx) => (
                      <div key={idx} className="cert-item">
                        <span className="cert-item-check">✓</span>
                        <span className="cert-item-text">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </section>

          {/* Work Experience */}
          <section className="about-section">
            <h2>Work Experience</h2>
            <Timeline items={cvData.workExperience} />
          </section>

          {/* Professional Memberships */}
          <section className="about-section">
            <h2>Professional Memberships & Status</h2>
            <div className="cert-grid">
              {cvData.memberships.map((member, idx) => (
                <div key={idx} className="member-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--sp-sm)' }}>
                    <h3 style={{ fontSize: 'var(--font-base)', fontWeight: '600', color: 'var(--color-primary)' }}>
                      {member.title}
                    </h3>
                    <span className="member-status-badge">{member.status}</span>
                  </div>
                  <p style={{ fontSize: 'var(--font-sm)', color: 'var(--color-text-light)' }}>
                    Since {member.yearJoined}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Appointments & Leadership */}
          <section className="about-section">
            <h2>Appointments & Leadership Roles</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
              {cvData.appointments.map((apt, idx) => (
                <div key={idx} className="appointment-card">
                  <div style={{ marginBottom: 'var(--sp-md)' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-md)', marginBottom: 'var(--sp-sm)' }}>
                      <h3 className="appointment-title">{apt.title}</h3>
                      <p style={{ fontSize: 'var(--font-sm)', color: 'var(--color-text-light)' }}>
                        {apt.startMonth} {apt.startYear}
                        {apt.endYear ? ` – ${apt.endMonth} ${apt.endYear}` : ' – Present'}
                      </p>
                    </div>
                    <p className="appointment-org">{apt.organization}</p>
                    {apt.location && (
                      <p style={{ fontSize: 'var(--font-sm)', color: 'var(--color-text-light)', marginBottom: 'var(--sp-sm)' }}>
                        {apt.location}
                      </p>
                    )}
                  </div>
                  {apt.description && (
                    <p style={{ fontSize: 'var(--font-base)', color: 'var(--color-text)' }}>
                      {apt.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Awards & Recognition */}
          <section className="about-section">
            <h2>Awards & Recognition</h2>
            <div className="cert-grid">
              {cvData.awards
                .sort((a, b) => b.year - a.year)
                .map((award, idx) => (
                  <div key={idx} className="award-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--sp-sm)' }}>
                      <h3 style={{ fontSize: 'var(--font-base)', fontWeight: '600', color: 'var(--color-primary)', flex: 1 }}>
                        {award.title}
                      </h3>
                      <span className="award-year">{award.year}</span>
                    </div>
                    <p style={{ fontSize: 'var(--font-sm)', color: 'var(--color-text)' }}>
                      {award.awardingBody}
                    </p>
                  </div>
                ))}
            </div>
          </section>

          {/* Publications */}
          <section className="about-section">
            <h2>Publications & Papers</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
              {cvData.publications
                .sort((a, b) => b.year - a.year)
                .map((pub, idx) => (
                  <div key={idx} className="publication-card" style={{ display: 'flex', gap: 'var(--sp-md)' }}>
                    <span className="publication-bullet">»</span>
                    <div>
                      <p style={{ fontSize: 'var(--font-base)', fontWeight: '600', color: 'var(--color-primary)' }}>
                        {pub.title}
                      </p>
                      <p style={{ fontSize: 'var(--font-sm)', color: 'var(--color-text-light)', marginTop: 'var(--sp-xs)' }}>
                        {pub.year}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Conferences & Speaking */}
          <section className="about-section">
            <h2>Conferences & Professional Development</h2>
            <div className="cert-grid">
              {cvData.conferences
                .sort((a, b) => {
                  const aYear = typeof a.year === 'string' ? parseInt(a.year.split('-')[1]) : a.year;
                  const bYear = typeof b.year === 'string' ? parseInt(b.year.split('-')[1]) : b.year;
                  return bYear - aYear;
                })
                .map((conf, idx) => (
                  <div key={idx} className="conference-card">
                    <p className="cert-year-label" style={{ marginBottom: 'var(--sp-sm)' }}>
                      {conf.year}
                    </p>
                    <p style={{ fontSize: 'var(--font-base)', fontWeight: '600', color: 'var(--color-primary)' }}>
                      {conf.title}
                    </p>
                  </div>
                ))}
            </div>
          </section>

          {/* Interests & Hobbies */}
          <section className="about-section">
            <h2>Interests & Hobbies</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-md)' }}>
              {cvData.hobbies.map((hobby, idx) => (
                <span key={idx} className="hobby-tag">
                  {hobby}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
