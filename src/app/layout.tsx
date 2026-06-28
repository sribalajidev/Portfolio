import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.scss";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Sri Balaji — Building Modern Web Experiences",

  description:
    "Sri Balaji is a creative developer crafting modern web experiences using React, JavaScript, and UI engineering. Specializing in sleek design, smooth interactions, and agency-grade digital experiences.",

  keywords: [
    "Sri Balaji",
    "Sri",
    "Sri Balaji Dev",
    "Creative Developer",
    "Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "UI Engineer",
    "Web Developer",
    "Portfolio",
    "modern web experiences",
  ],

  authors: [
    {
      name: "Sri Balaji",
    },
  ],

  creator: "Sri Balaji",

  metadataBase: new URL("https://sribalajidev.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Sri Balaji — Building Modern Web Experiences",

    description:
      "Creative developer crafting modern, interactive, and agency-grade web experiences.",

    url: "https://sribalajidev.com",

    siteName: "Sri Balaji",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sri Balaji Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Sri Balaji — Building Modern Web Experiences",

    description:
      "Creative developer crafting modern, interactive, and agency-grade web experiences.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children, // extracted from the incoming props object
}: Readonly<{
  children: React.ReactNode; // children must be something React can render(declaring the type)
}>) {
  return (
    <html lang="en" className={manrope.className}>  
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
