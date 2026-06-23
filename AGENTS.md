# Porto (for agents)

Porto is a software **architectural pattern**: organize code into self-contained, reusable units (Containers + Ship layers) so it scales from monolith to microservices. This repo is the spec + docs, not a framework to import.

If it lives in a project, the code here should **follow Porto's architecture and style**. Read the docs before structuring or editing code.

## Two editions, pick one

Porto ships in two editions. Pick by **who writes the code**, then read only that edition's docs:

- **Porto for Humans** -> [`docs/docs/`](docs/docs/) - code people read, review, and extend by hand (AI assisting). Start at [`docs/docs/Intro.md`](docs/docs/Intro.md).
- **Porto for AI** -> [`docs/docs-ai/`](docs/docs-ai/) - codebases written and maintained primarily by AI agents: fewer files, fewer tokens. Start at [`docs/docs-ai/Intro.md`](docs/docs-ai/Intro.md).

Unsure which the project uses? Ask the user.

## Navigate

Everything is markdown - read it directly.

- [`README.md`](README.md) - overview and edition comparison.
- [`docs/docs/`](docs/docs/) - human edition: `Basics/`, `Layers/`, `Components/`, `Features/`, `Quality Attributes.md`.
- [`docs/docs-ai/`](docs/docs-ai/) - AI edition (private testing, published incrementally).

The rest of `docs/` is the Docusaurus site (config, theme, build) - ignore it unless working on the docs site itself.
