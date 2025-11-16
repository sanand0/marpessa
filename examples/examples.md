---
marp: true
theme: marpessa
paginate: false
---

<!-- _class: columns -->

# Columns with Different Widths (1:2)

<div class="col-1">

**Sidebar**

Navigation or menu content goes here.

</div>

<div class="col-2">

**Main Content**

The main content area takes up twice the space of the sidebar. This is useful for layouts where you want a narrow sidebar and wide content area.

</div>

---

<!-- _class: columns -->

# Columns with Different Widths (2:1)

<div class="col-2">

**Main Content**

This larger column is perfect for your primary content. It takes up two-thirds of the available space.

</div>

<div class="col-1">

**Sidebar**

Secondary info here.

</div>

---

<!-- _class: columns -->

# Three Columns (1:2:1)

<div class="col-1">

**Left**

Narrow

</div>

<div class="col-2">

**Center**

The center column is twice as wide as the side columns, drawing focus to your main content.

</div>

<div class="col-1">

**Right**

Narrow

</div>

---

<!-- _class: small-1 -->

# Font Size: Entire Slide

This entire slide uses `_class: small-1` to reduce the font size of all content (except headings).

- All bullet points are smaller
- Code blocks are smaller too
- Tables and other content follow suit

```javascript
const example = "Smaller code too";
```

This is useful when you need to fit more content on a single slide.

---

# Font Size: Specific Content

Normal text at the default size.

<div class="small-2">

This paragraph uses `.small-2` class for smaller text. It's useful for footnotes, captions, or secondary information that shouldn't compete with main content.

</div>

<div class="large-1">

This text uses `.large-1` for emphasis. Great for key takeaways or important points.

</div>

---

# Font Size: Inline Adjustments

You can mix sizes within the same paragraph:

- Normal text with <span class="small">smaller inline text</span> for details
- Regular content with <span class="large-1">emphasized text</span> for impact
- <span class="small-3">Fine print</span> alongside <span class="large-2">BIG statements</span>

This gives you fine-grained control over typography.

---

<!-- _class: hero -->

# Welcome to Our Product

## The future of productivity starts here

---

<!-- _class: hero -->

<style scoped>
section {
  background: linear-gradient(135deg, var(--heading) 0%, var(--accent) 100%);
  color: white;
}
h1, h2 { color: white; }
</style>

# Hero with Gradient

## Bold. Beautiful. Impactful.

---

# Gradient Background: Full Slide

<style scoped>
section {
  background: linear-gradient(to right, var(--bg), var(--quote-bg));
}
</style>

This slide has a subtle horizontal gradient from the main background color to the quote background color.

Gradients can add visual interest while maintaining readability.

---

# Gradient Background: Specific Element

<div style="background: linear-gradient(135deg, var(--accent) 0%, var(--heading) 100%); color: white; padding: 20px; border-radius: 8px;">

**Feature Highlight**

This box uses a diagonal gradient from accent to heading colors. Perfect for call-to-action sections or important announcements.

</div>

Regular content continues below with the standard background.

---

# Gradient Text

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, var(--heading), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2em;
  font-weight: bold;
}
</style>

<div class="gradient-text">

Make Your Text Stand Out

</div>

Apply gradients directly to text for eye-catching headlines.

---

# Icon Grid

<div class="grid grid-4 icon-lg">

<div>

![](images/settings.svg)

Settings

</div>

<div>

![](images/user.svg)

Users

</div>

<div>

![](images/chart.svg)

Analytics

</div>

<div>

![](images/code.svg)

Development

</div>

</div>

Use `.grid`, `.grid-4`, and `.icon-lg` for icon grids.

---

# Icon Grid with Descriptions

<div class="grid grid-3 icon-md small">

<div>

![](images/settings.svg)

**Configure**

Customize every aspect of your workflow

</div>

<div>

![](images/chart.svg)

**Analyze**

Get insights from your data

</div>

<div>

![](images/code.svg)

**Build**

Create powerful applications

</div>

</div>

---

# Combining Features

<!-- Example showing multiple features together -->

<style scoped>
.highlight-box {
  background: linear-gradient(135deg, var(--quote-bg) 0%, var(--bg) 100%);
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid var(--accent);
}
</style>

<div class="columns">

<div class="col-2">

<div class="highlight-box">

**Main Feature**

<span class="large-1">Combine columns, gradients, and typography</span> to create visually appealing slides that communicate effectively.

</div>

</div>

<div class="col-1 small-1">

**Quick Facts**

- Flexible layouts
- Custom gradients
- Typography control
- Icon grids

</div>

</div>

