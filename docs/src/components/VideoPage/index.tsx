import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function VideoSection(): JSX.Element {
  const videoSrc = require("@site/static/vid/cargo_anim_1.mp4").default;

  return (
    <div className={styles.videoBackground}>
      <video autoPlay loop muted className={styles.video}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <h1>Start Building Scalable, Maintainable, and Future-Proof Apps!</h1>
      </div>
    </div>
  );
}
