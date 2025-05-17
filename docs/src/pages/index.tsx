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
import SponsorsPage from "../components/SponsorsPage";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const headerImage = useBaseUrl("img/porto_ship_1.png");

  return (
    <header
      className={clsx("hero", styles.heroBanner)}
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundPosition: "80% center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle" style={{ marginTop: '-1rem' }}>For Human & AI Collaboration!</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button", styles.bigOrangeButton)}
            to="/docs/Intro"
          >
            Get Started
          </Link>
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
      description="Porto SAP: Modern Software Architectural Pattern"
    >
      <HomepageHeader />
      <main>
        <WelcomePage />
        <HomepageFeatures />
        <VideoPage />
        <SponsorsPage />
      </main>
    </Layout>
  );
}
