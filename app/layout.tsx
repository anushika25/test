import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BU Mate — Barkatullah University Student Portal",
  description: "Smart resources, better learning, bright future.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
