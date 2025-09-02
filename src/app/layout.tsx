// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "AI Playground",
  description: "Beautiful AI Playground — React + TypeScript (no Tailwind)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
