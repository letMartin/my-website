import { useLoaderData } from "@remix-run/react";
import { MetaFunction, LoaderFunction } from "@remix-run/node";
import { domainWithProtocol } from "~/shared/consts/url";
import { getCanonicalLink } from "~/shared/utils/get-canonical-link";
import {
  TestingSkillsPage,
  BuildingSkillsPage,
  AdditionalSkillsPage,
} from "~/pages/skills";

function getSkillType(path?: string) {
  if (!path) {
    return null;
  }

  return {
    building: "building",
    testing: "testing",
    additional: "improving",
  }[path];
}

type LoaderDataType = {
  skillType: ReturnType<typeof getSkillType>;
};

export const loader: LoaderFunction = async ({
  params,
}): Promise<LoaderDataType> => {
  const skillType = getSkillType(params.path as string);

  if (!skillType) {
    throw new Response("Not Found", { status: 404 });
  }

  return { skillType };
};

export const meta: MetaFunction = ({ params }) => {
  const canonicalLink = getCanonicalLink(("/" + params.path) as string);
  const skillType = getSkillType(params.path);

  if (!skillType) {
    return [
      { title: "Oops! Not found" },
      {
        name: "description",
        content: "Not found",
      },
    ];
  }

  const title = `My experience and tools for ${skillType} web applications`;
  const description = `Get to know more about my experience and the tools I use for ${skillType} web applications.`;

  return [
    { title },
    {
      name: "description",
      content: description,
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
                item: domainWithProtocol,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: `More about my ${skillType} skills`,
                item: canonicalLink.href,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Article",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalLink.href,
            },
            headline: title,
            description: description,
            author: {
              url: domainWithProtocol,
              "@type": "Person",
              name: "Martin Bibyakov",
            },
            publisher: {
              "@type": "Person",
              name: "Martin Bibyakov",
            },
            datePublished: "2024-07-20T14:03:00Z",
            dateModified: "2024-07-20T14:03:00Z",
          },
        ],
      },
    },
  ];
};

export default function MySkillsDescription() {
  const { skillType } = useLoaderData<LoaderDataType>();

  if (!skillType) {
    return null;
  }

  const component = {
    building: <BuildingSkillsPage />,
    testing: <TestingSkillsPage />,
    improving: <AdditionalSkillsPage />,
  }[skillType];

  return component;
}
