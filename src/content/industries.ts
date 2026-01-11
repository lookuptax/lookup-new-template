export interface IndustryContent {
  slug: string;
  title: string;
  hero: {
    headline: string;
    subheadline: string;
  };
  pain: {
    heading: string;
    description: string;
    example: string;
  };
  fix: {
    heading: string;
    techStack: string;
    description: string;
    visual?: string;
  };
  compliance: {
    heading: string;
    regulations: Array<{ name: string; description: string }>;
  };
  dataDictionary: {
    heading: string;
    description: string;
    taxIds: Array<{ type: string; importance: string }>;
  };
  relatedUseCases: Array<{ slug: string; title: string; description: string }>;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const industries: IndustryContent[] = [
  {
    slug: 'saas-tax-validation',
    title: 'SaaS Tax Validation',
    hero: {
      headline: 'Stop Leaking Revenue at Checkout. Automate Global SaaS Tax Compliance.',
      subheadline:
        'Instantly distinguish between B2B and B2C customers. Validate Tax IDs (VAT, GST, EIN) in real-time to apply the correct Reverse Charge logic—plus use validated Tax IDs as customer location evidence for tax compliance.',
    },
    pain: {
      heading: 'The "Reverse Charge" Headache',
      description:
        'Selling software globally means navigating a complex web of tax rules. One wrong decision at checkout creates liability.',
      example:
        'The B2B Risk: If you charge VAT/GST to a valid business customer, you create friction and administrative refund nightmares. The B2C Risk: If you don\'t charge tax to a consumer because they used a fake Tax ID, you are liable to pay that tax out of pocket to the authorities. The Audit Risk: Storing invalid tax numbers in your billing system (Stripe, Chargebee, Recurly) flags you for audits in the EU, India, and Australia.',
    },
    fix: {
      heading: 'Intelligent Validation for Your Billing Stack',
      techStack: 'Stripe, Chargebee, Recurly, Paddle',
      description:
        'Lookuptax sits silently in your checkout flow. Before you create a subscription or process a charge, we verify the customer\'s tax status in <200ms.',
      visual: 'Customer Enters ID → Real-Time Validation → Data Enrichment → Logic Execution',
    },
    compliance: {
      heading: 'Sell Everywhere. We Have You Covered.',
      regulations: [
        {
          name: 'Europe',
          description: 'EU VAT (VIES), UK VAT (HMRC) - Real-time validation across 27+ countries',
        },
        {
          name: 'North America',
          description: 'US EIN validation with syntax checks, Canadian BN format verification',
        },
        {
          name: 'Asia Pacific',
          description: 'Indian GST, Australian ABN, Singapore GST - Government portal integration',
        },
        {
          name: 'Rest of World',
          description: '100+ countries supported with database or format validation',
        },
      ],
    },
    dataDictionary: {
      heading: 'Built for Checkout Performance',
      description: 'Your engineering team will love us. We handle the complexity of connecting to 100+ government portals so you don\'t have to.',
      taxIds: [
        { type: 'Fast Response', importance: 'Optimized for checkout speeds with quick API responses' },
        { type: 'High Availability', importance: 'We handle government portal downtime gracefully. Learn more about our approach' },
        { type: 'Clean JSON API', importance: 'Simple integration with validity status, company name, and address' },
        { type: 'Location Evidence', importance: 'Validated Tax IDs serve as customer location proof for tax authorities' },
        { type: 'Audit Trail', importance: 'Consultation numbers provided as proof of verification for tax authorities' },
      ],
    },
    relatedUseCases: [
      {
        slug: 'customer-signup-tax-validation',
        title: 'Customer Signup Validation',
        description: 'Validate tax status during account creation to distinguish B2B vs B2C from day one',
      },
      {
        slug: 'invoice-validation',
        title: 'Invoice Validation',
        description: 'Pre-check Tax IDs before invoicing to prevent VAT errors',
      },
      {
        slug: 'cross-border-tax-compliance',
        title: 'Cross-Border Compliance',
        description: 'Handle international tax requirements and "Customer Location Evidence" rules',
      },
    ],
    seo: {
      title: 'SaaS VAT & GST Validation API | Automate Reverse Charge Compliance',
      description:
        'Automate B2B vs. B2C tax logic at checkout. Validate VAT, GST, and EIN numbers in real-time to ensure global tax compliance for your SaaS.',
      keywords:
        'SaaS tax validation, VAT validation for SaaS, GST compliance, reverse charge, Stripe tax validation, global SaaS compliance, B2B tax verification',
    },
  },
  {
    slug: 'marketplace-tax-verification',
    title: 'Marketplace Tax Verification',
    hero: {
      headline: 'Onboard Verified Sellers. Block Fraud. Automate Compliance.',
      subheadline:
        'The all-in-one KYB (Know Your Business) API for marketplaces. Verify Seller Tax IDs, Business Status, and Legal Addresses in real-time across 100+ countries.',
    },
    pain: {
      heading: 'Scaling Your Marketplace Creates Compliance Debt',
      description:
        'As your platform grows, so does the risk of fraudulent sellers and regulatory fines. Manual verification doesn\'t scale.',
      example:
        'The "Fake Seller" Problem: Fraudsters use fake business details to list counterfeit goods or launder money. The Regulatory Squeeze: New laws like DAC7 (EU) and the INFORM Consumers Act (US) force you to collect and verify seller Tax IDs or face massive fines. Payout Liability: If you pay a seller who provided an invalid 1099 or VAT number, your platform is often on the hook for the unpaid taxes.',
    },
    fix: {
      heading: 'Automate Your "Know Your Business" (KYB) Flow',
      techStack: 'Stripe Connect, Mirakl, Sharetribe, Mangopay',
      description:
        'Don\'t let compliance slow down your Gross Merchandise Value (GMV). Integrate Lookuptax into your seller onboarding flow.',
      visual: 'Seller Sign-Up → Instant Validation → Risk Decision → Audit Trail',
    },
    compliance: {
      heading: 'Built for the New Regulatory Landscape',
      regulations: [
        {
          name: 'USA: INFORM Consumers Act',
          description: 'Verify high-volume seller Tax IDs to support INFORM compliance requirements',
        },
        {
          name: 'EU: DAC7 Directive',
          description: 'Automatically collect and validate VAT numbers for all EU sellers to meet annual reporting requirements',
        },
        {
          name: 'USA: IRS 1099-K',
          description: 'Validate seller Tax IDs before year-end tax form generation',
        },
      ],
    },
    dataDictionary: {
      heading: 'APIs Built for Platform Scale',
      description: 'Whether you have 100 sellers or 100,000, our infrastructure scales with you.',
      taxIds: [
        { type: 'Bulk Validation Endpoint', importance: 'Clean your entire existing seller database with CSV or batch API requests' },
        { type: 'Real-time API', importance: 'Instant validation during seller onboarding flow' },
        { type: 'Business Details', importance: 'Returns registered business name and address where available' },
        { type: 'Status Verification', importance: 'Check if Tax ID is active or inactive' },
        { type: 'Audit Trail', importance: 'Store validation results as proof of due diligence' },
      ],
    },
    relatedUseCases: [
      {
        slug: 'seller-onboarding-tax-validation',
        title: 'Seller Onboarding',
        description: 'Verify sellers in seconds, not days with automated KYB checks',
      },
      {
        slug: 'bulk-tax-id-validation',
        title: 'Bulk Validation',
        description: 'Clean your entire seller database with batch processing',
      },
      {
        slug: 'cross-border-tax-compliance',
        title: 'Cross-Border Compliance',
        description: 'Handle international marketplace regulations and IOSS validation',
      },
    ],
    seo: {
      title: 'Marketplace Seller Verification API | Global KYB & DAC7 Compliance',
      description:
        'Automate seller onboarding with real-time Tax ID and Business verification. Compliant with DAC7, INFORM Consumers Act, and IRS 1099-K.',
      keywords:
        'marketplace tax verification, DAC7 compliance, 1099-K validation, seller verification, EIN validation, VAT verification for marketplaces, KYB API, INFORM Consumers Act',
    },
  },
  {
    slug: 'fintech-kyb-tax-id',
    title: 'Fintech KYB & Tax ID Verification',
    hero: {
      headline: 'Zero-Friction Merchant Underwriting',
      subheadline:
        'Automate your KYB (Know Your Business) and AML checks. Verify global Tax IDs and business registration data in real-time to onboard merchants in seconds, not days.',
    },
    pain: {
      heading: 'Manual Underwriting Kills Growth',
      description:
        'Fintechs live or die by their onboarding speed. But strict AML laws force you to slow down.',
      example:
        'The "3-Day" Delay: Traditional merchant verification takes 3-5 days of manual document review. You lose customers to faster competitors like Stripe. The Compliance Minefield: Missing a sanctioned entity or verifying a "Shell Company" can lead to massive fines under the Bank Secrecy Act (BSA) or EU 6AMLD. The "B-Notice" Trap: If you onboard a merchant with a mismatched EIN/Name, your year-end 1099-K reporting will fail, triggering IRS penalties.',
    },
    fix: {
      heading: '"Invisible" Compliance for Your Payment Flow',
      techStack: 'Plaid, Onfido, Stripe Identity, Sumsub',
      description:
        'Lookuptax replaces your manual compliance team with a single API call. Verify business name, Tax ID, and registry status instantly.',
      visual: 'Data Capture → Registry Ping → Sanity Check → Instant Decision',
    },
    compliance: {
      heading: 'Audit-Ready Global Coverage',
      regulations: [
        {
          name: 'USA (IRS & FinCEN)',
          description: 'EIN validation with syntax verification for CIP (Customer Identification Program) compliance',
        },
        {
          name: 'Europe (AML Directives)',
          description: 'Validate VAT numbers and cross-reference VIES data to ensure the business is economically active',
        },
        {
          name: 'India (RBI Guidelines)',
          description: 'Real-time GSTIN and PAN validation for Payment Aggregator (PA/PG) compliance',
        },
        {
          name: 'Australia (ABN)',
          description: 'ABN Lookup for merchant validity and business status verification',
        },
      ],
    },
    dataDictionary: {
      heading: 'Built for Mission-Critical Underwriting',
      description: 'When you process payments, downtime is not an option. Our infrastructure is built for reliability.',
      taxIds: [
        { type: 'Real-time API', importance: 'Instant validation during merchant onboarding' },
        { type: 'Standardized Data', importance: 'Clean, unified JSON structure from global registry data' },
        { type: 'Live Data', importance: 'We query government sources directly, not stale databases' },
        { type: 'Business Details', importance: 'Returns registered name, address, and status where available' },
        { type: 'Multi-jurisdictions', importance: 'Verify businesses across 100+ countries from a single API' },
      ],
    },
    relatedUseCases: [
      {
        slug: 'seller-onboarding-tax-validation',
        title: 'Merchant Onboarding',
        description: 'Accelerate underwriting with automated business verification and risk scoring',
      },
      {
        slug: 'bulk-tax-id-validation',
        title: 'Bulk Validation',
        description: 'Validate acquired customer portfolios at scale',
      },
      {
        slug: 'cross-border-tax-compliance',
        title: 'Cross-Border Payments',
        description: 'Verify tax status for international merchant payouts and compliance',
      },
    ],
    seo: {
      title: 'Fintech KYB API | Automated Merchant Underwriting & Tax Verification',
      description:
        'Accelerate merchant onboarding with real-time Business Verification and Tax ID checks (EIN, VAT, GST). Compliant with AML, CIP, and global KYB regulations.',
      keywords:
        'fintech KYB, tax ID verification, business verification, EIN validation, AML compliance, KYC enhancement, payment processor verification, merchant underwriting, CIP compliance',
    },
  },
  {
    slug: 'ecommerce-vat-validation',
    title: 'E-commerce VAT Validation',
    hero: {
      headline: 'Stop VAT Fraud at Checkout for Cross-Border E-commerce',
      subheadline:
        'Validate B2B customer VAT numbers in real-time. Apply correct tax rates and prevent fraud—all before order confirmation.',
    },
    pain: {
      heading: 'The E-commerce VAT Problem',
      description:
        'Selling physical goods across borders? Invalid VAT numbers mean charging wrong tax rates, losing to fraud, and facing compliance audits.',
      example:
        'An e-commerce store processes a €10,000 B2B order with an invalid VAT number, charges 0% VAT under reverse charge, then gets audited and owes €2,000 plus penalties.',
    },
    fix: {
      heading: 'Built for E-commerce Platforms',
      techStack: 'Shopify, WooCommerce, Magento, BigCommerce',
      description:
        'Integrate Lookuptax at checkout. Validate VAT numbers, verify business addresses, and apply correct tax treatment automatically.',
      visual: 'Customer enters VAT → Validated in <1s → Correct tax applied',
    },
    compliance: {
      heading: 'Key Regulations Solved',
      regulations: [
        {
          name: 'EU VAT E-commerce Rules (2021)',
          description: 'OSS/IOSS schemes and cross-border VAT compliance',
        },
        {
          name: 'UK VAT (Post-Brexit)',
          description: 'Separate VAT validation for UK business customers',
        },
        {
          name: 'Distance Selling Rules',
          description: 'Threshold monitoring and VAT registration requirements',
        },
        {
          name: 'Import One-Stop Shop (IOSS)',
          description: 'VAT collection for imports under €150',
        },
      ],
    },
    dataDictionary: {
      heading: 'Tax IDs for E-commerce',
      description: 'Essential validation for cross-border retail:',
      taxIds: [
        { type: 'EU VAT Numbers', importance: 'Required for B2B sales and reverse charge' },
        { type: 'UK VAT Number', importance: 'Separate validation post-Brexit' },
        { type: 'Norwegian MVA', importance: 'Needed for Nordic e-commerce' },
        { type: 'Swiss UID/VAT', importance: 'Essential for Swiss market compliance' },
        { type: 'Australian ABN', importance: 'Critical for B2B e-commerce down under' },
      ],
    },
    relatedUseCases: [
      {
        slug: 'customer-signup-tax-validation',
        title: 'Checkout Validation',
        description: 'Validate VAT at the point of purchase',
      },
      {
        slug: 'invoice-validation',
        title: 'Invoice Validation',
        description: 'Pre-check Tax IDs before B2B invoicing',
      },
      {
        slug: 'bulk-tax-id-validation',
        title: 'Bulk Validation',
        description: 'Clean up customer databases for compliance',
      },
    ],
    seo: {
      title: 'E-commerce VAT Validation | Shopify Tax ID Verification | Lookuptax',
      description:
        'Validate VAT numbers at e-commerce checkout. Real-time verification for Shopify, WooCommerce, Magento. Prevent fraud, ensure compliance.',
      keywords:
        'ecommerce VAT validation, Shopify tax validation, WooCommerce VAT check, cross-border VAT, reverse charge validation, B2B tax verification',
    },
  },
];
