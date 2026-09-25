import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";

const { title, description } = site;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | Country House",
  },
  description,
  applicationName: "Country House",
  authors: [{ name: "Country House" }],
  creator: "Country House",
  publisher: "Country House",
  alternates: {
    canonical: site.url,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.YANDEX_SITE_VERIFICATION || undefined,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/country_house_logo_transparent.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    siteName: "Country House",
    title,
    description,
    images: [
      {
        url: site.image,
        width: 1402,
        height: 1122,
        alt: "Апартаменты Country House в Тольятти",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
