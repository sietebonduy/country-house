const configuredUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://country-house-tlt.ru",
);

export const site = {
  url: `${configuredUrl.origin}/`,
  name: "Country House",
  title: "Апартаменты посуточно в Тольятти — Country House",
  description:
    "Апартаменты Country House в Тольятти посуточно: джакузи на двоих, камин и оборудованная кухня. Онлайн-бронирование, бесконтактное заселение и отчётные документы.",
  telephone: "+79276116560",
  displayTelephone: "+7 927 611-65-60",
  city: "Тольятти",
  streetAddress: "Приморский бульвар, 57",
  region: "Самарская область",
  country: "RU",
  image: "/photos/bedroom-evening.webp",
  photos: [
    "/photos/bedroom-evening.webp",
    "/photos/fireplace.webp",
    "/photos/jacuzzi-foam.webp",
    "/photos/bedroom-green.webp",
    "/photos/bedroom.webp",
    "/photos/bathroom-detail.webp",
  ],
};

export function absoluteUrl(path: string) {
  return new URL(path, site.url).href;
}

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": absoluteUrl("#lodging"),
      name: site.name,
      url: site.url,
      description: site.description,
      telephone: site.telephone,
      logo: absoluteUrl("/country_house_logo_transparent.png"),
      image: site.photos.map(absoluteUrl),
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        streetAddress: site.streetAddress,
        addressRegion: site.region,
        addressCountry: site.country,
      },
      checkinTime: "14:00:00",
      checkoutTime: "12:00:00",
      petsAllowed: false,
      smokingAllowed: false,
      amenityFeature: ["Джакузи на двоих", "Камин", "Оборудованная кухня"].map(
        (name) => ({ "@type": "LocationFeatureSpecification", name, value: true }),
      ),
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("#website"),
      url: site.url,
      name: site.name,
      inLanguage: "ru-RU",
      publisher: { "@id": absoluteUrl("#lodging") },
    },
    {
      "@type": "WebPage",
      "@id": absoluteUrl("#webpage"),
      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: "ru-RU",
      isPartOf: { "@id": absoluteUrl("#website") },
      about: { "@id": absoluteUrl("#lodging") },
      mainEntity: { "@id": absoluteUrl("#lodging") },
      primaryImageOfPage: {
        "@type": "ImageObject",
        contentUrl: absoluteUrl(site.image),
        width: 1402,
        height: 1122,
      },
    },
  ],
};
