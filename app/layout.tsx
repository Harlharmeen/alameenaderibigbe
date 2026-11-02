import type { Metadata } from 'next';
import './globals.css';
import Nav from '../components/nav';
import Footer from '../components/footer';

const siteUrl = 'https://alameenaderibigbe.site';
const siteTitle = 'Al-ameen Aderibigbe — Brand Identity & Product Designer';
const siteDescription =
  'Portfolio of Al-ameen Aderibigbe, a Brand Identity & Product Designer.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
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
        alt: siteTitle,
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
        alt: siteTitle,
      },
    ],
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
