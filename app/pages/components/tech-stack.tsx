import { HeadingTwo, IconWrapper } from "~/shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import {
  basics,
  building,
  testing,
  versionControl,
  buildTools,
  deployment,
  additional,
} from "./tech-stack-consts";
import { SkillsSet } from "./skills-set";

export function TechStack() {
  return (
    <section className="my-6">
      <HeadingTwo>
        <IconWrapper bgColor="bg-sky-600" className="mr-2">
          <FontAwesomeIcon size="sm" icon={faGear} className="text-white" />
        </IconWrapper>
        Tech Stack
      </HeadingTwo>

      <SkillsSet title="Basics" skills={basics} />
      <SkillsSet title="Building" skills={building} />
      <SkillsSet title="Testing" skills={testing} />
      <SkillsSet title="Version Control" skills={versionControl} />
      <SkillsSet title="Build Tools" skills={buildTools} />
      <SkillsSet title="Deployment and Infrastructure" skills={deployment} />
      <SkillsSet title="Additional Skills" skills={additional} />
    </section>
  );
}
