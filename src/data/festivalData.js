export const FESTIVAL_INFO = {
  name: "TECHFEST",
  edition: "30th Landmark Edition",
  theme: "An Aetherial Renaissance",
  institution: "IIT Bombay",
  location: "Powai, Mumbai, India",
  dates: "December 16 – 18, 2026",
  tagline: "Asia's Largest Science and Technology Festival",
  description: "Marking three decades of pioneering human curiosity and engineering mastery. Step into An Aetherial Renaissance where quantum computing, humanoid robotics, interstellar exploration, and digital art converge.",
  targetDate: "2026-12-16T09:00:00+05:30",
};

export const FESTIVAL_STATS = [
  { label: "Footfall", value: "175,000+", change: "+18% YoY", icon: "Users" },
  { label: "Colleges Reached", value: "2,500+", change: "National & Global", icon: "GraduationCap" },
  { label: "Nations Represented", value: "60+", change: "Global Delegations", icon: "Globe2" },
  { label: "Total Prize Pool", value: "₹50,00,000+", change: "Cash & Grants", icon: "Trophy" },
  { label: "Years of Legacy", value: "30 Years", change: "Since 1998", icon: "Sparkles" },
];

export const FESTIVAL_ARENAS = [
  {
    id: "robowars",
    title: "ROBOWARS",
    category: "Combat & Robotics",
    badge: "Flagship Arena",
    tagline: "India's Fiercest Combat Robotics Championship",
    prize: "₹12,50,000",
    date: "Dec 16-18",
    color: "from-red-500/20 via-orange-500/10 to-transparent",
    borderAccent: "border-orange-500/50",
    glowColor: "rgba(249, 115, 22, 0.4)",
    imageSnippet: "⚔️ 60kg Heavyweight Titans Clashing",
    highlights: [
      "60kg & 15kg Combat Weight Classes",
      "Reinforced 12mm Polycarbonate Arena",
      "Spinners, Flippers, and Pneumatic Crushers",
      "International Combat Teams from 12+ Countries"
    ],
    description: "The arena echoes with shearing steel and flying sparks. Witness battle-hardened engineers duel their remote-controlled monsters in a test of pure kinetic energy, tactical drive control, and metallurgical endurance."
  },
  {
    id: "technoholix",
    title: "TECHNOHOLIX",
    category: "Nights & Shows",
    badge: "Night Festival",
    tagline: "Visual Arts, EDM & Laser Choreography",
    prize: "Open Access",
    date: "Dec 16-18 (8 PM Daily)",
    color: "from-purple-500/20 via-pink-500/10 to-transparent",
    borderAccent: "border-purple-500/50",
    glowColor: "rgba(168, 85, 247, 0.4)",
    imageSnippet: "🎆 Pyrotechnics, Drone Swarms & EDM",
    highlights: [
      "500+ Autonomous Drone Light Show Formations",
      "International EDM Headliners & Synth Artists",
      "Multi-Color High-Power Laser Mapping",
      "Acrobatic Cyr Wheel & Cyber Pyrotechnics"
    ],
    description: "When the sun sets behind the hills of IIT Bombay, Gymkhana Ground ignites into an awe-inspiring sensory singularity. Technoholix merges high-voltage electronic music with kinetic stage machinery."
  },
  {
    id: "exhibitions",
    title: "INTERNATIONAL TECH EXPO",
    category: "Expos & Talks",
    badge: "Global Showcase",
    tagline: "Tomorrow's Prototypes, Live on Campus",
    prize: "Innovation Grants",
    date: "Dec 16-18",
    color: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderAccent: "border-cyan-500/50",
    glowColor: "rgba(0, 240, 255, 0.4)",
    imageSnippet: "🤖 Unitree G1 Humanoids & Space Hardware",
    highlights: [
      "Full-Scale Unitree G1 Humanoids in Action",
      "ISRO Space Launch Models & Rover Simulators",
      "DRDO Autonomous Defense Drone Showcases",
      "Formula Student IIT Bombay EV Race Cars"
    ],
    description: "Walk alongside lifelike bionic robots, touch aerospace flight-ready composite fairings, and chat with creators shaping the fourth industrial revolution."
  },
  {
    id: "keynotes",
    title: "WORLD KEYNOTE LECTURES",
    category: "Expos & Talks",
    badge: "Conclave",
    tagline: "Words That Shift Paradigms",
    prize: "Exclusive Access",
    date: "Dec 16-18",
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
    borderAccent: "border-amber-500/50",
    glowColor: "rgba(251, 191, 36, 0.4)",
    imageSnippet: "🎙️ Nobel Laureates & AI Pioneers",
    highlights: [
      "Iconic Convocation Hall Keynote Sessions",
      "Live Q&A with Global Innovators & Scientists",
      "Defense Leadership & Space Exploration Panels",
      "Fireside Chats on Artificial General Intelligence"
    ],
    description: "From Dr. APJ Abdul Kalam to Sophia the Robot and Turing Award winners, Techfest's keynote stage has hosted minds whose breakthroughs define modern civilization."
  },
  {
    id: "competitions",
    title: "COMPETITIONS & HACKATHONS",
    category: "AI & Code",
    badge: "₹50L+ Pool",
    tagline: "Solve Real-World Engineering Dilemmas",
    prize: "₹25,00,000",
    date: "Dec 16-18",
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderAccent: "border-emerald-500/50",
    glowColor: "rgba(16, 185, 129, 0.4)",
    imageSnippet: "⚡ Hackathons, RC Grand Prix & Drones",
    highlights: [
      "InnovateX: Sustainable AQI & Energy Systems",
      "Agentic AI Challenge: Open Source LLMs & Agents",
      "IDRL International Drone Racing League Grand Prix",
      "Fullthrottle: Nitro & Electric 1:8 RC Speedways"
    ],
    description: "Code all night, tune PID controllers at dawn, and race on microsecond clocks. Techfest challenges test real skills with strict benchmarking criteria."
  },
  {
    id: "workshops",
    title: "HANDS-ON WORKSHOPS",
    category: "Workshops",
    badge: "IITB Certified",
    tagline: "Master Emerging Deep Tech Stacks",
    prize: "Certificates",
    date: "Dec 15-18",
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderAccent: "border-blue-500/50",
    glowColor: "rgba(59, 130, 246, 0.4)",
    imageSnippet: "🛠️ AI Agents, Drone Avionics & ROS2",
    highlights: [
      "Agentic AI & Multimodal LLM Architecture",
      "Robot Operating System (ROS2) & SLAM Nav",
      "Autonomous Drone Design & Flight Firmware",
      "Cyber Threat Intelligence & Hardware Hacking"
    ],
    description: "Led by industry leaders and IIT Bombay technical bodies. Attendees build working projects, flash microcontrollers, and deploy production pipelines with recognized certification."
  },
  {
    id: "initiatives",
    title: "SOCIAL INITIATIVES",
    category: "Social Good",
    badge: "Impact",
    tagline: "Technology In Service of Humanity",
    prize: "Social Grants",
    date: "Year-Round",
    color: "from-rose-500/20 via-pink-500/10 to-transparent",
    borderAccent: "border-rose-500/50",
    glowColor: "rgba(244, 63, 94, 0.4)",
    imageSnippet: "🌱 Clean Powai, Eduu & Rural Tech",
    highlights: [
      "Project Eduu: STEM kits for 25,000+ school students",
      "Project Ignite: Solar lanterns & rural digital literacy",
      "Eco-Powai: Lake ecosystem conservation monitoring",
      "Mental Health Tech: Suicide prevention & awareness"
    ],
    description: "Engineering means nothing if it doesn't uplift society. Techfest conducts widespread social impact campaigns that directly touch thousands of lives across India."
  }
];

