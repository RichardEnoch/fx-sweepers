# Fx Sweepers — Website Build Context (for Claude Design / Claude Code)

> **Purpose:** This is the single source of truth for building the Fx Sweepers website — a 5-page site. It combines (a) the confirmed client brief, (b) the Fx Sweepers brand, and (c) structure/interaction patterns extracted from a reference site we admire, sweepingcorp.com. **The reference is for patterns and quality only — do NOT copy its content, copy, layout, or assets. Everything here is built original for Fx Sweepers.**

---

## 1. THE BRAND (use everywhere)

- **Name:** Fx Sweepers
- **Tagline:** *The Future of Outdoor Sweeping*
- **What they are:** A commercial outdoor cleaning company — a fleet of **electric, machine-powered sweepers** delivering spotless results for gas stations, malls, estates, and commercial spaces **nationwide (Nigeria)**. They **also sell the cleaning machinery and equipment** itself.
- **Positioning:** Cleaning *infrastructure*, not a cleaning crew. B2B. Wins corporate contracts. Eco-friendly via the electric fleet.
- **Audience:** Facilities managers, procurement officers, estate executives, chain-business decision-makers. Business-credible, not consumer-cute.
- **Personality:** Premium, professional, trustworthy, clean, modern, innovative. Nothing loud, nothing murky.
- **Mission:** Bring the Nigerian cleaning industry to a world-class stage.

