// utils/ThemeMap.ts
export function getThemeFromTemperature(temp: number): string {
  if (temp >= 30) return "summer";     // 比如高温时用热情的主题
  if (temp <= 10) return "winter";     // 冷的时候用冷色调
  return "spring";                     // 其他时候用温和主题
}

export const ThemeColorMap: Record<string, {
  bg: string;
  text: string;
  badge: string;
}> = {
  summer: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    badge: "badge-warning"
  },
  winter: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    badge: "badge-info"
  },
  spring: {
    bg: "bg-green-100",
    text: "text-green-700",
    badge: "badge-success"
  }
};
