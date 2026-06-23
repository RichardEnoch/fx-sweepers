# Fx Sweepers — Immersive Build Plan (Option B: "Cinematic Hybrid")

> **Goal:** Transform the site from a clean, flat build into an immersive, premium B2B experience
> that surpasses sweepingcorp.com — using a strong motion system, real fleet video, and **two real
> 3D moments** (a spin-able sweeper in the hero + a drag-to-inspect 3D viewer on Equipment).
>
> **Team:** Just us. Richard = design direction + sourcing real assets (fleet video/photos, picking
> 3D models). Claude = 100% of the code, setup, wiring, and optimization.
>
> **Format:** Single-file Design Combinator build (`FX Sweepers.dc.html`) running on a React 18
> runtime (`support.js`). Reveals = IntersectionObserver on `data-reveal="1"`. Counters =
> `data-counter`/`data-target`. Third-party libs load via the `<helmet>` block and persist.

---

## ⚠️ Key technical realities (read once)
- **Video is not supported yet.** `image-slot` is images-only. We must build a video-capable media
  component before the hero video, service-card hover-swap, and video gallery can work. (Phase 2.)
- **Page switches re-render the DOM.** GSAP/ScrollTrigger must re-initialize when you change pages.
  We add a tiny bridge hooked to the runtime's page state. (Phase 1.)
- **`prefers-reduced-motion`** must instantly disable heavy motion (B2B accessibility). Built into
  the motion system from Phase 1.
- **Performance budget:** 3D models kept under ~2–3 MB (Draco-compressed). Hero LCP stays fast.

