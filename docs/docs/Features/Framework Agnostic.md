---
sidebar_position: 6
---

# Framework-Agnostic by Design

**Porto** keeps your business logic afloat, independent of whatever framework or infrastructure it currently sits on. The framework can change under you; the code that makes your product actually work doesn't have to.

In **Porto** terms, your business logic lives in the Containers, which sit on top of the Ship Layer, which in turn runs on the underlying Framework, the ocean beneath it all. Containers depend on the Ship, never directly on the Framework, so upgrading or replacing the framework is a Ship-layer concern, not something that ripples through every Container in your codebase.

<img src="/img/porto_ship_1_labeled.png" alt="Porto layers: Containers on the Ship, running on the Framework as the sea" style={{width: '100%'}} />

This separation is what makes framework upgrades and replacements tractable instead of terrifying. See [Ship Layer](/docs/Layers/Ship%20Layer) for how the Ship centralizes base classes, shared interfaces, and framework-facing code, so your Containers never need to know which framework is underneath them.

Most teams only feel the cost of framework coupling once a major version bump or a framework migration is already overdue and everything downstream has to be touched. **Porto** pays that cost down continuously instead, by never letting business logic reach past the Ship layer in the first place.

With **Porto**, your application's real value, the business logic in your Containers, keeps floating no matter what's happening in the water underneath.