### Brand visual system (already designed — match the logo/guideline)
- **Colour:** **Blue leads (dominant)** — Fx Blue (teal-blue, ~#1B9AC9). **Green accent** (~#7AC143) carries the eco story. Navy (~#0A2E4A) for depth/dark sections. Ice/pale-cyan (~#E1F5FF) and white for light space. Black for text. **Blue must stay dominant over green everywhere.**
- **Type:** Primary **Elms Sans** (display + headings + body). Fallback Outfit. *(Note: the reference site pairs a condensed industrial display face with Outfit body — we achieve the same "industrial-but-clean" feel with Elms Sans display + Outfit fallback.)*
- **Logo:** three approved lockups (horizontal, stacked, icon) — to be supplied as assets. Use horizontal in the header, icon as favicon/avatar.

---

## 2. THE 5 PAGES (sitemap)

1. **Home** — brand-led landing; funnels to "Request a Quote."
2. **About** — credibility, scale, the electric/eco story, why Fx Sweepers.
3. **Services** — what they do (the sweeping services), with the **machine + cleaning-process videos** living here as the specialty section.
4. **Equipment / Products** — the machinery they sell, presented like a catalogue/showroom.
5. **Contact** — quote/enquiry form + details; routes corporate enquiries.

**Global nav:** Logo left; Home · About · Services · Equipment · Contact; right side = phone (click-to-call) + a persistent green **"Request a Quote"** button. Sticky header that is **transparent over the hero, then turns solid on scroll** (reference pattern — clean and premium). Mobile: hamburger → full menu, quote button stays visible.

**Footer:** Logo + tagline, contact (phone, email, address), service-area note (Nationwide), social icons, quick links to all 5 pages, copyright. Dark (navy) multi-column.

---

## 3. PAGE-BY-PAGE STRUCTURE

### 3.1 HOME
1. **Hero** — full-bleed. Headline (e.g. *"The Future of Outdoor Sweeping"* or a benefit line), one line of sub-copy, primary CTA "Request a Quote" + secondary "Our Services". Media: **hero image/video of an Fx Sweepers electric truck in action** (client supplies; until then, a strong placeholder). Subtle "scroll down" hint. Sticky transparent nav over it.
2. **Services snapshot** — 3 cards (the core service types). **Each card uses a short looping video that swaps to a second clip on hover** (reference pattern — achievable with real fleet footage, no 3D needed). Card → links to that service on the Services page.
3. **Trust bar** — "A registered limited liability company" + any certifications/associations/partner logos as they come. Builds B2B credibility early.
4. **Who we are (intro)** — short paragraph on the electric, machine-powered, eco positioning; CTA "About Us →".
5. **Stats band** — animated number counters (e.g. sites cleaned, vehicles in fleet, areas served, years/contracts) over a band of real fleet photos. *(Counters roll up on scroll — see interactions.)*
6. **Specialty / how it works** — the electric-fleet + cleaning-process story; teaser to the machine videos on Services.
7. **Equipment teaser** — "We also supply the machines" — a strip pointing to the Equipment page (this is a differentiator the reference doesn't have; lean into it).
8. **Big CTA / lead form** — "Partner with Fx Sweepers" — short multi-field enquiry form (Name, Company, Role, Email, Phone, Message) → submits to their email. Green submit.
9. **Footer.**

### 3.2 ABOUT
1. Full-bleed hero photo + overlay headline ("Sweeping Nigeria Forward" or similar).
2. **Who We Are** — split (photo + copy): the company, nationwide reach, registered entity.
3. **What We Do** — split (photo + copy): machine-powered sweeping + equipment sales, electric fleet.
4. **Why Fx Sweepers** — split (photo + bulleted list with green-dot/icon items): reliability, eco/electric, efficiency vs manual labour, consistency, scale ambition.
5. **Mission band** — the world-class-stage mission, large, on navy.
6. CTA + footer.

### 3.3 SERVICES
1. Full-bleed hero + headline ("Any Space, Any Scale" / similar).
2. **Service rows (stacked)** — each row split (image/video left, heading + description + arrow-link right), revealed one at a time on scroll. Rows = their actual service types (e.g. Gas Stations & Forecourts, Malls & Retail, Estates & Residential Complexes, Post-Construction, Industrial). *(Pull exact list from the brief's "focus" array.)*
3. **Specialty section — Machine & Process Videos** — the client's requested specialty: embedded videos of the machinery and the cleaning process. Prominent, gallery-style.
4. Inline/sticky **"Get a Quote" form** alongside content (reference's strongest conversion pattern — a sticky sidebar quote form on this page).
5. CTA + footer.

### 3.4 EQUIPMENT / PRODUCTS
1. Hero + headline ("The Machines Behind the Clean" / "Equipment for Sale").
2. **Product/catalogue grid** — each machine as a card: photo, name, one-line spec, "Enquire" button. (No e-commerce at launch — enquiry-based; online store is a roadmap/Platform feature.)
3. Optional **single-product detail** pattern for key machines (photo, specs, enquiry).
4. **RFQ / enquiry CTA** — "Request equipment pricing" form.
5. Footer.

### 3.5 CONTACT
1. Hero + "Contact" headline.
2. **Two-column:** left = enquiry form (Name, Company, Email, Phone, Message, enquiry type: service vs equipment); right = details card (phone, email info@fxsweepers.com, address, service area = Nationwide, hours) + a credibility badge.
3. Map or service-area note.
4. Footer.

---

## 4. INTERACTIONS & ANIMATION (the "premium feel" — match the QUALITY, build original)

Patterns worth reproducing from the reference (all achievable in a standard React/HTML + GSAP-or-CSS build — the reference itself is just WordPress + jQuery, so this is not heavy):

- **Sticky nav, transparent → solid on scroll** (logo colour swaps for contrast). Core premium signal.
- **Fade + slide-up reveals** on sections/cards as they enter the viewport — uniform timing for rhythm. This is the single biggest "feels designed" lever.
- **Animated number counters** that roll up when the stats band enters view.
- **Service cards with looping video + hover-swap to a second clip** (needs real fleet footage).
- **Stacked service/market rows that reveal one at a time** on scroll (lower rows dimmed until revealed).
- **Sticky inline quote form** on deep pages (Services/Equipment) so visitors convert without leaving.
- **Hover states everywhere** — buttons fill, cards lift, arrows slide, input focus underline turns brand-green.
- **Smooth scroll**, generous spacing, intentional motion discipline (don't over-animate).

**Phase-2 / aspirational (flag, do NOT block launch):** the reference's bespoke 3D/CGI truck choreography, drive-the-route telematics animation, and rotating facilities globe are premium but require rendered 3D assets and heavy build. **Not in the 5-page launch scope.** Note as a future enhancement. Launch leans on real photography/video + clean motion, which gets 90% of the feel at a fraction of the cost.

---

## 5. CONVERSION ARCHITECTURE (steal this — it's the smartest part of the reference)

- Persistent **"Request a Quote"** button + click-to-call in the header on every page.
- Hub-and-spoke: **Home → Services/Equipment overview → deep content → quote form.**
- **Inline sticky quote/RFQ form** embedded in Services and Equipment pages (highest-converting element).
- Home ends with a **"Partner with Fx Sweepers"** lead form.
- Contact page routes enquiries by type (service vs equipment purchase).
- Every page reinforces phone + quote.

---

## 6. IMAGERY (critical dependency)

- **Hero subject = the electric sweeper fleet in action.** Real photos/videos of Fx Sweepers' trucks, equipment, and crews at work are REQUIRED — they are 60% of why a site like the reference feels premium.
- Context shots: gas stations, malls, estates, before/after of cleaned spaces.
- Mood: bright, clean, professional, calm.
- **Until client supplies media:** build with clearly-marked placeholders sized correctly; do not ship stock that misrepresents the fleet.
- The machine-process **videos** are both a Services specialty section and the source for the home hero + service-card hover clips.

---

## 7. TECH NOTES (for Claude Code)

- **Stack:** React (Vite) + Tailwind, or clean HTML/CSS/JS — builder's choice; must be fast, mobile-first, SEO-ready (the reference is plain WordPress + jQuery, so nothing heavy is required to match it).
- **Animation:** GSAP + ScrollTrigger, or modern CSS scroll-driven animations + IntersectionObserver for reveals/counters. Keep it performant.
- **Forms:** submit to client email (e.g. EmailJS/Formspree or a small endpoint). No backend/database needed at launch — this is a static "Presence"-tier site (see the client's growth roadmap; booking/payments/portal are Platform-tier, later).
- **Hosting:** static deploy (Vercel) on fxsweepers.com; email hosting separate (WhoGoHost). No always-on server needed for launch.
- **Fonts:** embed Elms Sans (all weights) via @font-face; Outfit fallback.
- **SEO:** proper meta, OG tags, semantic headings, alt text, fast LCP on the hero.
- **Accessibility:** colour-contrast safe (blue/navy on white passes; check green-on-white for text — use green as accent, not body text).

---

## 8. HARD RULES
- Blue dominant over green, everywhere.
- Elms Sans primary; Outfit fallback.
- Original build — reference used for structure/interaction quality only, never copied.
- B2B tone — credible, premium, not consumer-cute.
- 5 pages only at launch; booking/payments/store/portal are documented future (Platform-tier) features, not launch scope.
- Real fleet imagery is a launch dependency — flag prominently if missing.
