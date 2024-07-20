import { HeadingOne, HeadingTwo, HeadingThree } from "~/shared/components";
import { SkillHeading } from "./components";

import seoIcon from "~/assets/icons/seo.svg";
import performanceIcon from "~/assets/icons/performance.svg";

export function AdditionalSkillsPage() {
  return (
    <article className="py-8">
      <header className="mb-4">
        <HeadingOne>My Experience with Performance and SEO</HeadingOne>
      </header>
      <section>
        <SkillHeading icon={performanceIcon} label="Performance" />
        <p>
          It is crucial, especially for server-side rendered (SSR) applications,
          to be very fast and have good scores in Web Vitals to achieve high
          rankings on Google. To ensure this, I have worked extensively with
          both Web Vitals and Google Lighthouse, optimizing various performance
          metrics such as loading speed, interactivity, and visual stability.
          Additionally, I have focused on core accessibility (a11y) practices to
          make applications more inclusive and usable for all users. This
          includes adhering to WCAG guidelines, using semantic HTML, and
          ensuring compatibility with screen readers and keyboard navigation.
        </p>
      </section>
      <section>
        <SkillHeading icon={seoIcon} label="SEO" />
        <p>
          I have extensive experience in SEO, starting with WordPress and now
          with Remix. My strategies have successfully brought two websites in
          the automotive industry to the top 3 on Google for multiple keywords.
        </p>
        <HeadingThree>Onsite Optimalization</HeadingThree>
        <ol className="list-decimal pl-6 mb-6">
          <li>
            Descriptive titles and descriptions containing the most important
            keywords.
          </li>
          <li>
            Canonical links for each page to prevent duplicate content issues.
          </li>
          <li>
            Schema markup to help search engines understand the content of the
            site.
          </li>
          <li>
            301 redirection from www to non-www site addresses (or vice versa)
            for consistent URL structure.
          </li>
          <li>
            Properly formatted robots.txt file to control search engine
            crawlers.
          </li>
          <li>
            XML Sitemap to help search engines discover all site addresses.
          </li>
          <li>
            Only one <code>h1</code> per page, containing key word(s).
          </li>
          <li>Rich site content with evenly distributed keywords.</li>
          <li>
            Proper hierarchy of headers (<code>h1</code>, <code>h2</code>,{" "}
            <code>h3</code>, etc.).
          </li>
          <li>
            Ordered structures (such as ordered and unordered lists, tables) and
            semantic HTML to help search engines understand the page structure.
          </li>
          <li>Use of images with alt tags for better accessibility and SEO.</li>
          <li>
            Utilization of long-tail keywords to target specific search queries.
          </li>
          <li>
            Continuous monitoring with analytical tools like Google Search
            Console and Google Analytics.
          </li>
          <li>
            Internal linking to improve navigation and distribute page
            authority.
          </li>
          <li>
            Readable link text with descriptive titles for better user
            experience and SEO.
          </li>
          <li>And many more...</li>
        </ol>
        <HeadingThree>Offsite Optimalization</HeadingThree>
        <ol className="list-decimal pl-6 mb-6">
          <li>Building quality backlinks to my website.</li>
          <li>
            Leveraging social media to increase visibility and drive traffic.
          </li>
          <li>
            Participating in industry forums and communities to establish
            authority and drive links.
          </li>
        </ol>
      </section>
      <section>
        <HeadingTwo>Conclusion</HeadingTwo>
        <p>
          By focusing on both performance and SEO, I have successfully optimized
          web applications to achieve high rankings. This comprehensive approach
          ensures that websites are fast, accessible, and well-ranked in search
          engines.
        </p>
      </section>
    </article>
  );
}
