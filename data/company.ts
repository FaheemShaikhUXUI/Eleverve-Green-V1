export interface MetricItem {
  value: string;
  suffix?: string;
  label: string;
  description: string;
}

export interface EcosystemEntity {
  tag: string;
  name: string;
  role: string;
  description: string;
}

export interface OfficeLocation {
  city: string;
  type: string;
  address?: string;
}

export const companyData = {
  name: "Eleverve Green",
  legalName: "Eleverve Green Private Limited",
  tagline: "ANY RENEWABLE ENERGY, MADE FIRM.",
  eyebrow: "UTILITY PPAs · ENERGY-AS-A-SERVICE · INDIA",
  coreStatement:
    "We build renewable power solutions around the offtaker’s contracted demand, the site, the available resource, the grid interface and the required delivered-cost outcome.",
  description:
    "Utility-scale PPA and Energy-as-a-Service renewable platform for India’s industrial, institutional and utility buyers.",
  disclaimer: "Figures indicative, subject to diligence.",
  copyrightYear: "2026",
  email: "info@eleverve.green",
  registeredOffice: "501, A Wing, Trade Link, Delisle Road, Mumbai 400013",
  offices: [
    { city: "Mumbai", type: "Registered & Executive Office", address: "501, A Wing, Trade Link, Delisle Road, Mumbai 400013" },
    { city: "Pune", type: "Operational & Engineering Hub" },
    { city: "Gurgaon", type: "Policy & Commercial Liaison" },
  ] as OfficeLocation[],
  trackRecord: [
    {
      value: "~99",
      suffix: "MWp",
      label: "Current Portfolio",
      description: "Solar-led operating and development portfolio across three states in India.",
    },
    {
      value: "7",
      suffix: "GW",
      label: "Assets Developed",
      description: "Renewable energy assets developed by the founding team across utility platforms.",
    },
    {
      value: "$3",
      suffix: "Bn",
      label: "Capital Raised",
      description: "Raised across prior platform transactions and institutional infrastructure financings.",
    },
    {
      value: "70",
      suffix: "yr",
      label: "Aggregate Experience",
      description: "Combined leadership experience across energy, structured finance, and power infrastructure.",
    },
  ] as MetricItem[],
  ecosystem: [
    {
      tag: "Renewable Power",
      name: "Eleverve Green",
      role: "Platform Asset Owner & Operator",
      description:
        "Solar, BESS, wind, hydro and hybrid assets structured and dispatched for utility-scale and institutional offtakers.",
    },
    {
      tag: "Financing Ecosystem",
      name: "Elements Financial Solutions",
      role: "Debt Structuring & Syndication",
      description:
        "Specialist debt structuring, institutional credit screening and multi-lender coordination behind platform assets.",
    },
    {
      tag: "DFI Precedent",
      name: "Transvolt Mobility",
      role: "Institutional Governance & Track Record",
      description:
        "Founder precedent of institutional capital raising and rigorous multilateral lender governance, including IFC and Finnfund.",
    },
  ] as EcosystemEntity[],
};
