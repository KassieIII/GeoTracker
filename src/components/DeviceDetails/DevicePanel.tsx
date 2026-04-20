import { useDeviceStore } from "@/store/deviceStore";
import {
  statusColor,
  formatLastSeen,
  formatSpeed,
  formatBattery,
} from "@/utils/formatters";

export default function DevicePanel() {
  const devices = useDeviceStore((s) => s.devices);
  const selectedId = useDeviceStore((s) => s.selectedDeviceId);
  const selectDevice = useDeviceStore((s) => s.selectDevice);

  const device = devices.find((d) => d.id === selectedId);

  if (!device) return null;

  return (
    <div className="absolute bottom-4 left-96 z-[1000] bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 w-80">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {device.name}
        </h3>
        <button
          onClick={() => selectDevice(null)}
          className="text-gray-400 hover:text-gray-600 text-lg leading-none"
        >
          ×
        </button>
      </div>

      {/* Status badge */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: statusColor(device.status) }}
        />
        <span className="text-sm capitalize text-gray-600 dark:text-gray-300">
          {device.status}
        </span>
        <span className="text-xs text-gray-400 ml-auto">
          {formatLastSeen(device.lastSeen)}
        </span>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="text-gray-500 dark:text-gray-400">Type</div>
        <div className="text-gray-900 dark:text-white capitalize">{device.type}</div>

        <div className="text-gray-500 dark:text-gray-400">Coordinates</div>
        <div className="text-gray-900 dark:text-white font-mono text-xs">
          {device.lat.toFixed(4)}, {device.lng.toFixed(4)}
        </div>

        <div className="text-gray-500 dark:text-gray-400">Speed</div>
        <div className="text-gray-900 dark:text-white">{formatSpeed(device.speed)}</div>

        <div className="text-gray-500 dark:text-gray-400">Battery</div>
        <div className="text-gray-900 dark:text-white">{formatBattery(device.battery)}</div>

        <div className="text-gray-500 dark:text-gray-400">IP Address</div>
        <div className="text-gray-900 dark:text-white font-mono text-xs">{device.ip}</div>
      </div>
    </div>
  );
}
