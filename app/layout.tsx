import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Reel Daily — a daily movie trivia game",
  description:
    "Five quick rounds of movie trivia, the same for everyone, refreshed every day at midnight UTC. Name the film, connect the cast, and put cinema history in order.",
  applicationName: "Reel Daily",
  openGraph: {
    title: "Reel Daily",
    description: "Five rounds of movie trivia. One new reel every day.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f1e7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
