import type { Metadata } from "next";
import "./globals.css";
import EmotionRootStyleRegistry from "@/app/providers/EmotionRootStyleRegistry";
import ThemeProvider from "@/app/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "",
  description: "xxxx",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js Emotion App</title>
      </head>
      <body>
        <EmotionRootStyleRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </EmotionRootStyleRegistry>
      </body>
    </html>
  );
}
