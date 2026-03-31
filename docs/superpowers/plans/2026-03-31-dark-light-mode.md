# Dark / Light Mode Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add warm-charcoal/ivory palette with dark/light mode support, system-preference detection, manual toggle in header, and full WCAG 2.2 AA compliance.

**Architecture:** CSS custom properties drive theming — dark tokens live in `:root`, light tokens in `@media (prefers-color-scheme: light) :root:not([data-theme="dark"])` and `[data-theme="light"]`. A `useTheme` hook reads/writes `localStorage` and applies `data-theme` to `<html>` on mount. A theme-toggle pill button (same `.lang-toggle` class) is added to the header desktop nav and mobile menu.

**Tech Stack:** React 18 + Vite + Tailwind v4, pure JSX, `src/index.css` for all design tokens, `localStorage` for persistence, no external theme library.

---

## File Map

| Action | File | Responsibility |
|--------|------|---------------|
| Create | `src/hooks/useTheme.js` | localStorage read/write, `data-theme` attribute on `<html>`, `isDark` + `toggleTheme` exports |
| Modify | `src/App.jsx` | Call `useTheme()` at root to apply `data-theme` on first render |
| Modify | `src/index.css` | Redefine all color tokens, add dark/light selectors, remove all `linear-gradient` uses, fix focus-visible, update dot grid |
| Modify | `src/components/Header.jsx` | Import `useTheme`, add theme toggle pill in desktop nav + mobile menu |

---

## Task 1: Create `useTheme` hook

**Files:**
- Create: `src/hooks/useTheme.js`

- [ ] **Step 1: Create the hook file**

```js
// src/hooks/useTheme.js
import { useState, useEffect } from "react";

export function useTheme() {
  const getSystemDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const resolveInitial = () => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return getSystemDark();
  };

  const [isDark, setIsDark] = useState(resolveInitial);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (stored === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    const value = next ? "dark" : "light";
    localStorage.setItem("theme", value);
    document.documentElement.setAttribute("data-theme", value);
  };

  return { isDark, toggleTheme };
}
```

- [ ] **Step 2: Verify file is saved correctly**

Open `src/hooks/useTheme.js` and confirm it exports `useTheme`, `isDark`, and `toggleTheme`.

- [ ] **Step 3: Commit**

```bash
git add src/hooks/useTheme.js
git commit -m "feat: add useTheme hook for dark/light mode with localStorage persistence"
```

---

## Task 2: Wire `useTheme` in `App.jsx`

**Files:**
- Modify: `src/App.jsx` (import at top, call inside component body)

- [ ] **Step 1: Add import at the top of `src/App.jsx`**

Add after the existing imports:
```js
import { useTheme } from "./hooks/useTheme";
```

- [ ] **Step 2: Call the hook inside the `App` component**

Inside `export default function App()`, add this as the first line of the function body (before `const { lang } = useLanguage();`):
```js
useTheme();
```

The hook has no return value used here — it only applies `data-theme` to `<html>` on mount.

- [ ] **Step 3: Verify the app still starts**

```bash
npx vite
```

