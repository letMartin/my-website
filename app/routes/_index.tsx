import type { MetaFunction } from "@remix-run/node";
import { AboutMePage } from "~/pages/about-me/about-me-page";
import { externalLinks } from "~/shared/consts/url";
import { getCanonicalLink } from "~/shared/utils/get-canonical-link";

export const meta: MetaFunction = () => {
  const canonicalLink = getCanonicalLink("");
  const imageUrl = `${canonicalLink.href}/photo.jpg`;

  return [
    { title: "Martin Bibyakov - Front End Developer in Poznań, Poland" },
    {
      name: "description",
      content:
        "Hi, I'm Martin, a Front End Developer based in Poznań, Poland. Specializing in JavaScript, TypeScript, React, and modern web technologies.",
    },
    canonicalLink,
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Main page",
                item: canonicalLink.href,
              },
            ],
          },
          {
            "@type": "ProfilePage",
            dateCreated: "2024-07-19T12:34:00Z",
            dateModified: "2024-07-19T14:53:00Z",
            mainEntity: {
              "@type": "Person",
              name: "Martin Bibyakov",
              description:
                "Front End Developer in Poznań, Poland specializing in JavaScript, TypeScript, and React.",
              image: imageUrl,
              sameAs: [
                externalLinks.github,
                externalLinks.medium,
                externalLinks.linkedIn,
                externalLinks.stackOverflow,
              ],
            },
          },
        ],
      },
    },
  ];
};

export default function Index() {
  return <AboutMePage />;
}
