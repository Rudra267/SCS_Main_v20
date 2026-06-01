import type { Metadata } from "next";
import {
  Caveat,
  Cinzel,
  Montserrat,
  Plus_Jakarta_Sans,
  Poppins,
  Righteous,
} from "next/font/google";
import { LenisProvider } from "@/components/lenis-provider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  preload: false,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  preload: false,
});

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Sri Chaitanya Schools",
  description: "Sri Chaitanya Schools homepage",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cinzel.variable} ${plusJakartaSans.variable} ${poppins.variable} ${righteous.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
