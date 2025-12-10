// src/shared/ui/Input.js
export default function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  disabled = false,
}) {
  return (
    <div className="flex flex-col gap-1 mb-3">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`p-2 border rounded-lg bg-white focus:ring-2 focus:ring-green-600 focus:outline-none text-sm disabled:opacity-60 disabled:cursor-not-allowed ${className}`.trim()}
      />
    </div>
  );
}
