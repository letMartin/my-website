import { HeadingTwo, IconWrapper } from "~/shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function AboutMe() {
  const experienceInYears = new Date().getFullYear() - 2019;

  return (
    <section className="py-6">
      <HeadingTwo>
        <IconWrapper bgColor="bg-sky-600" className="mr-2">
          <FontAwesomeIcon size="sm" icon={faUser} className="text-white" />
        </IconWrapper>
        About Me
      </HeadingTwo>
      <p>
        Hi, I&apos;m Martin Bibyakov, a front-end developer with over{" "}
        {experienceInYears} years of experience in building web applications. I
        specialize in React.js and its libraries, focusing on delivering
        reusable, readable, and well-tested code. My expertise extends to
        writing unit, integration, and end-to-end tests. Over the past year, I
        have been concentrating on full-stack applications built with Remix,
        with a strong emphasis on SEO.
      </p>
    </section>
  );
}
