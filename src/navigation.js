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
      href: './#features',
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
      text: 'Guides',
      href: 'https://lookuptax.com/docs/category/verify-tax-ids',
    },
    {
      text: 'Countries',
      href: '/countries',
    },
  ],
  /*actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],*/
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
    /*{
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    */
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
        /*{ text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },*/
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
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
