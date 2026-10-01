export interface PlatformStage {
  step: string;
  name: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  deliverables: string[];
  metrics: string;
}

export interface PlatformCapability {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  isWide?: boolean;
}

export const platformStages: PlatformStage[] = [
  {
    step: "01",
    name: "Resource",
    title: "Resource Characterization",
    shortDesc: "Location, irradiance, wind regime, hydrological analysis, and land topography.",
    detailedDesc:
      "We begin with the offtaker's precise load curve and site location. We map high-resolution satellite solar irradiance, anemometer wind mast data, land parcels, and hydrological patterns to establish raw generation envelopes without speculative assumptions.",
    deliverables: [
      "Solar DNI / GHI yield simulation (P50/P90)",
      "Weibull wind speed distribution modeling",
      "Topographical and geotechnical suitability",
      "Clear title land aggregation & right-of-way diligence",
    ],
    metrics: "P90 Yield Assurance",
  },
  {
    step: "02",
    name: "Grid",
    title: "Grid Interface & Evacuation",
    shortDesc: "Substation capacity, ISTS/InSTS connectivity, bay availability, and curtailment modeling.",
    detailedDesc:
      "A project is only as valuable as its actual power evacuation capability. We analyze state transmission utility (STU) and central transmission utility (CTU) substations, transformer headroom, bay allocation, and technical loss factors before committing capital.",
    deliverables: [
      "Connectivity and Long-Term Access (LTA) filings",
      "Dynamic load flow and grid curtailment simulations",
      "Substation bay readiness & dedicated feeder engineering",
      "State open-access regulatory compliance roadmap",
    ],
    metrics: "100% Evacuation Feasibility",
  },
  {
    step: "03",
    name: "Contract",
    title: "Bankable Contract Structuring",
    shortDesc: "PPA terms, risk allocation, scheduling protocols, and time-of-day tariff structures.",
    detailedDesc:
      "We translate physical electrons into bankable, enforceable commercial agreements. Whether structured as a 25-year Discom PPA or an Energy-as-a-Service master agreement, terms are engineered to withstand lender scrutiny and regulatory evolution.",
    deliverables: [
      "Comprehensive Power Purchase Agreement (PPA) drafting",
      "Deviation Settlement Mechanism (DSM) risk allocation",
      "Termination security, payment escrow, and LC mechanisms",
      "Clear ESG and carbon attribute transfer clauses",
    ],
    metrics: "Institutional Bankability",
  },
  {
    step: "04",
    name: "Capital",
    title: "Financing & Institutional Capital",
    shortDesc: "Debt syndication, DFI alignment, equity allocation, and non-recourse project finance.",
    detailedDesc:
      "Leveraging the Elements Financial Solutions ecosystem and Transvolt multilateral DFI precedent (IFC, Finnfund), capital is structured with optimal debt-equity ratios, predictable debt-service coverage, and long-tenor amortisation.",
    deliverables: [
      "Competitive non-recourse project debt syndication",
      "Multi-tier credit appraisal and lender underwriting",
      "DFI environmental and social performance standard compliance",
      "Hedged financing structures protecting delivered cost",
    ],
    metrics: "$3Bn Leadership Precedent",
  },
  {
    step: "05",
    name: "Delivered Energy",
    title: "Accountable Energy Delivery",
    shortDesc: "Continuous SCADA monitoring, scheduled dispatch, O&M, and guaranteed firm supply.",
    detailedDesc:
      "Eleverve Green stays accountable for decades post-COD. Through active predictive O&M, automated scheduling algorithms, and time-of-day dispatch coordination, we ensure the contracted kWh is delivered exactly when required.",
    deliverables: [
      "24/7 centralized dispatch & SCADA monitoring",
      "Predictive inverter & string-level performance tracking",
      "State load dispatch centre (SLDC) day-ahead scheduling",
      "Transparent monthly billing and environmental certificates",
    ],
    metrics: "99%+ Grid Uptime Target",
  },
];

export const platformCapabilities: PlatformCapability[] = [
  {
    number: "01",
    title: "RESOURCE-LED",
    subtitle: "Start with load and location.",
    description:
      "The resource stack is selected around contracted offtake demand, site conditions, resource availability, grid realities, and the delivered-cost envelope — never reverse-engineered from excess panel inventory.",
  },
  {
    number: "02",
    title: "ROUTE-FLEXIBLE",
    subtitle: "Greenfield, brownfield and hybridisation.",
    description:
      "We can develop new utility capacity, expand operating assets, hybridise variable solar with evening wind, or add battery storage (BESS) where it improves the supply profile and contract value.",
  },
  {
    number: "03",
    title: "BANKABLE",
    subtitle: "Structure for PPA bankability.",
    description:
      "PPA terms, grid approvals, financing, statutory compliance, scheduling obligations, and risk allocation are rigorously aligned before scale is pursued.",
  },
  {
    number: "04",
    title: "OWNER-OPERATOR",
    subtitle: "Stay accountable after commissioning.",
    description:
      "O&M, generation forecasting, SLDC scheduling, billing, compliance reporting, and performance management remain under our direct control long after the asset goes live.",
  },
  {
    number: "05",
    title: "TECHNOLOGY AS A TOOL",
    subtitle: "Selected only after understanding the offtake profile.",
    description:
      "Solar, wind, hydro, hybrid systems and BESS are treated as tools to shape firm & dispatchable (FDRE), round-the-clock (RTC), peak, and profile-specific supply — not rigid one-size-fits-all answers.",
    isWide: true,
  },
];
