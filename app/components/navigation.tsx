import { Link, IconWrapper } from "~/shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faMedium,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const links = [
  {
    href: "/",
    title: "Go to Home Page",
    icon: faHome,
    openInNewTab: false,
  },
  {
    href: "https://www.linkedin.com/in/martin-bibyakov-0a8363260/",
    title: "Go to my LinkedIn profile",
    icon: faLinkedinIn,
  },
  {
    href: "https://medium.com/@martinbibyakov",
    title: "Go to my Medium profile",
    icon: faMedium,
  },
  {
    href: "https://stackoverflow.com/users/26421804/martin",
    title: "Go to my StackOverflow profile",
    icon: faStackOverflow,
  },
  {
    href: "https://github.com/letMartin",
    title: "Go to my GitHub profile",
    icon: faGithub,
  },
];

export function Navigation() {
  return (
    <nav className="mb-28 text-center">
      {links.map(({ href, title, icon, openInNewTab }) => (
        <Link href={href} title={title} openInNewTab={openInNewTab} key={href}>
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
