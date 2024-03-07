import type { Metadata } from "next";
import { Libre_Baskerville as FontSerif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSerif = FontSerif({
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
        className={cn("h-full p-4 bg-[#333333] text-white", fontSerif.variable)}
      >
        {children}
      </body>
    </html>
  );
}
