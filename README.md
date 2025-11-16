---
marp: true
title: Marpessa - A Marp Theme
author: Anand S
url: https://sanand0.github.io/marpessa/
paginate: true
theme: marpessa
header: '<a style="color: var(--bg); background-color: var(--heading); width: 100%;" href="https://sanand0.github.io/marpessa/">Marpessa</a><span style="color: var(--bg); background-color: var(--link); width: 100%;">A Marp Theme</span>'
footer: '<a href="https://sanand0.github.io/marpessa/" target="_blank" style="justify-content: flex-start;"><img src="https://cdn.jsdelivr.net/npm/super-tiny-icons/images/svg/github.svg" style="width:36px; height:36px; border-radius: 100%;" /></a>'

# Generate via:
# npx -y @marp-team/marp-cli@latest --theme-set marpessa.css --html README.md -o index.html
---

<!-- _class: title columns -->

<div style="place-content: center">

# Marpessa

### A Marp Theme

[Marpessa](https://sanand0.github.io/marpessa/) is a [Marp](https://marp.app/) color theme.
([Marpessa](https://en.wikipedia.org/wiki/Marpessa_of_Aetolia) is also a Greek mythological figure).

</div>

<div style="margin-top: 20px; text-align: end;">

![h:620px](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Idas_and_Marpessa%2C_A_Book_of_Myths.jpg/500px-Idas_and_Marpessa%2C_A_Book_of_Myths.jpg)

</div>

---

Add this to your Visual Studio Code [`settings.json`](https://code.visualstudio.com/docs/configure/settings):

```jsonc
"markdown.marp.themes": [
  "https://cdn.jsdelivr.net/gh/sanand0/marpessa/marpessa.css"
]
```

Then add a theme [Marp directive](https://marpit.marp.app/directives) to your Markdown slides:

```yaml
theme: marpessa
```

To generate HTML slides with [Marp CLI](https://github.com/marp-team/marp-cli/), run:

```bash
wget https://cdn.jsdelivr.net/gh/sanand0/marpessa/marpessa.css
marp --theme-set marpessa.css --html slides.md -o index.html
```

---

## Here are some fonts that go well with Marpessa

Marpessa uses [Fira Sans](https://fonts.google.com/specimen/Fira+Sans) by default. [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3), [Open Sans](https://fonts.google.com/specimen/Open+Sans), [Roboto](https://fonts.google.com/specimen/Fira+Sans), [Inter](https://fonts.google.com/specimen/Inter), ... all work well.

Add this to your YAML frontmatter to use Source Sans 3:

```yaml
style: |
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+3");
  :root { font-family: "Source Sans 3", sans-serif; }
```

---

<!-- _class: columns -->

# This theme supports layouts and colors

<div>

**Layouts:**

- [Multi-column with `_class: columns`](#multi-column-with-_class-columns)
- [Centered slides with `_class: title`](#centered-slides-with-_class-title)
- [Split layout with `_class: split`](#split-layout-with-_class-split)
- [Sidebar layout with `_class: sidebar`](#sidebar-layout-with-_class-sidebar)
- [Quote layout with `_class: quote`](#quote-layout-with-_class-quote)
- [Grid layouts with `_class: grid`](#grid-layouts-with-_class-grid)

</div>

<div>

**More Layouts:**

- [Hero layout with `_class: hero`](#hero-layout-with-_class-hero)
- [Invert layout with `_class: invert`](#invert-layout-with-_class-invert)
- [Smaller fonts with `_class: small`](#smaller-fonts-with-_class-small)
- [Use `<header>` and `<footer>`](#use-header-and-footer)
- [Use `<transcript>`](#use-transcript)

</div>

<div>

**Themes:**

- [Default theme](#default-theme)
- [Seafoam theme](#seafoam-theme)
- [Butter theme](#butter-theme)
- [Clementine theme](#clementine-theme)
- [Tailwind theme](#tailwind-theme)
- [Opencolor theme](#opencolor-theme)
- [Bootstrap theme](#bootstrap-theme)
- [Atlassian theme](#atlassian-theme)
- [Midnight theme](#midnight-theme)
- [Burgundy theme](#burgundy-theme)
- [Nord theme](#nord-theme)
- [Solarized theme](#solarized-theme)

</div>

---

<!-- _class: columns -->

# Multi-column with `_class: columns`

<div>

If the slide begins with one or more headings (`h1`, `h2`, ...), they span the full width. The rest of the content is split into equal-width columns.

So, if you have two elements below the heading, you will have two columns. They may be images, tables, text blocks, lists, blockquotes, etc.

</div>

```markdown
<!-- _class: columns -->

# Slide Title

<div> ... </div>
<div> ... </div>
```

---

# Multi-column with `<div class="columns">`

You can use a `<div class="columns">` to create a multi-column layout, like below.

<div class="columns" style="background-color: var(--heading); color: var(--bg);">

The first child of `.columns` forms the first column.

The second child becomes part of the second column.

You can add as many columns as you want.

```markdown
Of any type.

They have equal
height.
```

</div>

Content outside the `.columns` div will span the full width of the slide.

---

# ... and `<div class="columns-justify">`

You can use a `<div class="columns-justify">` to create a multi-column layout, like below.

<style scoped>
  .columns-justify > * {
    border: 1px solid white;
  }
</style>

<div class="columns-justify" style="background-color: var(--heading); color: var(--bg);">

The first element is left aligned.

Inner elements are centered

... no matter how many there are.

The last element is right aligned.

</div>

Content outside the `.columns-justify` div will span the full width of the slide.

`header` and `footer` use this layout by default.

---

<!-- _class: title -->

# Centered slides with `_class: title`

To center slides vertically (e.g. title slides), use:

```markdown
<!-- _class: title -->

# Slide Title
```

---

<!-- _class: split -->

# Split layout with `_class: split`

<div>

The split layout creates a **50/50 two-column layout**.

```markdown
<!-- _class: split -->

# Slide Title

<div>Left content</div>
<div>Right content</div>
```

Perfect for image-text combinations.

</div>

<div>

![h:400px](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Idas_and_Marpessa%2C_A_Book_of_Myths.jpg/500px-Idas_and_Marpessa%2C_A_Book_of_Myths.jpg)

</div>

---

<!-- _class: sidebar -->

# Sidebar layout with `_class: sidebar`

<div>

**Quick Links**

- [Intro](#1)
- [Setup](#2)
- [Usage](#3)
- [FAQ](#4)

</div>

<div>

The sidebar layout creates a **1/3 + 2/3** split with a narrow sidebar on the left.

```markdown
<!-- _class: sidebar -->

<div>Sidebar</div>
<div>Main content</div>
```

Use `sidebar-right` to flip the layout. Perfect for navigation or table of contents.

</div>

---

<!-- _class: quote -->

# Quote layout with `_class: quote`

> The purpose of visualization is insight, not pictures.
>
> <cite>— Ben Shneiderman</cite>

Use the quote layout to highlight important quotes or testimonials.

```markdown
<!-- _class: quote -->

> Your quote here
>
> <cite>— Author Name</cite>
```

---

<!-- _class: grid-3 -->

# Grid layouts with `_class: grid`

<div style="background: var(--heading); color: white; padding: 20px; border-radius: 8px; text-align: center;">

### Feature 1

Automatic grid sizing with `grid`

</div>

<div style="background: var(--accent); color: white; padding: 20px; border-radius: 8px; text-align: center;">

### Feature 2

Fixed grids: `grid-2`, `grid-3`, `grid-4`

</div>

<div style="background: var(--link); color: white; padding: 20px; border-radius: 8px; text-align: center;">

### Feature 3

Perfect for features, team members, or products

</div>

```markdown
<!-- _class: grid-3 -->

<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>
```

---

<!-- _class: hero title -->
<!-- backgroundImage: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Idas_and_Marpessa%2C_A_Book_of_Myths.jpg/1024px-Idas_and_Marpessa%2C_A_Book_of_Myths.jpg') -->

# Hero layout with `_class: hero`

## Full-screen background images with overlay text

Use the hero layout for impactful title slides

```markdown
<!-- _class: hero title -->
<!-- backgroundImage: url('image.jpg') -->

# Your Title
```

---

<!-- _class: invert -->

# Invert layout with `_class: invert`

The invert layout swaps the foreground and background colors for emphasis sections.

```markdown
<!-- _class: invert -->

# Dark slide content
```

Perfect for creating visual breaks or highlighting important sections. Combine with other layouts like `_class: invert split` or `_class: invert quote`.

---

# Smaller fonts with `_class: small`

Add `<!-- _class: small -->` to the YAML frontmatter for smaller fonts. Use `small-1`, `small-2`, and `small-3` for progressively smaller font sizes.

This affects slide contents, not headings. Applying multiple times **cumulates** the effect.

You can also apply them to specific elements. for example:

- <span class="small">`.small` has a slightly smaller font size. <span class="small">This is small inside small.</span></span>
- <span class="small-1">`.small-1` has an even smaller font size. <span class="small-1">This is small-1 inside small.</span></span>
- <span class="small-2">`.small-2` has an even smaller font size. <span class="small-2">This is small-2 inside small-2.</span></span>
- <span class="small-3">`.small-3` has an even smaller font size. <span class="small-2">This is small-2 inside small-3.</span></span>

---

# Use `<header>` and `<footer>`

Elements in the header and footer are evenly spaced in the top and bottom of the slide respectively. For example, add this to your YAML frontmatter:

```yaml
header: |
  <div>Top left</div>
  <div>Top right</div>

footer: |
  <div>Bottom left</div>
  <div>Bottom middle</div>
  <div>Bottom right</div>
```

---

# Use `<transcript>`

Anything inside `<transcript>` will be not shown on the slide, but will be visible on other Markdown converters.

Useful to show content like transcripts, references, or notes that you don't want on the slides, but should be visible on other Markdown renderers like GitHub.

For example, the section below is visible on GitHub not on the slides.

<transcript>

This transcript will be visible on GitHub, but not on the slides.

</transcript>

---

# Default theme

Add `_class: theme-seafoam` for Mocha Warmth - warm professional neutrals.

- Sample Text | [Link](#) | **strong** | _emphasis_ | `code` | <mark>mark</mark>

<div class="columns">

<div>

## Heading 2

### Heading 3

#### Heading 4

> This is a blockquote

</div>

```ts
let x = f("x", 2);
// comment
```

| table | header |
| ----- | ------ |
| one   | 1      |
| two   | 2      |
| three | 3      |

</div>

---

<!-- _class: columns -->

# Edit themes by setting these CSS variables

```
--bg: #f5f1ed;
--fg: #3d3935;
--muted: #8a7d73;
--border: #ccc0b3;
--heading: #8b6f47;
--heading-secondary: #6b5d52;
--accent: #b17a50;
--link: #b17a50;
--link-hover: #8b6f47;
```

```
--code-bg: #1f1b17;
--code-fg: #f7f1e8;
--quote-bg: #f9f5f1;
--quote-border: #d4a574;
--table-header-bg: #d4a574;
--table-header-fg: #ffffff;
--table-row-stripe: #faf7f4;
--mark-bg: #f9e5c8;
```

---

<!-- _class: theme-seafoam -->

# Seafoam theme

Add `_class: theme-seafoam` for Seafoam Clarity - Fresh aqua-green for tech/wellness

- Sample Text | [Link](#) | **strong** | _emphasis_ | `code` | <mark>mark</mark>

<div class="columns">

<div>

## Heading 2

### Heading 3

#### Heading 4

> This is a blockquote

</div>

```ts
let x = f("x", 2);
// comment
```

| table | header |
| ----- | ------ |
| one   | 1      |
| two   | 2      |
| three | 3      |

</div>

---

<!-- _class: theme-butter -->

# Butter theme

Add `_class: .theme-butter` for Butter Optimism - Sunny yellows for creative energy

- Sample Text | [Link](#) | **strong** | _emphasis_ | `code` | <mark>mark</mark>

<div class="columns">

<div>

## Heading 2

### Heading 3

#### Heading 4

> This is a blockquote

</div>

```ts
let x = f("x", 2);
// comment
```

| table | header |
| ----- | ------ |
| one   | 1      |
| two   | 2      |
| three | 3      |

</div>

---

<!-- _class: theme-clementine -->

# Clementine theme

Add `_class: .theme-clementine` for Clementine Breeze - Peachy warmth for lifestyle brands

- Sample Text | [Link](#) | **strong** | _emphasis_ | `code` | <mark>mark</mark>

<div class="columns">

<div>

## Heading 2

### Heading 3

#### Heading 4

> This is a blockquote

</div>

```ts
let x = f("x", 2);
// comment
```

| table | header |
| ----- | ------ |
| one   | 1      |
| two   | 2      |
| three | 3      |

</div>

---

<!-- _class: theme-tailwind -->

# Tailwind theme

Add `_class: .theme-tailwind` for Tailwind Slate + Indigo - Modern professional classic

- Sample Text | [Link](#) | **strong** | _emphasis_ | `code` | <mark>mark</mark>

<div class="columns">

<div>

## Heading 2

### Heading 3

#### Heading 4

> This is a blockquote

</div>

```ts
let x = f("x", 2);
// comment
```

| table | header |
| ----- | ------ |
| one   | 1      |
| two   | 2      |
| three | 3      |

</div>

---

<!-- _class: theme-opencolor -->

# Opencolor theme

Add `_class: .theme-opencolor` for Open Color Teal - Clean and accessible

- Sample Text | [Link](#) | **strong** | _emphasis_ | `code` | <mark>mark</mark>

<div class="columns">

<div>

## Heading 2

### Heading 3

#### Heading 4

> This is a blockquote

</div>

```ts
let x = f("x", 2);
// comment
```

| table | header |
| ----- | ------ |
| one   | 1      |
| two   | 2      |
| three | 3      |

</div>

---

<!-- _class: theme-bootstrap -->

# Bootstrap theme

Add `_class: .theme-bootstrap` for Bootstrap Classic - Familiar and reliable

- Sample Text | [Link](#) | **strong** | _emphasis_ | `code` | <mark>mark</mark>

<div class="columns">

<div>

## Heading 2

### Heading 3

#### Heading 4

> This is a blockquote

</div>

```ts
let x = f("x", 2);
// comment
```

| table | header |
| ----- | ------ |
| one   | 1      |
| two   | 2      |
| three | 3      |

</div>

---

<!-- _class: theme-atlassian -->

# Atlassian theme

Add `_class: .theme-atlassian` for Atlassian - Corporate blue sophistication

- Sample Text | [Link](#) | **strong** | _emphasis_ | `code` | <mark>mark</mark>

<div class="columns">

<div>

## Heading 2

### Heading 3

#### Heading 4

> This is a blockquote

</div>

```ts
let x = f("x", 2);
// comment
```

| table | header |
| ----- | ------ |
| one   | 1      |
| two   | 2      |
| three | 3      |

</div>

---

<!-- _class: theme-midnight -->

# Midnight theme

Add `_class: .theme-midnight` for Midnight Professional - Elegant dark with teal

- Sample Text | [Link](#) | **strong** | _emphasis_ | `code` | <mark>mark</mark>

<div class="columns">

<div>

## Heading 2

### Heading 3

#### Heading 4

> This is a blockquote

</div>

```ts
let x = f("x", 2);
// comment
```

| table | header |
| ----- | ------ |
| one   | 1      |
| two   | 2      |
| three | 3      |

</div>

---

<!-- _class: theme-burgundy -->

# Burgundy theme

Add `_class: .theme-burgundy` for Burgundy Luxe - Rich dark elegance

- Sample Text | [Link](#) | **strong** | _emphasis_ | `code` | <mark>mark</mark>

<div class="columns">

<div>

## Heading 2

### Heading 3

#### Heading 4

> This is a blockquote

</div>

```ts
let x = f("x", 2);
// comment
```

| table | header |
| ----- | ------ |
| one   | 1      |
| two   | 2      |
| three | 3      |

</div>

---

<!-- _class: theme-nord -->

# Nord theme

Add `_class: .theme-nord` for Nord Dark - Arctic minimalism

- Sample Text | [Link](#) | **strong** | _emphasis_ | `code` | <mark>mark</mark>

<div class="columns">

<div>

## Heading 2

### Heading 3

#### Heading 4

> This is a blockquote

</div>

```ts
let x = f("x", 2);
// comment
```

| table | header |
| ----- | ------ |
| one   | 1      |
| two   | 2      |
| three | 3      |

</div>

---

<!-- _class: theme-solarized -->

# Solarized theme

Add `_class: .theme-solarized` for Solarized Dark - Classic terminal aesthetic

- Sample Text | [Link](#) | **strong** | _emphasis_ | `code` | <mark>mark</mark>

<div class="columns">

<div>

## Heading 2

### Heading 3

#### Heading 4

> This is a blockquote

</div>

```ts
let x = f("x", 2);
// comment
```

| table | header |
| ----- | ------ |
| one   | 1      |
| two   | 2      |
| three | 3      |

</div>
