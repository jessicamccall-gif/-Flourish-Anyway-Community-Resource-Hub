/* Flourish Anyway Community Resource Hub
   Starter data file
   Scope: Jackson + Josephine Counties, Oregon
   Verified: 2026-08-30
   Keep this file simple: one resource = one object.
*/

window.FLOURISH_HUB_DATA = {
  verified: "2026-08-30",

  categories: [
    { id: "kids-family", name: "Kids & Family" },
    { id: "food", name: "Food & Everyday Needs" },
    { id: "housing", name: "Housing, Rent & Utilities" },
    { id: "transportation", name: "Transportation & Driver's License" },
    { id: "money", name: "Money & Credit" },
    { id: "health", name: "Health & Wellness" },
    { id: "parenting", name: "Parenting & Kids" },
    { id: "jobs", name: "Jobs, Education & Skills" },
    { id: "legal", name: "Legal & Government Help" },
    { id: "recovery", name: "Recovery & Community" },
    { id: "senior", name: "Senior & Disability Resources" },
    { id: "emergency", name: "Emergency Help" }
  ],

  resources: [
    {
      id: "flourish-anyway",
      category: "recovery",
      name: "Flourish Anyway",
      helps: "Peer-led recovery support, wellness, women's groups and community connection.",
      audience: ["Women 18+", "Recovery"],
      counties: ["Jackson", "Josephine"],
      cost: "Check program",
      phone: "",
      address: "Medford, Oregon",
      website: "https://weflourishanyway.org/",
      apply: "https://weflourishanyway.org/",
      labels: ["WOMEN", "RECOVERY", "COMMUNITY"],
      keywords: ["women", "recovery", "peer support", "wellness", "community"],
      lastVerified: "2026-08-30"
    },

    {
      id: "access-help",
      category: "food",
      name: "ACCESS",
      helps: "Food pantries, energy assistance, housing and shelter help for Jackson County residents.",
      audience: ["Adults", "Families", "Seniors", "Veterans", "Disability"],
      counties: ["Jackson"],
      cost: "Free or assistance-based; eligibility varies",
      phone: "541-779-6691",
      address: "Jackson County, Oregon",
      website: "https://accesshelps.org/get-help/",
      apply: "https://accesshelps.org/get-help/",
      labels: ["FOOD", "UTILITIES", "HOUSING", "CALL FIRST"],
      keywords: ["food", "pantry", "rent", "utility", "energy", "shelter", "Jackson County"],
      lastVerified: "2026-08-30"
    },

    {
      id: "community-works",
      category: "emergency",
      name: "Community Works",
      helps: "Free, confidential support for domestic violence, sexual assault, stalking and trafficking.",
      audience: ["Women", "Adults", "Youth", "Families"],
      counties: ["Jackson", "Josephine"],
      cost: "Free",
      phone: "541-779-4357",
      address: "2594 E Barnett Rd, Suite C, Medford, OR 97504",
      website: "https://www.community-works.org/",
      apply: "https://www.community-works.org/",
      labels: ["FREE", "24/7", "DOMESTIC VIOLENCE", "SEXUAL ASSAULT", "CRISIS"],
      keywords: ["domestic violence", "sexual assault", "stalking", "trafficking", "shelter", "crisis"],
      lastVerified: "2026-08-30"
    },

    {
      id: "medford-womens-clinic",
      category: "health",
      name: "Medford Women's Clinic",
      helps: "OB/GYN care, well-woman exams, birth control, pregnancy care, hormone therapy, menopause care, pelvic pain, PCOS, endometriosis and cancer screening.",
      audience: ["Women", "Pregnancy/Postpartum"],
      counties: ["Jackson", "Josephine"],
      cost: "Most insurance accepted; confirm current coverage",
      phone: "541-864-8900",
      address: "3170 State St, Medford, OR 97504",
      website: "https://www.medfordwomensclinic.com/",
      apply: "https://www.medfordwomensclinic.com/contact-us",
      labels: ["WOMEN", "OB/GYN", "HORMONES", "MENOPAUSE", "PREGNANCY"],
      keywords: ["women doctor", "obgyn", "OB/GYN", "pregnancy", "menopause", "hormones", "PCOS", "endometriosis", "pap", "cancer screening"],
      lastVerified: "2026-08-30"
    },

    {
      id: "rogue-valley-youth-choruses",
      category: "kids-family",
      name: "Rogue Valley Youth Choruses",
      helps: "Children's and youth choral programs with rehearsals in Medford.",
      audience: ["Children", "Teens"],
      counties: ["Jackson", "Josephine"],
      cost: "See current chorus tuition and assistance information",
      phone: "541-630-4822",
      address: "St. Mary's School, 816 Black Oak Dr, Medford, OR",
      website: "https://www.roguevalleychorale.org/youth-choruses/",
      apply: "https://www.roguevalleychorale.org/youth-choruses/",
      labels: ["CHILDREN", "TEENS", "MUSIC", "SINGING"],
      keywords: ["singing", "choir", "chorus", "music", "children", "teen"],
      lastVerified: "2026-08-30"
    },

    {
      id: "rogue-gallery-youth",
      category: "kids-family",
      name: "Rogue Gallery & Art Center — Youth Programs",
      helps: "Youth art classes in drawing, painting, ceramics, sculpture, cartooning and more. Partial scholarships are available.",
      audience: ["Children", "Teens", "Families"],
      counties: ["Jackson", "Josephine"],
      cost: "Varies; partial scholarships available",
      phone: "541-772-8118",
      address: "40 S Bartlett St, Medford, OR 97501",
      website: "https://roguegallery.org/home/education/youth-programs/",
      apply: "https://roguegallery.org/home/education/youth-programs/",
      labels: ["CHILDREN", "ART", "SCHOLARSHIP"],
      keywords: ["art", "painting", "drawing", "ceramics", "scholarship", "kids"],
      lastVerified: "2026-08-30"
    },

    {
      id: "rogue-gallery-family-day",
      category: "kids-family",
      name: "Rogue Gallery — Family & Friends Art Day",
      helps: "Free family art activity held on the second Saturday of each month; registration required.",
      audience: ["Children", "Families"],
      counties: ["Jackson", "Josephine"],
      cost: "Free",
      phone: "541-772-8118",
      address: "40 S Bartlett St, Medford, OR 97501",
      website: "https://roguegallery.org/",
      apply: "https://roguegallery.org/",
      labels: ["FREE", "CHILDREN", "FAMILY", "ART"],
      keywords: ["free", "family", "art", "kids", "Saturday"],
      lastVerified: "2026-08-30"
    },

    {
      id: "rvymca-volleyball",
      category: "kids-family",
      name: "Rogue Valley Family YMCA — Volleyball",
      helps: "Youth volleyball serving the Medford and Eagle Point areas.",
      audience: ["Children", "Teens"],
      counties: ["Jackson"],
      cost: "Current season listed at $85; confirm before registering",
      phone: "541-772-6295",
      address: "522 W Sixth St, Medford, OR 97501",
      website: "https://rvymca.org/programs/120020/volleyball/",
      apply: "https://rvymca.org/programs/120020/volleyball/",
      labels: ["CHILDREN", "SPORTS", "VOLLEYBALL", "REGISTER"],
      keywords: ["volleyball", "sports", "YMCA", "youth"],
      lastVerified: "2026-08-30"
    },

    {
      id: "rvtd",
      category: "transportation",
      name: "Rogue Valley Transportation District",
      helps: "Public bus service, reduced fares, ADA-accessible transportation, Valley Lift and transportation information.",
      audience: ["Adults", "Families", "Seniors", "Disability"],
      counties: ["Jackson"],
      cost: "Fare varies; reduced fare available for qualifying riders",
      phone: "541-779-2877",
      address: "200 S Front St, Medford, OR 97501",
      website: "https://www.rvtd.org/service-information/",
      apply: "https://www.rvtd.org/service-information/",
      labels: ["BUS", "REDUCED FARE", "DISABILITY", "TRANSPORTATION"],
      keywords: ["bus", "ride", "transportation", "reduced fare", "paratransit", "Valley Lift"],
      lastVerified: "2026-08-30"
    },

    {
      id: "rcc-ged",
      category: "jobs",
      name: "Rogue Community College — GED & Pre-College",
      helps: "GED preparation, English language learning and skills brush-up in Medford, White City, Grants Pass and Kerby.",
      audience: ["Adults", "Young Adults"],
      counties: ["Jackson", "Josephine"],
      cost: "Contact RCC for current program cost",
      phone: "541-956-7490",
      address: "Multiple Jackson and Josephine County locations",
      website: "https://roguecc.edu/dept/PCE/",
      apply: "https://roguecc.edu/dept/PCE/",
      labels: ["GED", "EDUCATION", "JACKSON", "JOSEPHINE"],
      keywords: ["GED", "school", "English", "ESL", "education", "college"],
      lastVerified: "2026-08-30"
    },

    {
      id: "rcc-workforce",
      category: "jobs",
      name: "Rogue Community College — Workforce Training",
      helps: "Job skills, industry training and certifications for job seekers, displaced workers, youth, veterans and people with disabilities.",
      audience: ["Adults", "Youth", "Veterans", "Disability"],
      counties: ["Jackson", "Josephine"],
      cost: "Varies by program",
      phone: "541-956-7303",
      address: "Jackson and Josephine Counties",
      website: "https://www.roguecc.edu/Workforce/",
      apply: "https://www.roguecc.edu/Workforce/",
      labels: ["JOBS", "TRAINING", "VETERANS", "DISABILITY"],
      keywords: ["job", "career", "training", "certificate", "workforce", "trade"],
      lastVerified: "2026-08-30"
    },

    {
      id: "oregon-law-center-grants-pass",
      category: "legal",
      name: "Oregon Law Center — Grants Pass Regional Office",
      helps: "Civil legal assistance for low-income Josephine County residents, including family law, housing, disability, discrimination and Oregon Health Plan issues.",
      audience: ["Adults", "Seniors", "Families", "Disability"],
      counties: ["Josephine"],
      cost: "Legal aid; eligibility applies",
      phone: "541-476-1058",
      address: "873 NE 7th St, Suite A, Grants Pass, OR 97526",
      website: "https://oregonlawcenter.org/how-to-get-help/olc-offices/grants-pass/",
      apply: "https://oregonlawcenter.org/how-to-get-help/olc-offices/grants-pass/",
      labels: ["LEGAL AID", "LOW INCOME", "HOUSING", "FAMILY LAW", "DISABILITY"],
      keywords: ["legal", "lawyer", "family law", "housing", "disability", "OHP", "Josephine"],
      lastVerified: "2026-08-30"
    }
  ]
};
