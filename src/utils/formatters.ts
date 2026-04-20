export function formatLastSeen(isoString: string): string {
  const diff = Date.now() - new Date(isoString).getTime();
  const seconds = Math.floor(diff / 1000);

  if (seconds < 60) return "Just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export function formatSpeed(kmh: number): string {
  return `${kmh} km/h`;
}

export function formatBattery(percent: number): string {
  if (percent > 60) return `🟢 ${percent}%`;
  if (percent > 20) return `🟡 ${percent}%`;
  return `🔴 ${percent}%`;
}

export function statusColor(status: string): string {
  switch (status) {
    case "online":
      return "#22c55e";
    case "idle":
      return "#eab308";
    case "offline":
      return "#ef4444";
    default:
      return "#6b7280";
  }
}
