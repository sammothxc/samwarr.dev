# [samwarr.dev](https://samwarr.dev)

[![Status](https://status.samwarr.dev/api/badge/11/status)](https://status.samwarr.dev)

## Structure

```
src/
├── components/
│   ├── Header.astro
│   ├── Terminal.astro
│   └── ProjectList.astro
├── content/
│   └── projects/
│       └── [slug].md
├── content.config.ts
├── data/
│   └── categories.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── pgp.astro
│   └── projects/
│       └── [slug].astro
└── styles/
    └── global.css

public/
├── favicon.svg
└── pgp.asc
```

## Adding a project

Create an .md in `src/content/projects/` with naming convention `kebab-case-id.md`.

```markdown
---
title: "Project title"
description: "Description shown on the home page."
category: some-category
tags: [tag1, tag2]
year: "2026"
yearLabel: "2026"
live: "url" # optional
repo: "url" # optional
lastUpdated: "2026-05-16"  # optional, only relevant if you write a body
draft: false  # optional, default: false
---

# Project Title

Writeup in Markdown style here.
```
