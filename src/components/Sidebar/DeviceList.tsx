import { useDevices } from "@/hooks/useDevices";
import SearchBar from "./SearchBar";
import DeviceCard from "./DeviceCard";

export default function DeviceList() {
  const { devices, total, onlineCount } = useDevices();

  return (
    <div className="w-80 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
      {/* Stats bar */}
      <div className="px-3 py-2 bg-gray-50 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 flex justify-between">
        <span>{total} devices</span>
        <span className="text-green-600">{onlineCount} online</span>
      </div>

      <SearchBar />

      {/* Device list */}
      <div className="flex-1 overflow-y-auto">
        {devices.length === 0 ? (
          <div className="p-4 text-center text-sm text-gray-400">
            No devices match filters
          </div>
        ) : (
          devices.map((device) => (
            <DeviceCard key={device.id} device={device} />
          ))
        )}
      </div>
    </div>
  );
}
