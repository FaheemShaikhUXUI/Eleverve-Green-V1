"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Play,
  MapPin,
  Zap,
  ArrowUpRight,
  Leaf,
  X,
  Activity,
  Cpu,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShowcaseProject {
  id: string;
  name: string;
  category: "solar" | "hybrid" | "storage" | "open-access";
  categoryLabel: string;
  state: string;
  capacity: string;
  offtaker: string;
  co2Offset: string;
  gridInterconnect: string;
  voltage: string;
  imageSrc: string;
  description: string;
  techSpecs: {
    cod: string;
    modules: string;
    inverter: string;
    substation: string;
    tariff: string;
  };
}

const projects: ShowcaseProject[] = [
  {
    id: "raj-solar",
    name: "Bhadla Solar & Hybrid Anchor",
    category: "solar",
    categoryLabel: "Utility Solar",
    state: "Rajasthan",
    capacity: "52.5 MWp",
    offtaker: "NTPC Vidyut Vyapar Nigam (NVVN)",
    co2Offset: "78,200 Tons / yr",
    gridInterconnect: "220kV ISTS Substation",
    voltage: "220 kV ISTS",
    imageSrc: "/images/solar-substation.jpg",
    description:
      "High-irradiance desert solar facility supplying long-term firm power under sovereign-backed PPA with planned 50 MW wind addition.",
    techSpecs: {
      cod: "Operational / Commissioned",
      modules: "Tier-1 Mono PERC Bifacial",
      inverter: "Centralized Utility Inverters",
      substation: "220/33kV Dedicated ISTS Yard",
      tariff: "Long-term Fixed 25-Yr Sovereign PPA",
    },
  },
  {
    id: "guj-hybrid",
    name: "Khavda Hybrid Expansion Park",
    category: "hybrid",
    categoryLabel: "Wind-Solar Hybrid",
    state: "Gujarat",
    capacity: "20.0 MWp (+100 MW Target)",
    offtaker: "State Discom & Commercial PPA",
    co2Offset: "32,400 Tons / yr",
    gridInterconnect: "GETCO 400kV Pooling Substation",
    voltage: "400 kV GETCO",
    imageSrc: "/images/wind-landscape.jpg",
    description:
      "Strategically located wind-solar complementary generation site providing daytime solar peak and evening coastal wind dispatch.",
    techSpecs: {
      cod: "Development / Interconnect Active",
      modules: "High-yield TOPCon / 3.3MW WTGs",
      inverter: "Hybrid String PCS Architecture",
      substation: "GETCO 400kV High-Cap Pooling Bay",
      tariff: "Blended Competitive State DISCOM PPA",
    },
  },
  {
    id: "ap-firm",
    name: "Rayalaseema Clean Energy Facility",
    category: "open-access",
    categoryLabel: "C&I Open Access",
    state: "Andhra Pradesh",
    capacity: "26.5 MWp",
    offtaker: "Tier-1 Industrial & C&I Group",
    co2Offset: "41,800 Tons / yr",
    gridInterconnect: "APTRANSCO 132kV Bay",
    voltage: "132 kV APTRANSCO",
    imageSrc: "/images/bess-facility.jpg",
    description:
      "Dedicated C&I open access asset delivering round-the-clock green power to energy-intensive manufacturing clusters with zero capex.",
    techSpecs: {
      cod: "Operational Fleet Asset",
      modules: "High-density Monocrystalline",
      inverter: "Decentralized Smart String",
      substation: "Dedicated 132kV Feeder Line",
      tariff: "Direct Industrial Bilateral Open Access",
    },
  },
  {
    id: "dispatch-hub",
    name: "National Energy Operations Center",
    category: "storage",
    categoryLabel: "BESS & Dispatch",
    state: "Multi-State Grid Interface",
    capacity: "1.2 GW Active Fleet Telemetry",
    offtaker: "Central & State SLDC Co-ordinated",
    co2Offset: "Integrated Grid Balancing",
    gridInterconnect: "Automated SCADA & BESS Interface",
    voltage: "Real-time SLDC Link",
    imageSrc: "/images/dispatch-center.jpg",
    description:
      "24/7 intelligent asset management center running automated generation forecasting, deviation settlement (DSM), and firm delivery shaping.",
    techSpecs: {
      cod: "24/7 Live Autonomous NOC",
      modules: "SCADA / RTU High-Speed Telemetry",
      inverter: "AI-Powered Frequency & DSM Controls",
      substation: "Direct Multi-SLDC Data Conduit",
      tariff: "Ancillary & Balancing Service Protocol",
    },
  },
];

