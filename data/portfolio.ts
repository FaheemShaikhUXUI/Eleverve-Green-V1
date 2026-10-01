export interface PortfolioAsset {
  id: string;
  state: string;
  capacity: string;
  numericCapacity: number;
  offtaker: string;
  status: "Operating" | "Development";
  expansion: string;
  description: string;
  coordinates: { x: number; y: number }; // percentage on India map projection
  technology: string;
  gridInterconnect: string;
}

export const portfolioData: PortfolioAsset[] = [
  {
    id: "rajasthan",
    state: "Rajasthan",
    capacity: "52.5 MWp",
    numericCapacity: 52.5,
    offtaker: "PPA · State Discoms",
    status: "Operating",
    expansion: "Expansion visibility identified",
    description: "Operating portfolio with high annual irradiance and potential brownfield expansion visibility.",
    coordinates: { x: 26, y: 36 },
    technology: "Solar PV · Fixed & Single-Axis Tracking",
    gridInterconnect: "InSTS / State Transmission Grid",
  },
  {
    id: "andhra-pradesh",
    state: "Andhra Pradesh",
    capacity: "26.5 MWp",
    numericCapacity: 26.5,
    offtaker: "PPA · NTPC VVN",
    status: "Operating",
    expansion: "Stable operational profile",
    description: "Operating asset base with established stable generation history and central nodal counterparty.",
    coordinates: { x: 44, y: 72 },
    technology: "Solar PV · Grid-Scale Utility Array",
    gridInterconnect: "ISTS / Central Transmission Utility",
  },
  {
    id: "gujarat",
    state: "Gujarat",
    capacity: "20 MWp",
    numericCapacity: 20.0,
    offtaker: "PPA · State Discoms",
    status: "Development",
    expansion: "High expansion potential",
    description: "Development asset strategically sited with significant expansion potential and hybrid readiness.",
    coordinates: { x: 20, y: 52 },
    technology: "Solar PV · Hybrid / Storage-Ready Design",
    gridInterconnect: "GETCO Evacuation Corridor",
  },
];

export const portfolioDisclaimer = "Capacities indicative, subject to diligence.";
export const totalIndicativePortfolio = "~99 MWp";
