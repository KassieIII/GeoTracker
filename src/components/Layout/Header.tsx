import { useDeviceStore } from "@/store/deviceStore";

export default function Header() {
  const darkMode = useDeviceStore((s) => s.darkMode);
  const toggleDarkMode = useDeviceStore((s) => s.toggleDarkMode);

  return (
    <header className="h-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <span className="text-lg">🗺️</span>
        <h1 className="font-semibold text-gray-900 dark:text-white">
          GeoTracker
        </h1>
      </div>

      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm"
        title="Toggle dark mode"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
