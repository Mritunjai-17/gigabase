export interface ModuleItem {
  number: string;
  name: string;
  code: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  specs: { label: string; value: string }[];
  tag: string;
  image: string;
  telemetry: {
    status: string;
    load: string;
    efficiency: string;
    thermal: string;
  };
}

export const GIGABASE_MODULES: ModuleItem[] = [
  {
    number: "01",
    name: "GigaPod",
    code: "AI-01",
    category: "Compute & White Space",
    shortDesc: "45-foot AI compute module with hot aisle containment, air-to-liquid cooling, and 4N3 redundant power.",
    fullDesc: "45-foot AI compute module with hot aisle containment, air-to-liquid cooling, and 4N3 redundant power. GigaPod supports high-density liquid-cooled and low-density air-cooled racks and scales to 90 or 135 feet.",
    image: "/images/gigabase/gigapod.jpg",
    specs: [
      { label: "Footprint", value: "45-ft, 90-ft, or 135-ft" },
      { label: "Cooling Architecture", value: "Air-to-Liquid / DLC" },
      { label: "Rack Density Support", value: "High-density & Low-density" },
      { label: "Redundancy Design", value: "4N/3 Distributed" },
    ],
    tag: "WHITESPACE COMPUTE",
    telemetry: {
      status: "NOMINAL",
      load: "98.4%",
      efficiency: "1.08 PUE",
      thermal: "42°C Loop",
    },
  },
  {
    number: "02",
    name: "MV Switchgear",
    code: "M-01",
    category: "Medium Voltage Distribution",
    shortDesc: "24.9kV or 35kV medium voltage module connecting and distributing power from the utility to the site.",
    fullDesc: "24.9kV or 35kV medium voltage module connecting and distributing power from the utility to the site with 2 incoming feeders and 10 feeder breakers.",
    image: "/images/gigabase/mv-switchgear.jpg",
    specs: [
      { label: "Voltage Rating", value: "24.9kV or 35kV" },
      { label: "Incoming Feeders", value: "2 Redundant Feeds" },
      { label: "Feeder Breakers", value: "10 Vacuum Breakers" },
      { label: "Protection", value: "Integrated Relay Control" },
    ],
    tag: "GRID INTERCONNECT",
    telemetry: {
      status: "ONLINE",
      load: "34.5 kV Grid",
      efficiency: "99.8%",
      thermal: "31°C Busbar",
    },
  },
  {
    number: "03",
    name: "UPS E-House",
    code: "E-01",
    category: "Battery Backup Reserve",
    shortDesc: "3.0 MW lithium-ion battery backup bridging utility interruption and generator response.",
    fullDesc: "A 3.0 MW lithium-ion battery backup that keeps your compute online in the gap between utility interruption and generator response.",
    image: "/images/gigabase/ups-e-house.jpg",
    specs: [
      { label: "Capacity", value: "3.0 MW Lithium-Ion" },
      { label: "Transfer Time", value: "0 ms Seamless Transfer" },
      { label: "Enclosure", value: "Climate-Controlled E-House" },
      { label: "Battery Chemistry", value: "Tier-1 LFP Cells" },
    ],
    tag: "CONTINUOUS UPTIME",
    telemetry: {
      status: "FLOAT CHARGE",
      load: "100% Reserve",
      efficiency: "97.2%",
      thermal: "23°C Ambient",
    },
  },
  {
    number: "04",
    name: "Power Skid",
    code: "E-02",
    category: "Transformation & Distribution",
    shortDesc: "3.6 MVA transformers paired with 5,000A low-voltage switchboards that step down and distribute voltage.",
    fullDesc: "3.6 MVA transformers paired with 5,000A low-voltage switchboards that step down and distribute voltage to the site.",
    image: "/images/gigabase/power-skid.jpg",
    specs: [
      { label: "Transformer Rating", value: "3.6 MVA Padmount" },
      { label: "Switchboard Ampacity", value: "5,000A Low Voltage" },
      { label: "Standard", value: "UL 891 Listed" },
      { label: "Configuration", value: "Pre-fabricated Skid" },
    ],
    tag: "STEP-DOWN POWER",
    telemetry: {
      status: "BALANCED",
      load: "3,480 kVA",
      efficiency: "99.1%",
      thermal: "58°C Core",
    },
  },
  {
    number: "05",
    name: "Diesel Generator",
    code: "DG-01",
    category: "Emergency Backup Power",
    shortDesc: "3.3MW diesel generator providing 24-hour backup power when utility power fails.",
    fullDesc: "3.3MW diesel generator providing 24-hour backup power when utility power fails. Includes belly tank, radiator and enclosure.",
    image: "/images/gigabase/diesel-generator.jpg",
    specs: [
      { label: "Output Power", value: "3.3 MW Prime / Standby" },
      { label: "Run-time Tank", value: "24-Hour Sub-base Belly Tank" },
      { label: "Enclosure", value: "Sound-attenuated weatherproof" },
      { label: "Start-up Response", value: "< 10 Seconds to Sync" },
    ],
    tag: "24H BACKUP",
    telemetry: {
      status: "STANDBY READY",
      load: "Preheated Block",
      efficiency: "Tier 4 EPA",
      thermal: "40°C Jacket",
    },
  },
  {
    number: "06",
    name: "4N/3 Electrical Glue",
    code: "G-03",
    category: "Interconnect Fabric",
    shortDesc: "Proprietary 5000A electrical interconnects that connect and distribute power between each module.",
    fullDesc: "Proprietary 5000A electrical interconnects that connect and distribute power between each module in the system.",
    image: "/images/gigabase/electrical-glue.jpg",
    specs: [
      { label: "Bus Rating", value: "5,000A Continuous" },
      { label: "Interconnect Design", value: "Plug-and-play Quick Connect" },
      { label: "Safety Rating", value: "Arc-Resistant Isolation" },
      { label: "Topology", value: "4N/3 Distributed Mesh" },
    ],
    tag: "5000A REDUNDANT GLUE",
    telemetry: {
      status: "SYNCHRONIZED",
      load: "4-Train Equal",
      efficiency: "99.9%",
      thermal: "34°C Joint",
    },
  },
  {
    number: "07",
    name: "Cooling Glue",
    code: "G-06",
    category: "Hydronic Interconnects",
    shortDesc: "Pre-engineered mechanical piping modules that connect the chiller loop to each GigaPod.",
    fullDesc: "Pre-engineered mechanical piping modules that connect the chiller loop to each GigaPod, delivering cooled water to the system.",
    image: "/images/gigabase/cooling-glue.jpg",
    specs: [
      { label: "Loop Type", value: "Closed-loop Hydronic" },
      { label: "Connection", value: "Flexible Quick-couple Headers" },
      { label: "Flow Redundancy", value: "Dual Primary/Secondary" },
      { label: "Water Loss", value: "0 Gal / Zero Evaporative" },
    ],
    tag: "ZERO-WATER MANIFOLD",
    telemetry: {
      status: "CIRCULATING",
      load: "16.2 m³/h Flow",
      efficiency: "100% Closed",
      thermal: "18°C Supply / 28°C Return",
    },
  },
  {
    number: "08",
    name: "Air-cooled Chiller",
    code: "M-02",
    category: "Heat Rejection Plant",
    shortDesc: "2MW Maglev compressor chiller that rejects system heat and feeds a closed cooling water loop.",
    fullDesc: "2MW Maglev compressor chiller that rejects system heat and feeds a closed cooling water loop to each GigaPod.",
    image: "/images/gigabase/air-cooled-chiller.jpg",
    specs: [
      { label: "Cooling Capacity", value: "2.0 MW Thermal Rejection" },
      { label: "Compressor Type", value: "Oil-free Magnetic Levitation" },
      { label: "Cooling Medium", value: "Closed Glycol/Water Loop" },
      { label: "Environmental", value: "Zero Evaporative Water Use" },
    ],
    tag: "2MW MAGLEV PLANT",
    telemetry: {
      status: "CHILLING",
      load: "84.5% Compressor",
      efficiency: "1.12 kW/Ton",
      thermal: "7°C Chilled / 40°C Ambient",
    },
  },
];

