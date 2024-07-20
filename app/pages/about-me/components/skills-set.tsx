import { Link, HeadingThree } from "~/shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function SkillsWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex flex-wrap gap-5 rounded p-4 border shadow max-w-fit">
      {children}
    </ul>
  );
}

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-fit mt-6">{children}</div>;
}

type SkillSetProps = {
  title: string;
  morePath?: string;
  skills: { name: string; icon: string }[];
};

export function SkillsSet({ title, skills, morePath }: SkillSetProps) {
  return (
    <SectionWrapper>
      <HeadingThree>{title}</HeadingThree>
      <SkillsWrapper>
        {skills.map(({ name, icon }) => (
          <li key={name} className="flex flex-col items-center gap-1">
            <img src={icon} alt={`${name} logo`} className="w-16 h-16" />
            <span className="ml-1" />
            {name}
          </li>
        ))}
        {morePath && (
          <li className="flex items-center">
            <Link
              href={morePath}
              target="_self"
              title="Read more about my experience"
            >
              <>
                More
                <FontAwesomeIcon
                  size="sm"
                  className="ml-1"
                  icon={faArrowUpRightFromSquare}
                />
              </>
            </Link>
          </li>
        )}
      </SkillsWrapper>
    </SectionWrapper>
  );
}
