import { HeadingTwo } from "~/shared/components";

type SkillHeadingProps = {
  icon: string;
  label: string;
};

export function SkillHeading({ icon, label }: SkillHeadingProps) {
  return (
    <div className="flex items-center gap-2">
      <img src={icon} alt={label} className="w-7 h-7" />
      <HeadingTwo>{label}</HeadingTwo>
    </div>
  );
}
