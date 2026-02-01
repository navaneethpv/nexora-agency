import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Nexora | Web Development Agency",
  description: "Nexora is a premium web development and digital solutions agency. We build clean, scalable, and performance-focused websites and web applications for startups, businesses, and institutions using cutting-edge technologies.",
  keywords: ["web development", "digital solutions", "next.js", "react", "premium design", "software agency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} font-sans antialiased bg-black text-white`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
