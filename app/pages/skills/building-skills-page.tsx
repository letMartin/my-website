import { SkillHeading } from "./components";
import { Link, HeadingOne } from "~/shared/components";

import reactIcon from "~/assets/icons/react.svg";
import remixIcon from "~/assets/icons/remix.svg";

export function BuildingSkillsPage() {
  return (
    <article className="py-8">
      <header className="mb-4">
        <HeadingOne>My Development Skills and Experience</HeadingOne>
      </header>
      <section>
        <SkillHeading icon={reactIcon} label="React" />
        <p>
          I began my software development career in 2019, diving straight into
          React.js. During my first year, I worked exclusively with class-based
          components. However, I eventually transitioned entirely to functional
          components. The idea of small, reusable components resonated with me,
          and functional components, along with hooks, made the composition
          approach much more effective.
        </p>
        <p>
          Over the years, I&apos;ve experimented with various approaches for
          handling global state in React. Currently, I prefer using React Query
          for server state caching. I&apos;ve been working with React Query for
          the past three years and find it to be an excellent tool for
          abstracting away server state management synchronization. For
          non-server state, I utilize React Context and Redux, depending on the
          specific needs of the project.
        </p>
        <p>
          In my professional work, I create and maintain components according to
          company design systems, and I also use ready-made components from
          libraries like Semantic UI and Material UI. I am skilled in
          documenting reusable components using Storybook. For my private
          projects built with Remix, I often create components tailored for
          better accessibility and SEO. These components are designed to be
          lightweight with minimal styling to enhance performance. When given a
          choice, I prefer using Tailwind CSS for building custom components
          without adding additional CSS files.
        </p>
      </section>
      <section>
        <SkillHeading icon={remixIcon} label="Remix" />
        <p>
          I&apos;ve been working on Remix projects since the end of 2023.
          Server-side rendering (SSR) has its advantages and disadvantages,
          which is a broad topic. For me, the most important advantage of Remix
          and SSR is the ability to create SEO-friendly sites. Remix, with its
          optimizations that make the first render very fast, is one of the most
          promising tools in this area, in my opinion. I see great potential in
          using Remix to help businesses reach their potential clients.
        </p>
        <p>
          Since Remix uses React for rendering the UI, it is a very promising
          and easy-to-learn tool for developers who have experience with React.
          This was also the case for me.
        </p>
        <p>
          You can read more about the techniques I use to make websites more
          user- and search-engine friendly{" "}
          <Link
            target="_self"
            href="/additional"
            title="Read more about my SEO skills"
          >
            here
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
