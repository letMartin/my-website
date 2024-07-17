import type { MetaFunction } from "@remix-run/node";
import { AboutMePage } from "~/pages/about-me-page";

export const meta: MetaFunction = () => {
  return [
    { title: "Martin Bibyakov - JavaScript Developer" },
    {
      name: "description",
      content: "Hi, I'am Martin, JavaScript developer based in Poznań, Poland.",
    },
  ];
};

export default function Index() {
  return <AboutMePage />;
}