## 📦 Asset dependencies (what Richard sources)
| Asset | Needed for | Where | Status |
|---|---|---|---|
| Fleet **photos** (hero, sections, before/after) | Everything | Client | ☐ |
| Fleet **videos** (hero loop, 2 clips per service card, gallery) | Phases 2–5 | Client | ☐ |
| **Sweeper 3D model** (.glb) — hero | Phase 3 | [Sketchfab](https://sketchfab.com) / [CGTrader](https://www.cgtrader.com) | ☐ |
| **Equipment 3D models** (.glb) — key machines | Phase 6 | Sketchfab / CGTrader | ☐ |
| Fonts (Elms Sans + Outfit) | All | Client / Google Fonts | ☐ |
| Stock fallbacks (until real media) | Interim | [pexels.com](https://www.pexels.com) / [mixkit.co](https://mixkit.co) | ☐ |

> Until real media arrives we build with **clearly-marked placeholders + free stock** so progress
> never blocks on assets.

---

## 🗺️ The phases (in order — each builds on the last)

### Phase 0 — Foundation & setup ✅ DONE (code in; pending visual preview)
**Build:** Add GSAP + ScrollTrigger + Lenis + `model-viewer` via the `<helmet>` block. Create a
central motion config + a `prefers-reduced-motion` switch. Add the page-change re-init bridge.
**You provide:** nothing.
**Done when:** libs load, smooth scroll works, no console errors, reduced-motion kill-switch verified.
**Shipped:** `window.FXMotion` global API added to the `<helmet>` of `FX Sweepers.dc.html` —
exposes `.ready` (promise), `.gsap`, `.ScrollTrigger`, `.lenis`, `.reduced`, `.onPage(fn)`,
`.refresh()`. Loads libs in order from CDN, starts Lenis smooth scroll (off under reduced-motion),
and bridges React page swaps (MutationObserver on `#dc-root` → re-runs hooks + ScrollTrigger.refresh).
Idempotent; does not touch existing reveal/counter logic.

### Phase 1 — Global motion language ✅ DONE (code in; pending visual preview) `[#1 #2 #3 #4 #8]`
**Build:** Lenis inertia scroll; upgrade the single fade-reveal into a **tiered system** (headers
slide, cards stagger, images settle-from-scale); custom contextual cursor (desktop); magnetic
buttons on primary CTAs.
**Reference:** [obys.agency](https://www.obys.agency) · [dennissnellenberg.com](https://dennissnellenberg.com) · [cuberto.com](https://cuberto.com)
**Done when:** whole site feels weighted and choreographed; mobile + reduced-motion fall back cleanly.
**Shipped:** Second `<helmet>` script — (a) trailing custom cursor (difference-blend ring, grows on
interactive elements; desktop + motion-on only), (b) magnetic CTAs via `[data-magnetic]` (added to
header + hero CTAs; uses GSAP quickTo + elastic return), (c) reveal-stagger that cascades sibling
`[data-reveal]` elements (90ms steps, capped) on top of the existing CSS reveal system. Lenis
smooth scroll already enabled in Phase 0. All auto-off on touch + reduced-motion.

### Phase 2 — Video media engine ✅ DONE (placeholder clips) `[enables #9 #10 + gallery]`
**Build:** A video-capable media component (loop, muted, lazy, poster) + **hover-swap** support
(clip A idle → clip B on hover) for service cards.
**You provide:** fleet video clips (or we use stock temporarily).
**Reference:** [sweepingcorp.com](https://sweepingcorp.com) (their card hover-swap)
**Done when:** a slot can hold a looping video and swap on hover, mobile-safe (tap/poster fallback).
**Shipped:** `[data-fxv]` engine in `<helmet>` — base clip `[data-fxv-a]` lazy-loads + autoplays in
view, optional `[data-fxv-b]` crossfades on hover; sits over the `<image-slot>` poster so a missing
clip falls back gracefully; off under reduced-motion. Home service cards wired with **temporary
placeholder clips** (Google sample bucket) in the `homeServices` array — swap `clipA`/`clipB` URLs
for real fleet footage.

### Phase 3 — Home hero (the signature moment) ✅ DONE (placeholder model+clip) `[#5 #9 #8]`
**Build:** Masked per-line headline reveal; full-bleed fleet **video** background; **3D sweeper**
(`model-viewer`) that auto-rotates, tilts to cursor, and pushes in on scroll; magnetic CTA.
**You provide:** hero video + **pick the sweeper .glb** (I'll shortlist options).
**Decision:** 3D sweeper centrepiece (chosen). **Reference:** [modelviewer.dev](https://modelviewer.dev) · [apple.com/airpods-pro](https://www.apple.com/airpods-pro/)
**Done when:** hero loads fast, text wipes in, model spins/responds, all degrade gracefully.
**Shipped:** subtle video backdrop (placeholder clip) + auto-rotating, drag-to-spin **3D model**
(placeholder Khronos ToyCar via jsDelivr — swap `src` for a real sweeper .glb) positioned as the
right-side centrepiece (hidden < 1080px); Phase 3 script adds **pointer-tilt** + **scroll parallax**
(model pushes in, backdrop drifts, headline lifts/fades). Magnetic CTA from Phase 1. All off under
reduced-motion. **Deferred polish:** per-line masked headline reveal (kept the existing safe CSS
fade entrance to avoid a fragile blind rewrite — revisit during QA).

### Phase 4 — Home mid-sections ✅ DONE `[#10 #11 #12 #13]`
**Build:** Service cards = hover-swap video + cursor-follow spotlight; stats band = parallax bg +
enhanced count-up with underline draw; process section = pinned/sticky step sequence.
**Reference:** [linear.app](https://linear.app) · [apple.com/airpods-pro](https://www.apple.com/airpods-pro/)
**Done when:** cards swap clips, stats animate on view, process reads as a guided sequence.
**Shipped:** cursor-follow **spotlight glow** on `[data-spotlight]` (home service cards + process
step cards + equipment cards); **parallax drift** on the stats-band background image. Hover-swap
video came in Phase 2; count-up already in the app. **Deferred:** pinned horizontal process (#14)
and counter underline-draw — left for post-verification polish (higher blind-build risk).

### Phase 5 — Services page ✅ DONE (placeholder clips) `[#19 #20]`
**Build:** Stacked service rows that **dim/blur until active**; video gallery with a
**shared-element lightbox** (thumb expands into player) + custom Play cursor.
**Reference:** [apple.com/airpods-pro](https://www.apple.com/airpods-pro/) · [medium.com](https://medium.com) (image zoom)
**Done when:** rows reveal one-at-a-time, gallery opens cinematically, sticky quote still works.
**Shipped:** service rows `[data-svc-dim]` fade up from dim→full as they hit the active zone
(scrub); video **lightbox** (scale+fade overlay, Esc/click-out to close) on gallery thumbnails wired
with placeholder clips in `videoGallery`. Sticky quote untouched.

### Phase 6 — Equipment page (the differentiator) ✅ DONE (placeholder models) `[#16 #11]`
**Build:** Add a **drag-to-rotate 3D `model-viewer`** to key product cards (extend `equipment`
array with `modelSrc`); cursor spotlight on cards; optional detail modal.
**You provide:** **pick the equipment .glb models** (I'll shortlist).
**Reference:** [modelviewer.dev](https://modelviewer.dev) · [vercel.com](https://vercel.com) (grid)
**Done when:** buyers can spin a machine to inspect it; fallbacks to image where no model exists.
**Shipped:** first **3 machines** carry a drag-to-rotate `model-viewer` (placeholder Khronos
MilkTruck/ToyCar .glb — swap `model` URL per item) with a "Drag to rotate" badge + auto-rotate +
zoom disabled (so page scroll isn't hijacked); remaining machines use photos. Cards got the spotlight
glow. **Decision honoured:** 2–3 hero machines.

### Phase 7 — Forms & footer polish ✅ DONE `[#21 #22 #23]`
**Build:** Floating labels + green focus underline + inline validation + **animated checkmark
draw** on success; subtle animated aurora gradient in the navy footer.
**Reference:** [stripe.com](https://stripe.com)
**Done when:** all 4 forms (lead, quote, RFQ, contact) feel responsive and polished.
**Shipped:** global **green focus ring** on all inputs/textareas/selects; **animated checkmark draw**
on all 4 success states (`.fx-check-anim`); **animated aurora** gradient in the navy footer (off under
reduced-motion). **Deferred:** floating labels (would need restructuring every field — high blind
risk; revisit in QA with the browser open).

### Phase 8 — QA & ship
**Build:** Mobile pass, performance (LCP, model sizes, lazy-load), cross-browser, reduced-motion
audit, accessibility (contrast, focus order, alt text), SEO/OG meta.
**Done when:** fast and flawless on phone + desktop; ready to deploy to Vercel / fxsweepers.com.

---

## ✅ Decisions made
1. **Assets:** Build now with **placeholders + free stock** (Pexels/Mixkit); swap in real fleet media later.
2. **Hero direction (Phase 3):** **3D sweeper as the centrepiece** — spin-able model is the star, video is a subtle backdrop. (I'll shortlist .glb candidates before Phase 3.)
3. **Equipment 3D scope (Phase 6):** **2–3 hero machines** get the 3D viewer; polished photos for the rest.

## 🔧 Revision round 1 (client feedback — verified via headless browser)
- **Media now real**: local placeholder images auto-fill every slot; videos hosted locally (cross-origin
  ones were browser-blocked). Swap for real assets later.
- **Nav** fixed (top scrim for contrast; removed stray loader box). **Typography** softened 800→700.
- **Hero**: 3D model **removed** (video-led); now a **pinned cover** — the page rises OVER the hero,
  which then releases and scrolls away.
- **Footer**: **redesigned** (oversized "spotless" CTA, giant FX SWEEPERS watermark, stronger aurora)
  and now **revealed** as the body scrolls up off it (fixed footer).
- **Images**: split-section images enlarged to **4:5 portraits**.
- **Cards**: "What we sweep" now enter with a **scroll-scrubbed 3D rotate** (not a plain reveal).
- **Buttons**: magnetic + **subtle 3D tilt** on hover.
- Known benign console noise: a couple of `Unexpected token '-'` errors originate from the runtime/
  image-slot loader (pre-existing) — page renders fully; revisit if it ever causes a real failure.

## 🔧 Revision round 2 (client feedback — verified via headless browser)
- **Relevant media**: replaced random images with cleaning/street-sweeper photos (Unsplash, `assets/ph/u*.jpg`);
  hero now uses the client's generated `Hero Video.mp4`; one real Pexels cleaning clip for cards/gallery.
  A placeholder-filler auto-fills every empty image-slot.
- **All page heroes** fill the viewport (100vh); **footer** fills viewport.
- **Footer redesigned**: rounded inset container + corner dots, "Fx Sweepers" glow wordmark at the
  bottom with content above it (no overlap), very dark blue, animated entrance.
- **FAQ** accordion added on Home (native `<details>`).
- **Services** rebuilt: sticky **big image that swaps per service**, one service per screen, compact
  "Get a quote" (form moved below so it never blocks reading).
- **Cards** now pop in **one-by-one** (staggered 3D) instead of together.
- **Scroll progress bar** in the nav.
- **Split images** widened to large 4:5 portraits.
- **BLOCKED — Elms Sans**: no font files exist in the project (brand guideline itself uses Outfit).
  Need the client to drop `Elms-Sans-*.woff2` into `assets/fonts/`; then it's a 2-line @font-face swap.
  Using Outfit (the documented fallback) until then.

## 🔭 Parked for phase-2 (post-launch, from Option C)
Spline scroll-driven 3D scenes, telematics route animation, bento+FLIP equipment filtering,
full WebGL polish. Not in this build — revisit after Option B ships.
