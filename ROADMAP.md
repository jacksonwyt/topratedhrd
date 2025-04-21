# TopRatedHRD Website Rebuild Roadmap (topratedhrd2)

This document outlines the plan for rebuilding the TopRatedHRD website with a modern, futuristic, minimal aesthetic using Next.js and Tailwind CSS, based on the structure and content of the original Squarespace site.

**Goal:** Create a significantly improved, performant, and visually engaging website that reflects a modern home remodeling brand.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS.

--- 

## Phase 1: Foundation & Homepage (Initial Build)

**Goal:** Establish the project structure, create the basic layout (header, footer), and build the core structure of the homepage with placeholder content.

**Tasks:**
- [x] **Project Setup:** Initialize Next.js project with TypeScript, Tailwind CSS, ESLint. (Completed)
- [x] **Basic Layout:** Create `Header` and `Footer` components and integrate into `layout.tsx`. (Completed)
- [x] **Homepage - Hero Section:** Implement the main heading, tagline, and call-to-action button (using Shadcn UI Button). (Completed)
- [x] **Homepage - Services Highlights:** Add section using `AnimatedServiceCard` and dynamic data from `lib/data.ts`. (Completed, Icon component prop issue resolved)
- [x] **Homepage - Portfolio Sneak Peek:** Add placeholder section for featured projects. (Completed)
- [x] **Homepage - Why Us/Value Prop:** Add placeholder section for key differentiators. (Completed)
- [x] **Homepage - Final CTA:** Add concluding call-to-action section (using Shadcn UI Button). (Completed)
- [x] **Initial Styling:** Ensure basic Tailwind classes provide structure and readability. (Completed)
- [x] **Responsiveness Check:** Basic checks for mobile/tablet views. (Completed)

## Phase 2: Core Content Pages

*   [ ] **Service Pages (Approach TBD: dynamic `/services/[slug]` or single `/services` page):**
    *   *Status:* Still TBD. `/services/page.tsx` exists but needs content/design.
    *   *Services:* Kitchen Remodeling, Bathroom Remodeling, ADU/Room Addition, Roofing.
    *   *Content:* Migrate relevant text and information from reference below. Implement dynamic data fetching/display if using `[slug]` route.
    *   *Design:* Consistent, modern layout, utilizing high-quality imagery (Phase 3), clear descriptions, service-specific CTAs.
*   [~] **Portfolio Page (`/portfolio`):**
    *   [x] *Structure:* Basic page structure (`portfolio/page.tsx`) created.
    *   [~] *Content/Design:* Implemented interactive 3D gallery (`PortfolioGallery3D.tsx`) with inline preview and fullscreen modal toggle. Requires actual project images (Phase 3). Animations added and refined.
*   [x] **About Page (`/about`):**
    *   [x] *Structure:* Basic page structure (`about/page.tsx`) created.
    *   [x] *Content:* Migrated and structured content from reference below.
    *   [x] *Design:* Basic layout implemented. Focus on team, values, process.
*   [~] **Contact Page (`/contact`):**
    *   [x] *Structure:* Basic page structure (`contact/page.tsx`) created.
    *   [~] *Content/Design:* Implemented contact form structure using Shadcn UI components (`Input`, `Textarea`, `Label`, `Button`). Includes basic client-side validation state and simulated submission. Added contact details (email, phone, address).
    *   [ ] *Functionality:* Requires backend form submission implementation (Phase 3).
*   [x] **Privacy Policy Page (`/privacy`):**
    *   [x] *Structure:* Basic page structure (`privacy/page.tsx`) created.
    *   [ ] *Content:* Needs actual policy text.
    *   [x] *Design:* Simple text layout implemented.

## Phase 3: Assets & Functionality

*   [ ] **Image Strategy:**
    *   Review images from `topratedhrd/images/`.
    *   Select high-quality, modern images (stock or original) for the new design (especially for portfolio and service pages).
    *   Optimize all images using Next.js `<Image>` component.
    *   Organize images within `public/images/`.
