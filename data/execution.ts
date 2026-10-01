export interface ExecutionRoute {
  routeNumber: string;
  name: string;
  tagline: string;
  description: string;
  keyDiligence: string[];
}

export interface ExecutionPhase {
  phase: string;
  name: string;
  title: string;
  detail: string;
  activities: string[];
}

export const executionData = {
  headline: "Greenfield, brownfield and hybrid routes, under one operating discipline.",
  subheadline:
    "We keep the execution message simple: build where new capacity makes sense, improve where existing capacity can be made stronger, and hybridise or add storage where the offtake requires a firmer supply profile.",
  routes: [
    {
      routeNumber: "Route 01",
      name: "Greenfield",
      tagline: "New utility-scale assets with site/resource/grid diligence and bankable long-term PPAs.",
      description:
        "New projects developed from the ground up around resource quality, site suitability, grid access, evacuation visibility, and bankable offtake agreements.",
      keyDiligence: [
        "Unencumbered contiguous land aggregation",
        "ISTS / InSTS connectivity approval & dedicated bay allocation",
        "Geotechnical, hydrological, and environmental impact assessments",
        "Long-term bankable PPA execution with investment-grade counterparties",
      ],
    },
    {
      routeNumber: "Route 02",
      name: "Brownfield",
      tagline: "Acquire/partner with operating assets and optimise with storage, hybridisation and contract structures.",
      description:
        "Existing or near-operating assets where performance optimisation, hybridisation, BESS integration, or operating discipline can create immediate additional value.",
      keyDiligence: [
        "Historical generation curve and degradation audit",
        "Substation headroom and spare transformation capacity analysis",
        "Contractual and regulatory restructuring for open-access / EaaS",
        "Storage retrofitting and co-located wind/solar hybridisation",
      ],
    },
  ] as ExecutionRoute[],
  phases: [
    {
      phase: "01",
      name: "Assess",
      title: "Load, site, resource, policy and grid context.",
      detail:
        "Deep technical analysis of the offtaker's load profile, available land, regional irradiance/wind regimes, state open-access policy, and substation evacuation margin.",
      activities: ["Offtaker demand profiling", "Resource measurement", "Grid interconnection feasibility", "State policy audit"],
    },
    {
      phase: "02",
      name: "Design",
      title: "Select the right technology mix and delivery architecture.",
      detail:
        "Engineering optimal solar-wind-storage ratios to meet the exact hourly dispatch obligation at lowest delivered levelized cost.",
      activities: ["Multi-resource simulation", "BESS sizing & degradation modeling", "Substation & bay design", "Transmission layout"],
    },
    {
      phase: "03",
      name: "Structure",
      title: "Align contracts, financing, approvals and risk allocation.",
      detail:
        "Executing bankable PPA / EaaS documentation, securing non-recourse project debt syndication, and acquiring statutory grid approvals.",
      activities: ["Bankable PPA drafting", "Lender syndication via Elements", "Statutory clearances & LTA", "Escrow & security structuring"],
    },
    {
      phase: "04",
      name: "Operate",
      title: "Manage performance through O&M, scheduling and reporting.",
      detail:
        "Assuming full post-COD lifecycle accountability: 24/7 SLDC day-ahead scheduling, predictive maintenance, automated deviation management, and transparent monthly billing.",
      activities: ["Central SCADA operations", "Automated SLDC scheduling", "Predictive string maintenance", "ESG attribute reporting"],
    },
  ] as ExecutionPhase[],
};