export const BUILD_PROCESS_STAGES = [
  {
    stage: "01",
    months: "MO. 0–2",
    title: "SITE DESIGN",
    description: "Giga’s engineering and design team plans your site around your specific compute, cooling, and density requirements.",
    badge: "ENGINEERING & ARCHITECTURE",
    details: ["Computational Fluid Dynamics (CFD)", "Geotechnical & Civil Survey", "Power Interconnect Permitting", "Custom Rack Layouts"],
  },
  {
    stage: "02",
    months: "MO. 1–6",
    title: "SITE DEVELOPMENT & MANUFACTURING",
    description: "Giga manages utility interconnection, ground prep, and building construction, all while your modules are built and tested in our factories.",
    badge: "PARALLEL EXECUTION",
    details: ["Factory Module Fabrication", "FAT (Factory Acceptance Testing)", "Utility Substation Prep", "Underground Conduits & Pads"],
  },
  {
    stage: "03",
    months: "MO. 6–9",
    title: "MODULES PLACED ON-SITE",
    description: "Giga manufactures, tests, and commissions your data center infrastructure. Modules arrive ready to connect, reducing field labor by 10x.",
    badge: "10X FIELD LABOR REDUCTION",
    details: ["Precision Crane Placement", "Plug-and-play 5000A Glue", "Hydronic Manifold Mating", "Integrated Systems Testing"],
  },
  {
    stage: "04",
    months: "MO. 9",
    title: "ENERGIZATION",
    description: "Modules arrive pre-tested and ready to go. Power flows, cooling connects, and your site is rack-ready in 9 months.",
    badge: "SYSTEM READY / ENERGIZED",
    details: ["Grid Energization Verification", "Thermal Runaway Stress Testing", "Telemetry & DCIM Handover", "Hyperscale Compute On-Line"],
  },
];

