import { create } from "zustand";
import type { Device, DeviceFilters } from "@/types/device";

interface DeviceStore {
  devices: Device[];
  selectedDeviceId: string | null;
  filters: DeviceFilters;
  darkMode: boolean;

  setDevices: (devices: Device[]) => void;
  updateDevice: (device: Device) => void;
  selectDevice: (id: string | null) => void;
  setFilters: (filters: Partial<DeviceFilters>) => void;
  toggleDarkMode: () => void;
}

export const useDeviceStore = create<DeviceStore>((set) => ({
  devices: [],
  selectedDeviceId: null,
  filters: { status: "all", type: "all", search: "" },
  darkMode: false,

  setDevices: (devices) => set({ devices }),

  updateDevice: (updated) =>
    set((state) => ({
      devices: state.devices.map((d) =>
        d.id === updated.id ? { ...d, ...updated } : d
      ),
    })),

  selectDevice: (id) => set({ selectedDeviceId: id }),

  setFilters: (partial) =>
    set((state) => ({ filters: { ...state.filters, ...partial } })),

  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
