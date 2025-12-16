import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apurv Maurya",
  description: "A portfolio showcasing my skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth!">
      <body>{children}</body>
    </html>
  );
}
