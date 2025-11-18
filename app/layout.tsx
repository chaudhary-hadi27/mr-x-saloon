import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mr X Hair Saloon - Professional Hair Care & Keratin Specialist",
  description: "Expert haircuts, premium keratin treatments, and professional styling services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}