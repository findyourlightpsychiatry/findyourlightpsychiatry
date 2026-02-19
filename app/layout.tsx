import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display, Raleway } from "next/font/google";
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

const raleway = Raleway({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.findyourlightpsychiatry.org"),
  title: "Find Your Light Psychiatry PLLC - April Casselman, PMHNP-BC",
  description: "Compassionate, evidence-based mental health care for adults, children, and adolescents in Queen Anne Seattle, Bellevue, and throughout Washington State. Led by April Casselman, PMHNP-BC, providing psychiatric medication management, psychotherapy, SPRAVATO® treatment, and more.",
  keywords: [
    "psychiatrist Queen Anne",
    "psychiatrist Bellevue",
    "psychiatrist Seattle",
    "mental health Queen Anne",
    "mental health Bellevue",
    "psychiatric services Seattle",
    "April Casselman",
    "PMHNP-BC",
    "psychiatric medication management",
    "psychotherapy Seattle",
    "SPRAVATO treatment",
    "Washington State psychiatry",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.findyourlightpsychiatry.org",
    siteName: "Find Your Light Psychiatry PLLC",
    title: "Find Your Light Psychiatry PLLC - April Casselman, PMHNP-BC",
    description: "Compassionate, evidence-based mental health care for adults, children, and adolescents in Queen Anne Seattle, Bellevue, and throughout Washington State.",
    images: [
      {
        url: "/images/April-Casselman_Portrait.jpeg",
        width: 1200,
        height: 1600,
        alt: "April Casselman, PMHNP-BC, Psychiatric Mental Health Nurse Practitioner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Light Psychiatry PLLC - April Casselman, PMHNP-BC",
    description: "Compassionate, evidence-based mental health care for adults, children, and adolescents in Queen Anne Seattle, Bellevue, and throughout Washington State.",
    images: ["/images/April-Casselman_Portrait.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${greatVibes.variable} ${playfairDisplay.variable} ${raleway.variable} antialiased min-h-screen flex flex-col`}
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
