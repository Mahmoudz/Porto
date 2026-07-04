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
  const headerImage = useBaseUrl("img/porto_ship_1.png");

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={styles.ocean} aria-hidden="true">
        <div className={clsx(styles.wave, styles.waveBack)} />
        <div className={clsx(styles.wave, styles.waveMid)} />
        <div className={clsx(styles.wave, styles.waveMid2)} />
        <div className={clsx(styles.wave, styles.waveFront)} />
      </div>
      <div className={styles.oceanScrim} aria-hidden="true" />
      <div className={styles.oceanBottom} aria-hidden="true" />
      <div className={clsx("container", styles.heroInner)}>
        <div className={styles.heroText}>
          <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
            Porto AI
          </Heading>
          <p className={clsx("hero__subtitle", styles.heroTagline)}>
            A Software Architectural Pattern
          </p>
          <p className={styles.heroSub}>
            Porto organizes large applications into independent business
            components with clear boundaries and minimal coupling, letting you
            start as a modular monolith and evolve into microservices only when
            your architecture demands it.
          </p>
          <p className={styles.heroEditions}>
            Choose <strong>Porto AI</strong> for AI-first development,
            <br />
            or <strong>Porto SAP</strong> for human-first development.
          </p>
          <div className={styles.buttons}>
            <Link className={clsx("button", styles.heroButton)} to="/ai/Intro">
              Porto AI · for Agents
            </Link>
            <Link
              className={clsx("button", styles.heroButton, styles.heroButtonSecondary)}
              to="/docs/Intro"
            >
              Porto SAP · for Humans
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
        <WelcomePage />
        <HomepageFeatures />
        <EditionsPage />
        <VideoPage />
        <SponsorsPage />
      </main>
    </Layout>
  );
}
