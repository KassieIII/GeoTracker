import type { Device } from "@/types/device";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

export async function fetchDevices(): Promise<Device[]> {
  const res = await fetch(`${API_URL}/devices`);
  if (!res.ok) throw new Error("Failed to fetch devices");
  return res.json();
}

export async function fetchDevice(id: string): Promise<Device> {
  const res = await fetch(`${API_URL}/devices/${id}`);
  if (!res.ok) throw new Error("Failed to fetch device");
  return res.json();
}

// Demo data for development when API is not available
export function getDemoDevices(): Device[] {
  return [
    {
      id: "dev-001",
      name: "Patrol Unit A",
      type: "vehicle",
      status: "online",
      lat: 51.1694,
      lng: 71.4491,
      speed: 45,
      battery: 82,
      ip: "192.168.1.101",
      lastSeen: new Date().toISOString(),
    },
    {
      id: "dev-002",
      name: "Sensor Node B",
      type: "sensor",
      status: "online",
      lat: 51.1284,
      lng: 71.4306,
      speed: 0,
      battery: 95,
      ip: "192.168.1.102",
      lastSeen: new Date().toISOString(),
    },
    {
      id: "dev-003",
      name: "Mobile Agent C",
      type: "mobile",
      status: "idle",
      lat: 51.1474,
      lng: 71.4726,
      speed: 0,
      battery: 34,
      ip: "10.0.0.55",
      lastSeen: new Date(Date.now() - 600000).toISOString(),
    },
    {
      id: "dev-004",
      name: "Drone D1",
      type: "drone",
      status: "offline",
      lat: 51.0906,
      lng: 71.4183,
      speed: 0,
      battery: 12,
      ip: "10.0.0.80",
      lastSeen: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: "dev-005",
      name: "Transport E",
      type: "vehicle",
      status: "online",
      lat: 51.1605,
      lng: 71.4704,
      speed: 60,
      battery: 71,
      ip: "192.168.2.15",
      lastSeen: new Date().toISOString(),
    },
  ];
}
