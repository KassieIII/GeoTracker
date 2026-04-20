import AppLayout from "./components/Layout/AppLayout";
import { useWebSocket } from "./hooks/useWebSocket";

export default function App() {
  useWebSocket();
  return <AppLayout />;
}
