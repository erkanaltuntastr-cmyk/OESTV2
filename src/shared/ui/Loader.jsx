// src/shared/ui/Loader.js
export function Loader({ size = 8, className = "" }) {
  const px = `${size}px`;
  return (
    <div className={`flex justify-center items-center ${className}`.trim()}>
      <div
        style={{ width: px, height: px }}
        className="border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"
      ></div>
    </div>
  );
}

export function GlobalLoader() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin" />
    </div>
  );
}

export function PageTransition({ children }) {
  return <div className="min-h-screen animate-fadeIn">{children}</div>;
}
