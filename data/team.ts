export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "Founder" | "Executive";
  bio: string;
  initials: string;
  expertise: string[];
}

export const teamData: TeamMember[] = [
  {
    id: "dheeraj-jhawar",
    name: "Dheeraj Jhawar",
    role: "Founder · Finance & DFI capital",
    category: "Founder",
    bio: "Leads institutional-capital dialogue, lender structuring, governance architecture and financing discipline for the platform. Co-founder of Transvolt Mobility and Elements Financial Solutions.",
    initials: "DJ",
    expertise: ["DFI Capital Raising", "Platform Governance", "Institutional Lender Structuring"],
  },
  {
    id: "sandeep-agarwal",
    name: "Sandeep Agarwal",
    role: "Founder · Structured finance",
    category: "Founder",
    bio: "Leads financing architecture, documentation, debt syndication and lender relationships via the Elements ecosystem.",
    initials: "SA",
    expertise: ["Debt Syndication", "Project Documentation", "Credit Architecture"],
  },
  {
    id: "pratap-malempati",
    name: "Pratap Malempati",
    role: "President - Renewables",
    category: "Executive",
    bio: "Leads renewable strategy, offtaker discussions, project diligence, commercial positioning and asset-level value creation.",
    initials: "PM",
    expertise: ["Renewable Strategy", "Offtaker Origination", "Asset Value Creation"],
  },
];
