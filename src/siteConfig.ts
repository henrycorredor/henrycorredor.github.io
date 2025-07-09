import type {
  SiteConfiguration,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Kurilabs",
  description:
    "This is Henry Corredor’s personal site, showcasing his professional experience, coding experiments, and glimpses of everyday life.",
  href: "https://kurilabs.com",
  author: "Henry Corredor",
  locale: "en",
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:ttl@trevortylerlee.com",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/trevortylerlee",
  },
  twitter: {
    label: "X (formerly Twitter)",
    href: "https://twitter.com/boogerbuttcheek",
  },
};
