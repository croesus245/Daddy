import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import cvData from '@/data/cv.json';

export default function Projects() {
  // Group projects by category
  const governmentProjects = cvData.projects.filter(
    (p) =>
      p.title.includes('OSGOF') ||
      p.title.includes('Survey Coordination') ||
      p.title.includes('Survey Coordination Act') ||
      p.title.includes('Nigeria Geocentric')
  );

  const surveyProjects = cvData.projects.filter(
    (p) =>
      p.title.includes('Topographical') ||
      p.title.includes('Survey') ||
      p.title.includes('Hydrographic') ||
      p.title.includes('Layout') ||
      p.title.includes('Detailing')
  );

  const pilingProjects = cvData.projects.filter(
    (p) => p.title.includes('VITA') || p.title.includes('Moscom') || p.title.includes('CFA')
  );

  const infrastructureProjects = cvData.projects.filter(
    (p) =>
      !governmentProjects.includes(p) &&
      !surveyProjects.includes(p) &&
      !pilingProjects.includes(p)
  );

  return (
    <>
      <Head>
        <title>Projects & Executed Works - Dr. Semiu Akanni, AYINDE</title>
        <meta
          name="description"
          content="Portfolio of executed projects including surveying, geospatial, government coordination, and infrastructure projects across Nigeria."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Projects - Dr. Semiu Akanni, AYINDE" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main>
        <style>{`
          .projects-page-header {
            background: linear-gradient(135deg, var(--color-primary) 0%, color-mix(in srgb, var(--color-primary) 80%, #000) 100%);
            color: white;
            padding: var(--sp-lg) var(--sp-md);
            margin-bottom: var(--sp-2xl);
          }

          .projects-page-header h1 {
            font-size: var(--font-4xl);
            font-weight: 700;
            margin-bottom: var(--sp-md);
          }

          .projects-page-header p {
            font-size: var(--font-lg);
            opacity: 0.9;
          }

          .projects-section {
            margin-bottom: var(--sp-2xl);
          }

          .projects-section-header {
            margin-bottom: var(--sp-lg);
          }

          .projects-section h2 {
            font-size: var(--font-2xl);
            font-weight: 700;
            margin-bottom: var(--sp-md);
            color: var(--color-primary);
          }

          .projects-section-desc {
            font-size: var(--font-base);
            color: var(--color-text-light);
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: var(--sp-lg);
          }

          .stats-box {
            background: color-mix(in srgb, var(--color-primary) 5%, white);
            border: 1px solid color-mix(in srgb, var(--color-primary) 15%, white);
            border-radius: var(--radius-lg);
            padding: var(--sp-lg);
            margin-top: var(--sp-2xl);
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: var(--sp-lg);
          }

          .stat-item {
            text-align: center;
          }

          .stat-number {
            font-size: var(--font-2xl);
            font-weight: 700;
            color: var(--color-accent);
            margin-bottom: var(--sp-xs);
          }

          .stat-label {
            font-size: var(--font-sm);
            color: var(--color-text);
          }

          .cta-section {
            text-align: center;
            padding: var(--sp-lg);
            background: white;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            margin-top: var(--sp-2xl);
          }

          .cta-section h3 {
            font-size: var(--font-xl);
            font-weight: 700;
            margin-bottom: var(--sp-md);
            color: var(--color-primary);
          }

          .cta-section p {
            font-size: var(--font-base);
            color: var(--color-text);
            margin-bottom: var(--sp-lg);
            max-width: 32rem;
            margin-left: auto;
            margin-right: auto;
          }

          .cta-button {
            display: inline-block;
            background: var(--color-accent);
            color: white;
            font-weight: 600;
            padding: var(--sp-md) var(--sp-lg);
            border-radius: var(--radius-md);
            transition: all var(--transition-base);
            text-decoration: none;
            border: none;
            cursor: pointer;
          }

          .cta-button:hover {
            background: color-mix(in srgb, var(--color-accent) 90%, #000);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
          }

          @media (max-width: 768px) {
            .projects-page-header h1 {
              font-size: var(--font-2xl);
            }

            .projects-page-header p {
              font-size: var(--font-base);
            }

            .projects-section h2 {
              font-size: var(--font-xl);
            }

            .projects-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        {/* Page Header */}
        <section className="projects-page-header">
          <div className="container">
            <h1>Projects & Executed Works</h1>
            <p>50+ successfully executed projects across government, surveying, and infrastructure sectors</p>
          </div>
        </section>

        <div className="container" style={{ paddingTop: 'var(--sp-2xl)', paddingBottom: 'var(--sp-2xl)' }}>
          {/* Government & Coordination Projects */}
          {governmentProjects.length > 0 && (
            <section className="projects-section">
              <div className="projects-section-header">
                <h2>Government & Coordination Projects</h2>
                <p className="projects-section-desc">
                  Strategic initiatives in survey coordination, regulatory compliance, and inter-agency collaboration
                </p>
              </div>
              <div className="projects-grid">
                {governmentProjects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* Survey & Mapping Projects */}
          {surveyProjects.length > 0 && (
            <section className="projects-section">
              <div className="projects-section-header">
                <h2>Survey & Mapping Projects</h2>
                <p className="projects-section-desc">
                  Topographical, cadastral, hydrographic, and layout surveys across multiple sites
                </p>
              </div>
              <div className="projects-grid">
                {surveyProjects.map((project, idx) => (
                  <ProjectCard
                    key={idx}
                    project={{
                      ...project,
                      specs: project.title.includes('20Ha')
                        ? '20 Hectares'
                        : project.title.includes('30Ha')
                          ? '30 Hectares'
                          : project.title.includes('15Ha')
                            ? '15 Hectares'
                            : project.title.includes('30,000 Ha')
                              ? '30,000 Hectares'
                              : project.title.includes('5Ha')
                                ? '5 Hectares'
                                : undefined,
                    }}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Piling & Foundation Projects */}
          {pilingProjects.length > 0 && (
            <section className="projects-section">
              <div className="projects-section-header">
                <h2>Piling & Foundation Projects</h2>
                <p className="projects-section-desc">
                  CFA piling supervision and site management for major construction projects
                </p>
              </div>
              <div className="projects-grid">
                {pilingProjects.map((project, idx) => {
                  // Extract piling specs from title
                  const specMatch = project.title.match(/(\d+)mm.*?(\d+)m\s*&\s*(\d+)/);
                  const specs = specMatch
                    ? `CFA ${specMatch[1]}mm, ${specMatch[2]}m depth, ${specMatch[3]} number of piles`
                    : undefined;

                  return (
                    <ProjectCard
                      key={idx}
                      project={{
                        ...project,
                        specs,
                      }}
                    />
                  );
                })}
              </div>
            </section>
          )}

          {/* Other Projects */}
          {infrastructureProjects.length > 0 && (
            <section className="projects-section">
              <div className="projects-section-header">
                <h2>Infrastructure & Consulting Projects</h2>
                <p className="projects-section-desc">
                  Consulting, management, and specialized projects
                </p>
              </div>
              <div className="projects-grid">
                {infrastructureProjects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* Project Statistics */}
          <section className="stats-box">
            <h3 style={{ fontSize: 'var(--font-xl)', fontWeight: '700', marginBottom: 'var(--sp-lg)', color: 'var(--color-primary)' }}>
              Project Portfolio Summary
            </h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{cvData.projects.length}+</div>
                <div className="stat-label">Total Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">States Covered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="cta-section">
            <h3>Interested in Collaboration?</h3>
            <p>For more details about specific projects or to discuss new opportunities, please reach out.</p>
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/#contact';
              }}
              className="cta-button"
            >
              Get in Touch
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
