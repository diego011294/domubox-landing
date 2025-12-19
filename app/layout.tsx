import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import MaintenancePage from "./maintenance/page";
import { Playfair_Display, DM_Sans, Lexend } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DOMUBOX IMPORT",
  description:
    "Descubre nuestras casas modulares de diseño moderno y eficiente. Soluciones habitacionales rápidas, sostenibles y personalizables que se adaptan a tu estilo de vida y presupuesto. Calidad, confort y rapidez en cada proyecto.",
  verification: {
    google: "VMBDKNiK4nHs5yNxzHQ2E0AN_4QSOr1o9Le5Ut3-cPg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const maintenance = true; // 👈 activar para mostrar el mensaje de mantenimiento

  return (
    <html lang="es"
      className={`${playfair.variable} ${dmSans.variable} ${lexend.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="bg-white">
        {maintenance ? (
          <MaintenancePage />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
