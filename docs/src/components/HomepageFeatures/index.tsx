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
        Porto divides app code into the Containers and Ship layers, enhancing
        scalability by ensuring separation of business logic and infrastructure
        code.
      </>
    ),
  },
  {
    title: "Clean Components",
    Svg: require("@site/static/img/diagrams/porto_container_interactions.svg")
      .default,
    description: (
      <>
        Porto defines a well-structured approach to component placement within
        the Container layer, each with a single responsibility, simplifying
        maintenance.
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