*   [ ] **Favicon:**
    *   Create/obtain new favicons reflecting the modern brand.
    *   Implement using Next.js metadata conventions in `layout.tsx`.
*   [ ] **Contact Form Backend:**
    *   Choose method: Next.js API Route with a mailer service (e.g., Resend, SendGrid) or a third-party form service (e.g., Formspree).
    *   Implement chosen solution to receive form submissions.


## Phase 4: Refinement & Polish

*   [ ] **Animations & Transitions:**
    *   [~] Implement smooth page transitions (e.g., using Framer Motion). (Note: 3D Gallery has scroll-based animations).
    *   Add subtle micro-interactions and hover effects using Tailwind CSS and/or Framer Motion.
    *   Ensure animations enhance UX, not hinder it.
*   [ ] **Responsiveness:**
    *   Thoroughly test and refine layout across all device sizes (mobile, tablet, desktop).
*   [ ] **SEO Optimization:**
    *   Implement dynamic meta tags for each page (titles, descriptions).
    *   Consider adding Schema.org markup where appropriate.
    *   Ensure semantic HTML structure.
*   [ ] **Performance:**
    *   Leverage Next.js static/server rendering capabilities.
    *   Analyze bundle sizes and optimize.
    *   Ensure fast load times (LCP, FCP).
*   [ ] **Testing:**
    *   Cross-browser compatibility checks.
    *   Functionality testing (forms, links).
    *   Usability testing (optional).

--- 

**Notes:**
*   Decided to stay on React 19 due to dependency requirements from React Three Fiber ecosystem.
*   Standardizing UI components using Shadcn UI (Buttons implemented, Contact Form implemented).

--- 

**Next Steps:** Continue Phase 2 implementation (Service Pages content/structure) or begin Phase 3 (Image Strategy, Contact Form Backend).

--- Extracted Information Reference (Consolidated from OVERVIEWOLD.md) ---

### General Info & Contact
*   **Company Name:** Top Rated Home Remodel & Design
*   **License:** LIC. # 1090146
*   **Phone:** (888) 311-8899 (`tel:8883118899`)
*   **Email:** info@topratedhrd.com (`mailto:info@topratedhrd.com`)
*   **Address:** 5160 Mercury Point, Unit B - 2, San Diego, CA 92111
*   **Social Links:**
    *   Instagram: `https://www.instagram.com/topratedhrd/`
    *   Facebook: `https://www.facebook.com/profile.php?viewas=100000686899395&id=61566323230947`
    *   LinkedIn: `https://www.linkedin.com/in/topratedhrd/`
*   **Partners (Logos for Footer):**
    *   Hearth: `https://gethearth.com/`
    *   Owens Corning: `https://www.owenscorning.com/en-us`

### Page Content Snippets

#### About Page (`/about`)
*   **Headline:** About Us: Your Trusted Home Remodeling Experts in San Diego
*   **Core Message:** Trusted San Diego County expert (kitchen/bath focus). Comprehensive, tailored experience. 100+ years combined team experience. Covers all remodeling/building phases. Also specializes in roofing.
*   **Services Mentioned:** San Diego Home Remodeling, Kitchen Remodeling, Bath Remodeling, Roofing Services.

#### Kitchen Remodeling (`/services/kitchen-remodeling`)
*   **Metadata:**
    *   Title: `Kitchen Remodeling in San Diego, CA — Top Rated`
    *   Description: `Transform your kitchen with Top Rated Home Remodel and Design, Trusted kitchen remodeling experts. We design, supply, and build quality kitchens. Book your free consultation today!`
