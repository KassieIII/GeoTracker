import { useEffect, useRef } from "react";
import { useDeviceStore } from "@/store/deviceStore";
import type { Device } from "@/types/device";

const WS_URL = import.meta.env.VITE_WS_URL || "ws://localhost:8000/ws";

export function useWebSocket() {
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReconnectRef = useRef(true);
  const updateDevice = useDeviceStore((s) => s.updateDevice);

  useEffect(() => {
    shouldReconnectRef.current = true;

    const scheduleReconnect = () => {
      if (!shouldReconnectRef.current || reconnectTimerRef.current) return;
      reconnectTimerRef.current = setTimeout(() => {
        reconnectTimerRef.current = null;
        connect();
      }, 3000);
    };

    const connect = () => {
      if (!shouldReconnectRef.current) return;

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
          scheduleReconnect();
        };

        ws.onerror = () => {
          ws.close();
        };

        wsRef.current = ws;
      } catch {
        scheduleReconnect();
      }
    };

    connect();
    return () => {
      shouldReconnectRef.current = false;
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
        reconnectTimerRef.current = null;
      }
      wsRef.current?.close();
    };
  }, [updateDevice]);
}
