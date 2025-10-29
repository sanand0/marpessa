---
marp: true
title: Marpessa - A Marp Theme
author: Anand S
url: https://sanand0.github.io/marpessa/
paginate: true
theme: marpessa
header: <div></div><div><a href="https://sanand0.github.io/marpessa/">Marpessa</a></div>
footer: |
  <a href="https://sanand0.github.io/marpessa/" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/super-tiny-icons/images/svg/github.svg" style="width:32px; height:32px; border-radius: 100%;" />
  </a>

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

![h:620px](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Idas_and_Marpessa%2C_A_Book_of_Myths.jpg/500px-Idas_and_Marpessa%2C_A_Book_of_Myths.jpg)

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

```css
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+3");
:root {
  font-family: "Source Sans 3", sans-serif;
}

@import url("https://fonts.googleapis.com/css2?family=Fira+Sans");
:root {
  font-family: "Fira Sans", sans-serif;
}

@import url("https://fonts.googleapis.com/css2?family=Open+Sans");
:root {
  font-family: "Open Sans", sans-serif;
}

@import url("https://fonts.googleapis.com/css2?family=Roboto");
:root {
  font-family: "Roboto", sans-serif;
}
```

---

<!-- _class: columns -->

# This theme supports layouts and colors

<div>

- [Multi-column with `_class: columns`](#multi-column-with-_class-columns)
- [Centered slides with `_class: title`](#centered-slides-with-_class-title)
- [`Use <header>` and `<footer>`](#use-header-and-footer)

</div>

<div>

- [Default theme](#default-theme)
- [Seafoam theme](#seafoam-theme)
- [Butter theme](#butter-theme)
- [Clementine theme](#clementine-theme)
- [Tailwind theme](#tailwind-theme)
- [Opencolor theme](#opencolor-theme)

</div>

<div>

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

<div class="columns">

The first child of `.columns` forms the first column.

The second child becomes part of the second column.

> You can add as many columns as you want.

```markdown
Of any type.

They have equal
height.
```

</div>

Content outside the `.columns` div will span the full width of the slide.

---

<!-- _class: title -->

# Centered slides with `_class: title`

To center slides vertically (e.g. title slides), use:

```markdown
<!-- _class: title -->

# Slide Title
```

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
