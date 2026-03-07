import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Aderibigbe Al-ameen — Brand Identity Designer",
  description:
    "I help ambitious brands look refined, intentional, and positioned for long-term growth.",

  openGraph: {
    title: "Aderibigbe Al-ameen — Brand Identity Designer",
    description:
      "I help ambitious brands look refined, intentional, and positioned for long-term growth.",
    url: "https://alameenaderibigbe.vercel.app/",
    siteName: "Aderibigbe Al-ameen",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aderibigbe Al-ameen — Brand Identity Designer",
    description:
      "I help ambitious brands look refined, intentional, and positioned for long-term growth.",
    images: ["/og-image.jpg"],
  },
}
// export const metadata: Metadata = {
//   title: "Aderibigbe Al-ameen",
//   description: "Brand Identity Design Portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
