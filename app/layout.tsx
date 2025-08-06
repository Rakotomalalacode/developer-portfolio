import type { Metadata } from "next";
import "./globals.css";
import NavbarOne from "@/components/headers/NavbarOne";
import { Inter } from 'next/font/google'
import BackToTop from "@/components/model/BackToTop";
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Portfolio of Rakotomalala Hery Niaina Tahina - Software Developer",
  description: "Ny avy any tonga aty , ny aty tonga any",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} overflow-x-hidden antialiased`}
      >
        <header className="sticky top-0 z-50">
          <NavbarOne />
        </header>
        <main>
        {children}
        </main>
        <BackToTop/>
      </body>
    </html>
  );
}
