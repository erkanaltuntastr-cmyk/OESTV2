// src/shared/ui/Modal.js
import Button from "./Button";

export default function Modal({ open, title, children, onClose, className = "" }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center p-4 z-40">
      <div
        className={`bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative ${className}`.trim()}
      >
        {title && <h2 className="text-lg font-bold mb-3">{title}</h2>}

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-xl leading-none"
        >
          ×
        </button>

        <div className="mb-4 text-sm">{children}</div>

        <Button onClick={onClose} className="mt-2 w-full">
          Close
        </Button>
      </div>
    </div>
  );
}
