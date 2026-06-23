---
sidebar_position: 1
---

# Porto for AI

> **Status:** Private testing. The full specification is being written and published incrementally. This page is the vision; the architecture, diagrams, and reference implementations are on the way.

## Why a separate edition

[Porto for Humans](/docs/Intro) is built around code a person reads, reviews, and controls. That constraint shapes everything: layered structure, descriptive naming, single-responsibility files, deep folder hierarchies that map to how humans think.

AI agents do not have that constraint. They have different ergonomics, different costs, and different failure modes than human developers:

- They read whole trees at once, not file by file.
- Every file traversal and every clarification round costs tokens.
- Deep nesting and indirection that aid human comprehension slow an agent down.
- They do not need code simplified for human reading — they need it dense, explicit, and unambiguous.

**Porto for AI** is a separate architecture designed from that reality. It is not version 2 of Porto for Humans, and it does not replace it. The two editions coexist, each optimized for who actually writes and maintains the code.

## Principles (high level)

- **Optimized for agents, not human reading.** We name things as they are. We don't trade precision for friendliness.
- **Fewer files, fewer hops.** Flatter where flat helps; grouped where grouping scales — but never deep for the sake of "organization."
- **Token-efficient by design.** Less surface area to load, fewer round trips to understand, fewer debugging cycles.
- **Agent-readable, not just human-readable.** The architecture ships with machine-consumable definitions (skills / structured context) so an agent understands the codebase without being fed prose documentation.
- **Built for autopilot.** The target is autonomous feature development, debugging, and maintenance with minimal human steering.

## When to use which edition

| Use **Porto for Humans** | Use **Porto for AI** |
| --- | --- |
| High-trust, high-stakes code | Full autopilot development |
| Banking, aerospace, security-critical systems | Fast-moving products and prototypes |
| You need a human in the loop on every line | You let agents own the implementation |
| Manual review is a hard requirement | Token cost and iteration speed dominate |

Both are valid. AI is the direction of travel, but human-written code is not going away where trust and control are non-negotiable.

## Early access

**Porto for AI is in private testing.** The detailed playbook — structure, conventions, agent skills, and how to make a codebase ultra-efficient for AI agents (less token burn, fewer debugging rounds, faster autonomous delivery) — is being documented now and released piece by piece.

If you want **exclusive early access** before the public release, or hands-on help making your codebase dramatically more efficient for AI agents, reach out directly.

👉 **Contact me at [zalt.me](https://zalt.me)** to get early access and work with me one-on-one to boost your team's AI development efficiency.
