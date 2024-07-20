import { Divider } from "~/shared/components";
import { ProfileImage, AboutMe, Header, TechStack } from "./components";

export function AboutMePage() {
  return (
    <article className="py-4 mt-28">
      <ProfileImage />
      <Header />
      <Divider />
      <AboutMe />
      <Divider />
      <TechStack />
    </article>
  );
}
