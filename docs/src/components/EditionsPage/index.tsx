import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Edition = {
  badge: string;
  title: string;
  subtitle: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
};

const EDITIONS: Edition[] = [
  {
    badge: 'Stable · Available now',
    title: 'Porto for Humans',
    subtitle: 'Architecture you read, review, and control.',
    points: [
      'Human-readable structure and naming',
      'Full manual control over every line',
      'Built for high-trust code — banking, aerospace, security-critical',
      'AI assists you, but you make the call',
    ],
    ctaLabel: 'Read the docs',
    ctaHref: '/docs/Intro',
  },
  {
    badge: 'Private testing · Early access',
    title: 'Porto for AI',
    subtitle: 'Architecture built for autonomous agents.',
    points: [
      'Optimized for AI agents, not human reading',
      'Fewer files, fewer tokens, fewer debugging rounds',
      'Designed for full autopilot development',
      'Ships as agent-readable skills, not just prose docs',
    ],
    ctaLabel: 'Explore the vision',
    ctaHref: '/ai/Intro',
  },
];

export default function EditionsPage() {
  return (
    <section className={styles.editions}>
      <div className="container">
        <h2 className={styles.heading}>Two editions, one philosophy</h2>
        <p className={styles.lede}>
          Choose your edition based on who writes the code.
        </p>
        <div className={styles.grid}>
          {EDITIONS.map((edition) => (
            <article key={edition.title} className={styles.card}>
              <span className={styles.badge}>{edition.badge}</span>
              <h3 className={styles.cardTitle}>{edition.title}</h3>
              <p className={styles.cardSubtitle}>{edition.subtitle}</p>
              <ul className={styles.points}>
                {edition.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className={styles.cardCta} to={edition.ctaHref}>
                {edition.ctaLabel} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
