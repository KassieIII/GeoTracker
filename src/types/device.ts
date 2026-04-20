export interface Device {
  id: string;
  name: string;
  type: "mobile" | "vehicle" | "sensor" | "drone";
  status: "online" | "offline" | "idle";
  lat: number;
  lng: number;
  speed: number;
  battery: number;
  ip: string;
  lastSeen: string;
  metadata?: Record<string, string>;
}

export interface DeviceFilters {
  status: Device["status"] | "all";
  type: Device["type"] | "all";
  search: string;
}
