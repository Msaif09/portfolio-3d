import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mohammad Saif - Android Developer Portfolio",
  description: "Mohammad Saif, Full Stack Mobile Developer specializing in Android. Building the future of mobile apps with Kotlin, Java, and Android Studio.",
  keywords: ["Android Developer", "Mobile App Developer", "Kotlin", "Java", "Flutter", "Full Stack Developer"],
  authors: [{ name: "Mohammad Saif" }],
  openGraph: {
    title: "Mohammad Saif - Android Developer",
    description: "Full Stack Mobile Developer | Building the Future of Android",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
         <PageLoader />
         <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
