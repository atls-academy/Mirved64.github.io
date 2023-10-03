export enum SocialLinkDisplay { // eslint-disable-line
  Mobile = 'Mobile',
  Desktop = 'Desktop',
  Ultra = 'Ultra',
}

export interface SocialLinkProps {
  display: SocialLinkDisplay
  icon: JSX.Element
  href: string
}
