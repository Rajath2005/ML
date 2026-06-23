import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"]
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "BCSL606 ML Lab Programs | VTU 22 Scheme | Rajath",
  description: "A complete resource for 3rd Year, 6th Semester VTU Computer Science Engineering students. Access Python code, datasets, and outputs for the Machine Learning Lab (BCSL606).",
  verification: {
    google: "eWwpOvW5PQD9Ce9UgELCT6THC3sabhITjJsK21nMbH0"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
