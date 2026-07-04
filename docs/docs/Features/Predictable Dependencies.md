---
sidebar_position: 4
---

# Predictable Dependency Direction

**Porto** removes the guesswork of "what depends on what" by giving every dependency a defined, one-way direction. No circular references, no tangled imports, no archaeology required to change a single Container safely.

Containers can depend on other Containers, similar to how a layer depends on other layers in a layered architecture. Within a Section, Containers may depend on each other directly. Between Sections, **Porto** recommends event-driven communication instead of direct calls, which keeps Sections decoupled and is exactly what makes [extracting a Section into its own Microservice](/docs/Features/Monolithic%20to%20MicroServices) a low-effort move later. See [Containers Dependencies](/docs/Basics/Containers%20Dependencies) for the full rules on Container and Section communication.

This isn't a convention you have to remember to follow, it's structural. Because dependency direction is defined by the architecture rather than left to individual developers' judgment, the same rules hold whether your team is 2 people or 20, and whether the codebase is 6 months old or 6 years old.

The payoff shows up the moment you need to change something. Want to know what breaks if you modify a Container? You only need to check what depends on it, in one direction, not trace a web of mutual references across the entire codebase.

With **Porto**, safe changes stay safe as the codebase grows, because the dependency graph never grows more tangled than the rules allow.
