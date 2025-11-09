import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Plateforme Marchande ",
  description: "Plateforme Marchande",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${lexend.className} bg-zinc-50 text-zinc-700`}>{children}</body>
    </html>
  );
}