export const TRADITIONAL_VENDORS = [
  { step: "01", name: "Site Selection + Real Estate" },
  { step: "02", name: "Legal Counsel" },
  { step: "03", name: "Land Counsel" },
  { step: "04", name: "Permitting Consultants" },
  { step: "05", name: "Owner's Rep / Project Manager" },
  { step: "06", name: "General Contractor" },
  { step: "07", name: "EPC Firm" },
  { step: "08", name: "Engineering Firms (MEP/Structural)" },
  { step: "09", name: "Utility Coordination" },
  { step: "10", name: "Manufacturers + Procurement" },
];

export const FULL_STACK_PILLARS = [
  {
    number: "01",
    phase: "LAND & POWER",
    title: "POWERED LAND",
    description: "A large and growing portfolio of powered sites. Low-cost power markets. Lots of acreage. Strategic locations. Fiber access. High-voltage infrastructure available.",
    tag: "ORIGINATION",
    stats: "Gigawatt-scale Sites Available",
  },
  {
    number: "02",
    phase: "EQUIPMENT",
    title: "AI INFRASTRUCTURE",
    description: "We manufacture all the infrastructure between the utility and the rack — transformers, switchboards, and power and cooling modules.",
    tag: "MANUFACTURING",
    stats: "In-House Factory Assembly",
  },
  {
    number: "03",
    phase: "CONSTRUCTION",
    title: "SITE DEVELOPMENT",
    description: "We build build-to-suit data centers using our own infrastructure or on behalf of customers — on their land or ours. Flexible deal structures. Faster, cheaper, and more cost-certain than the multi-vendor norm.",
    tag: "EXECUTION",
    stats: "Turnkey EPC Delivery",
  },
  {
    number: "04",
    phase: "OPERATIONS",
    title: "COLOCATION",
    description: "We offer colocation data centers on our own powered land. Purpose-built for high-density GPU deployments and operated by the same team that built them.",
    tag: "OPERATIONS",
    stats: "24/7 Mission-Critical Ops",
  },
];

export const COMPARISON_DATA = [
  {
    category: "SPEED",
    headline: "Deployment Timeline",
    usdcValue: "We deploy in under 9 months.",
    usdcSub: "Parallel site construction and factory manufacturing eliminate dead time.",
    othersValue: "14–18 months or longer",
    othersSub: "Sequential linear waterfalls with compounding contractor delays.",
  },
  {
    category: "WHO BUILDS IT",
    headline: "Manufacturing Ownership",
    usdcValue: "We manufacture everything, from white space compute to power.",
    usdcSub: "Direct end-to-end quality assurance under one industrial roof.",
    othersValue: "Coordinate vendors.",
    othersSub: "Middlemen broker disparate third-party OEM components.",
  },
  {
    category: "TRUE PRE-FAB",
    headline: "Assembly Paradigm",
    usdcValue: "We build in the factory instead of the field.",
    usdcSub: "Pre-tested, factory-commissioned modules reduce on-site labor by 90%.",
    othersValue: "Start construction on site, behind schedule.",
    othersSub: "Weather delays, shortage of skilled electricians and on-site rework.",
  },
  {
    category: "SINGLE VENDOR",
    headline: "Accountability & Handoffs",
    usdcValue: "Our integration = Fewer handoffs.",
    usdcSub: "One contract, one engineering standard, single-point accountability.",
    othersValue: "More to manage.",
    othersSub: "10+ separate contracts pointing fingers when energization slips.",
  },
];
