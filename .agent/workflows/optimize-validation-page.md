---
description: Guide to optimizing country tax ID validation pages for SEO using the Hub & Spoke strategy.
---

# Optimization Workflow for Validation Pages

Follow this strict guide to upgrade "thin" validation pages into high-utility SEO assets.

## 1. Preparation & Research

1.  **Search Web (Mandatory)**:
    *   Query: `validate [country] tax id keywords`, `check [country] company register`.
    *   Goal: Find local synonyms (e.g., "NIPT" vs "NUIS"), competitor titles, and native search terms.
2.  **Locate Documentation**:
    *   Search for the corresponding country guide in `../lookupapp/docs/tax-identification-number/`.
    *   *Example*: For `albania/nipt.astro`, find `albania.md`.
2.  **Extract Key Facts**:
    *   **Acronyms**: What is the local name? (e.g., NIPT, NUIS, RFC, SIRET).
    *   **Format**: What is the structure/regex? (e.g., "L12345678A" or "11 Digits").
    *   **VIES Status**: Is it an EU country on VIES? (Yes/No).
    *   **Official Source**: Where does the data come from? (e.g., QKB, Agenzia delle Entrate).

3.  **Research Long-tail Keywords**:
    *   Identify high-intent variations beyond just "validate".
    *   **Common Patterns**: "format", "example", "digits", "check online", "lookup", "regex".
    *   **Developer Intent**: "API", "python validation", "integration".
    *   *Action*: Integrate these phrases naturally into the "Understanding Format", "FAQ", and `metadata` sections.

## 2. Content Synthesis (The "Hub & Spoke" Model)

**CRITICAL: Anti-Duplication Rule**
*   **Docs (The Source)**: Long-form text, legal compliance, registration procedures.
*   **Validation Page (The Tool)**: Visuals, structured data, tool-specific tips.
*   **Rule**: Never copy paragraph prose from Docs. Convert text into **Visual Breakdowns**, **Tables**, or **Bullet Points**.

*   **Page Title**: `Validate [Country] [Tax ID Name] Online | Free [Acronym] Check Tool`
*   **Description**: `Instantly validate [Country] tax IDs ([Acronym]) online. Check format [Example] and status. [VIES check?] Use our API.`

### A. Format Visualization Section
Create a visual breakdown of the ID structure.
*   **Visual Pattern**: Use nested flexboxes to align labels under numbers.
    ```html
    <div class="flex gap-6 justify-center">
      <div class="flex flex-col items-center">
        <span class="text-3xl font-mono ...">[Part 1]</span>
        <span class="text-xs ...">[Label]</span>
      </div>
      <!-- Repeat for other parts -->
    </div>
    ```
*   **Content**: Explain what each part means (Year, Region, Checksum).

### B. Specific FAQs
Replace generic "How to use" FAQs with 3-4 specific high-intent questions:
1.  **Definition**: "What is [Acronym]?" (vs other IDs).
2.  **Verification Source**: "Can I check [Country] ID on VIES?" (Crucial for EU vs Non-EU).
3.  **Location**: "Where do I find a company's [Acronym]?" (Invoice, Website).
4.  **Cost**: "Is this validation free?" (Tool = Format Free, API = Real-time).

### C. Call to Action (CTA)
**Strict Requirement**: Use this exact dual-action structure.
*   **Primary**: `text: 'Sign Up for Free'`, `href: 'https://platform.lookuptax.com/auth?page=register'`
*   **Secondary**: `text: 'Read [Country] Tax Guide'`, `href: 'https://lookuptax.com/docs/tax-identification-number/[slug]'`

## 3. Implementation (Astro Template)

Use the following structure for `src/pages/validate/[country]/[id].astro`:

```astro
<Layout metadata={metadata}>
  <!-- 1. Tool Component -->
  <CountryTaxIdValidation ... />

  <!-- 2. Format Section -->
  <WidgetWrapper id="format">
    <Headline title="Understanding [Adjective] [ID] Format" ... />
    <!-- Visual Breakdown Here -->
  </WidgetWrapper>

  <!-- 3. FAQs -->
  <WidgetWrapper id="faq">
    <Headline title="Frequently Asked Questions" />
    <div class="grid ...">
      <!-- Specific FAQs Here -->
    </div>
  </WidgetWrapper>

  <!-- 4. CTA -->
  <CallToAction ... />

  <!-- 5. JSON-LD Schema -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [ ...strictly match visible FAQs... ]
    }
  </script>
</Layout>
```

## 4. Verification Checklist (Mandatory SEO Audit)

- [ ] **Visual Layout**:
    - [ ] Do labels in the "Format" section align perfectly using the `flex-col` pattern?
- [ ] **Metadata & Keywords**:
    - [ ] Does definition include the **10+ digit pattern** (e.g., `L00000000L`)?
    - [ ] Are **local synonyms** (e.g., NUIS vs NIPT) prominently featured?
- [ ] **Schema**:
    - [ ] Does the `application/ld+json` content strictly match the visible FAQs?
- [ ] **Links**:
    - [ ] Does the "Read Guide" link point to the correct live URL?
- [ ] **CTA**:
    - [ ] Is the primary CTA "Sign Up for Free"?
