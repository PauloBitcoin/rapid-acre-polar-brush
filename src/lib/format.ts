export const NOW = Date.parse("2026-10-14T23:11:00.000Z");

export function formatDuration(seconds: number): string {
  const safe = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(safe / 60);
  const rest = safe % 60;
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
}

export function compactNumber(value: number): string {
  if (value < 1000) return String(value);
  if (value < 1_000_000) {
    const scaled = value / 1000;
    const text = scaled < 10 ? scaled.toFixed(1) : Math.round(scaled).toString();
    return `${text.replace(".", ",")} mil`;
  }
  return `${(value / 1_000_000).toFixed(1).replace(".", ",")} mi`;
}

export function relativeTime(iso: string): { label: string; fresh: boolean } {
  const delta = Math.max(0, NOW - Date.parse(iso));
  const minutes = Math.floor(delta / 60_000);
  const hours = Math.floor(delta / 3_600_000);
  const days = Math.floor(delta / 86_400_000);
  if (hours < 1) {
    return { label: minutes <= 1 ? "agora" : `há ${minutes} min`, fresh: true };
  }
  if (hours < 24) {
    return { label: hours === 1 ? "há 1 hora" : `há ${hours} horas`, fresh: true };
  }
  if (days === 1) return { label: "há 1 dia", fresh: false };
  return { label: `há ${days} dias`, fresh: false };
}
