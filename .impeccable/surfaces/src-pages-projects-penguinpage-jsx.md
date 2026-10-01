---
version: 1
slug: "src-pages-projects-penguinpage-jsx"
primary_target: "src/pages/projects/PenguinPage.jsx"
related_targets: ["src/pages/projects/penguin.css","src/App.jsx","src/sections/PortfolioSection.jsx","src/i18n/it.js","src/i18n/en.js"]
---

# Penguin case study

Mode: Experience. Route: `/projects/penguin`. Audience: people evaluating Andrea's UX/UI and front-end work. User explicitly requests the structures of BIM Taloro and Whattaflow; use their composition and the established portfolio system directly. Confirmed ownership: UX/UI, React Native, Expo, NativeWind, Supabase, AI. No confirmed usability testing or performance outcomes.

## Direction contract

THESIS: Make the patient journey understandable through real interfaces and the reasoning behind UX and code.

OWN-WORLD: Inherit Archivo headings, Space Grotesk prose, theme-aware paper/ink, the active portfolio accent, editorial rules and the shared Whattaflow section styles.

STORY: Context and role, daily organisation, guided diaries, a dedicated chatbot section, then implementation and AI in the process. Arianne gets one contextual note.

FIRST VIEWPORT: Penguin title and a concise patient-focused premise on the left; three supplied phone mockups on the right, with Home in the centre at 1.5 times the width of its neighbours. A scroll link leads into the case study. Mobile stacks copy and images.

FORM: User-pinned BIM Taloro / Whattaflow structure; no seed needed for a precisely specified extension. Motion explicitly requested to match BIM Taloro: staggered hero text and phone entrances, then one-time scroll reveals of text, screenshots and lists (48px rise, 1s duration, delayed viewport trigger and staggered title/body entrances). Reduced motion shows all content immediately. Home leads both the hero and the daily-organisation section; the portfolio preview uses the supplied logo.png, contained and centred on a light image well in both themes.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Constraints: Italian/English, both themes, mobile, keyboard, real supplied assets. Screenshot captions are desktop-only; Safety Plan is omitted at the user’s request. The chatbot screenshot is 680px high on desktop and up to 560px on mobile. Describe UX reasoning grounded in screenshots, not proven clinical results. Do not market the product or conflate future CDSS with shipped patient functionality.

## Finish evidence

Revised at the user’s request on 2026-10-01. Scroll sampling confirmed opacity 0 / 48px before entry, intermediate opacity 0.20 / 38px during entry, and opacity 1 / no transform after settling. All sections revealed on desktop and mobile. Captions are block on desktop, none on mobile; desktop captions now centre under each screenshot pair. The repeated "La scelta UX" / "The UX decision" labels were removed so the reasoning reads naturally below a divider. No Safety Plan content, horizontal overflow or browser warnings/errors. Penguin logo containment and exact centring verified at 320, 390 and 1440px; BIM Taloro preview corrected to contain its artwork at 1920px as well. Build passed. Desktop/mobile and portfolio captures saved in .impeccable/review/penguin/. Inline finish review substituted for unavailable independent reviewer; disposition: ship. Existing global design documentation drift remains outside this edit; global tokens remain unchanged. Intentional local typography: mobile hero clamp(2.35rem, 9.8vw, 3.5rem), chatbot subtitle clamp(1.4rem, 2vw, 2rem).