export const FEATURED_SPEAKERS = [
  {
    name: "Dr. A.P.J. Abdul Kalam",
    role: "Former President of India",
    org: "The Missile Man of India",
    year: "Historic Keynote",
    tag: "National Icon",
    quote: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."
  },
  {
    name: "Sophia the Robot",
    role: "First Robot Citizen",
    org: "Hanson Robotics",
    year: "Milestone Appearance",
    tag: "AI & Humanoid",
    quote: "I want to use my artificial intelligence to help humans live a better life."
  },
  {
    name: "Ratan N. Tata",
    role: "Visionary Industrialist",
    org: "Tata Sons",
    year: "Leadership Address",
    tag: "Industry Titan",
    quote: "None can destroy iron, but its own rust can. Likewise, none can destroy a person, but their own mindset can."
  },
  {
    name: "Bjarne Stroustrup",
    role: "Creator of C++",
    org: "Computer Scientist",
    year: "Computing Conclave",
    tag: "Software Pioneer",
    quote: "There are only two kinds of languages: the ones people complain about and the ones nobody uses."
  },
  {
    name: "Jimmy Wales",
    role: "Co-Founder",
    org: "Wikipedia",
    year: "Open Knowledge Keynote",
    tag: "Information Freedom",
    quote: "Imagine a world in which every single person on the planet is given free access to the sum of all human knowledge."
  },
  {
    name: "Dr. Stephen Wolfram",
    role: "Founder & CEO",
    org: "Wolfram Research & Mathematica",
    year: "Computational AI",
    tag: "Complexity & Math",
    quote: "Computation is a whole new way of thinking about the world, and we're just at the beginning."
  }
];

