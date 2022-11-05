import {NextSeoProps} from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  titleTemplate: '%s | ipko.dev',
  description: 'Balint Ipkovich portfolio website',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://ipko.dev/',
    title: 'ipko.dev',
    description: 'Balint Ipkovich portfolio website',
    siteName: 'https://ipko.dev/sitemap.xml',
  }
};