export interface UseCaseContent {
  slug: string;
  title: string;
  hero: {
    headline: string;
    subheadline: string;
  };
  problem: {
    heading: string;
    description: string;
  };
  flow: {
    heading: string;
    steps: Array<{ number: number; title: string; description: string }>;
  };
  technicalFeature: {
    heading: string;
    description: string;
    highlights: string[];
  };
  roi: {
    heading: string;
    metrics: Array<{ label: string; value: string; description: string }>;
  };
  relatedIndustries: Array<{ slug: string; title: string; description: string }>;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const useCases: UseCaseContent[] = [
  {
    slug: 'seller-onboarding-tax-validation',
    title: 'Seller Onboarding',
    hero: {
      headline: 'Onboard Verified Sellers in Seconds, Not Days',
      subheadline:
        'A Global KYB (Know Your Business) solution. Verify tax status and business existence before you make a single payout.',
    },
    problem: {
      heading: 'The Manual Onboarding Bottleneck',
      description:
        "Manual document collection slows down seller activation. Fake merchants risk your platform's reputation and banking relationships. Traditional verification takes 3-7 days, losing you sellers to competitors.",
    },
    flow: {
      heading: 'How It Works',
      steps: [
        {
          number: 1,
          title: 'Seller Enters Tax ID',
          description: 'During sign-up, seller provides their business Tax ID (EIN, VAT, GSTIN, etc.)',
        },
        {
          number: 2,
          title: 'Real-Time Validation',
          description: 'Lookuptax pings the government database in <1 second',
        },
        {
          number: 3,
          title: 'Status Confirmation',
          description: 'Receive Active/Inactive status and additional business details',
        },
        {
          number: 4,
          title: 'Instant Approval',
          description: 'Approve seller for payouts automatically or flag for manual review',
        },
      ],
    },
    technicalFeature: {
      heading: 'Smart Verification Features',
      description: 'Built-in intelligence for accurate seller verification:',
      highlights: [
        'Instant Tax ID validation against official government databases',
        'Support for 100+ countries (VAT, EIN, GSTIN, ABN, and more)',
        'Returns registered business name where available from public official sources',
        'Batch processing for onboarding multiple sellers at once',
        'Audit trail for compliance documentation',
      ],
    },
    roi: {
      heading: 'Business Impact',
      metrics: [
        {
          label: 'Onboarding Speed',
          value: '<1 min',
          description: 'From days of manual checks to instant validation',
        },
        {
          label: 'Countries Covered',
          value: '100+',
          description: 'Global seller verification from one API',
        },
        {
          label: 'API Response',
          value: '<2 sec',
          description: 'Real-time validation against official sources',
        },
        {
          label: 'Compliance',
          value: '24/7',
          description: 'Automated audit trail for regulators',
        },
      ],
    },
    relatedIndustries: [
      {
        slug: 'marketplace-tax-verification',
        title: 'Marketplace Platforms',
        description: 'Meet DAC7 and 1099 requirements while onboarding sellers',
      },
      {
        slug: 'fintech-kyb-tax-id',
        title: 'Fintech KYB',
        description: 'Enhance business verification with tax compliance checks',
      },
    ],
    seo: {
      title: 'Seller Onboarding Verification | Instant KYB Tax ID Check | Lookuptax',
      description:
        'Automate seller onboarding with real-time Tax ID verification. Verify EIN, VAT, GSTIN instantly. Reduce fraud, speed up approvals. KYB for marketplaces.',
      keywords:
        'seller onboarding, merchant verification, KYB automation, tax ID verification, seller KYC, marketplace onboarding, instant verification',
    },
  },
  {
    slug: 'customer-signup-tax-validation',
    title: 'Customer Signup Tax Validation',
    hero: {
      headline: 'Validate Tax Status at Signup—Before the First Transaction',
      subheadline:
        'Stop revenue leakage and compliance errors by validating customer Tax IDs during account creation, not checkout.',
    },
    problem: {
      heading: 'The Signup Validation Gap',
      description:
        'Most platforms validate Tax IDs at checkout, causing friction and cart abandonment. Worse, invalid Tax IDs mean incorrect tax charges and compliance violations from day one.',
    },
    flow: {
      heading: 'The Signup Flow',
      steps: [
        {
          number: 1,
          title: 'Customer Registers',
          description: 'B2B customer creates account and enters business Tax ID',
        },
        {
          number: 2,
          title: 'Real-Time Check',
          description: 'Lookuptax validates Tax ID against government database',
        },
        {
          number: 3,
          title: 'Profile Enrichment',
          description: 'Auto-populate business name, address, VAT status',
        },
        {
          number: 4,
          title: 'Frictionless Checkout',
          description: 'Future transactions use verified tax data—no re-validation needed',
        },
      ],
    },
    technicalFeature: {
      heading: 'Signup Optimization Features',
      description: 'Enhance customer experience while ensuring compliance:',
      highlights: [
        'Progressive validation (validate while user fills other fields)',
        'Auto-suggest business name from Tax ID lookup',
        'Tax exemption status detection',
        'Multi-region support (validate EU VAT, UK VAT, US EIN in one flow)',
        'Validation caching for faster repeat checkouts',
      ],
    },
    roi: {
      heading: 'Why Validate at Signup',
      metrics: [
        {
          label: 'Validation Time',
          value: '<2 sec',
          description: 'Instant Tax ID check during registration',
        },
        {
          label: 'Data Enrichment',
          value: '45+',
          description: 'Countries with business name returned',
        },
        {
          label: 'Integration',
          value: '1 API',
          description: 'Single endpoint for all countries',
        },
        {
          label: 'Uptime',
          value: '99.9%',
          description: 'Reliable service for critical flows',
        },
      ],
    },
    relatedIndustries: [
      {
        slug: 'saas-tax-validation',
        title: 'SaaS Platforms',
        description: 'Validate VAT/GST at signup for subscription businesses',
      },
      {
        slug: 'ecommerce-vat-validation',
        title: 'E-commerce',
        description: 'Create verified B2B accounts for wholesale buyers',
      },
    ],
    seo: {
      title: 'Customer Signup Tax Validation | B2B Account Verification | Lookuptax',
      description:
        'Validate Tax IDs during customer signup. Real-time VAT, EIN, GSTIN verification. Reduce checkout friction, prevent tax errors. B2B account validation.',
      keywords:
        'customer signup validation, B2B account verification, signup tax check, VAT validation signup, business account creation, tax ID registration',
    },
  },
  {
    slug: 'cross-border-tax-compliance',
    title: 'Cross-Border Tax Compliance',
    hero: {
      headline: 'Validate Tax IDs for Cross-Border B2B Trade',
      subheadline:
        'Sell to 100+ countries while staying compliant. Auto-validate Tax IDs and apply correct tax treatment based on customer location.',
    },
    problem: {
      heading: 'The Cross-Border Complexity',
      description:
        'Every country has different Tax ID formats, validation sources, and compliance rules. Manually managing this across multiple markets is impossible to scale.',
    },
    flow: {
      heading: 'The Compliance Workflow',
      steps: [
        {
          number: 1,
          title: 'Collect Country-Specific Tax ID',
          description: 'Request the right Tax ID type based on customer location (VAT for EU, ABN for AU, etc.)',
        },
        {
          number: 2,
          title: 'Validate Against Official Sources',
          description: 'Real-time validation against the correct government database for that country',
        },
        {
          number: 3,
          title: 'Apply Correct Tax Treatment',
          description: 'Use verified status for reverse charge, exemptions, or standard tax rates',
        },
      ],
    },
    technicalFeature: {
      heading: 'Global Compliance Features',
      description: 'Handle international tax complexity with one API:',
      highlights: [
        'Single API endpoint for 100+ countries (no per-country integration)',
        'Automatic Tax ID format detection and validation',
        'Syntax validation for all supported countries',
        'Database validation for 45+ countries with official source access',
        'Returns business details where available from public sources',
      ],
    },
    roi: {
      heading: 'Scale Globally with Confidence',
      metrics: [
        {
          label: 'Countries',
          value: '100+',
          description: 'Supported for Tax ID validation',
        },
        {
          label: 'Tax ID Types',
          value: '200+',
          description: 'VAT, GST, EIN, ABN and more',
        },
        {
          label: 'EU Coverage',
          value: '27',
          description: 'All EU countries via VIES',
        },
        {
          label: 'Integration',
          value: '1 API',
          description: 'One endpoint for global reach',
        },
      ],
    },
    relatedIndustries: [
      {
        slug: 'saas-tax-validation',
        title: 'Global SaaS',
        description: 'Handle VAT/GST compliance across all markets',
      },
      {
        slug: 'marketplace-tax-verification',
        title: 'International Marketplaces',
        description: 'Verify sellers across multiple jurisdictions',
      },
      {
        slug: 'ecommerce-vat-validation',
        title: 'Cross-Border E-commerce',
        description: 'Comply with distance selling and VAT rules',
      },
    ],
    seo: {
      title: 'International VAT Validation API | 100+ Countries | Lookuptax',
      description:
        'Simplify international tax compliance. Validate Tax IDs in 100+ countries. One API for global VAT, GST, EIN verification. Scale cross-border sales.',
      keywords:
        'cross-border tax compliance, international VAT validation, global tax ID verification, multi-country compliance, international tax automation',
    },
  },
  {
    slug: 'bulk-tax-id-validation',
    title: 'Batch Data Cleansing',
    hero: {
      headline: 'Clean Up Legacy and Third-Party Tax Data at Scale',
      subheadline:
        'Validate, enrich, and correct thousands of Tax IDs in minutes. Turn messy databases into audit-ready assets.',
    },
    problem: {
      heading: 'The Data Quality Crisis',
      description:
        "Years of manual entry, acquisitions, and third-party imports leave your database riddled with invalid, outdated, or incomplete Tax IDs. Manual cleanup isn't scalable.",
    },
    flow: {
      heading: 'Batch Processing Workflow',
      steps: [
        {
          number: 1,
          title: 'Upload Your Data',
          description: 'CSV, Excel, or API integration with your CRM/ERP system',
        },
        {
          number: 2,
          title: 'Bulk Validation',
          description: 'Validate thousands of Tax IDs against government databases',
        },
        {
          number: 3,
          title: 'Review Results',
          description: 'Get validation status and business details for each record',
        },
        {
          number: 4,
          title: 'Export Clean Data',
          description: 'Download validated dataset with status flags',
        },
      ],
    },
    technicalFeature: {
      heading: 'Enterprise Batch Features',
      description: 'Built for large-scale data operations:',
      highlights: [
        'Process thousands of records per batch',
        'Multi-country validation in single upload',
        'Syntax and database validation for all records',
        'Returns business details where available',
        'Full audit trail for compliance',
      ],
    },
    roi: {
      heading: 'Transform Your Data Quality',
      metrics: [
        {
          label: 'Batch Size',
          value: '10K+',
          description: 'Records per API call',
        },
        {
          label: 'Countries',
          value: '100+',
          description: 'Validated in single batch',
        },
        {
          label: 'Format',
          value: 'CSV',
          description: 'Easy upload and download',
        },
        {
          label: 'Audit Trail',
          value: '100%',
          description: 'Full validation documentation',
        },
      ],
    },
    relatedIndustries: [
      {
        slug: 'marketplace-tax-verification',
        title: 'Marketplaces',
        description: 'Clean up seller databases for DAC7 compliance',
      },
      {
        slug: 'fintech-kyb-tax-id',
        title: 'Fintech',
        description: 'Validate acquired customer portfolios',
      },
      {
        slug: 'saas-tax-validation',
        title: 'SaaS',
        description: 'Cleanse legacy subscription databases',
      },
    ],
    seo: {
      title: 'Batch Tax ID Validation | Bulk VAT Data Cleansing | Lookuptax',
      description:
        'Validate and clean Tax ID data at scale. Bulk VAT validation, EIN verification. Process thousands of records. Enterprise batch processing.',
      keywords:
        'batch tax ID validation, bulk VAT verification, data cleansing, tax data enrichment, legacy data cleanup, batch EIN validation',
    },
  },
  {
    slug: 'invoice-validation',
    title: 'Invoice Validation',
    hero: {
      headline: 'Pre-Check Tax IDs Before Invoicing—Catch Errors Before Audits',
      subheadline:
        'Validate customer and supplier Tax IDs at invoice creation. Ensure every invoice is compliant from the start.',
    },
    problem: {
      heading: 'The Invoice Error Problem',
      description:
        'Invalid Tax IDs on invoices trigger VAT rejections, audit flags, and payment delays. Fixing errors after the fact costs 10x more than prevention.',
    },
    flow: {
      heading: 'Invoice Validation Flow',
      steps: [
        {
          number: 1,
          title: 'Invoice Created',
          description: 'AP/AR system triggers validation when invoice is drafted',
        },
        {
          number: 2,
          title: 'Tax ID Check',
          description: 'Lookuptax validates buyer/seller Tax ID in real-time',
        },
        {
          number: 3,
          title: 'Error Prevention',
          description: 'Flag invoices with invalid or inactive Tax IDs',
        },
        {
          number: 4,
          title: 'Compliant Invoice',
          description: 'Issue invoices with verified Tax IDs',
        },
      ],
    },
    technicalFeature: {
      heading: 'Invoice Integration Features',
      description: 'Seamless integration with your invoicing workflow:',
      highlights: [
        'REST API for easy ERP/invoicing integration',
        'Real-time validation before invoice generation',
        'Batch validation for month-end processing',
        'Returns business name and address where available',
        'Audit trail for every validation',
      ],
    },
    roi: {
      heading: 'Prevent Costly Invoice Errors',
      metrics: [
        {
          label: 'Validation',
          value: '<2 sec',
          description: 'Check Tax IDs before issuing invoices',
        },
        {
          label: 'Countries',
          value: '100+',
          description: 'Global invoice compliance',
        },
        {
          label: 'Integration',
          value: 'REST API',
          description: 'Easy ERP/invoicing integration',
        },
        {
          label: 'Automation',
          value: '100%',
          description: 'No manual Tax ID lookups needed',
        },
      ],
    },
    relatedIndustries: [
      {
        slug: 'saas-tax-validation',
        title: 'SaaS',
        description: 'Validate before subscription invoices',
      },
      {
        slug: 'ecommerce-vat-validation',
        title: 'E-commerce',
        description: 'B2B invoice compliance at scale',
      },
      {
        slug: 'marketplace-tax-verification',
        title: 'Marketplaces',
        description: 'Seller payout invoice validation',
      },
    ],
    seo: {
      title: 'Invoice Tax ID Validation | Pre-Invoice VAT Check | Lookuptax',
      description:
        'Validate Tax IDs before invoicing. Prevent VAT errors, reduce audit risk. Easy API integration for invoice automation.',
      keywords:
        'invoice validation, pre-invoice tax check, VAT invoice compliance, invoice error prevention, B2B invoice verification',
    },
  },
];
