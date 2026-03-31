# Insights (blog posts)

Each post is a folder with two Markdown files: `sv.md` and `en.md`.

## New post

1. Create a folder: `src/content/insights/my-post-slug/`
2. Add `sv.md` and `en.md` with frontmatter:

```yaml
---
title: "Post title"
category: "Category name"
excerpt: "Short summary for listings."
date: "2025-01-15"
---

Your content in Markdown.
```

## Supported Markdown

- **Sub-headers:** `## Section` (h2), `### Subsection` (h3)
- **Lists:** use `-` or `*` for bullet lists, `1.` for numbered lists
- **Bold** and *italic*
- **Links:** `[link text](https://example.com)` (see below)
- **Box/callout:** use blockquote `>` or a fenced code block with language `box` (see below)
- **Images:** see below

Example:

```markdown
## First section

Some intro text.

### Subsection

- Bullet one
- Bullet two

1. Step one
2. Step two
```

## Links

Use standard Markdown link syntax. External links open in a new tab.

```markdown
[Link text](https://example.com)
[Optional title on hover](https://example.com "Hover text")
```

## Box (callout)

Use either of these for a light gray box with rounded corners:

**Option 1 – blockquote:**

```markdown
> This is a callout or note. You can use **bold** and *italic* inside.
> Multiple lines are fine.
```

**Option 2 – fenced block with `box`:**  
Write ```box on its own line, then your text, then ``` on the next line. Markdown inside (e.g. **bold**) is not parsed; use Option 1 if you need formatting.

## Images (e.g. diagrams)

Put image files in `public/assets/insights/my-post-slug/` and reference them (use `/assets/insights/` so the URL does not conflict with the `/insights/:slug` route):

```markdown
![Image description](/assets/insights/my-post-slug/diagram.png)
```

The same slug is used for both languages; the app shows the correct language based on the site language.
![alt text](http://localhost:8080/assets/insights/avtalsforbindelse-eller-affarsforbindelse/schematic-overview-KYC.png)
