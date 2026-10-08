/*
  All editable content lives here. Nothing in app.js or index.html needs to
  change when you update copy, numbers, campaigns, or contact details —
  just edit the values below.
*/
window.PORTFOLIO_CONTENT = {

  profile: {
    name: "Yatika Malhotra",
    title: "Brand Manager",
    tagline: "Usually thinking about what the brand should say next.",
    bio: [
      "5+ years across Cars24, RxMen, Adfluence Hub & URPopular.",
      "Brand building through GTM, product marketing, influencer & integrated campaigns."
    ],
    initials: "YM",
    location: "Delhi, India"
  },

  contact: {
    email: "yatikamalhotra@gmail.com",
    phone: "7982029595",
    linkedin: "https://www.linkedin.com/in/yatikamalhotra10",
    instagram: "https://www.instagram.com/sanna.malhotra/",
    resumeUrl: ""
  },

  // Big numbers shown on the Overview tab.
  highlights: [
    { stat: "00+", label: "Campaigns shipped" },
    { stat: "00M", label: "Reach generated" },
    { stat: "00%", label: "Avg. conversion lift" },
    { stat: "00", label: "Brands worked with" }
  ],

  // Short "how I work" cards on the Overview tab. Optional — leave the array empty to hide this block.
  principles: [
    {
      heading: "Placeholder principle one",
      body: "Replace with a short line about how you approach marketing problems."
    },
    {
      heading: "Placeholder principle two",
      body: "Replace with a second line — tone, process, or a belief you hold about the craft."
    },
    {
      heading: "Placeholder principle three",
      body: "Replace with a third line. Three is a good number; more than four gets crowded."
    }
  ],

  // Flagship work tab: pick a few campaign ids from the list below and give them
  // their own framing/pitch. "campaignId" must match a campaigns[].id value.
  // The card's image is pulled from that campaign's own coverImage.
  // secondaryLink: optional second button next to "See the full case".
  flagshipPicks: [
    {
      campaignId: "vikram-and-betaal",
      pitch: "If people don't trust you, borrow trust from a legend they already do.",
      metrics: [
        { stat: "2", label: "promise films" },
        { stat: "8", label: "teaser cities" },
        { stat: "38.5M+", label: "teaser views" },
        { stat: "652K+", label: "teaser likes" }
      ],
      secondaryLink: { label: "Watch on LinkedIn", url: "https://lnkd.in/p/guE8SiF9" }
    },
    {
      campaignId: "boats24",
      pitch: "When Gurgaon flooded, we didn't just react to the moment, we became part of it.",
      metrics: [
        { stat: "20+", label: "media features" },
        { stat: "7.17M+", label: "Instagram views" },
        { stat: "1.21M+", label: "LinkedIn impressions" },
        { stat: "125K+", label: "Instagram engagements" }
      ],
      secondaryLink: { label: "Read my post", url: "https://lnkd.in/p/gpZ73N54" }
    },
    {
      campaignId: "ganesh-chaturthi",
      pitch: "Showing up isn't enough. The best brands earn a place inside the celebration.",
      metrics: [
        { stat: "11M+", label: "Instagram views" },
        { stat: "777K+", label: "LinkedIn impressions" },
        { stat: "40+", label: "organic posts" },
        { stat: "9M+", label: "organic views" }
      ],
      secondaryLink: { label: "Read my post", url: "https://lnkd.in/p/gDMVxx36" }
    }
  ],

  // Impact tab: before/after numbers. beforeValue/afterValue/maxValue are
  // plain numbers used only to size the two bars — before/after are the display strings.
  impactMetrics: [
    {
      company: "Cars24",
      metric: "Share of search",
      headline: "1.5x",
      before: "1.0x", beforeValue: 1.0,
      after: "1.5x", afterValue: 1.5,
      maxValue: 2.0,
      note: "Lowest to highest month, led by cricket and YouTube."
    },
    {
      company: "Cars24",
      metric: "Organic brand search",
      headline: "1.6x",
      before: "1.0x", beforeValue: 1.0,
      after: "1.6x", afterValue: 1.6,
      maxValue: 2.0,
      note: "+64%, with year-on-year growth every month."
    },
    {
      company: "Cars24",
      metric: "Organic new users",
      headline: "+27%",
      before: "1.0x", beforeValue: 1.0,
      after: "1.27x", afterValue: 1.27,
      maxValue: 1.5,
      note: "City-led brand model, on a flat budget."
    },
    {
      company: "Cars24",
      metric: "Creator cost per view",
      headline: "-93%",
      before: "₹0.4", beforeValue: 0.4,
      after: "₹0.03", afterValue: 0.03,
      maxValue: 0.4,
      note: "229M views from a creator program built from zero."
    }
  ],

  // Master lists for the filter chips on "All campaigns". Keep these in sync
  // with the roles/mediums used inside each campaign object below.
  filterOptions: {
    roles: ["Brand building", "Trust & promises", "Purpose & road safety", "Moment marketing", "Creators & influence", "Growth & retail"],
    mediums: ["Brand films", "OOH & billboards", "Print", "On-ground", "Digital & social"]
  },

  // The full case-study library. Add as many as you like — they automatically
  // show up in "All campaigns" (and in Flagship work / modals if referenced above).
  campaigns: [
    {
      id: "vikram-and-betaal",
      title: "Vikram & Betaal",
      company: "Cars24",
      period: "2026-09",
      displayDate: "Sep 2026",
      context: "TV, CTV, digital",
      roles: ["Trust & promises"],
      mediums: ["Brand films", "Digital & social"],
      isVideo: true,
      summary: "If people don't trust you, borrow trust from a legend they already do.",
      heroStat: { stat: "38.5M+", label: "pre-launch teaser views" },
      challenge: "",
      approach: "The campaign reimagined one of India's most iconic folklore duos to solve a modern trust problem. Instead of using Vikram & Betaal purely for nostalgia, we turned Betaal into the voice of every used-car buyer—asking the same tough questions customers ask before making one of their biggest purchases, while CARS24 answered them with confidence.",
      results: [
        { stat: "2", label: "promise films" },
        { stat: "8", label: "teaser cities" },
        { stat: "38.5M+", label: "teaser views" }
      ],
      coverImage: "images/vikram-betaal-campaign.jpg",
      gallery: [],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: [
        { title: "Featured by Mad Over Marketing", url: "https://www.instagram.com/p/DdV3L7rk0lO/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" }
      ],
      preAmp: {
        heading: "Pre-Launch Amplification",
        paragraphs: [
          "Before revealing the brand films, we brought Betaal into the real world, creating mysterious sightings across Delhi, Mumbai, Bengaluru, Hyderabad, and Chennai. From airports and metro stations to malls and public spaces, Betaal started appearing everywhere, leaving people wondering what was happening.",
          "We amplified these sightings through Instagram meme pages, Reddit, X, and LinkedIn, building curiosity and conversations without revealing the brand connection. The idea was simple: make Betaal a talking point before anyone knew there was a campaign coming."
        ],
        metrics: [
          { stat: "38.5M+", label: "views" },
          { stat: "652K+", label: "likes" }
        ],
        gallery: [
          "images/vikram-betaal-sighting-1.jpg",
          "images/vikram-betaal-sighting-2.jpg",
          "images/vikram-betaal-sighting-3.jpg"
        ]
      }
    },
    {
      id: "boats24",
      title: "Boats24",
      company: "Cars24",
      period: "2026-08",
      displayDate: "Aug 2026",
      context: "Gurugram floods",
      roles: ["Moment marketing"],
      mediums: ["On-ground", "Digital & social"],
      isVideo: false,
      summary: "When Gurgaon flooded, we didn't just react to the moment, we became part of it.",
      heroStat: { stat: "7.17M+", label: "Instagram views" },
      challenge: "Gurgaon flooded, and people couldn't get home.",
      approach: "For one weekend, Cars24 became Boats24 — ferrying stranded commuters across roads that had turned into rivers.",
      story: [
        "When Gurgaon came to a standstill because of heavy flooding, we saw an opportunity to respond in real time. Instead of talking about the situation, we became part of it.",
        "For one weekend, Cars24 became Boats24-deploying branded boats to help people cross waterlogged roads that had become impossible to navigate. The idea worked because it wasn't created for a stage or an event. It showed up exactly where people needed it, while also making a sharp, culturally relevant statement about a problem the city faces every monsoon.",
        "I led the activation end-to-end—from identifying the opportunity and executing the on-ground experience to driving its amplification across social media and PR. The entire campaign went from idea to execution within a single day."
      ],
      results: [
        { stat: "20+", label: "media features" },
        { stat: "7.17M+", label: "Instagram views" },
        { stat: "1.21M+", label: "LinkedIn impressions" },
        { stat: "5.8K+", label: "LinkedIn engagements" }
      ],
      coverImage: "images/boats24-cover.jpg",
      gallery: [],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: [
        { title: "NDTV", url: "https://www.ndtv.com/offbeat/cars24-slapped-with-rs-50-000-challan-after-deploying-boat-on-flooded-gurugram-road-11893804" },
        { title: "Hindustan Times", url: "https://www.hindustantimes.com/" },
        { title: "The Indian Express", url: "https://indianexpress.com/article/trending/trending-in-india/cars24-rs-50000-challan-gurgaon-boat-waterlogging-10827433/" },
        { title: "Business Today", url: "https://www.businesstoday.in/latest/trends/story/cars24s-boat-campaign-goes-viral-gurugram-police-denies-rs50000-challan-seizes-boat-548705-2026-08-12" },
        { title: "afaqs!", url: "https://www.afaqs.com/news/mktg/cars24s-boat-stunt-turns-flooded-gurugram-road-into-a-commute-12254770" }
      ]
    },
    {
      id: "ganesh-chaturthi",
      title: "Bappa Ki Sawari",
      company: "Cars24",
      period: "2026-09",
      displayDate: "Sep 2026",
      context: "Khetwadi, Mumbai",
      roles: ["Moment marketing"],
      mediums: ["On-ground"],
      isVideo: false,
      summary: "Showing up isn't enough. The best brands earn a place inside the celebration.",
      heroStat: { stat: "11M+", label: "Instagram views" },
      challenge: "",
      approach: "Festivals are full of brands trying to get noticed — a branded photo booth, a loud banner, a selfie point competing for attention alongside everything people actually came for. If a visitor remembers the installation more than the festival itself, the idea hasn't really worked.",
      story: [
        "Festivals are full of brands trying to get noticed — a branded photo booth, a loud banner, a selfie point competing for attention alongside everything people actually came for. If a visitor remembers the installation more than the festival itself, the idea hasn't really worked.",
        "For Ganesh Chaturthi, we partnered with Khetwadicha Raja, one of Mumbai's most loved Ganpati pandals, and asked a different question: could Cars24 become part of the celebration instead of standing next to it?",
        "We turned a Cars24 Swift into Bappa Ki Sawari — cutting it open and removing the doors so nothing stood between devotees and Bappa — and placed it right at the exit of the darshan queue.",
        "As families walked out after darshan, they stopped, folded their hands, smiled, and took pictures. It didn't feel like advertising — it felt like one more moment from their visit. The response was strong enough that the pandal organisers asked us to remove the installation, since the crowds gathering around it were causing congestion outside. The best brand moments don't announce themselves — they just quietly belong.",
        "I led this campaign end-to-end — from the original concept through production, on-ground execution, creator distribution, and PR amplification, owning the full rollout from idea to activation."
      ],
      results: [
        { stat: "11M+", label: "Instagram views" },
        { stat: "777K+", label: "LinkedIn impressions" },
        { stat: "40+", label: "organic posts" },
        { stat: "9M+", label: "organic views" }
      ],
      coverImage: "images/ganesh-chaturthi-cover.jpg",
      gallery: [
        "images/ganesh-chaturthi-1.jpg",
        "images/ganesh-chaturthi-2.jpg"
      ],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressHeading: "Featured Posts",
      pressLinks: [
        { title: "Instagram Reel", url: "https://www.instagram.com/reel/DdwNkKGyvfV/" },
        { title: "Creator Post", url: "https://www.linkedin.com/posts/akashshinde1_i-went-to-khetwadi-cha-raja-for-darshan-and-share-7505609605222174720-owvN/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGWxGR4BFwUK-HP5pTFi5vSmYNXan5ONrWc" },
        { title: "Instagram Reel", url: "https://www.instagram.com/reel/DdwZMnlzsyA/" },
        { title: "Instagram Post", url: "https://www.instagram.com/p/Ddg2T_NsgJN/" }
      ]
    },
    {
      id: "the-promise-films",
      title: "The Promise Films",
      company: "Cars24",
      period: "2026-02",
      displayDate: "Feb 2026",
      context: "Mobile, CTV",
      roles: ["Brand building"],
      mediums: ["Brand films", "Digital & social"],
      isVideo: true,
      summary: "Three family promises, told the way people actually watch television now.",
      heroStat: { stat: "185M+", label: "impressions" },
      challenge: "Trust was the real barrier to buying a used car — and competing on price alone only taught customers to keep shopping around.",
      approach: "We built three family films, each centred on one customer promise, timed to launch during the T20 World Cup across mobile and CTV, with regional versions running in 17 markets.",
      results: [
        { stat: "185M+", label: "impressions" },
        { stat: "20M+", label: "social reach" },
        { stat: "16/17", label: "markets with search lift" }
      ],
      coverImage: "images/promise-films-2.jpg",
      gallery: [
        "images/promise-films-1.jpg",
        "images/promise-films-3.jpg"
      ],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: []
    },
    {
      id: "genz-road-safety-billboards",
      title: "Gen Z Road Safety Billboards",
      company: "Cars24",
      period: "2025-01",
      displayDate: "Jan 2025",
      roles: ["Purpose & road safety"],
      mediums: ["OOH & billboards", "Digital & social"],
      isVideo: false,
      summary: "Road-safety advice nobody reads, rewritten in the language Gen Z already uses.",
      heroStat: { stat: "2M+", label: "Instagram reach" },
      challenge: "Standard road-safety messaging gets tuned out by younger drivers — the tone itself feels like it's talking past them.",
      approach: "We rewrote classic safety warnings in Gen Z's own voice and vocabulary, placed across OOH and amplified on social.",
      results: [
        { stat: "2M+", label: "Instagram reach" }
      ],
      coverImage: "images/genz-road-safety-1.jpg",
      gallery: [],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: []
    },
    {
      id: "fixing-500-potholes",
      title: "Fixing 500+ Potholes",
      company: "Cars24",
      period: "2025-08",
      displayDate: "Aug 2025",
      roles: ["Purpose & road safety"],
      mediums: ["On-ground", "Digital & social"],
      isVideo: false,
      summary: "For an anniversary, we fixed something people actually needed fixed.",
      heroStat: { stat: "10M+", label: "reach" },
      challenge: "A brand anniversary is usually an excuse to talk about yourself — we wanted ours to do something useful instead.",
      approach: "We used the occasion to fund and fix over 500 potholes across the city, turning a brand milestone into a tangible civic act.",
      results: [
        { stat: "10M+", label: "reach" },
        { stat: "500+", label: "potholes fixed" },
        { stat: "Winner", label: "e4m RetailEX 2026" }
      ],
      coverImage: "images/potholes-1.jpg",
      gallery: [
        "images/potholes-2.jpg",
        "images/potholes-3.jpg"
      ],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: []
    },
    {
      id: "the-rebrand",
      title: "The Rebrand",
      company: "Cars24",
      period: "2026-03",
      displayDate: "Jan–Mar 2026",
      roles: ["Brand building"],
      mediums: ["On-ground", "Digital & social"],
      isVideo: false,
      summary: "A brand confident enough in its work doesn't need to shout anymore.",
      heroStat: { stat: "56", label: "hubs rebranded" },
      challenge: "Cars24's visual identity was built for a brand still trying to prove itself — the business had outgrown that voice.",
      approach: "We led a full identity rebrand, rolling the new look out across hubs, signage, and every customer touchpoint.",
      results: [
        { stat: "56", label: "hubs moved to new identity" }
      ],
      coverImage: "",
      gallery: [],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: []
    }
  ],

  // Career tab, oldest or newest first — whichever order you list them is the
  // order they render in.
  career: [
    { period: "2024 — Present", company: "Company A", role: "Marketing Lead", summary: "Placeholder line about scope and focus in this role." },
    { period: "2022 — 2024", company: "Company B", role: "Senior Marketing Manager", summary: "Placeholder line about scope and focus in this role." },
    { period: "2020 — 2022", company: "Company C", role: "Marketing Manager", summary: "Placeholder line about scope and focus in this role." },
    { period: "2018 — 2020", company: "Company D", role: "Marketing Associate", summary: "Placeholder line about scope and focus in this role." }
  ],

  // Optional — leave empty to hide this block entirely.
  awards: [
    { title: "Placeholder award", detail: "Issuing body, year", url: "" }
  ]
};
