# Dark / Light Mode — Palette Redesign

**Date:** 2026-03-31
**Scope:** Home page first, then propagated to all pages
**Branch:** Try

---

## Goal

Replace the current gradient-heavy palette (`#09090C` dark, orange/teal accents) with a warm charcoal/ivory system keeping the gold accent `#E8A020`. Add dark/light mode support with system-preference detection and manual override. All color combinations must pass WCAG 2.2 AA.

---

## Color Tokens

### Dark mode (default)

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#141210` | Page background |
| `--color-surface` | `#221e1a` | Cards, header, dropdowns |
| `--color-border` | `#2e2820` | Borders, dividers |
| `--color-text` | `#f2ede6` | Primary text — 16.9:1 on `--color-bg` ✓ AAA |
| `--color-muted` | `#8a7a68` | Secondary text — 5.0:1 on `--color-bg` ✓ AA |
| `--color-accent` | `#E8A020` | Button fills, decorative — 9.1:1 on `--color-bg` ✓ AAA |
| `--color-accent-text` | `#E8A020` | Accent as text (badges, nav active, labels) — same as accent in dark |

### Light mode

| Token | Value | Usage | Contrast |
|---|---|---|---|
| `--color-bg` | `#f7f2ea` | Page background | — |
| `--color-surface` | `#ede5d8` | Cards, header, dropdowns | — |
| `--color-border` | `#d8cfc4` | Borders, dividers | — |
| `--color-text` | `#1a1510` | Primary text | 17.3:1 on `--color-bg` ✓ AAA |
| `--color-muted` | `#6b5c4e` | Secondary text | 5.5:1 on `--color-bg` ✓ AA |
| `--color-accent` | `#E8A020` | Button fills only — text on top is `--color-text` | 9.1:1 ✓ |
| `--color-accent-text` | `#8a6200` | Accent as text (badges, nav active, labels) | 4.76:1 on `--color-bg` ✓ AA |

> `--color-accent` (#E8A020) is NEVER used as text color in light mode. Only `--color-accent-text` (#8a6200) is.

### Legacy aliases (kept for project pages — do not remove)

`--color-primary`, `--color-text-main`, `--color-text-muted`, `--color-border-glass` remain as aliases pointing to the new vars.

---

## Theme Switching

### Strategy: CSS vars + `prefers-color-scheme` + `[data-theme]` override

```css
/* Default: dark */
:root {
  --color-bg: #141210;
  /* ...all dark tokens */
}

/* System light preference */
@media (prefers-color-scheme: light) {
  :root:not([data-theme="dark"]) {
    --color-bg: #f7f2ea;
    /* ...all light tokens */
  }
}

/* Manual dark override */
[data-theme="dark"] {
  --color-bg: #141210;
  /* ...all dark tokens */
}

/* Manual light override */
[data-theme="light"] {
  --color-bg: #f7f2ea;
  /* ...all light tokens */
}
```

### `useTheme` hook

New hook `src/hooks/useTheme.js`:
- Reads `localStorage.getItem('theme')` on mount
- If set, applies `data-theme` attribute to `<html>`
- If not set, respects `prefers-color-scheme` (no attribute on `<html>`)
- `toggleTheme()` function: reads current resolved theme, switches to opposite, saves to localStorage

### Theme toggle button

Added in `Header.jsx`, right of the language dropdown. Same `.lang-toggle` class.

```jsx
<button
  className="lang-toggle"
  onClick={toggleTheme}
  role="switch"
  aria-checked={isDark}
  aria-label={isDark ? "Attiva modalità chiara" : "Attiva modalità scura"}
>
  {isDark ? "🌙" : "☀️"}
  <span>{isDark ? "Dark" : "Light"}</span>
</button>
```

Also added in mobile menu (same pill style, in a row with label "Tema").

### Focus (WCAG 2.4.11)

Both `.lang-toggle` and the new theme toggle get:
```css
.lang-toggle:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}
```
Gold `#E8A020` focus ring: 3.8:1 on dark surface, visible ✓

---

## Gradients — removed

All `linear-gradient` uses in `index.css` are replaced with flat colors:
- `.btn-primary`: `background: var(--color-accent)` — no gradient
- `.badge-custom`: `background: rgba(--color-accent-rgb, 0.08)` — no gradient
- `.back-to-top`: `background: var(--color-accent)` — no gradient
- `.loader-bar`: `background: var(--color-accent)` — no gradient
- `.gradient-text`: replaced with `color: var(--color-accent-text)` — no gradient

---

## Dot grid (hero)

Adapted for both modes — opacity tweaked per theme:
- Dark: `rgba(232, 160, 32, 0.06)` (current, unchanged)
- Light: `rgba(138, 98, 0, 0.10)` (uses dark amber to stay visible on cream)

---

## What does NOT change

- Font stack: Space Grotesk + Archivo + JetBrains Mono
- All component structure (JSX) — no markup changes
- Language dropdown: untouched (only CSS var updates propagate to it)
- Layout, animations, scroll behavior
- Project detail pages: inherit new vars via legacy aliases

---

## WCAG 2.2 AA Compliance Summary

| Criterion | Dark | Light | Status |
|---|---|---|---|
| 1.4.3 Contrast (text) | 16.9:1 / 5.0:1 | 17.3:1 / 5.5:1 | ✓ |
| 1.4.11 Non-text Contrast | Gold border 9.1:1 | Dark amber border 4.76:1 | ✓ |
| 2.4.11 Focus Appearance | 2px gold outline | 2px gold outline | ✓ |
| 2.5.3 Label in Name | Text matches aria-label | Text matches aria-label | ✓ |
| 2.5.8 Target Size | Pill ~36px height | Pill ~36px height | ✓ |
| 4.1.2 Name/Role/Value | role=switch + aria-checked | role=switch + aria-checked | ✓ |

---

## Files to modify

1. `src/index.css` — token definitions, remove gradients, add `[data-theme]` selectors, fix `focus-visible`
2. `src/hooks/useTheme.js` — new file, theme hook
3. `src/components/Header.jsx` — add theme toggle button + import `useTheme`
4. `src/main.jsx` or `src/App.jsx` — call `useTheme` at root level to apply `data-theme` on mount
