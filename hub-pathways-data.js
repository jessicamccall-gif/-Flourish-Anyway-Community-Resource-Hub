// Flourish Anyway Community Resource Hub
// Stable situation-first navigation and audience/circumstance map.
window.FLOURISH_HUB_PATHWAYS = {
  "categories": {
    "emergency": {
      "name": "Emergency & Disaster",
      "icon": "🆘",
      "desc": "Immediate emergencies, wildfire, outages, weather and disaster information."
    },
    "safety": {
      "name": "Personal Safety & Survivor Support",
      "icon": "🛟",
      "desc": "Domestic violence, sexual assault, trafficking, stalking and personal safety."
    },
    "food": {
      "name": "Food & Everyday Needs",
      "icon": "🍎",
      "desc": "Food today, ongoing food help, hygiene, clothing and household basics."
    },
    "housing": {
      "name": "Housing, Rent & Utilities",
      "icon": "🏠",
      "desc": "Rent, utilities, shelter, affordable housing, tenant rights and home stability."
    },
    "transportation": {
      "name": "Transportation & Driver's License",
      "icon": "🚗",
      "desc": "Rides, buses, DMV, license restoration, car legality and transportation barriers."
    },
    "money": {
      "name": "Money, Credit & Financial Learning",
      "icon": "💰",
      "desc": "Bills, credit, debt, budgeting, saving, investing and retirement learning."
    },
    "health": {
      "name": "Health & Wellness",
      "icon": "❤️",
      "desc": "Medical, dental, mental health, women's health and health coverage."
    },
    "recovery": {
      "name": "Recovery, Reentry & Community",
      "icon": "🌱",
      "desc": "Treatment, peer support, meetings, reentry and rebuilding community."
    },
    "jobs": {
      "name": "Jobs, Careers & Workforce",
      "icon": "🛠️",
      "desc": "Job search, work readiness, vocational rehabilitation and career support."
    },
    "education": {
      "name": "School, Education & Training",
      "icon": "🎓",
      "desc": "School districts, IEP support, tutoring, GED, college and education planning."
    },
    "childcare": {
      "name": "Child Care",
      "icon": "🧸",
      "desc": "Child care providers, subsidies, preschool and child-care navigation."
    },
    "kids-health": {
      "name": "Kids Health & Development",
      "icon": "🩺",
      "desc": "Pediatric, therapy, developmental and behavioral-health resources for children."
    },
    "kids-needs": {
      "name": "Kids Needs & Family Basics",
      "icon": "🎒",
      "desc": "Clothing, diapers, car seats, equipment, school items and one-time child needs."
    },
    "kids-activities": {
      "name": "Kids Activities & Enrichment",
      "icon": "🎨",
      "desc": "Sports, arts, camps, clubs, birthdays, recreation and enrichment."
    },
    "parenting": {
      "name": "Family & Parenting",
      "icon": "👪",
      "desc": "Parenting support, custody, reunification, respite and family preservation."
    },
    "legal": {
      "name": "Legal & Government Help",
      "icon": "⚖️",
      "desc": "Legal aid, courts, rights, forms, complaints and government processes."
    },
    "senior": {
      "name": "Seniors, Caregiving & Aging",
      "icon": "🤝",
      "desc": "Aging, caregiving, independent living, benefits and senior support."
    },
    "veterans": {
      "name": "Veterans & Military Families",
      "icon": "🎖️",
      "desc": "Benefits, health care, housing, work, family and veteran-specific support."
    },
    "language": {
      "name": "Immigrant, Refugee & Language Access",
      "icon": "🌎",
      "desc": "Interpreters, immigration navigation, language access and newcomer support."
    },
    "events": {
      "name": "Local Events & Community Information",
      "icon": "📅",
      "desc": "Community calendars, free and low-cost events, meetings and local information."
    }
  },
  "situations": [
    {
      "label": "I need food today",
      "q": "food today",
      "plan": "food-now"
    },
    {
      "label": "Food keeps running out",
      "q": "food keeps running out",
      "plan": "food-ongoing"
    },
    {
      "label": "I am behind on rent or utilities",
      "q": "behind on rent utilities",
      "plan": "rent-utilities"
    },
    {
      "label": "I need somewhere safe to sleep tonight",
      "q": "safe place sleep tonight shelter",
      "plan": "housing-now"
    },
    {
      "label": "I am leaving an unsafe relationship",
      "q": "domestic violence unsafe relationship survivor safety",
      "plan": "safety"
    },
    {
      "label": "I need a ride / I do not have a car",
      "q": "need a ride no car transportation",
      "plan": "no-car"
    },
    {
      "label": "I need my driver's license back",
      "q": "license suspended get license back",
      "plan": "license-back"
    },
    {
      "label": "My car is not legal or usable",
      "q": "car insurance tags registration repair",
      "plan": "car-legal"
    },
    {
      "label": "I need a doctor, dentist or therapist",
      "q": "doctor dentist therapist health care",
      "plan": "health-care"
    },
    {
      "label": "I need ongoing mental-health help",
      "q": "mental health counseling therapy",
      "plan": "mental-health-care"
    },
    {
      "label": "I need treatment / detox",
      "q": "substance use treatment detox withdrawal",
      "plan": "treatment"
    },
    {
      "label": "I want recovery meetings or peer support",
      "q": "peer support recovery meetings community",
      "plan": "peer-support"
    },
    {
      "label": "I need help after jail or prison",
      "q": "reentry jail prison release employment housing license",
      "plan": null
    },
    {
      "label": "I need a job",
      "q": "job employment work",
      "plan": "job"
    },
    {
      "label": "Something is blocking me from working",
      "q": "barrier to work disability childcare transportation",
      "plan": "work-ready"
    },
    {
      "label": "I need a GED, college or training",
      "q": "GED college training education",
      "plan": "education"
    },
    {
      "label": "My child is struggling at school",
      "q": "child school struggling tutoring learning support",
      "plan": "school"
    },
    {
      "label": "I need IEP / special-education help",
      "q": "IEP special education disability school",
      "plan": "child-development"
    },
    {
      "label": "I need child care",
      "q": "child care daycare preschool",
      "plan": "child-care"
    },
    {
      "label": "My child needs therapy or developmental help",
      "q": "child therapy developmental behavioral help",
      "plan": "child-development"
    },
    {
      "label": "I need clothes, diapers, a car seat or child basics",
      "q": "child clothes diapers car seat school supplies basics",
      "plan": "basic-needs"
    },
    {
      "label": "I am behind on bills",
      "q": "behind bills debt financial crisis",
      "plan": "bills"
    },
    {
      "label": "I need to fix or understand my credit",
      "q": "credit report repair collections debt",
      "plan": "credit"
    },
    {
      "label": "I want to learn budgeting or saving",
      "q": "budget savings financial education class",
      "plan": "credit"
    },
    {
      "label": "I want to learn investing",
      "q": "investing investment class seminar beginner",
      "plan": null
    },
    {
      "label": "I need retirement / PERS / Social Security information",
      "q": "retirement PERS Social Security seminar",
      "plan": null
    },
    {
      "label": "I want to buy a home",
      "q": "first time homebuyer homeownership credit mortgage class",
      "plan": null
    },
    {
      "label": "I want to own or manage a rental",
      "q": "rental property landlord property management education",
      "plan": null
    },
    {
      "label": "I need legal help",
      "q": "legal aid lawyer legal help",
      "plan": "legal-help"
    },
    {
      "label": "I received court papers or forms",
      "q": "court papers forms fines hearing",
      "plan": "court-forms"
    },
    {
      "label": "I need an interpreter",
      "q": "interpreter language access",
      "plan": "interpreter"
    },
    {
      "label": "I need immigration legal help",
      "q": "immigration legal help attorney status",
      "plan": "immigration-legal"
    },
    {
      "label": "I need help caring for an older adult",
      "q": "caregiver older adult senior support",
      "plan": "caregiver"
    },
    {
      "label": "I need help staying independent as I age",
      "q": "senior independent living aging home support",
      "plan": "independent-living"
    },
    {
      "label": "I need veteran benefits",
      "q": "veteran benefits VSO VA",
      "plan": "veteran-benefits"
    },
    {
      "label": "My veteran household needs housing, work or transportation",
      "q": "veteran housing work transportation SSVF",
      "plan": "veteran-housing-work"
    },
    {
      "label": "I want a local class, activity, meeting or event",
      "q": "local class activity meeting event calendar",
      "plan": "community-events"
    }
  ],
  "circumstances": [
    {
      "id": "veteran",
      "label": "Veteran / military family",
      "terms": [
        "veteran",
        "military",
        "VA",
        "VSO",
        "SSVF"
      ]
    },
    {
      "id": "parent",
      "label": "Parent / caregiver",
      "terms": [
        "parent",
        "caregiver",
        "family",
        "children"
      ]
    },
    {
      "id": "pregnant",
      "label": "Pregnant / new parent",
      "terms": [
        "pregnant",
        "pregnancy",
        "postpartum",
        "new baby",
        "infant"
      ]
    },
    {
      "id": "youth",
      "label": "Child / teen / young adult",
      "terms": [
        "child",
        "children",
        "teen",
        "youth",
        "young adult",
        "student"
      ]
    },
    {
      "id": "senior",
      "label": "Senior / older adult",
      "terms": [
        "senior",
        "older adult",
        "aging",
        "65+"
      ]
    },
    {
      "id": "disability",
      "label": "Person with a disability",
      "terms": [
        "disability",
        "disabled",
        "accommodation",
        "accessible",
        "IEP"
      ]
    },
    {
      "id": "recovery",
      "label": "In recovery / rebuilding",
      "terms": [
        "recovery",
        "substance use",
        "sober",
        "peer support",
        "reentry"
      ]
    },
    {
      "id": "reentry",
      "label": "Returning from jail or prison",
      "terms": [
        "reentry",
        "jail",
        "prison",
        "incarceration",
        "record"
      ]
    },
    {
      "id": "survivor",
      "label": "Survivor / personal safety concern",
      "terms": [
        "domestic violence",
        "sexual assault",
        "trafficking",
        "stalking",
        "survivor",
        "safety"
      ]
    },
    {
      "id": "unstable-housing",
      "label": "Homeless / couch surfing / car / motel",
      "terms": [
        "homeless",
        "unhoused",
        "couch surfing",
        "motel",
        "shelter"
      ]
    },
    {
      "id": "language",
      "label": "Immigrant / refugee / language access",
      "terms": [
        "immigrant",
        "refugee",
        "interpreter",
        "language",
        "multilingual",
        "newcomer"
      ]
    },
    {
      "id": "ohp",
      "label": "OHP member",
      "terms": [
        "OHP",
        "Medicaid",
        "AllCare",
        "Jackson Care Connect"
      ]
    },
    {
      "id": "rural",
      "label": "Rural / Illinois Valley / Cave Junction",
      "terms": [
        "rural",
        "Illinois Valley",
        "Cave Junction"
      ]
    },
    {
      "id": "student",
      "label": "Student",
      "terms": [
        "student",
        "school",
        "college",
        "GED",
        "training"
      ]
    },
    {
      "id": "landlord",
      "label": "Landlord / rental owner",
      "terms": [
        "landlord",
        "rental owner",
        "property manager",
        "rental property"
      ]
    },
    {
      "id": "homeowner",
      "label": "Homeowner",
      "terms": [
        "homeowner",
        "mortgage",
        "foreclosure",
        "home repair"
      ]
    },
    {
      "id": "homebuyer",
      "label": "First-time homebuyer",
      "terms": [
        "homebuyer",
        "first-time buyer",
        "mortgage",
        "down payment"
      ]
    }
  ],
  "categoryPlans": {
    "emergency": [
      "safety",
      "medical-emergency",
      "crisis",
      "overdose-crisis",
      "prepare-emergency",
      "weather-power",
      "wildfire-evacuation"
    ],
    "food": [
      "food-now",
      "food-ongoing",
      "basic-needs"
    ],
    "housing": [
      "housing-now",
      "rent-utilities",
      "housing-search"
    ],
    "transportation": [
      "no-car",
      "license-back",
      "first-license",
      "car-legal",
      "lost-car"
    ],
    "health": [
      "health-care",
      "ohp",
      "mental-health-care"
    ],
    "parenting": [
      "new-baby",
      "parent-overwhelmed",
      "custody-coparenting",
      "dhs-family",
      "child-extra-needs"
    ],
    "education": [
      "school",
      "child-development",
      "education"
    ],
    "childcare": [
      "child-care",
      "new-baby"
    ],
    "kids-health": [
      "child-development",
      "health-care",
      "mental-health-care"
    ],
    "kids-needs": [
      "basic-needs",
      "child-extra-needs"
    ],
    "kids-activities": [
      "kids-activities",
      "community-events"
    ],
    "jobs": [
      "job",
      "work-ready",
      "education"
    ],
    "money": [
      "bills",
      "credit"
    ],
    "legal": [
      "legal-help",
      "court-forms",
      "child-support",
      "divorce",
      "custody-coparenting"
    ],
    "recovery": [
      "treatment",
      "withdrawal",
      "residential",
      "relapse",
      "peer-support"
    ],
    "senior": [
      "independent-living",
      "caregiver",
      "disability-services",
      "medical-equipment"
    ],
    "veterans": [
      "veteran-benefits",
      "veteran-housing-work",
      "military-family"
    ],
    "language": [
      "interpreter",
      "immigration-legal",
      "new-to-area"
    ],
    "events": [
      "community-events",
      "community-connection"
    ],
    "safety": [
      "safety",
      "housing-now",
      "legal-help"
    ]
  }
};
