import { Link } from "~/shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faMedium,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const iconClasses = "text-sky-600 hover:text-sky-500";

function IconWrapper({ children }: { children: JSX.Element }) {
  return (
    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white">
      {children}
    </div>
  );
}

function Devider() {
  return <span className="mx-1" />;
}

export function Navigation() {
  return (
    <nav className="mb-28 text-center">
      <Link href="/" title="Go to Home Page" openInNewTab={false}>
        <IconWrapper>
          <FontAwesomeIcon size="lg" icon={faHome} className={iconClasses} />
        </IconWrapper>
      </Link>
      <Devider />
      <Link
        href="https://www.linkedin.com/in/martin-bibyakov-0a8363260/"
        title="Go to my LinkedIn profile"
      >
        <IconWrapper>
          <FontAwesomeIcon
            size="lg"
            icon={faLinkedinIn}
            className={iconClasses}
          />
        </IconWrapper>
      </Link>
      <Devider />
      <Link
        href="https://medium.com/@martinbibyakov"
        title="Go to my Medium profile"
      >
        <IconWrapper>
          <FontAwesomeIcon size="lg" icon={faMedium} className={iconClasses} />
        </IconWrapper>
      </Link>
      <Devider />
      <Link
        href="https://stackoverflow.com/users/26421804/martin"
        title="Go to my StackOverflow profile"
      >
        <IconWrapper>
          <FontAwesomeIcon
            size="lg"
            icon={faStackOverflow}
            className={iconClasses}
          />
        </IconWrapper>
      </Link>
      <Devider />
      <Link href="https://github.com/letMartin" title="Go to my GitHub profile">
        <IconWrapper>
          <FontAwesomeIcon size="lg" icon={faGithub} className={iconClasses} />
        </IconWrapper>
      </Link>
    </nav>
  );
}
