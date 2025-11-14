---
marp: true
title: Test Marpessa Layouts
theme: marpessa
paginate: true
---

<!-- _class: title -->

# Testing New Marpessa Layouts

A comprehensive test of all layout features

---

<!-- _class: split -->

# Split Layout Test

<div>

## Left Column

This is the left side of a split layout.

- Item one
- Item two
- Item three

Perfect for content + image combinations.

</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2em;">

Image Placeholder

</div>

---

<!-- _class: sidebar -->

# Sidebar Layout Test

<div style="background: var(--accent); color: white; padding: 20px; border-radius: 8px;">

## TOC

- Intro
- Features
- Demo
- Q&A

</div>

<div>

## Main Content Area

The sidebar layout gives you a 1/3 + 2/3 split, perfect for:

- Documentation with a table of contents
- Presentations with persistent navigation
- Highlighting key points alongside main content

The sidebar is on the left by default. Use `sidebar-right` to move it to the right side.

</div>

---

<!-- _class: sidebar-right -->

# Sidebar Right Test

<div>

## Main Content First

When you use `sidebar-right`, the main content comes first (2/3 width), and the sidebar is on the right (1/3 width).

This is useful when you want to emphasize the main content while keeping supplementary information accessible.

</div>

<div style="background: var(--heading); color: white; padding: 20px; border-radius: 8px; text-align: center;">

## Sidebar

- Links
- Resources
- Notes

</div>

---

<!-- _class: quote -->

# Quote Layout Test

> Design is not just what it looks like and feels like. Design is how it works.
>
> <cite>— Steve Jobs</cite>

---

<!-- _class: grid-2 -->

# Grid-2 Layout Test

<div style="background: var(--heading); color: white; padding: 30px; border-radius: 8px; text-align: center;">

### Feature One

Automatic responsive grids

</div>

<div style="background: var(--accent); color: white; padding: 30px; border-radius: 8px; text-align: center;">

### Feature Two

Equal-width columns

</div>

<div style="background: var(--link); color: white; padding: 30px; border-radius: 8px; text-align: center;">

### Feature Three

Headings span full width

</div>

<div style="background: var(--heading-secondary); color: white; padding: 30px; border-radius: 8px; text-align: center;">

### Feature Four

Perfect for showcases

</div>

---

<!-- _class: grid-3 -->

# Grid-3 Layout Test

<div style="background: #e74c3c; color: white; padding: 25px; border-radius: 8px; text-align: center;">

### One

</div>

<div style="background: #3498db; color: white; padding: 25px; border-radius: 8px; text-align: center;">

### Two

</div>

<div style="background: #2ecc71; color: white; padding: 25px; border-radius: 8px; text-align: center;">

### Three

</div>

<div style="background: #f39c12; color: white; padding: 25px; border-radius: 8px; text-align: center;">

### Four

</div>

<div style="background: #9b59b6; color: white; padding: 25px; border-radius: 8px; text-align: center;">

### Five

</div>

<div style="background: #1abc9c; color: white; padding: 25px; border-radius: 8px; text-align: center;">

### Six

</div>

---

<!-- _class: grid-4 -->

# Grid-4 Layout Test

<div style="background: #16a085; color: white; padding: 20px; border-radius: 8px; text-align: center;">

A

</div>

<div style="background: #27ae60; color: white; padding: 20px; border-radius: 8px; text-align: center;">

B

</div>

<div style="background: #2980b9; color: white; padding: 20px; border-radius: 8px; text-align: center;">

C

</div>

<div style="background: #8e44ad; color: white; padding: 20px; border-radius: 8px; text-align: center;">

D

</div>

<div style="background: #d35400; color: white; padding: 20px; border-radius: 8px; text-align: center;">

E

</div>

<div style="background: #c0392b; color: white; padding: 20px; border-radius: 8px; text-align: center;">

F

</div>

<div style="background: #7f8c8d; color: white; padding: 20px; border-radius: 8px; text-align: center;">

G

</div>

<div style="background: #34495e; color: white; padding: 20px; border-radius: 8px; text-align: center;">

H

</div>

---

<!-- _class: invert -->

# Invert Layout Test

The invert layout swaps foreground and background colors.

- Creates dramatic contrast
- Perfect for section breaks
- Works with other layouts

Code example:

```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

---

<!-- _class: invert split -->

# Composable Layouts Test

<div>

## Invert + Split

You can combine multiple layout classes!

- `invert split`
- `invert quote`
- `invert grid-3`
- And more!

</div>

<div style="background: rgba(255, 255, 255, 0.1); padding: 30px; border-radius: 8px; border: 2px solid rgba(255, 255, 255, 0.3);">

### Composability

Layouts are designed to work together, giving you maximum flexibility in your slide designs.

</div>

---

<!-- _class: title -->

# All Layouts Tested!

Ready to use in your presentations

