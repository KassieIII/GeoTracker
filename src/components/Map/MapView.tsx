import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useDevices } from "@/hooks/useDevices";
import { useDeviceStore } from "@/store/deviceStore";
import { statusColor, formatLastSeen } from "@/utils/formatters";

function createIcon(color: string) {
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="
      width: 14px; height: 14px;
      background: ${color};
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

export default function MapView() {
  const { devices } = useDevices();
  const selectDevice = useDeviceStore((s) => s.selectDevice);

  return (
    <MapContainer
      center={[51.15, 71.45]}
      zoom={12}
      className="h-full w-full"
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {devices.map((device) => (
        <Marker
          key={device.id}
          position={[device.lat, device.lng]}
          icon={createIcon(statusColor(device.status))}
          eventHandlers={{
            click: () => selectDevice(device.id),
          }}
        >
          <Popup>
            <div className="text-sm">
              <strong>{device.name}</strong>
              <br />
              Status: {device.status}
              <br />
              Last seen: {formatLastSeen(device.lastSeen)}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
