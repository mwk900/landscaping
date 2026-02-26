import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verdance Nottingham | Premium Landscaping Demo",
  description:
    "Premium Nottingham landscaping demo with patios, fencing, lawn care, and outdoor transformations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
