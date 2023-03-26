import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '3c0955d204ce4d36bd1162c60acade31',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Yeraze.com 4.0',
  domain: 'yeraze.com',
  author: 'Randall Hand',

  // open graph metadata (optional)
  description: 'Yeraze.com 4.0 - Randall\'s corner of the internet',

  // social usernames (optional)
  twitter: 'yeraze',
  github: 'yeraze',
  linkedin: 'randallhand',
  mastodon: 'https://indieweb.social/@Yeraze', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  privacyPolicy: '64f7bf74081041139f049af5f9b88017',
  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  googleAnalyticsId: 'G-XMZ2PCLR16',

  disqusShortname: 'yerazesdomain',

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '21c2452a42044fb3a82da2daa46ee4d4'
    },
    {
      title: 'Patents',
      pageId: '192b09bdb8fb42399ced70bcafb6a758'
    },
    {
      title: 'Publications',
      pageId: '2547e12d13924f26a69585f5822ecab2'
    }
  ]
})
