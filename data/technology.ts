export interface TechnologyBuildingBlock {
  name: string;
  role: string;
  tagline: string;
  generationProfile: string;
  dispatchCharacteristics: string;
  commercialValue: string;
  curveHours: string;
}

export const technologyData = {
  headline: "Resource-led FDRE / RTC design, not technology-led selling.",
  subheadline:
    "Renewable resource availability is region-specific. Solar irradiation, wind regime, hydro availability, land constraints, grid capacity, banking rules, open-access charges and demand patterns vary by geography.",
  corePhilosophy:
    "We do not start with a preferred technology, nor do we force-fit a technology to a project. We begin with the offtaker’s contracted demand profile, the site conditions, the available resource, the grid interface and the required cost outcome.",
  buildingBlocks: [
    {
      name: "Solar",
      role: "Daytime Cost",
      tagline: "Lowest marginal cost baseload during peak solar insolation hours.",
      generationProfile: "Bell curve generation peaking between 10:00 AM and 3:00 PM.",
      dispatchCharacteristics: "Predictable, high CUF in Western/Southern belts; prone to midday clipping without storage.",
      commercialValue: "Drives down levelized cost of energy (LCOE) across the blended generation portfolio.",
      curveHours: "07:00 - 18:00",
    },
    {
      name: "Wind",
      role: "Evening Support",
      tagline: "Natural diurnal counterweight to solar, ramping during late evening and night.",
      generationProfile: "Elevated generation during evening hours (6:00 PM - 2:00 AM) and monsoon season.",
      dispatchCharacteristics: "Complements solar troughs; requires strategic aerodynamic micro-siting.",
      commercialValue: "Fills evening tariff peak hours where industrial demand and grid clearing prices are highest.",
      curveHours: "17:00 - 07:00",
    },
    {
      name: "Hydro",
      role: "Flexibility",
      tagline: "Rapid-response dispatchable inertia and seasonal hydro balancing.",
      generationProfile: "High dispatch controllability with rapid spinning reserve response.",
      dispatchCharacteristics: "Fast-ramping within minutes to buffer sudden cloud cover or industrial surge loads.",
      commercialValue: "Provides firm capacity attributes and vital grid frequency regulation.",
      curveHours: "On-demand dispatch",
    },
    {
      name: "Hybrid",
      role: "Utilisation",
      tagline: "Shared grid evacuation infrastructure maximizing transmission CUF.",
      generationProfile: "Smoothed composite generation profile across 24-hour cycle.",
      dispatchCharacteristics: "Higher capacity utilisation factor (CUF > 45-50%) through shared substation bays.",
      commercialValue: "Significantly reduces per-MWh dedicated transmission line and bay Capex.",
      curveHours: "24/7 aggregate",
    },
    {
      name: "Storage",
      role: "Shaping",
      tagline: "Electrochemical time-shifting converting intermittent electrons into firm blocks.",
      generationProfile: "Charges during daytime surplus; discharges during peak offtake demand hours.",
      dispatchCharacteristics: "Sub-second response, frequency support, and peak-shaving dispatch.",
      commercialValue: "Eliminates solar curtailment and delivers contracted Round-The-Clock (RTC) guarantees.",
      curveHours: "Dynamic arbitrage",
    },
  ] as TechnologyBuildingBlock[],
};
