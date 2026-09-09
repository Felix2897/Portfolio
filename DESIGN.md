---
name: Andrea Feliziani Portfolio
description: A quiet editorial portfolio where clear typography and real work lead the experience.
colors:
  paper-dark: "#151515"
  paper-light: "#f4f0e9"
  ink-dark: "#f4f0e9"
  ink-light: "#171717"
  muted-dark: "#aaa49b"
  muted-light: "#625e57"
  line-dark: "#3a3834"
  line-light: "#d1c9bd"
  surface-dark: "#252321"
  surface-light: "#e9e3da"
  accent-dark: "#d98073"
  accent-light: "#c96b5e"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(3.4rem, 7.6vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.68rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  circle: "50%"
spacing:
  xs: "0.45rem"
  sm: "0.8rem"
  md: "1rem"
  lg: "1.5rem"
  section: "clamp(6rem, 13vw, 12rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink-light}"
    textColor: "{colors.paper-light}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
  field-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0"
---

# Design System: Andrea Feliziani Portfolio

## Overview

**Creative North Star: “The Quiet Editorial Archive”**

The portfolio should feel like a well-edited design publication: strong typography, generous breathing room, precise rules, and real work as the visual proof. The interface is memorable through composition and restraint, not through loud color or decorative UI.

The home page pairs a clear typographic introduction with an editorial portrait, then moves through biography, experience, education, projects, and contact with a steady reading rhythm. The original product truth remains intact: bilingual content, light/dark themes, accessible navigation, CV downloads, contact form, and direct project routes.

**Key Characteristics:**

- Charcoal and warm paper form the base; muted terracotta is the only accent.
- Large display type creates hierarchy without relying on oversized decorative blocks.
- One-pixel rules and open space establish the page rhythm.
- Mono labels keep metadata, filters, locations, and navigation scannable.
- Motion is quiet and purposeful, with reduced-motion fallback.

## Colors

The palette is deliberately low-saturation. Light mode uses warm paper and ink; dark mode inverts the relationship. Muted terracotta appears only where orientation or action needs a visual cue.

### Primary

- **Ink Light** (#202320): Primary text and high-contrast actions on light mode.
- **Ink Dark** (#f3f1ec): Primary text and high-contrast actions on dark mode.

### Accent

- **Terracotta Light** (#c96b5e): Active underlines, small indices, focus cues, and restrained hover states.
- **Terracotta Dark** (#d98073): The same role on dark backgrounds.

### Neutral

- **Warm Paper** (#f4f0e9): Light theme page ground.
- **Night Paper** (#151515): Dark theme page ground.
- **Soft Surface** (#e9e3da / #252321): Image wells, subtle active states, and quiet grouping.
- **Muted Text** (#625e57 / #aaa49b): Supporting copy and metadata.
- **Rules** (#d1c9bd / #3a3834): Dividers and field underlines.

### Named Rule

**The Quiet Accent Rule.** Terracotta is a guide, never the main event. Use it for one small decision at a time: active state, index, focus, or action.

## Typography

**Display Font:** Archivo (with sans-serif)  
**Body Font:** Space Grotesk (with sans-serif)  
**Label/Mono Font:** JetBrains Mono (with monospace)

Archivo carries the portfolio’s point of view, Space Grotesk keeps descriptions human, and JetBrains Mono makes navigation and metadata easy to scan.

### Hierarchy

- **Display:** `clamp(3.4rem, 7.6vw, 6rem)`, 700, line-height 0.9 for section titles.
- **Hero name:** `clamp(4.4rem, 8vw, 7.8rem)`, 800, line-height 0.88.
- **Project title:** `clamp(1.75rem, 3.5vw, 3.4rem)`, 700, line-height 0.95.
- **Body:** 1rem, line-height 1.5–1.7, readable 32–58 character measure.
- **Label:** 0.62–0.7rem mono, uppercase, 0.1em tracking.

## Layout

The page uses a single fluid shell capped at 1600px, with consistent horizontal breathing room. The refined hero is a two-column composition: text and actions on the left, a framed monochrome portrait on the right. At 900px it becomes one column; at 640px controls, facts, education, and projects stack without horizontal scrolling.

Sections use generous but deliberate vertical rhythm, one-pixel rules, and fixed-header scroll margins. The space between the academic timeline and portfolio is intentionally expanded to give the transition a clear pause.

## Elevation & Depth

Depth comes from tone, image crop, and scale rather than floating cards. The hero photo has a thin frame and inset rule; ordinary rows and controls stay flat. There are no offset drop shadows in the new hero treatment.

## Shapes

Structural surfaces are square (`0px`). Social links remain circular for recognition; compact controls use text and rules instead of pills. Borders are one pixel and fields use an underline rather than a filled box.

## Components

### Buttons

- **Primary:** Ink fill, paper text, square geometry, mono uppercase label.
- **Secondary:** Transparent with a quiet rule; it remains visibly secondary.
- **Hover / Focus:** Small upward motion is allowed; keyboard focus always has a visible outline.

### Navigation

- **Desktop:** Logo, centered text links, and a compact text-based language/theme cluster.
- **Active state:** One thin sage underline; no filled nav pills.
- **Mobile:** Full-screen menu with large links, close control, social links, and theme switch.

### Hero Portrait

The real portrait is presented in a monochrome 4:5 frame with a thin inset rule, small index label, and restrained caption. The image is the visual anchor; background shapes do not compete with it.

### Inputs

Contact fields are transparent with underline rules, mono labels, and a stronger accent line on focus. Existing success/error feedback remains intact.

## Do’s and Don’ts

### Do:

- Let project imagery, titles, and descriptions carry the proof.
- Use whitespace, rules, and type scale to create hierarchy.
- Keep the terracotta accent desaturated and purposeful.
- Preserve visible focus, skip navigation, language switching, themes, and reduced motion.
- Test the hero, navigation, and long section gaps at desktop and mobile widths.

### Don’t:

- Reintroduce bright red/yellow blocks, gradients, or decorative background noise.
- Turn every control into a rounded pill.
- Use a large shadow or floating card to compensate for weak hierarchy.
- Let metadata compete with the person, name, or work.
