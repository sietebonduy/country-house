import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://country-house-tlt.ru";
const title = "Country House | Апартаменты в Тольятти";
const description =
  "Country House - три авторских апартамента в Тольятти с домашним уютом, джакузи, каминами, онлайн-бронированием и отчетными документами.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Country House",
  },
  description,
  applicationName: "Country House",
  authors: [{ name: "Country House" }],
  creator: "Country House",
  publisher: "Country House",
  keywords: [
    "Country House",
    "апартаменты Тольятти",
    "посуточная аренда Тольятти",
    "квартиры посуточно Тольятти",
    "апартаменты с джакузи",
    "апартаменты с камином",
    "отчетные документы",
  ],
  alternates: {
    canonical: "/",
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
    url: "/",
    siteName: "Country House",
    title,
    description,
    images: [
      {
        url: "/Спальня1_35.jpg",
        width: 1200,
        height: 800,
        alt: "Апартаменты Country House в Тольятти",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/Спальня1_35.jpg"],
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
