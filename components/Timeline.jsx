export default function Timeline({ items }) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 md:gap-8">
          {/* Timeline dot */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-4 h-4 bg-primary-600 rounded-full ring-4 ring-white border-2 border-primary-600"></div>
            {index < items.length - 1 && (
              <div className="w-1 h-24 bg-primary-100 mt-2"></div>
            )}
          </div>

          {/* Content */}
          <div className="pt-1 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.startMonth} {item.startYear}
                {item.endYear ? ` – ${item.endMonth} ${item.endYear}` : ' – Present'}
              </p>
            </div>
            {item.organization && (
              <p className="text-primary-600 font-medium mb-2">{item.organization}</p>
            )}
            {item.location && <p className="text-sm text-gray-600 mb-2">{item.location}</p>}
            {item.description && <p className="text-gray-700 mb-3">{item.description}</p>}
            {item.responsibilities && item.responsibilities.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {item.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
