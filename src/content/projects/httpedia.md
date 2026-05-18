---
title: HTTPedia
description: Wikipedia proxy for vintage computers — serves HTML 3.2 with no JavaScript or CSS. URL-based state for preferences, image caching, multi-language subdomains. Hosted via Cloudflare tunnel.
category: software
tags: [retro, web, proxy]
year: Jan 2026
live: https://httpedia.com
repo: https://github.com/sammothxc/httpedia
---

## The problem

Modern Wikipedia is unreadable on a Macintosh LC III. The bottleneck isn't bandwidth or RAM — it's that the markup assumes a JavaScript runtime, a CSS engine, and a viewport sized like something built after 2007. Even with Netscape 4 cranking away, you get a wall of empty `<div>`s and a page that scrolls sideways.

HTTPedia is a proxy that sits between vintage browsers and the Wikipedia API, fetching the modern article and re-rendering it as HTML 3.2 — the dialect those browsers actually understand. No JS, no CSS, no UTF-8 byte order marks, no `<picture>` tags. Just `<table>`, `<font>`, and the occasional `<center>`.

## Architecture

The proxy is a small service hosted on my homelab and exposed via a Cloudflare tunnel at `httpedia.samwarr.net`. When a vintage browser requests an article, the service:

1. Fetches the article from the Wikipedia REST API
2. Walks the content tree and emits an HTML 3.2 document
3. Caches the result so subsequent requests don't re-fetch
4. Rewrites image URLs to a thumbnailing endpoint that downsamples to ~256px wide

State (language, image toggle, etc.) lives in URL query parameters rather than cookies, because cookies are unreliable on these browsers and some don't support them at all.

## What turned out to be hard

The tricky parts weren't the obvious ones.

**Character encoding.** Wikipedia is UTF-8 throughout. The target browsers expect Latin-1 or, more commonly, whatever the OS code page is. Articles about anything non-English (or even articles with stray em-dashes) needed careful transliteration. I ended up writing a fallback table — first try Latin-1, then a curated mapping for common Unicode, then last-resort ASCII approximation.

**Image dimensions.** Vintage browsers want `width` and `height` attributes on every `<img>` so they can lay out the page before the image loads. The thumbnailing service has to know the output dimensions *before* it returns the bytes, which meant pre-computing them server-side. I cached the dimensions alongside the cached articles.

**The "next page" pattern.** Articles that would crash the browser (long ones with many images) get split into chunks linked by "Page 2 →" anchors at the bottom — a pattern from the actual 1996 web. The split point is content-aware: it tries to break on section boundaries.

## What I'd do differently

The state-in-URL design works but produces ugly links. If I were starting over, I'd accept the cookie issue and use server-side sessions keyed by IP — these browsers don't multitask anyway.
