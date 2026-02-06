/**
 * Normaliza un string:
 * - trim() (sin espacios al inicio/fin)
 * - colapsa espacios internos (incluye tabs y saltos de línea) a un solo espacio
 * - opcionalmente limpia espacios "raros"
 */
export function normalizeSpaces(input, { removeWeirdSpaces = true } = {}) {
  if (input == null) return "";

  let str = String(input);

  if (removeWeirdSpaces) {
    // NBSP y varios espacios unicode comunes → espacio normal
    str = str.replace(/[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, " ");
    // Caracteres invisibles típicos
    str = str.replace(/[\u200B-\u200D\uFEFF]/g, "");
  }

  return str
    .replace(/\s+/g, " ") // colapsa cualquier whitespace (espacios, tabs, newlines)
    .trim();
}
