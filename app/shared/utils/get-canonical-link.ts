import { domainWithProtocol } from "~/shared/consts/url";

export function getCanonicalLink(path: string) {
  return {
    tagName: "link",
    rel: "canonical",
    href: domainWithProtocol + path,
  };
}
