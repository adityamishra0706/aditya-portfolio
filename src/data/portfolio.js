/**
 * ADITYA MISHRA — PORTFOLIO CONTENT CONFIGURATION
 * 
 * Central content configuration file.
 * All text, links, projects, and media paths are managed here.
 * Components read directly from this file — do NOT hardcode content in JSX.
 */

export const portfolio = {
  // Identity & Navigation
  name: "Aditya Mishra",
  navBrand: "ADITYA.",
  role: "CSE STUDENT / VIDEO EDITOR / CREATOR",
  identity: "@POV.ADITYA",

  // Social Links (Real external destinations)
  instagram: {
    label: "@POV.ADITYA",
    url: "https://www.instagram.com/pov.aditya/"
  },
  linkedin: {
    label: "LINKEDIN",
    url: "https://www.linkedin.com/in/aditya-mishra-803186422"
  },

  // Hero Section
  hero: {
    firstName: "ADITYA",
    lastName: "MISHRA",
    tagline: "CSE STUDENT / VIDEO EDITOR / CREATOR",
    identityBadge: "@POV.ADITYA",
    ctaLabel: "WATCH MY WORK",
    ctaTarget: "#work",
    video: "/videos/hero-background.mp4"
  },

  // Marquee Strip
  marquee: [
    "EDIT",
    "CREATE",
    "SHOOT",
    "LEARN",
    "BUILD",
    "STORYTELL",
    "EXPERIMENT"
  ],

  // POV.ADITYA Section (Temporarily removed project cards: GOD'S PLAN & POV.ADITYA)
  pov: {
    title: "@POV.ADITYA",
    heading: "DOCUMENTING\nTHE PROCESS.",
    description: "Where all the creative work lives. Raw experiments, visual cuts, timeline drafts, and documenting the craft every single day.",
    instagramCta: "MORE ON @POV.ADITYA →",
    // To restore GOD'S PLAN and POV.ADITYA cards later, uncomment the items below:
    items: [
      /*
      {
        id: "gods-plan",
        title: "GOD'S PLAN",
        category: "VISUAL EXPERIMENT",
        description: "Kinetic rhythm, sound-driven cuts, and exploring visual pacing.",
        video: "/videos/gods-plan.mp4",
        aspectRatio: "9/16"
      },
      {
        id: "pov-main",
        title: "POV.ADITYA",
        category: "PROCESS & IDENTITY",
        description: "Behind the lens, timeline experiments, and the daily evolution of craft.",
        video: "/videos/pov-aditya.mp4",
        aspectRatio: "9/16"
      }
      */
    ]
  },

  // Selected Work
  selectedWork: [
    {
      id: "coke-ad",
      number: "01",
      badge: "01 / COMMERCIAL",
      label: "EDITED",
      title: "COKE AD",
      category: "COMMERCIAL / SPEC",
      focusTags: ["01 / COMMERCIAL", "EDITED"],
      tagline: "Commercial visual pacing & kinetic sound design",
      description: "A spec commercial cut exploring high-impact pacing, precise sound design, and commercial visual framing.",
      video: "/videos/work/coke-ad.mp4",
      aspectRatio: "16/9",
      featured: true
    },
    {
      id: "curls-ad",
      number: "02",
      badge: "02 / EXPERIMENT",
      title: "CURLS",
      hook: "CAN A ₹10K ANDROID PHONE SHOOT A COMMERCIAL?",
      label: "SHOT + EDITED",
      category: "COMMERCIAL EXPERIMENT",
      description: "Can a commercial-style piece be made using a ₹10K Android phone? An experiment in pushing budget gear to its creative limits through intentional lighting, disciplined movement, and post-production color science.",
      video: "/videos/work/curls-ad.mp4",
      aspectRatio: "16/9",
      featured: true
    },
    {
      id: "fashion-reel-01",
      number: "03",
      badge: "03 / REEL",
      title: "FASHION REEL 01",
      label: "SHOT + EDITED",
      category: "SHORT-FORM CONTENT",
      description: "Shot and edited for college society. High-energy rhythm, fluid cuts, color grading, and dynamic visual transitions.",
      video: "/videos/work/fashion-reel-01.mp4",
      aspectRatio: "9/16",
      featured: false
    }
  ],

  // About Section (Engineering × Creativity)
  about: {
    heading: "ENGINEERING × CREATIVITY",
    lead: "Engineering by education. Creativity by choice.",
    storyParagraphs: [
      "Somewhere between engineering classes, assignments, and college life, I keep finding my way back to a camera, a timeline, and visual storytelling.",
      "Filmmaking and video editing are the direction I'm actively building. @POV.ADITYA is where I document that process."
    ],
    image: "/images/aditya.jpg",
    statusBadge: "DOCUMENTING THE JOURNEY"
  },

  // Capabilities ("WHAT I DO" — Exactly 4 items, minimal editorial list, no descriptions)
  capabilities: [
    { number: "01", title: "VIDEO EDITING" },
    { number: "02", title: "SHORT-FORM CONTENT" },
    { number: "03", title: "CINEMATOGRAPHY" },
    { number: "04", title: "FILMMAKING" }
  ],

  // Closing / Final CTA
  closing: {
    eyebrow: "CREATIVE ARCHIVE",
    heading: "KEEP WATCHING.",
    subtext: "The journey continues behind the camera and across the timeline."
  },

  // Footer
  footer: {
    copyright: "© 2026 ADITYA MISHRA",
    identity: "@POV.ADITYA"
  }
};
