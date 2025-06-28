export function truncate(text, maxLength) {
  if (!text || typeof text !== "string" || maxLength <= 0) return "";
  return text.length <= maxLength ? text : text.slice(0, maxLength).trimEnd() + "...";
}