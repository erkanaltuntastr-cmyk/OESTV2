// src/shared/ui/Badge.js
export function Badge({ label, type = "info", className = "" }) {
  const colors = {
    info: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        colors[type] || colors.info
      } ${className}`.trim()}
    >
      {label}
    </span>
  );
}
