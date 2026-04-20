import { useDeviceStore } from "@/store/deviceStore";

export default function SearchBar() {
  const filters = useDeviceStore((s) => s.filters);
  const setFilters = useDeviceStore((s) => s.setFilters);

  return (
    <div className="space-y-3 p-3 border-b border-gray-200 dark:border-gray-700">
      <input
        type="text"
        placeholder="Search by name or IP..."
        value={filters.search}
        onChange={(e) => setFilters({ search: e.target.value })}
        className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-2">
        <select
          value={filters.status}
          onChange={(e) => setFilters({ status: e.target.value as any })}
          className="flex-1 px-2 py-1.5 text-xs rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          <option value="all">All Status</option>
          <option value="online">Online</option>
          <option value="idle">Idle</option>
          <option value="offline">Offline</option>
        </select>

        <select
          value={filters.type}
          onChange={(e) => setFilters({ type: e.target.value as any })}
          className="flex-1 px-2 py-1.5 text-xs rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          <option value="all">All Types</option>
          <option value="vehicle">Vehicle</option>
          <option value="mobile">Mobile</option>
          <option value="sensor">Sensor</option>
          <option value="drone">Drone</option>
        </select>
      </div>
    </div>
  );
}
