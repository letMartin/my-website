import { Divider } from "~/shared/components";
import { ProfileImage, AboutMe, Header, TechStack } from "./components";

export function AboutMePage() {
  return (
    <div className="p-4">
      <ProfileImage />
      <Header />
      <Divider />
      <AboutMe />
      <Divider />
      <TechStack />
    </div>
  );
}
