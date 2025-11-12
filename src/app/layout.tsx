import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truhlářství Král",
  description: "Truhlářství Král - Truhlařinu s láskou",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="body"
      >
        {children}
      </body>
    </html>
  );
}