import { HeadingTwo, IconWrapper } from "~/shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export function TechStack() {
  return (
    <section className="my-6">
      <HeadingTwo>
        <IconWrapper bgColor="bg-sky-600" className="mr-2">
          <FontAwesomeIcon size="sm" icon={faGear} className="text-white" />
        </IconWrapper>
        Tech Stack
      </HeadingTwo>
      <p>Todo</p>
      <ul>
        <li>Todo</li>
      </ul>
    </section>
  );
}
