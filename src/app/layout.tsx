import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EasyCare 365 - Annual Parental Care Subscription",
  description: "Care for your loved ones, from anywhere in the world. Premium healthcare subscription for elderly parents in Nepal, managed by diaspora abroad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