Open browser → no console errors → `<html>` element has correct `data-theme` attribute (or none if system dark with no localStorage value).

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "feat: apply data-theme attribute on app mount via useTheme"
```

---

## Task 3: Redefine CSS tokens and remove gradients in `src/index.css`

This is the largest task. Work section by section.

**Files:**
- Modify: `src/index.css`

### 3a — Replace the `@theme` block and add dark/light token selectors

- [ ] **Step 1: Replace the `@theme` block (lines 4–19) with new tokens**

Replace:
```css
/* === Custom Theme === */
@theme {
  --color-bg-dark: #09090C;
  --color-bg-card: #141418;
  --color-primary: #E8A020;
  --color-primary-hover: #CF8F1A;
  --color-secondary: #0AADAD;
  --color-secondary-hover: #089898;
  --color-accent: #E05C4A;
  --color-accent-hover: #C44A38;
  --color-text-main: #F2EFE8;
  --color-text-muted: #8A8070;
  --color-border-glass: rgba(232, 160, 32, 0.1);
  --font-sans: "Space Grotesk", sans-serif;
  --font-display: "Archivo", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```

With:
```css
/* === Custom Theme === */
@theme {
  --font-sans: "Space Grotesk", sans-serif;
  --font-display: "Archivo", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

/* === Color tokens — dark mode (default) === */
:root {
  --color-bg:           #141210;
  --color-surface:      #221e1a;
  --color-border:       #2e2820;
  --color-text:         #f2ede6;
  --color-muted:        #8a7a68;
  --color-accent:       #E8A020;
  --color-accent-text:  #E8A020;

  /* Legacy aliases — do NOT remove (used by project detail pages) */
  --color-bg-dark:      var(--color-bg);
  --color-bg-card:      var(--color-surface);
  --color-primary:      var(--color-accent);
  --color-primary-hover:#CF8F1A;
  --color-secondary:    var(--color-accent);
  --color-text-main:    var(--color-text);
  --color-text-muted:   var(--color-muted);
  --color-border-glass: rgba(232, 160, 32, 0.1);
}

/* === Color tokens — light mode (system preference) === */
@media (prefers-color-scheme: light) {
  :root:not([data-theme="dark"]) {
    --color-bg:           #f7f2ea;
    --color-surface:      #ede5d8;
    --color-border:       #d8cfc4;
    --color-text:         #1a1510;
    --color-muted:        #6b5c4e;
    --color-accent:       #E8A020;
    --color-accent-text:  #8a6200;

    --color-bg-dark:      var(--color-bg);
    --color-bg-card:      var(--color-surface);
    --color-primary:      var(--color-accent-text);
    --color-text-main:    var(--color-text);
    --color-text-muted:   var(--color-muted);
    --color-border-glass: rgba(138, 98, 0, 0.15);
  }
}

/* === Manual dark override === */
[data-theme="dark"] {
  --color-bg:           #141210;
  --color-surface:      #221e1a;
  --color-border:       #2e2820;
  --color-text:         #f2ede6;
  --color-muted:        #8a7a68;
  --color-accent:       #E8A020;
  --color-accent-text:  #E8A020;

  --color-bg-dark:      var(--color-bg);
  --color-bg-card:      var(--color-surface);
  --color-primary:      var(--color-accent);
  --color-primary-hover:#CF8F1A;
  --color-secondary:    var(--color-accent);
  --color-text-main:    var(--color-text);
  --color-text-muted:   var(--color-muted);
  --color-border-glass: rgba(232, 160, 32, 0.1);
}

/* === Manual light override === */
[data-theme="light"] {
  --color-bg:           #f7f2ea;
  --color-surface:      #ede5d8;
  --color-border:       #d8cfc4;
  --color-text:         #1a1510;
  --color-muted:        #6b5c4e;
  --color-accent:       #E8A020;
  --color-accent-text:  #8a6200;

  --color-bg-dark:      var(--color-bg);
  --color-bg-card:      var(--color-surface);
  --color-primary:      var(--color-accent-text);
  --color-text-main:    var(--color-text);
  --color-text-muted:   var(--color-muted);
  --color-border-glass: rgba(138, 98, 0, 0.15);
}
```

- [ ] **Step 2: Update `body` base styles to use new tokens**

Replace:
```css
body {
  font-family: var(--font-sans);
  background-color: var(--color-bg-dark);
  color: var(--color-text-main);
  line-height: 1.65;
  overflow-x: hidden;
  position: relative;
}
```

With:
```css
body {
  font-family: var(--font-sans);
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.65;
  overflow-x: hidden;
  position: relative;
}
```

- [ ] **Step 3: Update scrollbar track to use new bg token**

Replace:
```css
::-webkit-scrollbar-track {
  background: var(--color-bg-dark);
}
```

With:
```css
::-webkit-scrollbar-track {
  background: var(--color-bg);
}
```

### 3b — Remove gradients and fix component styles

- [ ] **Step 4: Replace `.gradient-text` — remove gradient, use accent-text token**

Replace:
```css
.gradient-text {
  background: linear-gradient(
    100deg,
    var(--color-primary) 0%,
    #f5c563 40%,
    var(--color-secondary) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

With:
```css
.gradient-text {
  color: var(--color-accent-text);
}
```

- [ ] **Step 5: Replace `.glass-card` hardcoded background with surface token**

Replace:
```css
.glass-card {
  background-color: rgba(20, 20, 24, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 1.125rem;
  border: 1px solid var(--color-border-glass);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  padding: 1.5rem;
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
```

With:
```css
.glass-card {
  background-color: var(--color-surface);
  border-radius: 1.125rem;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  padding: 1.5rem;
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
```

- [ ] **Step 6: Replace `.btn-primary` gradient with flat accent fill**

Replace:
```css
.btn-primary {
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    #f5b840 50%,
    var(--color-secondary) 100%
  );
  background-size: 200% auto;
  color: #09090C;
  font-weight: 700;
}

.btn-primary:hover {
  transform: translateY(-2px);
  background-position: right center;
  box-shadow: 0 10px 28px rgba(232, 160, 32, 0.35);
  color: #09090C;
}
```

With:
```css
.btn-primary {
  background: var(--color-accent);
  color: var(--color-bg);
  font-weight: 700;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(232, 160, 32, 0.35);
  color: var(--color-bg);
}
```

- [ ] **Step 7: Replace `.badge-custom` gradient with flat background, use accent-text for color**

Replace:
```css
.badge-custom {
  display: inline-block;
  padding: 0.35rem 1.1rem;
  border-radius: 2rem;
  font-size: 0.82rem;
  font-weight: 600;
  background: linear-gradient(
    135deg,
    rgba(232, 160, 32, 0.12),
    rgba(10, 173, 173, 0.1)
  );
  color: var(--color-primary);
  border: 1px solid rgba(232, 160, 32, 0.2);
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
}
```

With:
```css
.badge-custom {
  display: inline-block;
  padding: 0.35rem 1.1rem;
  border-radius: 2rem;
  font-weight: 600;
  background: rgba(232, 160, 32, 0.08);
  color: var(--color-accent-text);
  border: 1px solid rgba(232, 160, 32, 0.2);
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
}
```

- [ ] **Step 8: Replace `.loader` hardcoded background and `.loader-bar` gradient**

Replace:
```css
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-dark);
  ...
}
```

With:
```css
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg);
  ...
}
```

(Only change `var(--color-bg-dark)` → `var(--color-bg)`. Keep all other properties.)

Replace:
```css
.loader-bar {
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--color-primary),
    #f5c563,
    var(--color-secondary)
  );
  animation: loading 1.5s ease-in-out infinite;
}
```

With:
```css
.loader-bar {
  height: 100%;
  width: 100%;
  background: var(--color-accent);
  animation: loading 1.5s ease-in-out infinite;
}
```

- [ ] **Step 9: Replace `.back-to-top` gradient with flat accent**

Replace:
```css
.back-to-top {
  ...
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-secondary)
  );
  color: #09090C;
  ...
}
```

With:
```css
.back-to-top {
  ...
  background: var(--color-accent);
  color: var(--color-bg);
  ...
}
```

(Only change the `background` and `color` lines. Keep all positioning/sizing properties intact.)

- [ ] **Step 10: Replace `.nav-link::after` gradient underline with flat accent**

Replace:
```css
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 2px;
  transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
```

With:
```css
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  border-radius: 2px;
  transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
```

- [ ] **Step 11: Replace `.timeline-line` gradient with flat accent**

Replace:
```css
.timeline-line {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    var(--color-primary) 0%,
    var(--color-secondary) 60%,
    transparent 100%
  );
}
```

With:
```css
.timeline-line {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    var(--color-accent) 0%,
    transparent 100%
  );
}
```

- [ ] **Step 12: Replace `.hero-scroll-line` gradient**

Replace:
```css
.hero-scroll-line {
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, rgba(232, 160, 32, 0.5), transparent);
  ...
}
```

With:
```css
.hero-scroll-line {
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, rgba(232, 160, 32, 0.5), transparent);
  ...
}
```

(No change needed — this gradient fades to transparent and uses a hardcoded rgba that works in both modes.)

### 3c — Update header and mobile menu backgrounds

- [ ] **Step 13: Update `.header-inner` hardcoded background to use surface token**

Replace:
```css
.header-inner {
  padding: 0.875rem 1.5rem;
  background-color: rgba(14, 14, 18, 0.55);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 1rem;
  border: 1px solid rgba(232, 160, 32, 0.1);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
```

With:
```css
.header-inner {
  padding: 0.875rem 1.5rem;
  background-color: var(--color-surface);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
```

- [ ] **Step 14: Update `.mobile-menu` background**

Replace:
```css
.mobile-menu {
  ...
  background-color: var(--color-bg-dark);
  ...
}
```

With:
```css
.mobile-menu {
  ...
  background-color: var(--color-bg);
  ...
}
```

### 3d — Update hero dot grid for light mode + add focus-visible

- [ ] **Step 15: Update `.hero-dot-grid` for light-mode visibility**

Replace:
```css
.hero-dot-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: radial-gradient(rgba(232, 160, 32, 0.07) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%);
}
```

With:
```css
.hero-dot-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: radial-gradient(rgba(232, 160, 32, 0.06) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%);
}

[data-theme="light"] .hero-dot-grid,
@media (prefers-color-scheme: light) {
  :root:not([data-theme="dark"]) .hero-dot-grid {
    background-image: radial-gradient(rgba(138, 98, 0, 0.10) 1px, transparent 1px);
  }
}
```

> Note: The nested `@media` + `:root:not()` selector requires a PostCSS plugin or CSS nesting support (both available in Vite's CSS pipeline). If it causes an error, use two separate rules instead:
> ```css
> [data-theme="light"] .hero-dot-grid {
>   background-image: radial-gradient(rgba(138, 98, 0, 0.10) 1px, transparent 1px);
> }
> @media (prefers-color-scheme: light) {
>   :root:not([data-theme="dark"]) .hero-dot-grid {
>     background-image: radial-gradient(rgba(138, 98, 0, 0.10) 1px, transparent 1px);
>   }
> }
> ```

- [ ] **Step 16: Add `focus-visible` outline to `.lang-toggle`**

After the existing `.lang-toggle:hover` rule, add:
```css
.lang-toggle:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}
```

- [ ] **Step 17: Verify build succeeds and no CSS errors**

```bash
npx vite build
```

Expected: build completes with no errors. Check browser DevTools in both dark and light mode to confirm tokens resolve correctly.

- [ ] **Step 18: Commit**

```bash
git add src/index.css
git commit -m "feat: replace hardcoded palette with dark/light CSS tokens, remove all gradients"
```

---

## Task 4: Add theme toggle button to `Header.jsx`

**Files:**
- Modify: `src/components/Header.jsx`

- [ ] **Step 1: Import `useTheme` at the top of `Header.jsx`**

Add after the existing imports:
```js
import { useTheme } from "../hooks/useTheme";
```

- [ ] **Step 2: Destructure `isDark` and `toggleTheme` inside the `Header` component**

Add after `const [langOpen, setLangOpen] = useState(false);`:
```js
const { isDark, toggleTheme } = useTheme();
```

- [ ] **Step 3: Add theme toggle button in desktop nav (after the language dropdown `</div>`)**

In the desktop nav section, after the closing `</div>` of the language dropdown's `<div className="relative">` wrapper (around line 150), add:
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

- [ ] **Step 4: Add theme toggle button in mobile header controls (before the hamburger button)**

In the mobile header controls section (`<div className="flex items-center gap-3 md:hidden">`), add between the language toggle and the hamburger button:
```jsx
<button
  className="lang-toggle lang-toggle-sm"
  onClick={toggleTheme}
  role="switch"
  aria-checked={isDark}
  aria-label={isDark ? "Attiva modalità chiara" : "Attiva modalità scura"}
>
  {isDark ? "🌙" : "☀️"}
</button>
```

- [ ] **Step 5: Add theme toggle row in mobile menu (after `<SocialLinks />`)**

In the mobile menu section (after `<SocialLinks className="mt-8" />`), add:
```jsx
<div className="flex items-center justify-between mt-6 pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
  <span style={{ fontSize: "0.875rem", color: "var(--color-muted)" }}>Tema</span>
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
</div>
```

- [ ] **Step 6: Verify toggle works in browser**

1. Open the site in a browser
2. Click the theme toggle → page background switches between `#141210` and `#f7f2ea`
3. Reload the page → theme persists (localStorage)
4. Open DevTools → Application → Local Storage → confirm `theme` key is set
5. Delete the localStorage key → reload → system preference takes effect (no `data-theme` attribute on `<html>`)
6. Test on mobile viewport: hamburger menu → "Tema" row → toggle works

- [ ] **Step 7: Check WCAG contrast with DevTools**

In Chrome DevTools Accessibility panel, inspect:
- Body text (`--color-text`) on background (`--color-bg`) in both modes
- Muted text (`--color-muted`) on background in both modes
- Theme toggle button text on `--color-surface` in both modes
- `.badge-custom` text (`--color-accent-text`) on badge background in both modes

All ratios must be ≥ 4.5:1 for normal text, ≥ 3:1 for UI components.

- [ ] **Step 8: Commit**

```bash
git add src/components/Header.jsx
git commit -m "feat: add dark/light mode theme toggle to header desktop nav and mobile menu"
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Covered by |
|---|---|
| Dark tokens: `#141210` bg, `#221e1a` surface, etc. | Task 3a Step 1 |
| Light tokens: `#f7f2ea` bg, `#ede5d8` surface, etc. | Task 3a Step 1 |
| `--color-accent-text: #8a6200` in light mode | Task 3a Step 1 |
| Legacy aliases retained | Task 3a Step 1 |
| System preference via `prefers-color-scheme` | Task 3a Step 1 |
| Manual override via `[data-theme]` | Task 3a Step 1 |
| `useTheme` hook with localStorage | Task 1 |
| `data-theme` applied on mount | Task 2 |
| `.gradient-text` → flat color | Task 3b Step 4 |
| `.btn-primary` → flat accent | Task 3b Step 6 |
| `.badge-custom` → flat accent | Task 3b Step 7 |
| `.loader-bar` → flat accent | Task 3b Step 8 |
| `.back-to-top` → flat accent | Task 3b Step 9 |
| `.nav-link::after` → flat accent | Task 3b Step 10 |
| `.header-inner` → surface token | Task 3c Step 13 |
| `.mobile-menu` → bg token | Task 3c Step 14 |
| Dot grid light-mode opacity | Task 3d Step 15 |
| `focus-visible` on `.lang-toggle` | Task 3d Step 16 |
| Theme toggle in desktop nav | Task 4 Step 3 |
| Theme toggle in mobile header | Task 4 Step 4 |
| Theme toggle in mobile menu | Task 4 Step 5 |
| `role="switch"` + `aria-checked` | Task 4 Steps 3–5 |

All spec requirements are covered. No gaps found.
