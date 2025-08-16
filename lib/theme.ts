import { knobs } from "./knobs";

export function getThemeAttrs(k = knobs) {
  return {
    "data-theme": k.theme,
    "data-brand": k.brand,
    "data-accent": k.accent,
  } as const;
}
