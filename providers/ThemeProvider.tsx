"use client";

import { ThemeProvider as TP } from "@emotion/react";
import theme from "@tal-gel/theming-plugin-tal2.0";

// export const theme = {
//   colours: {
//     primary: "#1976d2",
//     text: "#222",
//   },
//   spacing: (n: number) => `${n * 4}px`,
// };

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TP theme={theme}>{children}</TP>;
}
