export interface NavLink {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export const navigationLinks: NavLink[] = [
  { label: "Our Model", href: "/model", description: "Owner-operator structure & contracting mechanisms" },
  { label: "Why Now", href: "/why-now", description: "The transition from energy deficit to hour deficit" },
  { label: "Platform", href: "/platform", description: "Resource to delivered energy operating model" },
  { label: "Solutions", href: "/solutions", description: "EaaS, Utility PPAs, FDRE, and Hybrid storage" },
  { label: "Technology", href: "/technology", description: "Resource-led RTC & dispatch engineering" },
  { label: "Execution", href: "/execution", description: "Greenfield & brownfield asset delivery" },
  { label: "Portfolio", href: "/portfolio", description: "Operating and development assets across India" },
  { label: "ESG", href: "/esg", description: "HSE, community stewardship & institutional governance" },
  { label: "Team", href: "/team", description: "Leadership, capital precedent & ecosystem track record" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "Operating Platform", href: "/platform" },
  { label: "Asset Portfolio", href: "/portfolio" },
  { label: "Leadership & Track Record", href: "/team" },
  { label: "ESG & Governance", href: "/esg" },
  { label: "Institutional Offtake Contact", href: "/contact" },
];
