import { defaultSEO, extendSEO } from './seo'

const routes = {
  home: {
    label: 'Home',
    path: '/',
    seo: defaultSEO,
  },
  about: {
    label: 'About',
    path: '/about',
    seo: extendSEO({
      title: 'About',
      url: 'about',
    }),
  },
  writing: {
    label: 'Writing',
    path: '/writing',
    seo: extendSEO({
      title: 'Writing',
      description: 'Thinking out loud about software design and development.',
      image: 'og/writing.png',
      url: 'writing',
    }),
  },
  /*  crit: {
    label: 'Crit',
    path: '/crit',
    seo: extendSEO({
      title: 'Crit',
      description: 'A comprehensive product design health report.',
      image: 'og/crit.png',
      url: 'crit',
    }),
  }, */
  /*   hn: {
    label: 'HN',
    path: '/hn',
    seo: extendSEO({
      title: 'HN',
      description: 'A better Hacker News.',
      image: 'og/hn.png',
      url: 'hn',
    }),
  }, */
  bookmarks: {
    label: 'Bookmarks',
    path: '/bookmarks',
    seo: extendSEO({
      title: 'Bookmarks',
      description: 'Internet things, saved for later.',
      image: 'og/bookmarks.png',
      url: 'bookmarks',
    }),
  },

  ama: {
    label: 'AMA',
    path: '/ama',
    seo: extendSEO({
      title: 'AMA',
      description: 'Ask me anything.',
      image: 'og/ama.png',
      url: 'ama',
    }),
  },
  /*   security: {
    label: 'Security Checklist',
    path: '/security',
    seo: extendSEO({
      title: 'Security Checklist',
      description: 'Staying safe on the internet.',
      image: 'og/security.png',
      url: 'security',
    }),
  }, */
  stack: {
    label: 'Stack',
    path: '/stack',
    seo: extendSEO({
      title: 'Stack',
      description: 'My favorite tools and software.',
      image: 'og/stack.png',
      url: 'stack',
    }),
  },
  privacy: {
    label: 'Privacy Policy',
    path: '/privacypolicy',
    seo: extendSEO({
      title: 'Privacy Policy',
      description: null,
      image: 'og/pp.png',
      url: 'privacypolicy',
    }),
  },
  terms: {
    label: 'Terms of Service',
    path: '/termsofservice',
    seo: extendSEO({
      title: 'Terms of Service',
      description: null,
      image: 'og/tos.png',
      url: 'termsofservice',
    }),
  },
  settings: {
    label: 'Settings',
    path: '/settings',
    seo: extendSEO({
      title: 'Settings',
      description: 'Manage your profile.',
      image: 'og/settings.png',
      url: 'settings',
    }),
  },
}

export default routes
