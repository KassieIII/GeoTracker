import type { Device } from "@/types/device";
import { statusColor, formatLastSeen, formatBattery } from "@/utils/formatters";
import { useDeviceStore } from "@/store/deviceStore";

interface Props {
  device: Device;
}

export default function DeviceCard({ device }: Props) {
  const selectedId = useDeviceStore((s) => s.selectedDeviceId);
  const selectDevice = useDeviceStore((s) => s.selectDevice);
  const isSelected = selectedId === device.id;

  return (
    <div
      onClick={() => selectDevice(device.id)}
      className={`p-3 cursor-pointer border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
        isSelected ? "bg-blue-50 dark:bg-blue-900/20 border-l-2 border-l-blue-500" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-medium text-sm text-gray-900 dark:text-white">
          {device.name}
        </span>
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: statusColor(device.status) }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span className="capitalize">{device.type}</span>
        <span>{formatLastSeen(device.lastSeen)}</span>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
        <span>{device.ip}</span>
        <span>{formatBattery(device.battery)}</span>
      </div>
    </div>
  );
}
