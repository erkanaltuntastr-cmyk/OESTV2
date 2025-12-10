// src/shared/ui/Header.js
export default function Header({ title, right = null, className = "" }) {
  return (
    <header
      className={`w-full p-4 bg-green-600 text-white font-bold text-center text-lg shadow-md flex items-center justify-center relative ${className}`.trim()}
    >
      {right && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium">
          {right}
        </div>
      )}
      {title}
    </header>
  );
}
