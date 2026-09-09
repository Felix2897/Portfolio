# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite + React Router

## Users

Recruiter, client, or collaborator evaluating Andrea Feliziani's design and front-end work (inferred from the existing portfolio structure).

## Product Purpose

Personal portfolio that makes Andrea's design process, interface work, and front-end projects easy to understand and explore. Success means a visitor quickly understands the profile, sees credible work, and can continue into a project or start a conversation.

## Positioning

Andrea combines UI/UX design, accessibility, user research, and front-end implementation, connecting experience design with the reality of building interfaces.

## Operating Context

Visitors browse a public website on desktop or mobile, move from the introduction into selected projects, and can download a CV or use the contact form. The project detail routes are part of the same portfolio experience.

## Capabilities and Constraints

- Preserve the existing project routes and project content.
- Support Italian and English language switching.
- Support light and dark themes.
- Preserve CV downloads, project links, social links, contact form, keyboard focus, skip link, and reduced-motion behavior.
- The home surface is the first redesign scope; project detail pages remain in scope only where shared navigation or styling requires compatibility.

## Brand Commitments

- Use the name Andrea Feliziani and the existing identity assets.
- Keep the portfolio bilingual (Italian and English).
- Keep both light and dark modes available.
- Maintain a clear, human, accessibility-aware voice.

## Evidence on Hand

- Existing biography and project descriptions in `src/i18n/it.js` and `src/i18n/en.js`.
- Six project routes and case-study assets under `Img/` and `public/assets/images/`.
- Portrait assets at `assets/images/Andrea.jpeg` and `public/assets/images/andrea-photoroom.png`.
- CV files at `CV.pdf` and `Andrea_Feliziani_CV.pdf`.

## Product Principles

- Make the work legible before making it impressive.
- Show the relationship between design thinking and shipped interfaces.
- Let real projects carry credibility; do not invent claims or testimonials.
- Keep essential actions obvious on every viewport.

## Accessibility & Inclusion

The site should retain semantic structure, visible keyboard focus, skip navigation, accessible labels, and a reduced-motion fallback. Text and controls must remain readable in both themes.
