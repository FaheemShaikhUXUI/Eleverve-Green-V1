export interface ESGDimension {
  id: string;
  pillar: string;
  tagline: string;
  description: string;
  corePillars: { title: string; detail: string }[];
  frameworkAlignment: string;
}

export const esgData = {
  headline: "Clean power must also be responsibly built and operated.",
  subheadline:
    "We treat ESG as an operating discipline — land, community, HSE, governance and credible environmental attributes designed for institutional lender scrutiny.",
  pillars: [
    {
      id: "environment",
      pillar: "Environment",
      tagline: "Resource efficiency & emissions avoidance",
      description:
        "Resource efficiency, emissions avoidance and environmental compliance across the entire lifecycle of generation, transmission and energy storage.",
      corePillars: [
        { title: "Avoided Emissions", detail: "Quantifiable Scope 1 and Scope 2 displacement for offtakers through verified green electrons." },
        { title: "Land Ecology Diligence", detail: "Ecological and biodiversity impact assessments prior to site acquisition and construction." },
        { title: "Water Conservation", detail: "Dry robotic panel cleaning technologies minimizing water consumption in arid operating zones." },
      ],
      frameworkAlignment: "IFC Performance Standard 3 & 6",
    },
    {
      id: "social",
      pillar: "Social",
      tagline: "Land, stakeholder & workforce responsibility",
      description:
        "Land, stakeholder, community and workforce responsibility ensuring fair local engagement, safety, and inclusive value creation.",
      corePillars: [
        { title: "Equitable Land Acquisition", detail: "Transparent leasehold and purchase frameworks respecting local landholder rights." },
        { title: "Community Investment", detail: "Targeted skill training, solar technician development, and local infrastructure support." },
        { title: "Fair Labor Standards", detail: "Strict adherence to non-discrimination, fair wage guidelines, and contractor workforce ethics." },
      ],
      frameworkAlignment: "IFC Performance Standard 2 & 5",
    },
    {
      id: "governance",
      pillar: "Governance",
      tagline: "Transparent reporting & board oversight",
      description:
        "Transparent reporting, controls and board-level oversight structured to satisfy Tier-1 multilateral lenders and institutional investors.",
      corePillars: [
        { title: "Board-Level Oversight", detail: "Fiduciary governance committees auditing capital deployment, ESG benchmarks, and risk." },
        { title: "Statutory Transparency", detail: "Full regulatory compliance reporting across SLDC, Discom, and national grid authorities." },
        { title: "Anti-Bribery & Ethics", detail: "Rigorous anti-corruption controls and third-party vendor compliance screening." },
      ],
      frameworkAlignment: "OECD Principles of Corporate Governance",
    },
    {
      id: "hse",
      pillar: "HSE",
      tagline: "Safety systems across construction & O&M",
      description:
        "Safety systems across construction, O&M and asset operations with zero-harm culture and comprehensive field protocols.",
      corePillars: [
        { title: "Zero Harm Protocol", detail: "Mandatory personal protective systems, electrical isolation Lockout/Tagout (LOTO)." },
        { title: "Substation Safety", detail: "High-voltage transmission protocol training and automated arc-flash mitigation." },
        { title: "Incident Transparency", detail: "Real-time near-miss logging, Root Cause Analysis (RCA), and continuous field audits." },
      ],
      frameworkAlignment: "ISO 45001 & ISO 14001 Standards",
    },
  ] as ESGDimension[],
};
