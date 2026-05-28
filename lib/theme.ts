export const primary = "#FF61F8";
export const primaryDark = "#0c0e0c";

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

export const primaryRgb = hexToRgb(primary);
