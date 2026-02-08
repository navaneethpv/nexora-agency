import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexoraweb.tech"),
  title: "Nexora | Web Development Agency",
  description: "Nexora is a premium web development and digital solutions agency. We build clean, scalable, and performance-focused websites and web applications for startups, businesses, and institutions using cutting-technologies.",
  keywords: ["web development", "digital solutions", "next.js", "react", "premium design", "software agency"],
  openGraph: {
    title: "Nexora | Web Development Agency",
    description: "Premium web development and digital solutions for next-gen brands.",
    url: "https://nexoraweb.tech",
    siteName: "Nexora",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora | Web Development Agency",
    description: "Premium web development and digital solutions for next-gen brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${inter.variable} font-sans antialiased bg-black text-white`}
      >
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
