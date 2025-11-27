import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ErrorBoundaryWrapper from "@/components/ErrorBoundaryWrapper";
import StructuredData from "@/components/StructuredData";

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Find Your Light Psychiatry PLLC - April Casselman, PMHNP-BC",
  description: "Compassionate, evidence-based mental health care for adults, children, and adolescents throughout Washington State. Led by April Casselman, PMHNP-BC, providing psychiatric medication management, TMS therapy, psychotherapy, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${greatVibes.variable} ${playfairDisplay.variable} antialiased min-h-screen flex flex-col`}
      >
        <StructuredData />
        {/* Header with Navigation Bar */}
        <header>
          <Navbar />
        </header>

        {/* Main content area for each page */}
        <main className="flex-grow pt-14 sm:pt-16">
          <ErrorBoundaryWrapper>
            {children}
          </ErrorBoundaryWrapper>
        </main>

        {/* Footer on every page */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
