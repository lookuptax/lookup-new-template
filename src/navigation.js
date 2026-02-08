import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    /*  {
        text: 'Homes',
        links: [
          {
            text: 'SaaS',
            href: getPermalink('/homes/saas'),
          },
          {
            text: 'Startup',
            href: getPermalink('/homes/startup'),
          },
          {
            text: 'Mobile App',
            href: getPermalink('/homes/mobile-app'),
          },
          {
            text: 'Personal',
            href: getPermalink('/homes/personal'),
          },
        ],
      },
      {
        text: 'Pages',
        links: [
          {
            text: 'Features (Anchor Link)',
            href: getPermalink('/#features'),
          },
          {
            text: 'Services',
            href: getPermalink('/services'),
          },
          {
            text: 'Pricing',
            href: getPermalink('/pricing'),
          },
          {
            text: 'About us',
            href: getPermalink('/about'),
          },
          {
            text: 'Contact',
            href: getPermalink('/contact'),
          },
          {
            text: 'Terms',
            href: getPermalink('/terms'),
          },
          {
            text: 'Privacy policy',
            href: getPermalink('/privacy'),
          },
        ],
      },
      {
        text: 'Landing',
        links: [
          {
            text: 'Lead Generation',
            href: getPermalink('/landing/lead-generation'),
          },
          {
            text: 'Long-form Sales',
            href: getPermalink('/landing/sales'),
          },
          {
            text: 'Click-Through',
            href: getPermalink('/landing/click-through'),
          },
          {
            text: 'Product Details (or Services)',
            href: getPermalink('/landing/product'),
          },
          {
            text: 'Coming Soon or Pre-Launch',
            href: getPermalink('/landing/pre-launch'),
          },
          {
            text: 'Subscription',
            href: getPermalink('/landing/subscription'),
          },
        ],
      },
      {
        text: 'Blog',
        links: [
          {
            text: 'Blog List',
            href: getBlogPermalink(),
          },
          {
            text: 'Article',
            href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
          },
          {
            text: 'Article (with MDX)',
            href: getPermalink('markdown-elements-demo-post', 'post'),
          },
          {
            text: 'Category Page',
            href: getPermalink('tutorials', 'category'),
          },
          {
            text: 'Tag Page',
            href: getPermalink('astro', 'tag'),
          },
        ],
      }, 
  
      */
    {
      text: 'Features',
      href: '/#features',
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
    {
      text: 'Demo',
      href: '/demo',
    },
    {
      text: 'Resources',

      links: [
        {
          text: 'Supported Countries',
          href: '/countries',
        },
        {
          text: 'Guides',
          href: getPermalink('https://lookuptax.com/docs/category/verify-tax-ids'),
        },

        /*  {
            text: 'Startup',
            href: getPermalink('/homes/startup'),
          },
          {
            text: 'Mobile App',
            href: getPermalink('/homes/mobile-app'),
          },
          {
            text: 'Personal',
            href: getPermalink('/homes/personal'),
          },
          */
      ],
    },
    {
      text: 'Integrations',
      links: [
        {
          text: 'Shopify',
          href: '/integrations/shopify-taxid-validation',
        },
        {
          text: 'n8n',
          href: '/integrations/n8n-taxid-validation',
        },
        {
          text: 'Google Sheets',
          href: '/integrations/google-sheets-tax-id-validation',
        },
        {
          text: 'Microsoft Excel',
          href: '/integrations/microsoft-excel-tax-id-validation',
        }
      ],
    },
    {
      text: 'API\u00A0Docs',
      href: 'https://demo.lookuptax.com/api/',
    },
  ],
  actions: [{ text: 'Sign In', href: 'https://platform.lookuptax.com/auth', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '/#features' },
        { text: 'Free Demo', href: '/demo' },
        { text: 'List of countries', href: '/countries' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Resources', href: 'https://lookuptax.com/docs/category/verify-tax-ids' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { text: 'SaaS Tax Validation', href: '/industries/saas-tax-validation' },
        { text: 'Marketplace Verification', href: '/industries/marketplace-tax-verification' },
        { text: 'Fintech KYB', href: '/industries/fintech-kyb-tax-id' },
        { text: 'E-commerce VAT', href: '/industries/ecommerce-vat-validation' },
      ],
    },
    {
      title: 'Use Cases',
      links: [
        { text: 'Seller Onboarding', href: '/use-cases/seller-onboarding-tax-validation' },
        { text: 'Customer Signup', href: '/use-cases/customer-signup-tax-validation' },
        { text: 'Cross-Border Compliance', href: '/use-cases/cross-border-tax-compliance' },
        { text: 'Bulk Tax ID Validation', href: '/use-cases/bulk-tax-id-validation' },
        { text: 'Invoice Validation', href: '/use-cases/invoice-validation' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: 'https://demo.lookuptax.com/api/' },
        { text: 'Country guides', href: 'https://lookuptax.com/docs/category/tax-identification-number' },
        { text: 'Explainer', href: 'https://lookuptax.com/docs/category/explainers' },
        { text: 'National databases', href: 'https://lookuptax.com/docs/category/verify-tax-ids' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Our Approach', href: '/our-approach-to-validation' },
        { text: 'Terms', href: '/terms' },
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'DPA', href: '/dpa' },
        { text: 'Sub-processors', href: '/sub-processors' },
      ],
    },
  ],
  secondaryLinks: [
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/lookuptax' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/lookuptax/' },
    /* { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
     { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },*/
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    /* { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },*/
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://lookuptax.com/"> Lookuptax</a> · All rights reserved.
  `,
};
