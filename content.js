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
      campaignId: "campaign-two",
      pitch: "Another sentence making the case for why this campaign mattered.",
      metrics: [
        { stat: "0%", label: "Placeholder metric" },
        { stat: "0K", label: "Placeholder metric" }
      ]
    }
  ],

  // Business impact tab: before/after bars. beforeValue/afterValue/maxValue are
  // plain numbers used only to size the bar — before/after are the display strings.
  impactMetrics: [
    {
      company: "Company A",
      metric: "Placeholder metric name",
      before: "0", beforeValue: 10,
      after: "0", afterValue: 40,
      maxValue: 50,
      note: "One line of context on what drove the change."
    },
    {
      company: "Company B",
      metric: "Placeholder metric name",
      before: "0", beforeValue: 5,
      after: "0", afterValue: 25,
      maxValue: 30,
      note: "One line of context on what drove the change."
    },
    {
      company: "Company C",
      metric: "Placeholder metric name",
      before: "0", beforeValue: 20,
      after: "0", afterValue: 60,
      maxValue: 70,
      note: "One line of context on what drove the change."
    }
  ],

  // Master lists for the filter chips on "All campaigns". Keep these in sync
  // with the roles/mediums used inside each campaign object below.
  filterOptions: {
    roles: ["Strategy", "Content", "Paid media", "Brand", "Growth"],
    mediums: ["Social", "Video", "Email", "Out-of-home", "Web", "TV", "CTV", "Digital", "PR"]
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
      roles: ["Strategy", "Content", "Brand"],
      mediums: ["TV", "CTV", "Digital"],
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
      roles: ["Strategy", "Content", "Growth"],
      mediums: ["Social", "PR"],
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
      id: "campaign-two",
      title: "Placeholder Campaign Two",
      company: "Company B",
      period: "2024-09",
      displayDate: "Sep 2024",
      roles: ["Content", "Brand"],
      mediums: ["Email", "Web"],
      isVideo: false,
      summary: "A one-line teaser describing the campaign's hook.",
      heroStat: { stat: "0K", label: "Headline result" },
      challenge: "Placeholder paragraph describing the problem or brief you were given.",
      approach: "Placeholder paragraph describing what you actually did about it.",
      results: [
        { stat: "0%", label: "Placeholder result" },
        { stat: "0K", label: "Placeholder result" }
      ],
      coverImage: "",
      gallery: [],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: []
    },
    {
      id: "campaign-three",
      title: "Placeholder Campaign Three",
      company: "Company C",
      period: "2024-03",
      displayDate: "Mar 2024",
      roles: ["Growth", "Paid media"],
      mediums: ["Out-of-home", "Social"],
      isVideo: false,
      summary: "A one-line teaser describing the campaign's hook.",
      heroStat: { stat: "0x", label: "Headline result" },
      challenge: "Placeholder paragraph describing the problem or brief you were given.",
      approach: "Placeholder paragraph describing what you actually did about it.",
      results: [
        { stat: "0%", label: "Placeholder result" },
        { stat: "0x", label: "Placeholder result" }
      ],
      coverImage: "",
      gallery: [],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: []
    },
    {
      id: "campaign-four",
      title: "Placeholder Campaign Four",
      company: "Company A",
      period: "2023-11",
      displayDate: "Nov 2023",
      roles: ["Strategy", "Brand"],
      mediums: ["Web", "Video"],
      isVideo: true,
      summary: "A one-line teaser describing the campaign's hook.",
      heroStat: { stat: "0%", label: "Headline result" },
      challenge: "Placeholder paragraph describing the problem or brief you were given.",
      approach: "Placeholder paragraph describing what you actually did about it.",
      results: [
        { stat: "0%", label: "Placeholder result" },
        { stat: "0K", label: "Placeholder result" }
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
