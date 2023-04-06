import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Disabled",
      href: "/",
      disabled: true
    }
  ],
  links: {
    twitter: "https://twitter.com/javiadaame",
    github: "https://github.com/javiadaame/adame-ui",
  },
}