const filterTabs = [
  { id: "all", label: "All Projects", count: 4 },
  { id: "solar", label: "Utility Solar", count: 1 },
  { id: "hybrid", label: "Wind-Solar Hybrid", count: 1 },
  { id: "storage", label: "BESS & Dispatch", count: 1 },
  { id: "open-access", label: "C&I Open Access", count: 1 },
];

export function ProjectShowcaseGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<ShowcaseProject | null>(null);
  const [videoModalProject, setVideoModalProject] = useState<ShowcaseProject | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-6">
      {/* Modern High-End Architectural Filter Tabs & Live Telemetry Rail */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-2 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-none shadow-xs">
        {/* Segmented Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={cn(
                  "relative px-3.5 py-2 text-xs font-mono font-medium transition-all duration-300 rounded-none cursor-pointer flex items-center gap-2 border",
                  isActive
                    ? "bg-green text-white border-green font-bold shadow-xs"
                    : "bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-ink"
                )}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    "px-1.5 py-0.2 text-[10px] font-mono",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
                  )}
                >
                  0{tab.count}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeFilterGlow"
                    className="absolute inset-0 border border-white/40 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Live Facility Count & Telemetry Badge */}
        <div className="flex items-center gap-3 px-3 py-1.5 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 self-start lg:self-auto font-mono text-xs">
          <span className="w-2 h-2 rounded-none bg-green animate-pulse" />
          <span className="text-soft font-medium">
            DISPLAYING: <strong className="text-ink">{filteredProjects.length} OF {projects.length}</strong> VERIFIED HUBS
          </span>
        </div>
      </div>

      {/* Grid of Verified Project Showcase Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group rounded-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-all duration-500 ease-out flex flex-col justify-between hover:border-green hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] relative"
            >
              {/* Luminous Top Hover Beam */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

              {/* Card Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-none border-b border-neutral-200 dark:border-neutral-800 bg-neutral-900">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

                {/* Interactive Video Stream Trigger Badge */}
                <button
                  type="button"
                  onClick={() => setVideoModalProject(project)}
                  className="absolute top-3.5 left-3.5 z-20 inline-flex items-center gap-2 px-3 py-1 rounded-none bg-black/75 backdrop-blur-md border border-white/20 text-white hover:border-green hover:text-emerald-400 transition-all duration-300 group/btn cursor-pointer shadow-md"
                >
                  <span className="w-1.5 h-1.5 rounded-none bg-green animate-pulse" />
                  <Play className="w-3 h-3 fill-current text-green" />
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase">
                    VIDEO FEED
                  </span>
                </button>

                {/* State Location Tag */}
                <div className="absolute top-3.5 right-3.5 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-black/70 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{project.state}</span>
                </div>

                {/* Capacity Banner Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider block font-bold mb-0.5">
                      // OPERATING CAPACITY
                    </span>
                    <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                      {project.capacity}
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-none bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-semibold">
                    {project.voltage}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Pill & ID */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-green font-bold">
                      {project.categoryLabel}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400">
                      ID: {project.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-ink mb-2.5 group-hover:text-green transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-xs text-soft leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* High-Tech Technical Metric Blocks */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3.5 rounded-none bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 transition-colors group-hover:border-neutral-300 dark:group-hover:border-neutral-700">
                      <div className="flex items-center gap-1.5 text-[11px] text-soft mb-1 font-mono">
                        <Leaf className="w-3.5 h-3.5 text-green" />
                        <span className="uppercase tracking-wider">CO2 Abatement</span>
                      </div>
                      <span className="text-xs sm:text-sm font-heading font-bold text-ink">
                        {project.co2Offset}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-none bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 transition-colors group-hover:border-neutral-300 dark:group-hover:border-neutral-700">
                      <div className="flex items-center gap-1.5 text-[11px] text-soft mb-1 font-mono">
                        <Zap className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="uppercase tracking-wider">Interconnect</span>
                      </div>
                      <span className="text-xs sm:text-sm font-heading font-bold text-ink truncate block">
                        {project.gridInterconnect}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Inspect Trigger */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-2">
                  <div className="text-[11px] font-mono text-soft truncate max-w-[55%]">
                    Offtaker: <strong className="text-ink">{project.offtaker.split("(")[0].trim()}</strong>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-green group-hover:text-emerald-500 transition-colors cursor-pointer"
                  >
                    <span>VIEW TECHNICAL SPECS</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* High-End Technical Specs Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-none w-full max-w-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Header */}
              <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-900">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-none bg-green/10 border border-green/30 flex items-center justify-center text-green">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-green font-bold block">
                      TECHNICAL DOSSIER // {activeModalProject.state.toUpperCase()}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-ink">
                      {activeModalProject.name}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-ink" />
                </button>
              </div>

              {/* Content Specs Grid */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-3.5 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40">
                    <span className="text-[10px] font-mono uppercase text-soft block mb-1">CAPACITY</span>
                    <span className="font-heading text-lg font-bold text-green">{activeModalProject.capacity}</span>
                  </div>
                  <div className="p-3.5 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40">
                    <span className="text-[10px] font-mono uppercase text-soft block mb-1">INTERCONNECT</span>
                    <span className="font-mono text-xs font-bold text-ink">{activeModalProject.techSpecs.substation}</span>
                  </div>
                  <div className="p-3.5 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 col-span-2 sm:col-span-1">
                    <span className="text-[10px] font-mono uppercase text-soft block mb-1">STATUS</span>
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {activeModalProject.techSpecs.cod}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-soft">Module / Generation Architecture:</span>
                    <strong className="text-ink text-right">{activeModalProject.techSpecs.modules}</strong>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-soft">Inverter &amp; Control Topology:</span>
                    <strong className="text-ink text-right">{activeModalProject.techSpecs.inverter}</strong>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-soft">PPA / Commercial Structure:</span>
                    <strong className="text-ink text-right">{activeModalProject.techSpecs.tariff}</strong>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-soft">Primary Sovereign/Industrial Offtaker:</span>
                    <strong className="text-ink text-right">{activeModalProject.offtaker}</strong>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-soft">Carbon Offset Performance:</span>
                    <strong className="text-green text-right">{activeModalProject.co2Offset}</strong>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2.5 bg-green text-white font-mono text-xs font-bold hover:bg-emerald-600 transition-colors rounded-none cursor-pointer"
                  >
                    CLOSE TECHNICAL DOSSIER
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Simulation Modal */}
      <AnimatePresence>
        {videoModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-neutral-950 border border-neutral-800 rounded-none w-full max-w-3xl overflow-hidden shadow-2xl relative text-white"
            >
              <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-2 h-2 rounded-none bg-emerald-400 animate-pulse" />
                  <span className="text-neutral-400">TELEMETRY STREAM // {videoModalProject.name.toUpperCase()}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setVideoModalProject(null)}
                  className="p-1.5 border border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                <Image
                  src={videoModalProject.imageSrc}
                  alt={videoModalProject.name}
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Simulated Telemetry HUD Overlays */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-emerald-400 bg-black/60 px-3 py-1.5 border border-emerald-500/30">
                  <div>LAT/LONG: 27.50° N, 71.91° E</div>
                  <div>FEED: 1080P IRRADIANCE SCADA STREAM</div>
                  <div>FREQUENCY: 50.02 Hz · NOMINAL</div>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-3 text-center px-4">
                  <div className="w-16 h-16 rounded-none bg-green/20 border border-green flex items-center justify-center backdrop-blur-md">
                    <Play className="w-8 h-8 fill-green text-green ml-1" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                    FACILITY AERIAL &amp; SCADA FEED READY
                  </span>
                  <span className="text-xs text-neutral-400 max-w-md">
                    Production video telemetry pipeline connected. Video file placeholders can be mounted at <code className="text-emerald-400">/public/videos/{videoModalProject.id}.mp4</code>.
                  </span>
                </div>
              </div>

              <div className="p-4 border-t border-neutral-800 flex justify-between items-center text-xs font-mono text-neutral-400">
                <span>{videoModalProject.state} · {videoModalProject.capacity}</span>
                <button
                  type="button"
                  onClick={() => setVideoModalProject(null)}
                  className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-none cursor-pointer"
                >
                  DISMISS
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
