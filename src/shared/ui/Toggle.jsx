// src/shared/ui/Toggle.js
export function Toggle({ enabled, onChange, className = "" }) {
  return (
    <div
      onClick={() => onChange(!enabled)}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all ${
        enabled ? "bg-green-600" : "bg-gray-300"
      } ${className}`.trim()}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
          enabled ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
}
