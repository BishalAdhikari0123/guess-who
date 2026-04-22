import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MLBB- Guess Who",
  description: "MLBB- Guess Who is a web-based game that challenges players to guess the name of a Mobile Legends: Bang Bang character based on a silhouette. Players can choose from three difficulty levels: Easy, Medium, and Hard. Each level presents a different set of characters with varying degrees of difficulty. The game is designed to be fun and engaging for fans of Mobile Legends: Bang Bang, allowing them to test their knowledge of the game's characters while enjoying a simple and addictive guessing game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
