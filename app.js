export function formatCaptionLine(text = '', maxChars = 42) {
  const clean = String(text).trim().replace(/\s+/g, ' ');
  if (!clean) return [];
  const words = clean.split(' ');
  const lines = [];
  let current = '';
  for (const w of words) {
    if ((current + ' ' + w).trim().length <= maxChars) {
      current = (current + ' ' + w).trim();
    } else {
      if (current) lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  return lines;
}
