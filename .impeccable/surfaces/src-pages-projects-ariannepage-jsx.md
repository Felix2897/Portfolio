---
version: 1
slug: "src-pages-projects-ariannepage-jsx"
primary_target: "src/pages/projects/AriannePage.jsx"
related_targets: ["src/pages/projects/arianne.css","src/App.jsx","src/sections/PortfolioSection.jsx","src/i18n/it.js","src/i18n/en.js"]
---

# Arianne case study

Mode: Experience. Scope: `/projects/arianne` and its entry among professional projects.
Audience: people evaluating Andrea's UI/UX judgment and front-end contribution within a team.
Evidence: user-supplied assets/arianne (all original PNG mockups and official logo.svg), Arianne.pdf (35 slides), current arianne.info homepage, /terapeuti and /pazienti. Website supersedes historical slide claims. User confirms Figma, Next.js, shadcn/ui, separate development and production Supabase projects, GitHub, CI/CD and Coolify. No claim to sole ownership or clinical outcomes.

## Direction contract

THESIS: Explain how a shared therapeutic journey becomes clear workflows, then connect UI choices to implementation decisions.
OWN-WORLD: Inherit the professional case-study composition, existing theme-aware portfolio typography and rules. Use the supplied Arianne wordmark and transparent device mockups without redrawing them.
STORY: See the platform, understand the collaborative role, inspect dashboard, diary, questionnaire and chat decisions, understand the frontend and release setup, acknowledge the patient experience, then visit the current official site.
FIRST VIEWPORT: Official logo and a two-part title on the left, the supplied desktop/tablet mockup on the right, a short introduction and a scroll action. Imagery is the proof.
FORM: Direct extension of the user-specified Whattaflow/BIM Taloro pattern. No visual-world replacement or concept seed is required. Signature interaction: select diary and questionnaire screens with their own captions; motion respects reduced motion.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Constraints: Italian and English, light and dark, mobile, visible focus, correct original logo, no patient screenshots or patient placeholders. Patient experience gets an explicit text-only mention and a promise to add images when publishable. The file chatbot.png shows human communication, not evidence of an AI assistant. No invented tests, quantitative results, compliance guarantees, architecture details or ownership of the official website.

## Completion evidence

- Production build succeeds; existing Vite bundle-size advisory remains.
- Browser checks at 1440px, 768px and 390px cover Italian/English and light/dark; no JavaScript errors, broken images or horizontal overflow. Diary/questionnaire selectors, keyboard activation, scroll action, portfolio navigation and live language/theme switching passed.
- Independent finish review: ship; all five identified corrections scored resolved (portfolio logo contrast, tablet technical layout, diary copy, English UX wording, website-preview caption).
- Documentation check: ordinary extension; existing DESIGN.md and .impeccable/design.json preserved. Their pre-existing palette drift was recorded without changing the portfolio system.
- All nine supplied PNGs carry embedded source provenance. RGBA pixel hashes verified identical before/after metadata annotation; the SVG logo is unchanged.
- Final captures and checks: .impeccable/review/arianne/.

## User-directed copy refinement

The user removed the institutional collaboration aside and the role slogan. Collaboration remains as factual attribution in the short role description. The Figma contribution now names component variants, variables and tokens as support for implementation, per the user's correction. Feature copy uses ordinary paragraphs and concrete screen names; the home section describes appointments and patients without an unrelated frontend-routing claim. Screenshot captions use sentence case, remain centered directly below their figures on desktop/tablet, and are hidden at 700px and below. Frontend reasoning remains in component reuse and the Next.js/shadcn/ui section. The original palette, hero, logo, patient constraint and official link are preserved.

Revision evidence: .impeccable/review/arianne-copy-revision/ contains 1440px Italian/light, 390px Italian/dark and 768px English/light captures. Browser checks confirm removed phrases absent, captions centered or hidden as requested, no errors or overflow, and functioning diary selection. Build succeeds with the existing bundle-size advisory. DESIGN.md and the sidecar remain outside this refinement's write scope.

Independent revision review: ship, no material findings in the revised source and three captures. Documentation check confirms no global system changes. User-replaced screenshots retain their original pixels/transparency; source metadata was restored where missing.

## Brand and portfolio update

User specifies Arianne logo #FF8C42 in light mode and white in dark mode. The original white SVG is preserved; logo-orange.svg changes only path fill. Both the hero and portfolio entry use theme-specific assets on the incumbent neutral surfaces. Arianne prose adds selective semantic strong emphasis without changing factual content. User confirms GitHub and CI/CD in all five professional projects; all localized stack lists now include them. BIM Taloro, Penguin and CrowdIT are marked App mobile, have an explicit filter and preview real phone screenshots. Downscaled previews in public/assets/project-previews keep original assets untouched and carry source provenance. Current captures/checks: .impeccable/review/project-updates/.

Update completion: independent finish review returned ship with no material findings. Documentation check preserves global design files. Exact orange fill, theme variants, mobile filter (three apps), professional filter (five projects), keyword emphasis and all localized CI/CD entries were verified. Production build and whitespace checks pass.

## Latest correction: original previews and motion

User rejects replacing portfolio preview images: restore the original BIM Taloro logoport.png, Penguin logo.png and CrowdIT logo.svg and their original containment/wells. Keep the App mobile filter and ordinary tag, with the same font weight as all peers (400), no special mobile styling. The temporary phone thumbnails and their presentation rules are removed. This supersedes the previous preview amendment.

Arianne motion follows the established Penguin/CrowdIT language: sequential hero entrance (logo, title, description, action; paired desktop/tablet mockup), then one-time 48px/opacity scroll reveals with 1s duration, 22% viewport trigger and short capped stagger. Text and screen enter in pairs; selection fades/rises briefly. All spatial motion disables for prefers-reduced-motion, with offscreen content immediately visible. Use existing Framer Motion only; no scroll handlers, loop or new dependencies.

Browser samples at 1440px and 390px demonstrate opacity0/y48 before viewport, intermediate opacity~0.58/y20, then opacity1/transformnone; the 768px reduced-motion English case stays opacity1/none throughout. All filter computed weights are400, three restored logo sources verified, zero errors/overflow, all sections reveal and selectors still work. Build passes. Captures: .impeccable/review/arianne-motion/.

Final motion/restoration review: ship, no material findings. Documentation preserves global system files; task-local Penguin/CrowdIT preview descriptions were reconciled with restored logos.

Latest user correction: the Arianne page hero uses one original white logo in both themes. This overrides theme-dependent color for the hero only; the portfolio entry retains its orange/light and white/dark variants. Existing entrance motion is preserved. Build and source checks pass.

Latest hero trial supersedes the white-logo correction: the user requests the Arianne primary orange (#FF8C42) wordmark in the right column, above the existing desktop/tablet mockup. Their follow-up aligns its right edge with the rightmost monitor. The hero groups the orange logo and mockup together, with a 2rem gap on desktop and 1.5rem on mobile. At narrow widths the visual group follows the introduction. Existing entrance motion and reduced-motion handling are preserved. Production build, layout scan, light/dark desktop inspection and 390px mobile inspection pass; no horizontal overflow.
