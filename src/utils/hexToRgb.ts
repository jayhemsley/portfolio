export function hexToRgb(hex: string): string | null {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return res ? [parseInt(res[1], 16), parseInt(res[2], 16), parseInt(res[3], 16)].join(', ') : null;
}
