import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Clear Layers",
    Svg: require("@site/static/img/diagrams/porto_layers.svg").default,
    description: (
      <>
        <>
          App code is divided into <strong>Containers</strong> and{" "}
          <strong>Ship</strong> layers. Containers encapsulate the business
          logic, while Ship handles all infrastructure-related code, enabling
          easy scaling on demand by transitioning from monolithic to
          microservices.
        </>
      </>
    ),
  },
  {
    title: "Clean Components",
    Svg: require("@site/static/img/diagrams/porto_container_interactions.svg")
      .default,
    description: (
      <>
        <>
          Business logic in <strong>Containers</strong> is organized into{" "}
          <strong>Actions</strong> and <strong>Tasks</strong>. Actions initiate
          sequences of Tasks, each with one public function <code>run()</code>{" "}
          for a single responsibility, thereby enhancing maintainability and
          enabling code reusability.
        </>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
