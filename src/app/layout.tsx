import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Datamalky",
  description: "Best developer in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "h-full p-4 bg-[#333333] text-white",
          fontSerif.variable,
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
