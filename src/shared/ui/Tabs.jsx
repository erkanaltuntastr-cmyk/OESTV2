// src/shared/ui/Tabs.js
export function Tabs({ tabs, active, onChange, className = "" }) {
  return (
    <div className={`flex border-b border-gray-200 mb-4 ${className}`.trim()}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-4 py-2 text-sm font-semibold transition-colors ${
            active === tab.key
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
