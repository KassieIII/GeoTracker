import { useEffect, useRef, useCallback } from "react";
import { useDeviceStore } from "@/store/deviceStore";
import type { Device } from "@/types/device";

const WS_URL = import.meta.env.VITE_WS_URL || "ws://localhost:8000/ws";

export function useWebSocket() {
  const wsRef = useRef<WebSocket | null>(null);
  const updateDevice = useDeviceStore((s) => s.updateDevice);

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(WS_URL);

      ws.onmessage = (event) => {
        try {
          const data: Device = JSON.parse(event.data);
          updateDevice(data);
        } catch {
          console.warn("Invalid WebSocket message");
        }
      };

      ws.onclose = () => {
        // Reconnect after 3 seconds
        setTimeout(connect, 3000);
      };

      ws.onerror = () => {
        ws.close();
      };

      wsRef.current = ws;
    } catch {
      setTimeout(connect, 3000);
    }
  }, [updateDevice]);

  useEffect(() => {
    connect();
    return () => {
      wsRef.current?.close();
    };
  }, [connect]);
}
