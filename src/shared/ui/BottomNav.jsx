// src/shared/ui/BottomNav.js
import { useNavigate } from "react-router-dom";

export default function BottomNav({ active = "workouts", className = "" }) {
  const navigate = useNavigate();

  const tabs = [
    { key: "workouts", label: "Workouts", path: "/workouts" },
    { key: "progress", label: "Progress", path: "/progress" },
    { key: "profile", label: "Profile", path: "/profile" },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex justify-around py-2 z-30 ${className}`.trim()}
    >
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => navigate(tab.path)}
          className={`text-center text-xs font-medium px-3 py-1 rounded-lg transition-colors ${
            active === tab.key
              ? "text-green-600 font-bold"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
