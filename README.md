![CI](https://github.com/mxn2020/minions-match-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-match

**Match scoring, shortlists, and hard gate evaluation between jobs and profile**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-match/sdk minions-sdk

# Python
pip install minions-match

# CLI (global)
npm install -g @minions-match/cli
```

---

## CLI

```bash
# Show help
match --help
```

---

## Python SDK

```python
from minions_match import create_client

client = create_client()
```

---

## Project Structure

```
minions-match/
  packages/
    core/           # TypeScript core library (@minions-match/sdk on npm)
    python/         # Python SDK (minions-match on PyPI)
    cli/            # CLI tool (@minions-match/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [match.minions.help](https://match.minions.help)
- Blog: [match.minions.blog](https://match.minions.blog)
- App: [match.minions.wtf](https://match.minions.wtf)

---

## License

[MIT](LICENSE)
