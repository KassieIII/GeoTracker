import { useDeviceStore } from "@/store/deviceStore";
import Header from "./Header";
import DeviceList from "../Sidebar/DeviceList";
import MapView from "../Map/MapView";
import DevicePanel from "../DeviceDetails/DevicePanel";

export default function AppLayout() {
  const darkMode = useDeviceStore((s) => s.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-950">
        <Header />
        <div className="flex flex-1 overflow-hidden relative">
          <DeviceList />
          <div className="flex-1 relative">
            <MapView />
            <DevicePanel />
          </div>
        </div>
      </div>
    </div>
  );
}
