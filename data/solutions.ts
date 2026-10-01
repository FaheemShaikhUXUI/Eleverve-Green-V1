export interface SolutionItem {
  id: string;
  tag: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
  contractType: string;
  capexRequirement: string;
  riskAllocation: string;
  idealFor: string;
}

export const solutionsData: SolutionItem[] = [
  {
    id: "eaas",
    tag: "Energy-as-a-Service",
    badge: "EaaS · OPEX",
    title: "EaaS / OPEX Supply",
    headline: "Zero upfront capex. Measured and billed solely on delivered energy.",
    description:
      "We finance, build, own and operate — you buy dependable delivered energy as a service, with no upfront capex and performance on us. Generation, firming, scheduling, deviation settlement, billing and regulatory compliance are bundled into a predictable unit cost.",
    features: [
      "Zero upfront capital expenditure for the commercial/industrial offtaker",
      "End-to-end operational accountability: O&M, scheduling, and grid risk borne by Eleverve Green",
      "Guaranteed performance ratios and agreed availability thresholds",
      "Single consolidated invoice for generation, transmission, and firming attributes",
    ],
    contractType: "Long-term Service Contract / Delivered MWh Fee",
    capexRequirement: "0% (Fully financed on Eleverve Green balance sheet)",
    riskAllocation: "Generation, curtailment & operational risk retained by platform",
    idealFor: "Energy-intensive industrial corporations, data centers, and institutional facilities seeking ESG decarbonization without balance sheet strain.",
  },
  {
    id: "utility-ppa",
    tag: "Utility PPA",
    badge: "PPA / OPEX",
    title: "Utility & Open-Access PPAs",
    headline: "Large-scale utility assets owned and operated under long-term contracted supply.",
    description:
      "Large-scale renewable assets owned and operated under long-term contracted supply — utility-scale or offsite open access. Tailored for state distribution utilities (Discoms) and central nodal agencies looking for disciplined generation and long-term counterparty stability.",
    features: [
      "Long-term 25-year bankable Power Purchase Agreements",
      "Direct ISTS / InSTS grid evacuation with full regulatory alignment",
      "Structured for PPA bankability, lender diligence, and statutory approvals",
      "Proven generation history with investment-grade offtakers (e.g., NTPC VVN, State Discoms)",
    ],
    contractType: "25-Year Long-Term PPA (State Discoms / Central Procurers)",
    capexRequirement: "Institutional Equity + Long-Term Non-Recourse Debt",
    riskAllocation: "Statutory grid compliance, tariff adherence, and plant reliability",
    idealFor: "State Discoms, national procurers, and regional power utilities executing statutory Renewable Purchase Obligations (RPO).",
  },
  {
    id: "fdre-rtc",
    tag: "FDRE / RTC",
    badge: "FDRE · RTC",
    title: "Firm & Round-The-Clock RE",
    headline: "Shaping variable generation into dispatchable, contracted delivery blocks.",
    description:
      "Hybrid and storage-backed structures that shape variable generation into firmer profiles and contracted delivery blocks. Resolving the fundamental mismatch between intermittent resource generation and round-the-clock baseload consumption.",
    features: [
      "Time-of-day scheduled blocks matched to demand peaks (morning, evening, night)",
      "Strict curtailment mitigation and automated deviation-settlement handling (DSM)",
      "Multi-resource blending: Co-located or virtual hybrid assets under unified scheduling",
      "Contracted minimum peak-hour supply commitments with SLA penalty backing",
    ],
    contractType: "FDRE / RTC Structured Supply Agreement",
    capexRequirement: "Platform Financed with Multi-Technology Optimization",
    riskAllocation: "Profile shaping and scheduling variance managed by Eleverve Green",
    idealFor: "Continuous manufacturing processes, chemical plants, 24x7 tech campuses, and utilities requiring schedulable green capacity.",
  },
  {
    id: "hybrid-bess",
    tag: "Hybrid + BESS",
    badge: "Hybrid · Storage",
    title: "Hybrid & Storage Systems",
    headline: "Wind-solar-hydro combined with BESS for peak-hour dispatch and time shifting.",
    description:
      "Wind + solar + hydro combined with BESS for peak-hour blocks, time-shifting and a stronger delivered profile than standalone capacity. Battery storage absorbs midday solar surplus and releases energy during lucrative or critical high-tariff evening hours.",
    features: [
      "Lithium-ion battery storage and long-duration storage integration",
      "Solar + Wind complementary diurnal curve balancing",
      "Grid frequency stabilization and ancillary power support capabilities",
      "Optimized open-access duty and transmission loss management",
    ],
    contractType: "Energy-plus-Storage Tolling / Capacity-Availability Contract",
    capexRequirement: "Integrated Hybrid Capital Structure",
    riskAllocation: "Battery lifecycle management, degradation, and augmentation on platform",
    idealFor: "Offtakers with steep evening demand curves, grid-constrained corridors, and brownfield asset enhancements.",
  },
];
