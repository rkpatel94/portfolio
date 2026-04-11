# Design System Strategy: The Architect’s Portfolio

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Blueprint"**

To represent a Senior React Developer and Team Lead, the design system must move beyond a simple "gallery" and into the realm of a high-end, engineered artifact. We are not just displaying code; we are showcasing a philosophy of structure, leadership, and technical precision.

This system breaks the "template" look by using **Intentional Asymmetry** and **Tonal Depth**. By avoiding rigid, centered grids in favor of editorial layouts—where headlines might bleed into the margin or cards overlap slightly—we convey a sense of bespoke craftsmanship. The experience should feel like a sophisticated IDE meets a premium technology journal: dark, focused, and impeccably organized.

---

### 2. Colors: Depth Over Definition
Our palette is rooted in the depth of `surface` (#060e20), using shifts in tone rather than physical lines to define space.

*   **The "No-Line" Rule:** Explicitly prohibit 1px solid borders for sectioning. Boundaries are created through background shifts. For example, a "Work Experience" section using `surface-container-low` sits directly against the `surface` background. The transition itself is the divider.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of nested physical layers. 
    *   Base layer: `surface`
    *   Section containers: `surface-container-low`
    *   Interactive elements: `surface-container` or `surface-container-high`
*   **The "Glass & Gradient" Rule:** To achieve a "tech-forward" soul, main CTAs and hero elements should utilize a linear gradient from `primary` (#39b8fd) to `primary-container` (#1faaef). 
*   **Signature Textures:** Use `surface-variant` for subtle backdrop shapes behind text to create a "glow" effect, mimicking the ambient light of a high-end monitor.

---

### 3. Typography: Editorial Authority
We utilize a high-contrast scale to separate technical documentation from high-level leadership narratives.

*   **Display (Space Grotesk):** Used for "The Big Idea." Large, bold, and slightly wide, these headers convey authority and modernism.
*   **Body (Inter):** Used for long-form thought leadership and project descriptions. Its neutral character balances the aggressive nature of the display type.
*   **Labels (Manrope):** These are our "metadata" fonts. Used for skills and dates, they feel functional and precise.

**Hierarchy Strategy:** 
Pair `display-lg` for hero titles with `body-lg` for subtexts. Ensure a significant jump in scale (at least 2x) between headlines and body text to maintain an editorial, premium feel.

---

### 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too heavy for a "tech" aesthetic. Instead, we use light and transparency.

*   **The Layering Principle:** Depth is achieved by stacking. A project card should be `surface-container-lowest`. When hovered, it transitions to `surface-container-highest`. This creates "lift" through light, not shadow.
*   **Ambient Shadows:** If a floating effect is required (e.g., a mobile navigation menu), use a shadow color tinted with `surface-tint`.
    *   *Spec:* `0px 20px 40px rgba(57, 184, 253, 0.08)`
*   **The "Ghost Border" Fallback:** For accessibility on interactive inputs, use a "Ghost Border": `outline-variant` at 15% opacity.
*   **Glassmorphism:** Use for floating navigation bars or "Sticky" headers.
    *   *Recipe:* Background: `rgba(6, 14, 32, 0.7)` | Backdrop-filter: `blur(12px)`.

---

### 5. Components

#### Buttons & Primary Actions
*   **Primary:** Gradient fill (`primary` to `primary-container`), white text, `full` roundedness. No border.
*   **Secondary:** Ghost style. No fill, `Ghost Border` (outline-variant at 20%), text in `primary`.
*   **Tertiary:** No border, no fill. Underline appears only on hover.

#### Project Cards
*   **Layout:** Forbid internal dividers. Use `surface-container-low` as the card base.
*   **Content:** Group project titles (`title-lg`) with a 1.5rem gap from the description (`body-md`).
*   **Interactions:** On hover, the card background should shift to `surface-container-highest` with a subtle scale up (1.02x).

#### Skill Badges (Pills)
*   **Style:** `full` roundedness scale. 
*   **Colors:** `secondary-container` background with `on-secondary-container` text.
*   **Scale:** Use `label-md` for text.

#### The "Leadership" Timeline
*   **Structure:** A vertical line using `outline-variant` at 20% opacity. 
*   **Markers:** Use a `primary` dot for current roles and `outline` circles for past roles. Avoid heavy boxes; let the whitespace between dates define the flow.

#### Input Fields
*   **Base:** `surface-container-highest`. 
*   **State:** On focus, transition the background to `surface-bright` and add a 1px `primary` "Ghost Border."

---

### 6. Do’s and Don’ts

**Do:**
*   **Use Asymmetric Padding:** Try 8rem padding on the left and 4rem on the right for hero sections to create a dynamic, modern feel.
*   **Embrace Whitespace:** If you think a section needs more content, try adding 2rem more whitespace instead. 
*   **Tint Your Greys:** Every "grey" in this system should have a hint of blue (`#dee5ff`) to keep the "midnight" atmosphere consistent.

**Don’t:**
*   **Don’t use 100% Black:** It kills the depth of the midnight blue. Stick to `surface-container-lowest` (#000000) only for the deepest shadows.
*   **Don’t use Dividers:** Avoid horizontal `<hr>` tags. Use a 4rem to 8rem gap between sections.
*   **Don’t Over-Animate:** Animations should be "snappy" (200ms-300ms) and use `cubic-bezier(0.2, 0, 0, 1)` for a high-end feel. Avoid bouncy, "playful" easing.