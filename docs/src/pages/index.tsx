import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import VideoPage from "../components/VideoPage";
import WelcomePage from "../components/WelcomePage";
import EditionsPage from "../components/EditionsPage";
import SponsorsPage from "../components/SponsorsPage";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const headerImage = useBaseUrl("img/porto_ship_1.png");

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={clsx("container", styles.heroInner)}>
        <div className={styles.heroText}>
          <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
            {siteConfig.title}
          </Heading>
          <p className={clsx("hero__subtitle", styles.heroTagline)}>
            A Software Architectural Pattern
          </p>
          <p className={styles.heroSub}>
            Porto organizes large applications into clean, reusable building
            blocks, a modular monolith that scales into microservices as you
            grow, built for human engineers and AI agents to seamlessly
            maintain, extend, and evolve.
          </p>
          <div className={styles.buttons}>
            <Link className={clsx("button", styles.heroButton)} to="/docs/Intro">
              For Humans
            </Link>
            <Link className={clsx("button", styles.heroButton)} to="/ai/Intro">
              For AI
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img src={headerImage} alt="Porto container ship" />
        </div>
      </div>
    </header>
  );
}
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to the Future of Backend Engineering ${siteConfig.title}`}
      description="Porto SAP: Scalable Software Architectural Pattern"
    >
      <HomepageHeader />
      <main>
        <EditionsPage />
        <WelcomePage />
        <HomepageFeatures />
        <VideoPage />
        <SponsorsPage />
      </main>
    </Layout>
  );
}