export const FESTIVAL_SCHEDULE = [
  {
    day: "Day 01",
    date: "Friday, Dec 16",
    theme: "Genesis: The Ignition",
    events: [
      { time: "09:30 AM", title: "Grand Inaugural Ceremony", venue: "Convocation Hall", tag: "Ceremony" },
      { time: "11:00 AM", title: "International Tech Expo Opening (Unitree G1 Live)", venue: "Indoor Expo Dome", tag: "Expo" },
      { time: "01:30 PM", title: "Robowars: 15kg Featherweight Knockout Rounds", venue: "Robowars Polycarbonate Arena", tag: "Combat" },
      { time: "03:30 PM", title: "Keynote Lecture: Future of Autonomous Humanoids", venue: "PC Saxena Auditorium", tag: "Lecture" },
      { time: "05:00 PM", title: "IDRL International Drone Racing: Time Trials", venue: "Gymkhana Night Track", tag: "Racing" },
      { time: "08:00 PM", title: "Technoholix Night 1: Laser Light Symphony & Cyr Wheel", venue: "Gymkhana Grounds", tag: "Spectacle" },
    ]
  },
  {
    day: "Day 02",
    date: "Saturday, Dec 17",
    theme: "Nexus: The Confluence",
    events: [
      { time: "10:00 AM", title: "Agentic AI 36-Hour Hackathon Pitching", venue: "VMCC Lecture Halls", tag: "Code" },
      { time: "11:30 AM", title: "Robowars: 60kg Heavyweight Round of 16", venue: "Robowars Polycarbonate Arena", tag: "Combat" },
      { time: "02:00 PM", title: "Space Exploration Symposium with ISRO Scientists", venue: "Convocation Hall", tag: "Symposium" },
      { time: "04:00 PM", title: "Fullthrottle Nitro RC Speed Grand Prix", venue: "Outdoor Asphalt Speedway", tag: "Racing" },
      { time: "06:00 PM", title: "TWMUN: International Security Debate Closing", venue: "SOM Seminar Rooms", tag: "Debate" },
      { time: "08:15 PM", title: "Technoholix Night 2: 500-Drone Synchronized Sky Ballet", venue: "Gymkhana Grounds", tag: "Spectacle" },
    ]
  },
  {
    day: "Day 03",
    date: "Sunday, Dec 18",
    theme: "The Climax: Aetherial Renaissance",
    events: [
      { time: "10:00 AM", title: "InnovateX: Clean Earth Global Finals", venue: "VMCC Main Foyer", tag: "Innovation" },
      { time: "12:30 PM", title: "Robowars: Heavyweight Semi-Finals & Championship Bout", venue: "Robowars Arena", tag: "Combat" },
      { time: "03:30 PM", title: "Valedictory & Grand Prize Distribution (₹50L Pool)", venue: "Convocation Hall", tag: "Ceremony" },
      { time: "06:00 PM", title: "TechConnect Research Showcase Highlights", venue: "Departmental Quadrangles", tag: "Expo" },
      { time: "08:30 PM", title: "Technoholix Grand Finale: International EDM & Pyrotechnics", venue: "Gymkhana Main Ground", tag: "Spectacle" },
    ]
  }
];

export const PATRONAGES = [
  { name: "UNESCO", subtitle: "Official Patronage", badge: "Global Peace & Science" },
  { name: "UNICEF", subtitle: "Social Empowerment", badge: "Childhood Rights" },
  { name: "Make In India", subtitle: "National Initiative", badge: "Indigenous Engineering" },
  { name: "Digital India", subtitle: "Government of India", badge: "Tech Transformation" },
  { name: "SAARC", subtitle: "Regional Cooperation", badge: "South Asia Fellowship" },
  { name: "CEE", subtitle: "Centre for Environment Education", badge: "Sustainability" },
];

export const FAQS = [
  {
    q: "Is entry to Techfest IIT Bombay free for all attendees?",
    a: "Yes! Entry to Techfest exhibitions, keynote lectures, and Technoholix shows is completely free for students and the general public. Certain competitions and hands-on workshops require prior team registration on the portal."
  },
  {
    q: "How can I participate in Robowars or Competitions?",
    a: "Click on 'Register for Fest' or navigate to the Competitions vertical. Select your event (e.g. Robowars 60kg, InnovateX, Agentic AI), review the rulebook, assemble your team (1-5 members), and submit your team roster."
  },
  {
    q: "Is accommodation available inside IIT Bombay during the fest?",
    a: "Yes. Techfest provides on-campus hostel accommodation for registered participants from outside Mumbai from Dec 15 to Dec 19. It includes hostel rooms, 24/7 security, WiFi, and access to student dining mess halls."
  },
  {
    q: "Can school students attend Techfest?",
    a: "Absolutely! Techfest welcomes thousands of school students every year to explore the Tech Expo, watch Robowars, attend junior robotics competitions, and participate in Project Eduu."
  },
  {
    q: "How do I reach the IIT Bombay Campus?",
    a: "IIT Bombay is located in Powai, Mumbai. The nearest local railway stations are Kanjurmarg (Central Line) and Andheri (Western Line). It is also accessible via Mumbai Metro Line 6 and Chhatrapati Shivaji Maharaj International Airport (approx 8 km away)."
  }
];
