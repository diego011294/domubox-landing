import type { Metadata } from "next";
import { Lexend, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "DOMUBOX IMPORT",
  description:
    "Descubre nuestras casas modulares de diseño moderno y eficiente. Soluciones habitacionales rápidas, sostenibles y personalizables que se adaptan a tu estilo de vida y presupuesto. Calidad, confort y rapidez en cada proyecto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.className}`}>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
