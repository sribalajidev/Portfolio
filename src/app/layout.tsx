import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.scss";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Sri Balaji | Frontend Engineer",

  description:
    "Frontend Engineer specializing in React, Next.js, TypeScript, and modern web experiences. Building performant, scalable, and user-focused digital products.",

  keywords: [
    "Sri Balaji",
    "Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "UI Engineer",
    "Web Developer",
    "Portfolio",
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
    title: "Sri Balaji | Frontend Engineer",

    description:
      "Building modern, performant, and user-focused web experiences using React, Next.js, TypeScript, and modern frontend technologies.",

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

    title: "Sri Balaji | Frontend Engineer",

    description:
      "Building modern, performant, and user-focused web experiences using React, Next.js, TypeScript, and modern frontend technologies.",

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
