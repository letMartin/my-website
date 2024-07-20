import { Link, IconWrapper } from "~/shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faMedium,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { externalLinks } from "~/shared/consts/url";

const links = [
  {
    href: "/",
    title: "Go to Home Page",
    icon: faHome,
    openInSameTab: true,
  },
  {
    href: externalLinks.linkedIn,
    title: "Go to my LinkedIn profile",
    icon: faLinkedinIn,
  },
  {
    href: externalLinks.medium,
    title: "Go to my Medium profile",
    icon: faMedium,
  },
  {
    href: externalLinks.stackOverflow,
    title: "Go to my StackOverflow profile",
    icon: faStackOverflow,
  },
  {
    href: externalLinks.github,
    title: "Go to my GitHub profile",
    icon: faGithub,
  },
];

export function Navigation() {
  return (
    <nav className="mb-8 text-center">
      {links.map(({ href, title, icon, openInSameTab }) => (
        <Link
          key={href}
          href={href}
          title={title}
          target={openInSameTab ? "_self" : "_blank"}
        >
          <IconWrapper className="mx-1">
            <FontAwesomeIcon
              size="lg"
              icon={icon}
              className="text-sky-600 hover:text-sky-500"
            />
          </IconWrapper>
        </Link>
      ))}
    </nav>
  );
}
