import { useEffect } from "react";
import { useDeviceStore } from "@/store/deviceStore";
import { getDemoDevices } from "@/api/devices";
import type { Device, DeviceFilters } from "@/types/device";

export function useDevices() {
  const devices = useDeviceStore((s) => s.devices);
  const filters = useDeviceStore((s) => s.filters);
  const setDevices = useDeviceStore((s) => s.setDevices);

  // Load demo data on mount (replace with API call in production)
  useEffect(() => {
    setDevices(getDemoDevices());
  }, [setDevices]);

  const filtered = filterDevices(devices, filters);

  return {
    devices: filtered,
    total: devices.length,
    onlineCount: devices.filter((d) => d.status === "online").length,
  };
}

function filterDevices(devices: Device[], filters: DeviceFilters): Device[] {
  return devices.filter((device) => {
    if (filters.status !== "all" && device.status !== filters.status) {
      return false;
    }
    if (filters.type !== "all" && device.type !== filters.type) {
      return false;
    }
    if (
      filters.search &&
      !device.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      !device.ip.includes(filters.search)
    ) {
      return false;
    }
    return true;
  });
}
