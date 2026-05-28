export const primary = "#8CC0EB";
export const background = "#DCC3AA";
export const foreground = "#1a1816";
export const borderColor = "#A99C89";
export const subtle = "#BBAF9C";
export const muted = "#8a8070";
export const gridColor = "rgba(198, 189, 163, 0.8)";


function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

export const primaryRgb = hexToRgb(primary);
export const backgroundRgb = hexToRgb(background);
