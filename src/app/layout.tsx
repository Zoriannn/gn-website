import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galactic Network",
  description: "Mission Cloud provides companies that rely on AWS with a comprehensive suite of managed cloud services, consulting, and software that simplify the adoption and management of their AWS workloads.",
  keywords: "AWS, Cloud, Managed Services, AWS Migration, AWS Modernization, Cloud Security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
