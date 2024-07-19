import { HeadingTwo, IconWrapper } from "~/shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function AboutMe() {
  return (
    <section className="py-6">
      <HeadingTwo>
        <IconWrapper bgColor="bg-sky-600" className="mr-2">
          <FontAwesomeIcon size="sm" icon={faUser} className="text-white" />
        </IconWrapper>
        About Me
      </HeadingTwo>
      <p>TODO</p>
    </section>
  );
}
