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
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects & Executed Works</h1>
            <p className="text-lg text-primary-100">
              50+ successfully executed projects across government, surveying, and infrastructure sectors
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          {/* Government & Coordination Projects */}
          {governmentProjects.length > 0 && (
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Government & Coordination Projects</h2>
                <p className="text-gray-600">
                  Strategic initiatives in survey coordination, regulatory compliance, and inter-agency
                  collaboration
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {governmentProjects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* Survey & Mapping Projects */}
          {surveyProjects.length > 0 && (
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Survey & Mapping Projects</h2>
                <p className="text-gray-600">
                  Topographical, cadastral, hydrographic, and layout surveys across multiple sites
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
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
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Piling & Foundation Projects</h2>
                <p className="text-gray-600">
                  CFA piling supervision and site management for major construction projects
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
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
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Infrastructure & Consulting Projects</h2>
                <p className="text-gray-600">
                  Consulting, management, and specialized projects
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {infrastructureProjects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* Project Statistics */}
          <section className="bg-primary-50 rounded-lg p-8 border border-primary-200 mt-16">
            <h3 className="text-2xl font-bold mb-6">Project Portfolio Summary</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{cvData.projects.length}+</div>
                <p className="text-gray-700">Total Projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                <p className="text-gray-700">Years of Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <p className="text-gray-700">States Covered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <p className="text-gray-700">Success Rate</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-16 p-8 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              For more details about specific projects or to discuss new opportunities, please reach out.
            </p>
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/#contact';
              }}
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
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
