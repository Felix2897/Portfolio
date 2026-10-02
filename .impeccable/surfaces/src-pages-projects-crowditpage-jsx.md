---
version: 1
slug: "src-pages-projects-crowditpage-jsx"
primary_target: "src/pages/projects/CrowditPage.jsx"
related_targets: ["src/pages/projects/crowdit.css", "src/App.jsx", "src/sections/PortfolioSection.jsx", "src/i18n/it.js", "src/i18n/en.js"]
---

# CrowdIT case study

Mode: Experience. Route: /projects/crowdit (HashRouter). Inherit the existing Whattaflow, Penguin and BIM Taloro portfolio identity and composition as explicitly requested. No global design changes.

THESIS: Explain Andrea's UX/UI and mobile development decisions through supplied interfaces rather than sell CrowdIT.
OWN-WORLD: Archivo, Space Grotesk, existing theme tokens, editorial rules and shared Whattaflow CSS.
STORY: Event context, personal contribution in the shared wf-role-panel and digital twin attribution, before/during/after event, preference-based discovery with the hand image on the left, route comparison, Walking Bingo, technical rationale, external resources with the supplied login image.
FIRST VIEWPORT: A process-focused title with the updated supplied two-phone hero alongside it, with a wider image column; stacked on mobile. Hero is exactly 100vh. A button scrolls and focuses the project context without changing the router hash.
FORM: Alternating screenshot/prose sections. Hero entrance uses a 24px rise over 0.8s. Scroll reveals match Penguin: opacity 0 to 1, 48px rise, 1s duration, delayed viewport trigger and staggered text/image entrances. Reduced motion disables entrance and scroll reveals. Italian/English, both themes, centred home logo using the existing brand treatment.

Source: user-provided CrowdIT2.pptx and original assets/CrowdIT PNGs. Stack confirmed by slides 7–8: React Native, Expo, NativeWind, React Native Maps. Figma supplied by user. No measured outcomes or testing claims. Digital twin developed by other team members. News now uses the user-supplied https://crowd-it.azurewebsites.net/news/ URL. Project information still uses the ATON research page; the dedicated hostname linked by ATON failed DNS resolution during verification.

Images in public/assets/crowdit are proportionally resized web copies of the user's original mockups, preserving transparency and source artwork. Intentional local type sizes adapt established case-study typography to long bilingual headings. Existing DESIGN.md and sidecar drift remain outside scope.

## Initial finish evidence

Reviewer disposition: ship; no material fixes remain. Desktop (1440px) and mobile (390px) captures: `.impeccable/review/crowdit/desktop.png` and `.impeccable/review/crowdit/mobile.png`.

Browser verification confirmed all four case-study images loaded, no horizontal overflow at either width, and the home CrowdIT logo contained and centred with zero horizontal/vertical centre delta. The explore button preserves the router hash and focuses `ci-context`; the portfolio return link works. Italian, English, light and dark states were checked.

The requested logo PNG was absent from the supplied files, so the existing CrowdIT SVG remains the identity source. Optimized screenshot copies reduce the combined image payload from approximately 20 MB to 3.7 MB without changing the source compositions. ATON research remains the fallback for project information; the news link was replaced with the URL supplied by the user.

This is an established-world extension: global `DESIGN.md` and `.impeccable/design.json` remain unchanged. Their existing token/prose and sidecar drift is not canonized or repaired by this surface finish.

## Requested revision — 2026-10-02

User requested Penguin scroll motion, inherited contribution box, hand on the left, more caption separation, login image in the external resources section, larger hero visual and 100vh height. Revised captures in .impeccable/review/crowdit-revision. Browser measured hero1000px at1440×1000 and844px at390×844, zero horizontal overflow, all five images loaded and all headings/figures revealed after scrolling. Motion sampled opacity0 before entry, intermediate opacity0.426/translateY27.5px and opacity1 after settling. Captions40px below image on desktop and display:none on mobile. Native source hero dimensions remain5878×3394; wider desktop grid gives image805px at1440. Shared wf-role-panel reused without a bespoke box treatment. Build passed; browser console no warnings/errors.

Current reviewer disposition: ship; no material fixes remain. Current desktop and mobile captures: `.impeccable/review/crowdit-revision/desktop.png` and `.impeccable/review/crowdit-revision/mobile.png`. The revision supersedes the initial four-image finish evidence above. No global design tokens or sidecar changes were made.

## Closing refinement — 2026-10-02

The final closure uses the compact heading “Approfondimenti su CrowdIT” (“Explore the CrowdIT project” in English) and two stacked, ruled resource links with descriptive text. The generic introductory paragraph is removed. The supplied login image remains left of the resources on desktop and below them on mobile. Heading size is locally scoped to `clamp(1.75rem, 2.5vw, 2.6rem)`; resource links retain accent hover and visible keyboard focus.

Fresh reviewer disposition: ship; no material fixes. Build passes. Final closure captures at 1280×720 and 390×844: `.impeccable/review/crowdit-revision/closing-desktop.png` and `.impeccable/review/crowdit-revision/closing-mobile.png`. This entry supersedes the earlier closure treatment; the global design system and sidecar remain unchanged.

## Hero copy and image refinement — 2026-10-02

The current Italian title is “L’applicazione che accompagna le persone durante l’evento.” Hero copy now states Andrea’s flow/interface design and mobile development contribution, connecting routes, discovery and activities to the event journey. Both languages use selective semantic `strong` emphasis in prose, scoped to the inherited `--wf-ink` color at weight 700.

The desktop hero grid now uses .7fr/1.3fr columns, `clamp(1.5rem, 2.5vw, 3rem)` gap and 8rem/3rem vertical padding. Image height is capped at `calc(100vh - 11rem)`; the hero retains 100vh. These are local surface refinements, not global token changes.

Build and diff checks pass. Fresh reviewer disposition: ship with no material fixes within the covered scope. `.impeccable/review/crowdit-revision/hero-copy-mobile.png` records the actual 579×876 default browser viewport despite its filename. Viewport operations timed out, so this pass produced no new desktop or 390px capture; earlier captures do not verify this final hero revision at those widths. Global design documentation and sidecar remain unchanged.
