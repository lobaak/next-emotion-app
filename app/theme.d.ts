import "@emotion/react";

import { Theme as ThemeType } from "@tal-gel/theming-plugin-tal2.0";

declare module "@emotion/react" {
  export interface Theme {
    fonts: ThemeType["fonts"];
    breakpoints: ThemeType["breakpoints"];
    getSize: ThemeType["getSize"];
    icons: ThemeType["icons"];
    id: ThemeType["id"];
    tokens: ThemeType["tokens"];
    bodyFont?: ThemeType extends { bodyFont: infer T } ? T : undefined;
    [key: string]: unknown;
  }
}
