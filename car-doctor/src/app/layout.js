import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/global_components/Navbar";
import Footer from "@/global_components/Footer";
import SessionProviders from "@/providers/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Doctor",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <SessionProviders>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
      </SessionProviders>
    </html>
  );
}
