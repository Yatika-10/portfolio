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
    location: "Delhi, India",
    photo: "images/profile-photo.jpg"
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
    { stat: "185M+", label: "impressions, first mass brand campaign in 3 years" },
    { stat: "1.6x", label: "organic brand search (+64%)" },
    { stat: "₹0.05", label: "per view across 134M+ creator views" },
    { stat: "119+", label: "creator collaborations" }
  ],

  // Short "how I work" cards on the Overview tab. Optional — leave the array empty to hide this block.
  principles: [
    {
      heading: "Ideas start with culture, not campaigns.",
      body: "I look for moments people already care about, then find a way for the brand to belong naturally."
    },
    {
      heading: "Distribution is part of the idea.",
      body: "A campaign isn't finished when it's created. I think about creators, PR, social, performance and conversations from day one."
    },
    {
      heading: "Creativity should move a business metric.",
      body: "Whether it's awareness, engagement or consideration, every idea should have a measurable outcome."
    },
    {
      heading: "Move fast. Learn faster.",
      body: "Some of my favourite work has gone from idea to execution in under 24 hours."
    }
  ],

  // Small highlight strip shown below the "How I work" cards. Optional — leave items empty to hide.
  scopeStats: {
    heading: "In the last few years",
    items: [
      "300M+ campaign views and impressions generated",
      "13+ integrated campaigns, idea to execution",
      "Worked across brand, performance, creators and GTM",
      "119+ creator partnerships built and managed",
      "4 companies, one throughline: every idea tied to a number"
    ]
  },

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
    },
    {
      campaignId: "the-promise-films",
      pitch: "Three family promises, told the way people actually watch television now.",
      metrics: [
        { stat: "185M+", label: "impressions" },
        { stat: "20M+", label: "social reach" },
        { stat: "16/17", label: "markets with search lift" },
        { stat: "3", label: "promise films" }
      ]
    },
    {
      campaignId: "creator-engine",
      pitch: "100+ creators, one system to find, brief, and pay them.",
      metrics: [
        { stat: "119+", label: "creator collaborations" },
        { stat: "35M+", label: "views, top single reel" },
        { stat: "16+", label: "months running" },
        { stat: "20", label: "reels featured below" }
      ]
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
    },
    {
      id: "creator-engine",
      title: "The Creator Engine",
      company: "Cars24",
      period: "2025-06",
      displayDate: "2025 – Present",
      context: "pan-India, Instagram",
      roles: ["Creators & influence"],
      mediums: ["Digital & social"],
      isVideo: false,
      summary: "100+ creators, one system to find, brief, and pay them.",
      heroStat: { stat: "119+", label: "creator collaborations" },
      challenge: "Influencer marketing at Cars24 was one post at a time — find a creator, brief them, ship it, move on. No repeatable process, and no clear view of whether cost per view was actually improving.",
      approach: "I built the process to run this every month instead of once — sourcing creators, briefing them, tracking what each one delivers, and paying out. 119+ creators later, cost per view has been coming down steadily.",
      results: [
        { stat: "119+", label: "creator collaborations" },
        { stat: "35M+", label: "views, top single reel" }
      ],
      coverImage: "images/creator-engine-cover.jpg",
      gallery: [],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressHeading: "Best Performing Reels",
      pressLinks: [
        { title: "Dil se paneer", url: "https://www.instagram.com/reel/DSogy2NktNr/" },
        { title: "Gagan", url: "https://www.instagram.com/reel/DY7UL21OWcC/" },
        { title: "Pyari Varsha", url: "https://www.instagram.com/reels/DaIDFYAMlrf/" },
        { title: "Uditya", url: "https://www.instagram.com/reel/DZ5AnxeuuYm/" },
        { title: "Bhavesh", url: "https://www.instagram.com/reel/DSUxzrqiEal/" },
        { title: "Yash & gyan", url: "https://www.instagram.com/reel/DTIMxshjWbP/" },
        { title: "Aryan", url: "https://www.instagram.com/reel/DTPeLa8Ek-u/" },
        { title: "Sanjay Kathuria", url: "https://www.instagram.com/reel/DXyZZpEshPc/" },
        { title: "Rustam", url: "https://www.instagram.com/reel/DaUaPM1vr-B/" },
        { title: "Himanshu", url: "https://www.instagram.com/reel/DRw-KzaERqz/" },
        { title: "Jasmine", url: "https://www.instagram.com/p/DaKyTsYJElS/" },
        { title: "Priyal Rajput", url: "https://www.instagram.com/reels/DcV5aHKPwu4/" },
        { title: "Nidhi", url: "https://www.instagram.com/reel/DOgNaHKEi-S/" },
        { title: "Anuj Rathore", url: "https://www.instagram.com/reel/DT0JA76jwRR/" },
        { title: "Mufasa", url: "https://www.instagram.com/reel/DaIFRhiTcq9/" },
        { title: "Jhony Pandey", url: "https://www.instagram.com/reel/DZ_8KtUTAhw/" },
        { title: "twistedsagar", url: "https://www.instagram.com/reels/DaK-22nTCxP/" },
        { title: "Vikhyat Shivhare", url: "https://www.instagram.com/reel/DaQF0r8sGC3/" },
        { title: "Guru Dwivedi", url: "https://www.instagram.com/reels/DcGoGY-tHd8/" },
        { title: "Palak Choudhary", url: "https://www.instagram.com/reels/Dcd1pwepmUZ/" }
      ]
    },
    {
      id: "fathers-day-parking",
      title: "Parking Spots for Dads",
      company: "Cars24",
      period: "2025-06",
      displayDate: "Jun 2025",
      context: "Delhi, Bengaluru",
      roles: ["Moment marketing"],
      mediums: ["On-ground", "OOH & billboards"],
      isVideo: false,
      summary: "A 'Reserved' sign that was actually about your dad.",
      heroStat: { stat: "3.6M+", label: "PR views" },
      challenge: "Father's Day campaigns usually only live on social media. We wanted it to show up somewhere a car buyer actually walks past.",
      approach: "We turned real reserved parking spots across Delhi and Bengaluru into simple messages for dads — a small, physical reminder in a space people pass every day, not another post in their feed.",
      results: [
        { stat: "3.6M+", label: "PR views, 13+ stories" },
        { stat: "500K+", label: "LinkedIn impressions" },
        { stat: "225K+", label: "Instagram views" }
      ],
      coverImage: "images/fathers-day-parking-1.jpg",
      gallery: [
        "images/fathers-day-parking-2.jpg",
        "images/fathers-day-parking-3.jpg"
      ],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: []
    },
    {
      id: "ganpati-khetwadi",
      title: "Bappa at Khetwadi",
      company: "Cars24",
      period: "2025-09",
      displayDate: "Sep 2025",
      context: "Mumbai",
      roles: ["Moment marketing"],
      mediums: ["On-ground"],
      isVideo: false,
      summary: "Being part of the festival, not just advertising next to it.",
      heroStat: { stat: "1M+", label: "on-ground reach" },
      challenge: "Mumbai's Ganpati visarjan is the city's biggest cultural moment — and the easiest one for a brand to get wrong by inserting itself too loudly.",
      approach: "A Cars24 car carried Bappa through the visarjan procession at the iconic Khetwadi pandal, with branding kept deliberately subtle so the moment stayed about the festival.",
      results: [
        { stat: "1M+", label: "on-ground reach" },
        { stat: "200K+", label: "LinkedIn impressions" },
        { stat: "100+", label: "organic mentions" }
      ],
      coverImage: "images/ganpati-khetwadi-1.jpg",
      gallery: [
        "images/ganpati-khetwadi-2.jpg"
      ],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: []
    },
    {
      id: "thala-billboard",
      title: "Thala's Birthday Billboard",
      company: "Cars24",
      period: "2026-07",
      displayDate: "Jul 2026",
      context: "Chennai",
      roles: ["Purpose & road safety"],
      mediums: ["OOH & billboards"],
      isVideo: false,
      summary: "A birthday tribute built entirely out of road-safety signs.",
      heroStat: { stat: "2.4M", label: "Instagram reach" },
      challenge: "Dhoni's birthday gets attention in Chennai every year — we wanted to point that attention toward something that actually matters: road safety.",
      approach: "In the city that calls him Thala, we built a billboard where Dhoni's silhouette was formed entirely from everyday road-safety signage, so the safety message was the tribute, not a tagline next to it.",
      results: [
        { stat: "2.4M", label: "Instagram reach" },
        { stat: "65K", label: "Instagram engagements" },
        { stat: "731K", label: "LinkedIn reach" },
        { stat: "1st", label: "innovation billboard in the South" }
      ],
      coverImage: "images/thala-billboard-1.jpg",
      gallery: [],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: []
    },
    {
      id: "dk-lifetime-warranty",
      title: "DK on Lifetime Warranty",
      company: "Cars24",
      period: "2025-11",
      displayDate: "Nov 2025",
      context: "Digital, pan-India",
      roles: ["Trust & promises"],
      mediums: ["Digital & social"],
      isVideo: true,
      summary: "A cricketer fans trust, making a promise people usually doubt.",
      heroStat: { stat: "5M+", label: "reach" },
      challenge: "Lifetime warranty is a hard promise to make believable in the used-car category — it needed a messenger people already trusted.",
      approach: "We brought in Dinesh Karthik to explain the lifetime warranty promise directly, then carried the same idea into communication at Cars24 hubs.",
      results: [
        { stat: "5M+", label: "reach" },
        { stat: "1M+", label: "views" },
        { stat: "58K+", label: "likes" },
        { stat: "6", label: "international cricketers engaged" }
      ],
      coverImage: "images/dk-lifetime-warranty-1.jpg",
      gallery: [],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: []
    },
    {
      id: "dont-drink-drive",
      title: "Don't Drink and Drive",
      company: "Cars24",
      period: "2025-12",
      displayDate: "Dec 2025",
      context: "Delhi, Gurugram, Pune",
      roles: ["Purpose & road safety"],
      mediums: ["OOH & billboards"],
      isVideo: false,
      summary: "Real wrecked cars, mounted where everyone could see them.",
      heroStat: { stat: "9M+", label: "reach" },
      challenge: "New Year season drunk-driving PSAs usually get tuned out — we wanted something people couldn't look away from.",
      approach: "We mounted genuine accident-damaged cars on billboards across Delhi, Gurugram, and Pune, turning the wreckage itself into the warning.",
      results: [
        { stat: "9M+", label: "reach across Instagram, LinkedIn & X" },
        { stat: "14", label: "PR stories, 8 top-tier" }
      ],
      coverImage: "images/dont-drink-drive-1.jpg",
      gallery: [
        "images/dont-drink-drive-2.jpg",
        "images/dont-drink-drive-3.jpg"
      ],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressLinks: []
    },
    {
      id: "kwality-walls-crackle",
      title: "Kwality Wall's Crackle Launch",
      company: "Adfluence Hub",
      period: "2023-06",
      displayDate: "2023",
      context: "Pan-India, Instagram",
      roles: ["Creators & influence"],
      mediums: ["Digital & social"],
      isVideo: true,
      summary: "A product launch doesn't need the biggest influencers — it needs the right ones, talking at the same time.",
      heroStat: { stat: "7M+", label: "views" },
      challenge: "A product launch doesn't always need the biggest influencers. Sometimes, it needs the right creators, the right content, and enough people talking about it at the same time.",
      approach: "For the launch of Kwality Wall's Crackle Ice Cream, I took a nano-influencer-led approach, working end to end with nearly 90 creators — identifying and shortlisting them on audience relevance, engagement, and content quality, developing creative concepts, preparing content briefs, and managing onboarding, approvals, and deliverables across every creator account. The idea was to make the launch feel less like a traditional ad campaign and more like a product people were naturally discovering through creators they already followed.",
      results: [
        { stat: "90", label: "creators" },
        { stat: "7M+", label: "views" }
      ],
      coverImage: "images/kwality-walls-crackle-cover.jpg",
      gallery: [],
      ctaUrl: "",
      ctaLabel: "View case",
      videoLinks: [],
      pressHeading: "Featured Campaign Work",
      pressLinks: [
        { title: "Campaign Reel 01", url: "https://www.instagram.com/reel/C6YqMjTv5Ak/" },
        { title: "Campaign Reel 02", url: "https://www.instagram.com/reel/C66IVvLvc4H/" },
        { title: "Campaign Reel 03", url: "https://www.instagram.com/reel/C-K_9--SdrV/" },
        { title: "Campaign Reel 04", url: "https://www.instagram.com/reel/C5qpkZrvJxX/" },
        { title: "Campaign Reel 05", url: "https://www.instagram.com/reel/C6YXc3ZNssw/" },
        { title: "Campaign Reel 06", url: "https://www.instagram.com/reel/C5VVyQov8bl/" },
        { title: "Campaign Reel 07", url: "https://www.instagram.com/reel/C55sKw_KyLl/" },
        { title: "Campaign Reel 08", url: "https://www.instagram.com/reel/C6Yy5AMs8In/" }
      ]
    },
    {
      id: "rxmen-digital-growth",
      title: "RxMen Digital Growth",
      company: "RxMen (formerly Qurex)",
      period: "2024-06",
      displayDate: "2024",
      context: "Performance, GMB, social & web",
      roles: ["Brand building", "Growth & retail"],
      mediums: ["Digital & social"],
      isVideo: false,
      summary: "Performance marketing, GMB, and web, all pointed at the same number: more people actually finding RxMen.",
      heroStat: { stat: "42%", label: "increase in GMB business searches" },
      challenge: "",
      approach: "At Qurex (now RxMen), I worked across performance marketing, social media, Google Business Profile (GMB), and website optimisation. My responsibilities included planning and executing digital content to generate leads and build brand awareness, and improving website content to support user acquisition and conversions. I also managed GMB optimisation, contributing to a 9.4% increase in click-through rate and a 42% increase in business searches within two months. My work spanned content planning, campaign execution, and improving the brand's visibility across key digital touchpoints.",
      results: [
        { stat: "42%", label: "increase in GMB business searches" },
        { stat: "9.4%", label: "increase in GMB click-through rate" }
      ],
      coverImage: "",
      gallery: [],
      ctaUrl: "https://www.instagram.com/rxmen.in/",
      ctaLabel: "Visit RxMen on Instagram",
      videoLinks: [],
      pressLinks: []
    }
  ],

  // Career tab, oldest or newest first — whichever order you list them is the
  // order they render in.
  career: [
    { period: "2025", company: "Cars24", role: "Brand Manager", summary: "Vikram & Betaal, Boats24, the Creator Engine — most of this portfolio happened here." },
    { period: "2024", company: "RxMen (formerly Qurex)", role: "Marketing Manager", summary: "Led brand and marketing for RxMen's intimate wellness line." },
    { period: "2023", company: "Adfluence Hub", role: "Campaign Manager", summary: "Ran execution for product launches and live events — from a nano-influencer-led ice cream launch to large-scale creator coordination for Lakmé Fashion Week." },
    { period: "2021", company: "URPopular", role: "Influencer Marketing Manager", summary: "Worked on Coolwi, URPopular's new marketplace connecting influencers and brands — pitching and onboarding brands, then running their influencer campaigns start to finish." }
  ],

  // Optional — leave empty to hide this block entirely.
  awards: []
};
