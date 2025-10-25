export default function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>

        <div className="flex flex-col sm:flex-row gap-2 mb-3 text-sm text-gray-600">
          <span className="font-medium">
            {project.startMonth} {project.startYear}
            {project.endYear
              ? ` – ${project.endMonth} ${project.endYear}`
              : ' – Present'}
          </span>
          {project.location && <span className="text-gray-500">• {project.location}</span>}
        </div>

        {project.role && (
          <p className="text-sm text-primary-600 font-medium mb-3">Role: {project.role}</p>
        )}

        {project.description && (
          <p className="text-gray-700 mb-4">{project.description}</p>
        )}
      </div>

      {project.specs && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Specifications:</span> {project.specs}
          </p>
        </div>
      )}
    </div>
  );
}
