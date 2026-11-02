import type { Metadata, Viewport } from 'next';
import './globals.css';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const siteUrl = 'https://alameenaderibigbe.site';
const siteTitle = 'Al-ameen Aderibigbe — Brand Identity & Product Designer';
const siteDescription =
  'Portfolio of Al-ameen Aderibigbe, a Brand Identity & Product Designer helping businesses turn complex ideas into clear identities and useful digital products.';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f4' },
    { media: '(prefers-color-scheme: dark)', color: '#0f100f' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s — Al-ameen Aderibigbe',
  },
  description: siteDescription,
  applicationName: 'Al-ameen Aderibigbe Portfolio',
  authors: [{ name: 'Al-ameen Aderibigbe', url: siteUrl }],
  creator: 'Al-ameen Aderibigbe',
  publisher: 'Al-ameen Aderibigbe',
  keywords: [
    'Al-ameen Aderibigbe',
    'Brand Identity Designer',
    'Product Designer',
    'UI/UX Designer',
    'Web Designer',
    'Design Systems',
    'Nigeria Designer',
    'Lagos Product Designer',
    'Portfolio',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Al-ameen Aderibigbe',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/Open-graph-image.jpg',
        secureUrl: `${siteUrl}/Open-graph-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Al-ameen Aderibigbe — Brand Identity & Product Designer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@harlharmeen_',
    images: [
      {
        url: `${siteUrl}/Open-graph-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Al-ameen Aderibigbe — Brand Identity & Product Designer',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
