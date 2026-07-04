---
sidebar_position: 1
sidebar_label: Introduction
---

# Porto AI

**An edition of the Porto architecture designed for codebases that AI agents write, maintain, and evolve, not humans.** Same core idea as Porto, self-contained reusable units, but the structure is shaped for how agents read and edit code: fewer files, less indirection, token-efficient layouts, and machine-readable definitions instead of prose.

:::tip Which edition is this?
**Porto AI** (this edition) is for teams who let AI agents own the codebase. If you'd rather write and review the code by hand, see **[Porto SAP](/docs/Intro)**.
:::

> **Status:** Private testing. The architecture is complete and in use; the full specification, diagrams, and reference implementations are being published incrementally. This page is the map. See **[Early Access](/ai/Early%20Access)** to get in before the public release.

> The terms "MUST," "MUST NOT," "REQUIRED," "SHALL," "SHALL NOT," "SHOULD," "SHOULD NOT," "RECOMMENDED," "MAY," and "OPTIONAL" in this document are defined as per [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).

## What it is

Porto AI keeps Porto's foundation, a codebase split into **self-contained, reusable units** with clear boundaries, and reshapes the layout around the reader that now writes most of the code: the agent.

In practice that means:

- **A flat, predictable structure.** Units live where an agent expects them, not buried in deep hierarchies built for human browsing. Fewer folders to traverse, fewer hops to reach the code an edit touches.
- **Everything an edit needs in reach.** Logic, types, and configuration for a unit sit together instead of being spread thin across many files "so each file stays small." One unit, one place.
- **Machine-readable definitions over prose docs.** The architecture ships with structured context and agent skills, the rules of the codebase in a form an agent consumes directly, so it understands conventions without being fed paragraphs of documentation.
- **Density over decoration.** Names say what a thing is. Structure is explicit and unambiguous. Nothing is softened for human reading at the cost of a token or a round trip.

**Agent-agnostic.** Porto AI shapes the codebase, not the tool you drive it with. It works with the coding agents you already use, Claude Code, Codex, GitHub Copilot, and Cursor, because the optimization lives in the repository, not the assistant.

<br/>
<br/>
![Porto Container layer diagram](/img/porto_container_1.png)
<br/>
<br/>

## Why it exists

You cannot optimize one codebase for two different readers. Code that is easy for a **human** to read is shaped by human constraints, descriptive ceremony, deep hierarchies, indirection that keeps any one file small. Code that is efficient for an **agent** is shaped by the opposite, fewer files, less traversal, everything in reach. Optimize for one and you pay for it with the other.

Agents also fail differently than humans. They read whole trees at once, not file by file. Every traversal and every clarification round costs tokens. Deep nesting that aids human comprehension slows an agent down.

Porto SAP is built for the first reader. **Porto AI is built for the second**, from that reality, not adapted to it. It is not version 2 of Porto SAP, and it does not replace it. The two coexist, each optimized for who actually writes and maintains the code.

> For the belief behind this, why the author has changed and why we commit to the agent, see the **[Manifesto](/ai/Manifesto)**.

## Principles

- **Optimized for agents, not human reading.** Name things as they are; don't trade precision for friendliness.
- **Fewer files, fewer hops.** Flat where flat helps, grouped where grouping scales, never deep for the sake of "organization."
- **Token-efficient by design.** Less surface to load, fewer round trips to understand, fewer debugging cycles.
- **Agent-readable, not just human-readable.** Ship machine-consumable definitions (skills / structured context), not prose for a human to interpret.
- **Built for autopilot.** The target is autonomous feature work, debugging, and maintenance with minimal human steering.

## When to use which edition

Both editions are valid. AI is the direction of travel, but human-written code is not going away where trust and control are non-negotiable.

| Use **[Porto SAP](/docs/Intro)** | Use **Porto AI** |
| --- | --- |
| High-trust, high-stakes code | Full autopilot development |
| Banking, aerospace, security-critical systems | Fast-moving products and prototypes |
| A human in the loop on every line | Agents own the implementation |
| Manual review is a hard requirement | Token cost and iteration speed dominate |

## Early access

Porto AI is in **private testing**. The detailed playbook, structure, conventions, agent skills, and how to make a codebase ultra-efficient for AI agents, is being released piece by piece.

Want in before the public release, or hands-on help making your codebase dramatically more efficient for agents?

<a href="https://zalt.me/services" target="_blank" rel="noopener noreferrer" className="button button--primary" style={{fontSize: '1.1rem', padding: '0.85rem 2rem', marginTop: '0.5rem', marginBottom: '0.5rem'}}>Book a session →</a>

Or see **[Early Access](/ai/Early%20Access)** for what's included.
