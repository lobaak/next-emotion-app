"use client";

import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider as TP } from "@emotion/react";
import { ReactNode } from "react";

const cache = createCache({ key: "css", prepend: true });

export const theme = {
  colours: {
    primary: "#1976d2",
    text: "#222",
  },
  spacing: (n: number) => `${n * 4}px`,
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <TP theme={theme}>{children}</TP>
    </CacheProvider>
  );
}
