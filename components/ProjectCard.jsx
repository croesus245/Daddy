export default function ProjectCard({ project }) {
  return (
    <>
      <style>{`
        .project-card {
          background: white;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--sp-lg);
          transition: all var(--transition-base);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: var(--color-accent);
        }

        .project-card-content {
          flex-grow: 1;
        }

        .project-card-title {
          font-size: var(--font-lg);
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: var(--sp-md);
        }

        .project-card-meta {
          display: flex;
          flex-direction: column;
          gap: var(--sp-sm);
          margin-bottom: var(--sp-md);
          font-size: var(--font-sm);
          color: var(--color-text-light);
        }

        .project-card-meta-item {
          font-weight: 500;
        }

        .project-card-role {
          font-size: var(--font-sm);
          color: var(--color-accent);
          font-weight: 600;
          margin-bottom: var(--sp-md);
        }

        .project-card-description {
          font-size: var(--font-base);
          color: var(--color-text);
          margin-bottom: var(--sp-md);
          line-height: 1.5;
        }

        .project-card-specs {
          padding-top: var(--sp-md);
          border-top: 1px solid var(--color-border);
          margin-top: auto;
        }

        .project-card-specs-label {
          font-size: var(--font-sm);
          color: var(--color-text-light);
        }

        .project-card-specs-label strong {
          color: var(--color-primary);
          font-weight: 600;
        }
      `}</style>
      <div className="project-card">
        <div className="project-card-content">
          <h3 className="project-card-title">{project.title}</h3>

          <div className="project-card-meta">
            <span className="project-card-meta-item">
              {project.startMonth} {project.startYear}
              {project.endYear ? ` – ${project.endMonth} ${project.endYear}` : ' – Present'}
            </span>
            {project.location && (
              <span>
                {project.location}
              </span>
            )}
          </div>

          {project.role && <p className="project-card-role">Role: {project.role}</p>}

          {project.description && <p className="project-card-description">{project.description}</p>}
        </div>

        {project.specs && (
          <div className="project-card-specs">
            <p className="project-card-specs-label">
              <strong>Specifications:</strong> {project.specs}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
