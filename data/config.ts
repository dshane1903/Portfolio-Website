const config = {
  siteUrl: 'https://www.dshane.dev',
  siteName: 'Shane Duncan',
  siteLocale: 'en_US',
  title: 'Shane Duncan',
  titleTemplate: '%s – Developer, writer.',
  descritpion:
    'Personal space on the internet to share my work, my thoughts, a bit about myself and my working process, along with get in touch information.',
  defaultImage: 'file:///Users/shaneduncan/Desktop/Fullstack%20Engineer%20(1).png',
  blog: {
    name: 'Blogging',
    path: 'writing',
    githubEditUrl:
      'https://github.com/dshane1903',
  },
  snippets: {
    name: 'Snippets',
    path: 'snippets',
    githubEditUrl:
      'https://github.com/dshane1903',
  },
  twitter: {
    url: 'https://twitter.com/dshane1903',
    handle: '@dshane1903',
    find: 'https://mobile.twitter.com/search?q=',
  },
  linkedIn: 'https://www.linkedin.com/in/qwl/',
  gitHub: 'https://github.com/dshane1903',
} as const;

export default config;
