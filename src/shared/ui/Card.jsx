// src/shared/ui/Card.js
export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white p-5 rounded-2xl shadow-md border border-gray-100 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
