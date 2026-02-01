import type { Metadata } from "next";
import { Bricolage_Grotesque, Lora } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nexora | Limitless Design Subscription",
  description: "A subscription-based design agency for next-gen brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} ${lora.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