*   **Headings:** `Quality Kitchen Remodeling: From Design to Installation`, `Professional Contractors for your Kitchen Remodeling Projects`, `What Is Involved In a Kitchen Remodel?`, `About Top Rated Home Remodeling & Design`, `Comprehensive Kitchen Remodeling Services`, `Why Choose Top Rated HRD?`, `Contact Top Rated HRD`, `Frequently Asked Questions (FAQs)`
*   **Content:** Intro (100+ yrs experience), Involved (surfaces, floor, counters, cabinets, islands), About (leading company, tailored spaces), Services (update surfaces, flooring, counters/sinks, custom cabinets, islands/extra cabinetry), Why Choose (dedication, communication, expertise), Contact info.
*   **FAQs:** Timeline (4-12 wks), Design help (Yes, 3D renders), Staying home (Mostly yes).

#### Bathroom Remodeling (`/services/bathroom-remodeling`)
*   **Headings:** `Expert Bathroom Remodeling Services in San Diego`, `Looking for a Bathroom Remodeler in San Diego?`, `Why Choose Top-Rated HRD for Your Bathroom Remodel?`, `Client-Centric Approach`, `FAQ Section`
*   **Content:** Intro (all-inclusive, 100+ yrs experience, luxurious/functional), Services (custom design, high-quality fixtures/materials, expert install, project mgmt, tailored approach), Why Choose (all-inclusive, expert guidance, link to ADU), Client-Centric (communication, satisfaction, quality, trust).
*   **FAQs:** Timeline (4-6 wks avg), Custom design (Yes), Services included (concept-to-install).

#### Roofing (`/services/roofing`)
*   **Metadata:**
    *   Title: `Roofing in San Diego - Professional Services — Top Rated`
    *   Description: `Looking for reliable roofing services in San Diego? Top Rated HRD offers roof installation, repair, maintenance, and replacement with expert craftsmanship. Contact us for a free estimate today!`
*   **Content:** **NEEDS DESCRIPTIVE TEXT.** Currently only has FAQs.
*   **FAQs:** Lifespan (Asphalt 20-30yr, Tile/Metal 50+yr), Damage signs (leaks, missing shingles, etc.), Energy-efficient options (Yes), Warranties (Yes), Replacement time (Most residential few days).

#### ADU/Room Addition (`/services/adu-room-addition`)
*   **Content:** **NEEDS CONTENT.** None found in `OVERVIEWOLD.md`.

#### Privacy Policy (`/privacy`)
*   **Metadata:** Title: `Privacy Policy — Top Rated`
*   **Content:** **NEEDS ACTUAL POLICY TEXT.** None found in `OVERVIEWOLD.md`.

---

### Image References (Needs Sourcing/Verification)
*   About Page Hero? (`unsplash-image-IgpQ-nYh3Tk.jpg`)
*   Company Logo (`d9914b47-20d3-4584-ab8b-b957c73900a5-efjldmsdlfklg.png`, `efjldmsdlfklg.png`, `9ab69d6a-3fb9-4a47-9690-380a5afc51be-efjldmsdlfklg.png`) - *Consolidate/choose one*
*   Hearth Logo (`hearth logo.png`, `a4d9d612-dcbe-4f64-814f-d39ffbdf68ad-hearth+logo.png`) - *Consolidate/choose one*
*   Owens Corning Logo (`Owens_Corning_logo.svg.png`, `2819ecbc-273d-4a67-a606-5aec5c447e29-Owens_Corning_logo.svg.png`) - *Consolidate/choose one*
*   Kitchen Hero? (`images/1721884584618-FIVM5CPQ0BJ51QV89E4M-unsplash-image-T28LLOIuJj4.jpg`)
*   Kitchen Content? (`images/1721884191854-TNAZITS5LHEBDUGZZ1DZ-unsplash-image-Z8GlHfdn118.jpg` or URL `https://images.squarespace-cdn.com/.../unsplash-image-Z8GlHfdn118.jpg`)
*   Bathroom Image 1: `//images.squarespace-cdn.com/.../TRHRD_Bath1.jpg?format=1500w`
*   Bathroom Image 2: `//images.squarespace-cdn.com/.../TRHRD_Bath2.jpg?format=1500w`
