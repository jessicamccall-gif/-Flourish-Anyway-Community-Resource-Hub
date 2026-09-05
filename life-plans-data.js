window.FLOURISH_HELP_PLAN_CATEGORIES = {
  "emergency": "Emergency & Immediate Safety",
  "food": "Food & Everyday Needs",
  "housing": "Housing, Rent & Utilities",
  "transportation": "Transportation & Driver's License",
  "parenting": "Family & Parenting",
  "kids": "Kids, School & Child Care",
  "health": "Health & Wellness",
  "jobs": "Jobs, Education & Skills",
  "money": "Money & Credit",
  "legal": "Legal & Government Help",
  "recovery": "Recovery & Rebuilding",
  "senior": "Senior, Disability & Caregiving",
  "veterans": "Veterans & Military Families",
  "language": "Language & Immigration Navigation",
  "community": "Community & Events"
};
window.FLOURISH_LIFE_PLANS = [
  {
    "id": "safety",
    "eyebrow": "HELP PLAN",
    "title": "Immediate safety / unsafe situation",
    "intro": "Use this when you or your children are not physically safe where you are.",
    "checks": [
      {
        "id": "safety-0",
        "title": "Get to a safer place",
        "text": "Call 911 if there is immediate danger."
      },
      {
        "id": "safety-1",
        "title": "Do not announce a safety plan if that increases danger",
        "text": "Use a safe phone/device when possible."
      },
      {
        "id": "safety-2",
        "title": "Take essentials only if safe",
        "text": "Medications, IDs, keys, phone/charger, children and critical disability items."
      },
      {
        "id": "safety-3",
        "title": "Tell one safe person where you are",
        "text": "Choose someone who will not share your location."
      },
      {
        "id": "safety-4",
        "title": "Use confidential local safety/DV help",
        "text": "Ask about shelter, transportation, legal protection and children."
      },
      {
        "id": "safety-5",
        "title": "After immediate safety",
        "text": "Make a longer housing/legal plan when you are somewhere secure."
      }
    ],
    "actions": [
      {
        "href": "tel:911",
        "label": "Call 911"
      },
      {
        "href": "category.html?cat=legal",
        "label": "Safety / legal resources →"
      },
      {
        "href": "category.html?cat=housing",
        "label": "Housing →"
      }
    ],
    "category": "emergency",
    "quick": [
      {
        "label": "Emergency",
        "value": "911",
        "href": "tel:911"
      }
    ],
    "script": ""
  },
  {
    "id": "medical-emergency",
    "category": "emergency",
    "eyebrow": "HELP PLAN",
    "title": "Medical emergency",
    "intro": "Use this when someone may need emergency medical help right now.",
    "checks": [
      {
        "id": "medical-emergency-0",
        "title": "Get help now",
        "text": "Call 911 for a life-threatening emergency."
      },
      {
        "id": "medical-emergency-1",
        "title": "Make the space safer",
        "text": "Move away from traffic, fire, smoke or another immediate hazard if safe."
      },
      {
        "id": "medical-emergency-2",
        "title": "Grab critical information",
        "text": "Medication list, allergies, ID and insurance if easy to reach. Do not delay care for paperwork."
      },
      {
        "id": "medical-emergency-3",
        "title": "Plan for children/dependents",
        "text": "Tell responders if someone will be left without safe care."
      },
      {
        "id": "medical-emergency-4",
        "title": "Write down where you are going",
        "text": "Save the hospital/clinic name and who went with the person."
      },
      {
        "id": "medical-emergency-5",
        "title": "Before discharge",
        "text": "Ask warning signs, prescriptions, follow-up and transportation."
      }
    ],
    "actions": [
      {
        "href": "tel:911",
        "label": "Call 911"
      },
      {
        "href": "category.html?cat=health",
        "label": "Health resources →"
      }
    ],
    "quick": [
      {
        "label": "Emergency",
        "value": "911",
        "href": "tel:911"
      }
    ],
    "script": ""
  },
  {
    "id": "crisis",
    "eyebrow": "HELP PLAN",
    "title": "Mental-health or emotional crisis",
    "intro": "Use this when someone may hurt themselves, cannot stay safe, or is in an acute mental-health crisis.",
    "checks": [
      {
        "id": "crisis-0",
        "title": "If there is immediate physical danger",
        "text": "Call 911 or go to the nearest emergency department."
      },
      {
        "id": "crisis-1",
        "title": "Call or text 988",
        "text": "Use 988 for suicide or mental-health crisis support."
      },
      {
        "id": "crisis-2",
        "title": "Do not leave an unsafe person alone",
        "text": "Stay nearby if it is safe, or get another trusted adult/responders there."
      },
      {
        "id": "crisis-3",
        "title": "Secure children and dependents",
        "text": "Make sure children, dependent adults and pets have safe care."
      },
      {
        "id": "crisis-4",
        "title": "Take medication/basic information",
        "text": "Bring medication names, allergies, ID and insurance if easy to get."
      },
      {
        "id": "crisis-5",
        "title": "Plan the next 24 hours",
        "text": "Write follow-up, medications, transportation and who will stay connected."
      }
    ],
    "actions": [
      {
        "href": "tel:988",
        "label": "Call 988"
      },
      {
        "href": "sms:988",
        "label": "Text 988"
      },
      {
        "href": "category.html?cat=health",
        "label": "Mental-health resources →"
      }
    ],
    "category": "emergency",
    "quick": [
      {
        "label": "Crisis line",
        "value": "Call or text 988",
        "href": "tel:988"
      }
    ],
    "script": ""
  },
  {
    "id": "overdose-crisis",
    "category": "emergency",
    "eyebrow": "HELP PLAN",
    "title": "Overdose or poisoning emergency",
    "intro": "Use this when an overdose or serious poisoning may be happening.",
    "checks": [
      {
        "id": "overdose-crisis-0",
        "title": "Call 911",
        "text": "Tell dispatch what was taken if you know and follow instructions."
      },
      {
        "id": "overdose-crisis-1",
        "title": "Give naloxone if opioid overdose is possible",
        "text": "Use it if available and follow product instructions."
      },
      {
        "id": "overdose-crisis-2",
        "title": "Stay with the person",
        "text": "Watch breathing and responsiveness until responders arrive."
      },
      {
        "id": "overdose-crisis-3",
        "title": "Do not make them drive",
        "text": "Use EMS or another safe ride for follow-up care."
      },
      {
        "id": "overdose-crisis-4",
        "title": "Protect children/dependents",
        "text": "Make sure someone safe is supervising them."
      },
      {
        "id": "overdose-crisis-5",
        "title": "After the emergency",
        "text": "Reconnect quickly to treatment/recovery support."
      }
    ],
    "actions": [
      {
        "href": "tel:911",
        "label": "Call 911"
      },
      {
        "href": "category.html?cat=recovery",
        "label": "Recovery resources →"
      }
    ],
    "quick": [
      {
        "label": "Emergency",
        "value": "911",
        "href": "tel:911"
      }
    ],
    "script": ""
  },
  {
    "id": "prepare-emergency",
    "category": "emergency",
    "eyebrow": "HELP PLAN",
    "title": "Prepare for an emergency",
    "intro": "A short setup now can make an actual emergency much easier on an overloaded brain.",
    "checks": [
      {
        "id": "prepare-emergency-0",
        "title": "Turn on official alerts",
        "text": "Save your county alert system and know your evacuation zone if applicable."
      },
      {
        "id": "prepare-emergency-1",
        "title": "Make one grab-and-go bag",
        "text": "Meds, ID copies, chargers, glasses, water, basic clothes and written contacts."
      },
      {
        "id": "prepare-emergency-2",
        "title": "Make a child reunification plan",
        "text": "Who can pick up children and where will you meet?"
      },
      {
        "id": "prepare-emergency-3",
        "title": "Plan for pets/livestock",
        "text": "Carriers/leashes/feed and transport."
      },
      {
        "id": "prepare-emergency-4",
        "title": "Make a no-car backup",
        "text": "Write down who can drive you or what service you would call."
      },
      {
        "id": "prepare-emergency-5",
        "title": "Photograph important documents",
        "text": "Store backups where you can access them."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=emergency",
        "label": "Emergency resources →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "weather-power",
    "category": "emergency",
    "eyebrow": "HELP PLAN",
    "title": "Smoke, extreme heat/cold or power outage",
    "intro": "Use this when the home may become unsafe because of smoke, temperature or loss of power.",
    "checks": [
      {
        "id": "weather-power-0",
        "title": "Decide if the home is still safe",
        "text": "Pay attention to infants, older adults, breathing problems and powered medical equipment."
      },
      {
        "id": "weather-power-1",
        "title": "Protect medications/equipment",
        "text": "Check refrigeration and backup power before batteries run low."
      },
      {
        "id": "weather-power-2",
        "title": "Move to safer air/temperature",
        "text": "Use a clean-air, cooling or warming location when needed."
      },
      {
        "id": "weather-power-3",
        "title": "Protect food/water",
        "text": "Limit refrigerator opening and use safe water."
      },
      {
        "id": "weather-power-4",
        "title": "Charge and communicate",
        "text": "Charge phones/power banks and tell one person where you are."
      },
      {
        "id": "weather-power-5",
        "title": "Plan transportation now",
        "text": "Arrange a ride before conditions worsen if you may need to leave."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=emergency",
        "label": "Emergency resources →"
      },
      {
        "href": "category.html?cat=transportation",
        "label": "Transportation →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "wildfire-evacuation",
    "category": "emergency",
    "eyebrow": "HELP PLAN",
    "title": "Wildfire / evacuation",
    "intro": "Use this when there is a wildfire, evacuation notice or rapidly changing fire danger.",
    "checks": [
      {
        "id": "wildfire-evacuation-0",
        "title": "Check the official evacuation level",
        "text": "Use county emergency alerts/maps, not only social media screenshots."
      },
      {
        "id": "wildfire-evacuation-1",
        "title": "Leave early when instructed or unsafe",
        "text": "People first; do not delay for replaceable belongings."
      },
      {
        "id": "wildfire-evacuation-2",
        "title": "Take essentials",
        "text": "Phones/chargers, meds, IDs, keys, glasses and medical/mobility equipment."
      },
      {
        "id": "wildfire-evacuation-3",
        "title": "Account for children/dependents",
        "text": "Know who has each child and where everyone reunites."
      },
      {
        "id": "wildfire-evacuation-4",
        "title": "Move pets/livestock early",
        "text": "Use carriers/leashes and preplanned transport when possible."
      },
      {
        "id": "wildfire-evacuation-5",
        "title": "Save your destination",
        "text": "Tell one trusted person where you are going."
      },
      {
        "id": "wildfire-evacuation-6",
        "title": "Do not return until cleared",
        "text": "Use official local guidance."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=emergency",
        "label": "Emergency resources →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "basic-needs",
    "eyebrow": "HELP PLAN",
    "title": "Clothing, hygiene & everyday basics",
    "intro": "Build a short list of exactly what is needed so you do not have to call every program.",
    "checks": [
      {
        "id": "basic-needs-0",
        "text": "Write down clothing sizes and exact items needed"
      },
      {
        "id": "basic-needs-1",
        "text": "Check local basic-needs/community programs"
      },
      {
        "id": "basic-needs-2",
        "text": "Ask whether ID, referral or appointment is required"
      },
      {
        "id": "basic-needs-3",
        "text": "Ask whether supplies are currently in stock"
      },
      {
        "id": "basic-needs-4",
        "text": "Use 211 for additional current options"
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=food#directory",
        "label": "Browse full local directory →"
      }
    ],
    "category": "food"
  },
  {
    "id": "food-ongoing",
    "category": "food",
    "eyebrow": "HELP PLAN",
    "title": "Food keeps running out",
    "intro": "Use this when food is a repeated monthly problem, not just a one-day gap.",
    "checks": [
      {
        "id": "food-ongoing-0",
        "title": "Check SNAP",
        "text": "Apply or review your case if income/household changed."
      },
      {
        "id": "food-ongoing-1",
        "title": "Check WIC if applicable",
        "text": "Pregnancy, postpartum and children under 5 may qualify."
      },
      {
        "id": "food-ongoing-2",
        "title": "Choose 2–3 dependable food sources",
        "text": "Save the ones that fit your location and schedule."
      },
      {
        "id": "food-ongoing-3",
        "title": "Check school/summer meals",
        "text": "If you have children."
      },
      {
        "id": "food-ongoing-4",
        "title": "Build around meal basics",
        "text": "Prioritize foods that turn into real meals."
      },
      {
        "id": "food-ongoing-5",
        "title": "Calendar food dates",
        "text": "Pantry days, benefit deposits and recertification deadlines."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=food",
        "label": "Food directory →"
      },
      {
        "href": "https://benefits.oregon.gov/",
        "label": "Oregon ONE / SNAP ↗"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "food-now",
    "eyebrow": "HELP PLAN",
    "title": "I need food today",
    "intro": "Start with food you can actually get today. Longer-term benefits can come next.",
    "checks": [
      {
        "id": "food-now-0",
        "title": "Open the Food directory",
        "text": "Look for a pantry, community meal or other source near you."
      },
      {
        "id": "food-now-1",
        "title": "Check today's hours before leaving",
        "text": "Use the listed phone/current-info button when available."
      },
      {
        "id": "food-now-2",
        "title": "Ask what to bring",
        "text": "Confirm ID, proof of address, bags/boxes or appointment rules if unclear."
      },
      {
        "id": "food-now-3",
        "title": "Tell them about access needs",
        "text": "Ask about delivery, disability access, dietary needs or someone else picking up when relevant."
      },
      {
        "id": "food-now-4",
        "title": "If nothing is open",
        "text": "Dial 211 and ask for food available today in your city."
      },
      {
        "id": "food-now-5",
        "title": "If this keeps happening",
        "text": "Use benefits and repeat pantry sources so you are not rebuilding the same emergency every week."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=food",
        "label": "Food directory →"
      },
      {
        "href": "tel:211",
        "label": "Call 211"
      }
    ],
    "category": "food",
    "quick": [
      {
        "label": "Community resources",
        "value": "211",
        "href": "tel:211"
      }
    ],
    "script": "“I need food today in [city]. What pantry or meal is open now, and what do I need to bring?”",
    "resourcePack": {
      "title": "Calls & places to check",
      "contacts": [
        {
          "name": "211info",
          "phone": "211",
          "url": "https://www.211info.org/",
          "why": "Ask what food sites are open today."
        },
        {
          "name": "ACCESS",
          "url": "https://accesshelps.org/",
          "why": "Check current Jackson County food options."
        }
      ],
      "bring": [
        "ID if you have it",
        "Bags or boxes if available"
      ],
      "ask": [
        "Are you open today?",
        "Can I come without an appointment?",
        "How often can I use this pantry?"
      ],
      "backup": [
        "Call 211 for another pantry open today."
      ]
    }
  },
  {
    "id": "housing-now",
    "eyebrow": "HELP PLAN",
    "title": "I need somewhere safe to sleep tonight",
    "intro": "Tonight's safety comes first. The long housing search is a separate problem.",
    "checks": [
      {
        "id": "housing-now-0",
        "title": "Decide what kind of place is safe",
        "text": "Tell them if you have children, pets, disability needs, recovery/sober-housing needs or a safety concern."
      },
      {
        "id": "housing-now-1",
        "title": "Call before traveling when possible",
        "text": "Ask if there is space tonight, intake time, who they accept and what to bring."
      },
      {
        "id": "housing-now-2",
        "title": "If domestic violence is involved",
        "text": "Use a confidential DV/safety resource rather than only a general shelter search."
      },
      {
        "id": "housing-now-3",
        "title": "Protect medications and documents",
        "text": "Bring critical meds, ID and children's essentials if available; do not stay unsafe just to gather belongings."
      },
      {
        "id": "housing-now-4",
        "title": "Make a transportation plan",
        "text": "Ask whether the program helps with rides or use Transportation resources."
      },
      {
        "id": "housing-now-5",
        "title": "Tomorrow: start the longer housing plan",
        "text": "Handle tonight first, then applications/waitlists."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=housing",
        "label": "Housing & shelter →"
      },
      {
        "href": "category.html?cat=transportation",
        "label": "Transportation →"
      }
    ],
    "category": "housing",
    "quick": [],
    "script": ""
  },
  {
    "id": "housing-search",
    "category": "housing",
    "eyebrow": "HELP PLAN",
    "title": "I need to find housing",
    "intro": "Use this for affordable housing, waitlists, recovery housing and private rentals.",
    "checks": [
      {
        "id": "housing-search-0",
        "title": "Write your non-negotiables",
        "text": "Household size, children, pets, accessibility, recovery/sober needs, city range and max rent."
      },
      {
        "id": "housing-search-1",
        "title": "Gather one application packet",
        "text": "ID, income/benefit proof, references, rental history and contact info."
      },
      {
        "id": "housing-search-2",
        "title": "Apply to more than one option",
        "text": "Do not wait for one waitlist before applying elsewhere."
      },
      {
        "id": "housing-search-3",
        "title": "Track every application",
        "text": "Date, property/program, contact person, fee and confirmation."
      },
      {
        "id": "housing-search-4",
        "title": "Ask about barriers early",
        "text": "Eviction, credit, record or lack of rental history can change the best pathway."
      },
      {
        "id": "housing-search-5",
        "title": "Set one follow-up day each week",
        "text": "Batch housing follow-up instead of carrying it daily."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=housing",
        "label": "Housing directory →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "rent-utilities",
    "eyebrow": "HELP PLAN",
    "title": "Rent, eviction or utility trouble",
    "intro": "Notices and deadlines matter. Save the paper first, then work the problem.",
    "checks": [
      {
        "id": "rent-utilities-0",
        "title": "Photograph every notice",
        "text": "Include every page and the envelope."
      },
      {
        "id": "rent-utilities-1",
        "title": "Write the deadline and amount at the top",
        "text": "Do not keep reopening the whole notice just to remember the date."
      },
      {
        "id": "rent-utilities-2",
        "title": "Call assistance programs",
        "text": "Ask what documents they need and whether funding is currently available."
      },
      {
        "id": "rent-utilities-3",
        "title": "Contact the landlord or utility",
        "text": "Ask about payment arrangements or extensions; get agreements in writing when possible."
      },
      {
        "id": "rent-utilities-4",
        "title": "If court papers were filed",
        "text": "Use legal help immediately. An assistance application does not automatically stop a court deadline."
      },
      {
        "id": "rent-utilities-5",
        "title": "Protect the rest of the household plan",
        "text": "If this payment leaves no food, transportation or medication money, check those help categories too."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=housing",
        "label": "Housing / utility help →"
      },
      {
        "href": "category.html?cat=legal",
        "label": "Legal help →"
      }
    ],
    "category": "housing",
    "quick": [],
    "script": "",
    "resourcePack": {
      "title": "Calls & places to check",
      "contacts": [
        {
          "name": "211info",
          "phone": "211",
          "url": "https://www.211info.org/",
          "why": "Ask for current rent and utility programs."
        },
        {
          "name": "ACCESS",
          "url": "https://accesshelps.org/",
          "why": "Check Jackson County housing and utility help."
        }
      ],
      "bring": [
        "Lease",
        "Eviction or shutoff notice",
        "Utility bill/account number",
        "Income information if requested"
      ],
      "ask": [
        "Is funding open now?",
        "What documents do I need?",
        "Who should I call next if you cannot help?"
      ],
      "backup": [
        "Ask landlord/utility about a payment arrangement.",
        "Search Housing in the Hub."
      ]
    }
  },
  {
    "id": "no-car",
    "category": "transportation",
    "eyebrow": "HELP PLAN",
    "title": "I don't have a car / I need a ride",
    "intro": "Start with where you must go and when. Then choose the cheapest reliable ride that fits.",
    "checks": [
      {
        "id": "no-car-0",
        "title": "Write the trip",
        "text": "FROM ___  TO ___  DATE ___  MUST ARRIVE BY ___."
      },
      {
        "id": "no-car-1",
        "title": "Name the trip type",
        "text": "Medical/OHP • work • kids/school • treatment/court • groceries • long-distance."
      },
      {
        "id": "no-car-2",
        "title": "Check the matching transportation resource",
        "text": "Medical transport, public bus, paratransit and long-distance travel have different rules."
      },
      {
        "id": "no-car-3",
        "title": "Call if timing is critical",
        "text": "Ask pickup window, reservation deadline, fare and return-trip rules."
      },
      {
        "id": "no-car-4",
        "title": "Plan the return trip too",
        "text": "Do not solve only the ride there."
      },
      {
        "id": "no-car-5",
        "title": "Save one backup",
        "text": "Write a second route/person/service in case the first falls through."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=transportation",
        "label": "Transportation directory →"
      }
    ],
    "quick": [],
    "script": "“I need a ride from [place] to [place] on [date]. I must arrive by [time]. Do I qualify, when do I book, and how does the return ride work?”"
  },
  {
    "id": "license-back",
    "eyebrow": "HELP PLAN",
    "title": "I lost my license / I need it back",
    "intro": "Do not start by paying random tickets. First get the complete list of holds and requirements.",
    "checks": [
      {
        "id": "license-back-0",
        "title": "Call Oregon DMV",
        "text": "Ask for ALL active suspensions, revocations, holds and reinstatement requirements."
      },
      {
        "id": "license-back-1",
        "title": "Write every item down",
        "text": "Court/agency ___  case ___  amount ___  requirement ___."
      },
      {
        "id": "license-back-2",
        "title": "Ask about a hardship permit",
        "text": "Ask only if you need limited driving for a qualifying reason."
      },
      {
        "id": "license-back-3",
        "title": "Call each court/agency on the list",
        "text": "Ask what must be completed before DMV can clear that item."
      },
      {
        "id": "license-back-4",
        "title": "Ask about court-debt reinstatement options",
        "text": "Do not assume every debt qualifies."
      },
      {
        "id": "license-back-5",
        "title": "Complete only the requirements that apply to you",
        "text": "Examples may include SR-22, fees, treatment or court requirements."
      },
      {
        "id": "license-back-6",
        "title": "Call DMV again before driving",
        "text": "Ask: “Is my driving privilege valid right now?”"
      }
    ],
    "actions": [
      {
        "href": "tel:5039455000",
        "label": "Call Oregon DMV"
      },
      {
        "href": "https://www.oregon.gov/odot/dmv/pages/driverid/suspreasons.aspx",
        "label": "DMV reinstatement ↗"
      },
      {
        "href": "category.html?cat=transportation",
        "label": "Transportation directory →"
      }
    ],
    "category": "transportation",
    "quick": [
      {
        "label": "Oregon DMV",
        "value": "503-945-5000",
        "href": "tel:5039455000"
      }
    ],
    "script": "“Can you tell me every active suspension, revocation, hold and reinstatement requirement on my record? I want the complete list before I pay anything.”",
    "resourcePack": {
      "title": "Calls & places to check",
      "contacts": [
        {
          "name": "Oregon DMV",
          "url": "https://www.oregon.gov/odot/dmv/",
          "why": "Confirm every hold and reinstatement requirement."
        },
        {
          "name": "Golden Rule Reentry",
          "url": "https://www.goldenrulereentry.org/",
          "why": "Ask about local license-restoration navigation."
        }
      ],
      "bring": [
        "License/ID number",
        "Court or citation numbers",
        "DMV letters",
        "SR-22 information if applicable"
      ],
      "ask": [
        "What exactly blocks reinstatement?",
        "Which item comes first?",
        "Do I need SR-22?",
        "Do I need court proof?"
      ],
      "backup": [
        "Write down every hold before paying anything."
      ]
    }
  },
  {
    "id": "lost-car",
    "category": "transportation",
    "eyebrow": "HELP PLAN",
    "title": "I lost, sold or had my car repossessed",
    "intro": "Stabilize the next week first, then clean up insurance/DMV loose ends and plan a replacement.",
    "checks": [
      {
        "id": "lost-car-0",
        "title": "Protect the next 7 days",
        "text": "List work, treatment, court/probation, school pickup, medical and grocery trips."
      },
      {
        "id": "lost-car-1",
        "title": "Assign a ride to every must-do trip",
        "text": "Bus, medical transport, friend/family or another listed service."
      },
      {
        "id": "lost-car-2",
        "title": "Handle insurance",
        "text": "Tell the insurer the vehicle is sold/repossessed/no longer yours and ask the correct next step."
      },
      {
        "id": "lost-car-3",
        "title": "Handle DMV/title/plates if required",
        "text": "Do not assume another party completed every Oregon DMV step."
      },
      {
        "id": "lost-car-4",
        "title": "Retrieve/remove personal items when legally accessible",
        "text": "Documents, child seats, disability placard and personal belongings."
      },
      {
        "id": "lost-car-5",
        "title": "Make the replacement plan later",
        "text": "Budget, financing, insurance quote and real monthly transportation cost."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=transportation",
        "label": "Transportation directory →"
      },
      {
        "href": "https://dmv2u.oregon.gov/eServices/_/",
        "label": "DMV2U ↗"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "first-license",
    "eyebrow": "HELP PLAN",
    "title": "I've never had a driver's license",
    "intro": "Use this if you are starting from zero, not reinstating a suspended license.",
    "checks": [
      {
        "id": "first-license-0",
        "title": "Check the current Oregon steps",
        "text": "The exact process can depend on age and testing."
      },
      {
        "id": "first-license-1",
        "title": "Make one document pile",
        "text": "Identity and Oregon residency documents first."
      },
      {
        "id": "first-license-2",
        "title": "Study for the knowledge test",
        "text": "Use the current Oregon Driver Manual."
      },
      {
        "id": "first-license-3",
        "title": "Complete permit/testing steps",
        "text": "Use DMV2U or DMV instructions for the current process."
      },
      {
        "id": "first-license-4",
        "title": "Plan legal driving practice",
        "text": "Make sure the supervising driver, permit and vehicle meet current rules."
      },
      {
        "id": "first-license-5",
        "title": "Schedule the drive test",
        "text": "Put the date, address and what to bring in your calendar."
      },
      {
        "id": "first-license-6",
        "title": "Before driving alone",
        "text": "Confirm your license has actually been issued and is valid."
      }
    ],
    "actions": [
      {
        "href": "https://www.oregon.gov/odot/dmv/pages/driverid/licenseget.aspx",
        "label": "Oregon DMV — first license ↗"
      },
      {
        "href": "https://dmv2u.oregon.gov/eServices/_/",
        "label": "DMV2U ↗"
      },
      {
        "href": "category.html?cat=transportation",
        "label": "Transportation directory →"
      }
    ],
    "category": "transportation",
    "quick": [
      {
        "label": "Oregon DMV",
        "value": "503-945-5000",
        "href": "tel:5039455000"
      }
    ],
    "script": "“I have never had an Oregon driver license. What exact documents and testing steps do I need for my age?”"
  },
  {
    "id": "car-legal",
    "eyebrow": "HELP PLAN",
    "title": "My car isn't legal or usable",
    "intro": "Use this for insurance lapse, SR-22, tags, title, registration, repairs, tow/impound or similar vehicle problems.",
    "checks": [
      {
        "id": "car-legal-0",
        "title": "Separate DRIVER problems from CAR problems",
        "text": "Fixing one does not automatically fix the other."
      },
      {
        "id": "car-legal-1",
        "title": "Check insurance first",
        "text": "If SR-22 may be required, confirm the DMV requirement before buying coverage."
      },
      {
        "id": "car-legal-2",
        "title": "Check title and registration",
        "text": "Use DMV2U/current DMV instructions for title, plates and tags."
      },
      {
        "id": "car-legal-3",
        "title": "Write down every traffic/court case",
        "text": "Keep court names and case numbers together."
      },
      {
        "id": "car-legal-4",
        "title": "If the car is broken",
        "text": "Decide whether the next move is repair, tow, sale or replacement."
      },
      {
        "id": "car-legal-5",
        "title": "Before driving",
        "text": "Confirm license status, insurance and registration are all valid."
      }
    ],
    "actions": [
      {
        "href": "https://dmv2u.oregon.gov/eServices/_/",
        "label": "DMV2U ↗"
      },
      {
        "href": "https://www.oregon.gov/odot/dmv/pages/driverid/sr22.aspx",
        "label": "DMV SR-22 ↗"
      },
      {
        "href": "category.html?cat=transportation",
        "label": "Transportation directory →"
      }
    ],
    "category": "transportation",
    "quick": [
      {
        "label": "Oregon DMV",
        "value": "503-945-5000",
        "href": "tel:5039455000"
      }
    ],
    "script": ""
  },
  {
    "id": "custody-coparenting",
    "category": "parenting",
    "eyebrow": "HELP PLAN",
    "title": "Custody & co-parenting",
    "intro": "Use this for parenting plans, custody questions, separation, mediation and co-parenting problems.",
    "checks": [
      {
        "id": "custody-coparenting-0",
        "title": "Save the current court order",
        "text": "Use the signed order, not memory or text-message summaries."
      },
      {
        "id": "custody-coparenting-1",
        "title": "Write the immediate question",
        "text": "New case • changing an order • parenting-time problem • mediation • safety • enforcement."
      },
      {
        "id": "custody-coparenting-2",
        "title": "Put deadlines/hearings in your calendar",
        "text": "Add reminders."
      },
      {
        "id": "custody-coparenting-3",
        "title": "Use family-law self-help/legal resources",
        "text": "Court staff can explain procedure but cannot give legal advice."
      },
      {
        "id": "custody-coparenting-4",
        "title": "Keep communication documented",
        "text": "Use written communication when appropriate and safe."
      },
      {
        "id": "custody-coparenting-5",
        "title": "If violence/stalking is involved",
        "text": "Use a safety/DV resource before ordinary co-parenting or mediation steps."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=parenting",
        "label": "Family & Parenting →"
      },
      {
        "href": "category.html?cat=legal",
        "label": "Legal help →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "dhs-family",
    "category": "parenting",
    "eyebrow": "HELP PLAN",
    "title": "DHS / keeping or reunifying my family",
    "intro": "Use this when Child Welfare is involved or you are working toward reunification.",
    "checks": [
      {
        "id": "dhs-family-0",
        "title": "Put names/numbers together",
        "text": "Caseworker ___  supervisor ___  attorney ___  court date ___."
      },
      {
        "id": "dhs-family-1",
        "title": "Ask for the plan in writing",
        "text": "What exactly must be completed, by when, and how is completion documented?"
      },
      {
        "id": "dhs-family-2",
        "title": "Put every required appointment in one calendar",
        "text": "Treatment, UA/testing, visits, classes, court, medical and school."
      },
      {
        "id": "dhs-family-3",
        "title": "Report schedule conflicts immediately",
        "text": "Work, school pickup, transportation and treatment can collide; document attempts to fix conflicts."
      },
      {
        "id": "dhs-family-4",
        "title": "Keep proof",
        "text": "Attendance, certificates, treatment progress, housing applications and communication."
      },
      {
        "id": "dhs-family-5",
        "title": "Ask for family-preservation/parent support",
        "text": "Use local family programs and your attorney/advocate when appropriate."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=parenting",
        "label": "Family & Parenting →"
      },
      {
        "href": "category.html?cat=legal",
        "label": "Legal help →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "parent-overwhelmed",
    "category": "parenting",
    "eyebrow": "HELP PLAN",
    "title": "I'm overwhelmed / I need parenting support",
    "intro": "Use this when parenting feels too heavy, even if there is no single crisis.",
    "checks": [
      {
        "id": "parent-overwhelmed-0",
        "title": "Name the hardest part",
        "text": "Behavior • routines • sleep • isolation • stress • school • child care • recovery pressure."
      },
      {
        "id": "parent-overwhelmed-1",
        "title": "Call one family-support program",
        "text": "Ask for parenting support, peer support, home visiting or help making a family plan."
      },
      {
        "id": "parent-overwhelmed-2",
        "title": "Ask about respite/practical help",
        "text": "Especially with disability, special needs, recovery or caregiver burnout."
      },
      {
        "id": "parent-overwhelmed-3",
        "title": "Tell them your schedule barriers",
        "text": "School pickup, work, treatment, probation/court and transportation."
      },
      {
        "id": "parent-overwhelmed-4",
        "title": "Pick one thing to change this week",
        "text": "Not the whole household."
      },
      {
        "id": "parent-overwhelmed-5",
        "title": "Save the next contact/date",
        "text": "Put it in your phone immediately."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=parenting",
        "label": "Family & Parenting →"
      }
    ],
    "quick": [],
    "script": "“I'm overwhelmed and need practical parenting support. My biggest problem right now is ____. What is the best place to start?”"
  },
  {
    "id": "child-extra-needs",
    "category": "parenting",
    "eyebrow": "HELP PLAN",
    "title": "My child has extra needs / I need more support",
    "intro": "Use this when disability, developmental, behavioral or complex medical needs are stretching the family.",
    "checks": [
      {
        "id": "child-extra-needs-0",
        "title": "Write what is hard in daily life",
        "text": "School • communication • behavior • sleep • feeding • mobility • medical • sensory • supervision."
      },
      {
        "id": "child-extra-needs-1",
        "title": "Talk with primary care and school/early-intervention",
        "text": "Different systems may handle different parts."
      },
      {
        "id": "child-extra-needs-2",
        "title": "Ask what pathway applies",
        "text": "IEP/504 • EI/ECSE • DD services • therapy • specialty care • family support."
      },
      {
        "id": "child-extra-needs-3",
        "title": "Ask about respite and parent peer support",
        "text": "Support for the caregiver matters too."
      },
      {
        "id": "child-extra-needs-4",
        "title": "Keep one folder",
        "text": "Evaluations, IEP/504, medication list, providers and next appointments."
      },
      {
        "id": "child-extra-needs-5",
        "title": "Make the transportation/child-care plan",
        "text": "Therapies and specialty appointments create extra travel/time demands."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=parenting",
        "label": "Family & Parenting →"
      },
      {
        "href": "category.html?cat=kids-family",
        "label": "Kids & Family →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "new-baby",
    "category": "parenting",
    "eyebrow": "HELP PLAN",
    "title": "New baby & early parenting",
    "intro": "Use this from pregnancy through the first years when you need practical support, not another giant to-do list.",
    "checks": [
      {
        "id": "new-baby-0",
        "title": "Choose the biggest need today",
        "text": "Pregnancy care • feeding • diapers • sleep • home visiting • postpartum support • child care."
      },
      {
        "id": "new-baby-1",
        "title": "Connect with one parenting/home-visiting program",
        "text": "Let one program help you sort the rest instead of calling ten agencies."
      },
      {
        "id": "new-baby-2",
        "title": "Check WIC/OHP/food supports",
        "text": "Benefits can reduce several problems at once."
      },
      {
        "id": "new-baby-3",
        "title": "Make a ride plan for appointments",
        "text": "Ask about medical transportation if you have OHP."
      },
      {
        "id": "new-baby-4",
        "title": "Tell the helper about recovery/treatment needs",
        "text": "Ask for support that works with MAT/treatment schedules."
      },
      {
        "id": "new-baby-5",
        "title": "Write only the next appointment/date",
        "text": "Do not keep the whole plan in your head."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=parenting",
        "label": "Family & Parenting →"
      },
      {
        "href": "category.html?cat=health",
        "label": "Health →"
      },
      {
        "href": "category.html?cat=food",
        "label": "Food →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "child-care",
    "eyebrow": "HELP PLAN",
    "title": "Child care & parenting support",
    "intro": "Separate immediate child-care coverage from longer-term affordable care and parenting support.",
    "checks": [
      {
        "id": "child-care-0",
        "text": "Write down children’s ages, needed days/hours and transportation needs"
      },
      {
        "id": "child-care-1",
        "text": "Check child-care benefits/ERDC and local providers"
      },
      {
        "id": "child-care-2",
        "text": "Ask providers about openings, waitlists and total cost"
      },
      {
        "id": "child-care-3",
        "text": "Ask about subsidy acceptance and registration fees"
      },
      {
        "id": "child-care-4",
        "text": "Keep backup options for school closures or provider illness"
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=parenting#directory",
        "label": "Browse full local directory →"
      }
    ],
    "category": "kids"
  },
  {
    "id": "kids-activities",
    "eyebrow": "HELP PLAN",
    "title": "Kids activities, birthdays & things to do",
    "intro": "Use this for low-cost activities, birthday places, libraries, museums, recreation and family events.",
    "checks": [
      {
        "id": "kids-activities-0",
        "text": "Choose age, city and budget"
      },
      {
        "id": "kids-activities-1",
        "text": "Check library and city recreation calendars first for free options"
      },
      {
        "id": "kids-activities-2",
        "text": "Check birthday/activity venues for current prices and age/height rules"
      },
      {
        "id": "kids-activities-3",
        "text": "Ask about scholarships or reduced-cost programs when available"
      },
      {
        "id": "kids-activities-4",
        "text": "Confirm hours and reservations before leaving"
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=kids-family#directory",
        "label": "Browse full local directory →"
      }
    ],
    "category": "kids"
  },
  {
    "id": "child-development",
    "eyebrow": "HELP PLAN",
    "title": "My child needs developmental, school or behavioral help",
    "intro": "Start with what you are seeing and where it happens—home, school, childcare or everywhere.",
    "checks": [
      {
        "id": "child-development-0",
        "text": "Write down specific concerns and examples"
      },
      {
        "id": "child-development-1",
        "text": "Talk with the child’s pediatric/primary-care provider"
      },
      {
        "id": "child-development-2",
        "text": "Talk with school/childcare when the concern affects learning or behavior there"
      },
      {
        "id": "child-development-3",
        "text": "Ask what evaluation or referral pathway applies"
      },
      {
        "id": "child-development-4",
        "text": "Keep copies of evaluations and follow-up dates"
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=parenting#directory",
        "label": "Browse full local directory →"
      }
    ],
    "category": "kids"
  },
  {
    "id": "school",
    "eyebrow": "HELP PLAN",
    "title": "School, tutoring & learning",
    "intro": "Figure out whether the need is enrollment, homework/tutoring, attendance, an IEP/special-education evaluation, or behavioral/mental-health support.",
    "checks": [
      {
        "id": "school-0",
        "text": "Write down the school and grade"
      },
      {
        "id": "school-1",
        "text": "Contact the teacher or school office and describe the concern"
      },
      {
        "id": "school-2",
        "text": "Ask what school supports are already available"
      },
      {
        "id": "school-3",
        "text": "If disability or learning concerns may be involved, ask in writing about evaluation/special-education options"
      },
      {
        "id": "school-4",
        "text": "Keep copies of emails, evaluations and plans"
      },
      {
        "id": "school-5",
        "text": "Use the Kids & Family directory for tutoring and community options"
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=kids-family#directory",
        "label": "Browse full local directory →"
      }
    ],
    "category": "kids",
    "resourcePack": {
      "title": "Who to contact & what to save",
      "contacts": [
        {
          "name": "Your child's school or district",
          "why": "Start with teacher, counselor, principal or district office."
        },
        {
          "name": "Oregon Department of Education",
          "url": "https://www.oregon.gov/ode/",
          "why": "Official student-rights and special-education information."
        }
      ],
      "bring": [
        "School notices/emails",
        "Attendance or grade information",
        "IEP/504/evaluation documents if relevant"
      ],
      "ask": [
        "Who is the right person?",
        "What is the next written step?",
        "What timeline applies?",
        "Can you send that in writing?"
      ],
      "backup": [
        "Use School & Education resources in the Hub.",
        "For IEP/disability rights also check Legal."
      ]
    }
  },
  {
    "id": "ohp",
    "eyebrow": "HEALTH COVERAGE HELP PLAN",
    "title": "Apply for OHP / health coverage",
    "intro": "OHP is Oregon’s Medicaid program. Apply through Oregon ONE, then identify your CCO and use that plan to choose medical, dental and behavioral-health providers.",
    "checks": [
      {
        "id": "ohp-0",
        "text": "I gathered the household and income information I have."
      },
      {
        "id": "ohp-1",
        "text": "I started or submitted my Oregon ONE application."
      },
      {
        "id": "ohp-2",
        "text": "I saved my confirmation and checked for requests for more information."
      },
      {
        "id": "ohp-3",
        "text": "I know whether I was approved and which CCO/plan I have."
      },
      {
        "id": "ohp-4",
        "text": "I found my CCO’s provider directory and member-services number."
      },
      {
        "id": "ohp-5",
        "text": "I chose or contacted a primary-care provider."
      },
      {
        "id": "ohp-6",
        "text": "I checked my dental and behavioral-health options."
      }
    ],
    "actions": [
      {
        "href": "https://benefits.oregon.gov/",
        "label": "Apply through Oregon ONE ↗"
      },
      {
        "href": "https://www.oregon.gov/oha/OHP/Pages/Apply.aspx",
        "label": "OHP application help ↗"
      },
      {
        "href": "category.html?cat=health#directory",
        "label": "Local Health help →"
      }
    ],
    "steps": [
      {
        "title": "1. Gather what you have",
        "text": "Gather household names and birth dates, contact information, income information, other health coverage and other information Oregon asks for."
      },
      {
        "title": "2. Apply through Oregon ONE",
        "text": "Submit the application through Oregon ONE. Save your confirmation and watch for requests for more information."
      },
      {
        "title": "3. Get enrollment help if needed",
        "text": "Local enrollment helpers and community health centers can help you understand the application process."
      },
      {
        "title": "4. After approval, identify your CCO",
        "text": "Your coordinated care organization manages the network you use for medical, dental and behavioral-health care."
      },
      {
        "title": "5. Choose providers",
        "text": "Use your CCO directory, then call offices to confirm current network status and new-patient availability."
      }
    ],
    "category": "health"
  },
  {
    "id": "health-care",
    "eyebrow": "HEALTH HELP PLAN",
    "title": "Find a doctor, dentist, therapist or women's health provider",
    "intro": "Start with the care you need and the coverage you have.",
    "checks": [
      {
        "id": "health-care-0",
        "title": "Choose the type of care",
        "text": "Primary care • dental • women's health • therapy/psychiatry • specialty care • urgent care."
      },
      {
        "id": "health-care-1",
        "title": "Look at your insurance/OHP card",
        "text": "Write the exact plan or CCO name."
      },
      {
        "id": "health-care-2",
        "title": "Find 2–3 provider options",
        "text": "Use the plan directory and local Health directory."
      },
      {
        "id": "health-care-3",
        "title": "Call the clinic",
        "text": "Ask if they take your exact plan, are accepting new patients, and the soonest appointment."
      },
      {
        "id": "health-care-4",
        "title": "Ask for access help",
        "text": "Interpreter, disability access, telehealth or transportation."
      },
      {
        "id": "health-care-5",
        "title": "Book it and save the details",
        "text": "Date, time, address, provider and what to bring."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=health",
        "label": "Health directory →"
      },
      {
        "href": "https://www.oregon.gov/oha/OHP/Members/Pages/Find-Providers.aspx",
        "label": "OHP provider help ↗"
      }
    ],
    "steps": [
      {
        "title": "1. What kind of care do I need?",
        "text": "Primary care is for checkups, ongoing conditions, medications and referrals. Women’s health/OB-GYN covers well-woman care, birth control, pregnancy, postpartum, periods, pelvic health and menopause. Dental covers oral health. Mental health includes therapy, counseling, psychiatry and medication support."
      },
      {
        "title": "2. Check your coverage",
        "text": "If you have OHP, identify your CCO from your card, coverage letter or ONE account. Use the CCO provider directory. If you have private insurance, use your insurer’s directory."
      },
      {
        "title": "3. Find 2–3 options",
        "text": "Use the current provider directory, then call the clinic. Ask whether they are accepting new patients, take your exact plan, and how soon the first appointment is."
      },
      {
        "title": "4. Ask about access needs",
        "text": "Ask about telehealth, interpreters, disability access and transportation. For therapy, ask whether the provider works with the concern you want help with."
      },
      {
        "title": "5. If cost is stopping you",
        "text": "Community health centers may offer OHP enrollment help and sliding-fee options. If you need coverage, use the OHP Help Plan."
      }
    ],
    "category": "health",
    "quick": [],
    "script": "“Do you accept [exact insurance plan]? Are you taking new patients? What is the soonest appointment, and what do I need to bring?”"
  },
  {
    "id": "mental-health-care",
    "category": "health",
    "eyebrow": "HELP PLAN",
    "title": "I need ongoing mental-health support",
    "intro": "Use this when you need therapy, medication management or ongoing behavioral-health care, but it is not an immediate crisis.",
    "checks": [
      {
        "id": "mental-health-care-0",
        "title": "If unsafe right now",
        "text": "Use the crisis plan or call/text 988."
      },
      {
        "id": "mental-health-care-1",
        "title": "Choose what help you want",
        "text": "Therapy • psychiatry/medication • trauma • parenting stress • recovery • grief."
      },
      {
        "id": "mental-health-care-2",
        "title": "Check your insurance/OHP plan",
        "text": "Use its network plus local Health resources."
      },
      {
        "id": "mental-health-care-3",
        "title": "Call 2–3 options",
        "text": "Ask new-patient status, wait time, telehealth and fit."
      },
      {
        "id": "mental-health-care-4",
        "title": "Ask what to do while waiting",
        "text": "Groups, peer support or primary-care bridge care may help."
      },
      {
        "id": "mental-health-care-5",
        "title": "Save the appointment and backup number",
        "text": "Do not rely on remembering it."
      }
    ],
    "actions": [
      {
        "href": "tel:988",
        "label": "Call 988"
      },
      {
        "href": "category.html?cat=health",
        "label": "Health directory →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "education",
    "eyebrow": "HELP PLAN",
    "title": "GED, college or job training",
    "intro": "Choose the credential or skill that connects to the job you want.",
    "checks": [
      {
        "id": "education-0",
        "text": "Pick the goal: GED, certificate, apprenticeship, community college or degree"
      },
      {
        "id": "education-1",
        "text": "Ask about placement/admission requirements"
      },
      {
        "id": "education-2",
        "text": "Complete financial-aid/scholarship steps when applicable"
      },
      {
        "id": "education-3",
        "text": "Plan transportation, childcare and schedule"
      },
      {
        "id": "education-4",
        "text": "Meet with an advisor before paying for a program you are unsure about"
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=jobs#directory",
        "label": "Browse full local directory →"
      }
    ],
    "category": "jobs"
  },
  {
    "id": "job",
    "eyebrow": "HELP PLAN",
    "title": "I need a job",
    "intro": "Build a job plan that fits your actual life, not just your résumé.",
    "checks": [
      {
        "id": "job-0",
        "title": "Choose the schedule you can really work",
        "text": "Include school pickup, child care, treatment/MAT, probation/court, appointments and transportation."
      },
      {
        "id": "job-1",
        "title": "Check work-readiness barriers",
        "text": "ID, phone, email, clothes, certifications, background issues and a reliable ride."
      },
      {
        "id": "job-2",
        "title": "Make one simple résumé",
        "text": "Good enough to apply is better than endlessly perfect."
      },
      {
        "id": "job-3",
        "title": "Use local workforce/job sources",
        "text": "Apply to a manageable batch and track them."
      },
      {
        "id": "job-4",
        "title": "Plan interview transportation and child care now",
        "text": "Do not wait until the morning of the interview."
      },
      {
        "id": "job-5",
        "title": "Follow up once and keep moving",
        "text": "Save company, role, date applied and next action."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=jobs",
        "label": "Jobs & Skills directory →"
      }
    ],
    "category": "jobs",
    "quick": [],
    "script": ""
  },
  {
    "id": "work-ready",
    "category": "jobs",
    "eyebrow": "HELP PLAN",
    "title": "I want to work but something is blocking me",
    "intro": "Use this when the barrier is ID, transportation, child care, clothes, disability, record, schedule or confidence.",
    "checks": [
      {
        "id": "work-ready-0",
        "title": "Circle the blocker",
        "text": "ID/docs • child care • transportation • clothes/tools • disability • background • phone/internet • training."
      },
      {
        "id": "work-ready-1",
        "title": "Solve the blocker before mass applying",
        "text": "Use the matching Hub category."
      },
      {
        "id": "work-ready-2",
        "title": "Tell workforce staff the real barrier",
        "text": "Ask for the specific support, not just “job help.”"
      },
      {
        "id": "work-ready-3",
        "title": "Build a realistic availability statement",
        "text": "Know what shifts you can and cannot accept."
      },
      {
        "id": "work-ready-4",
        "title": "Ask about accommodations/supportive employment",
        "text": "When disability is involved."
      },
      {
        "id": "work-ready-5",
        "title": "Start with 3 good-fit applications",
        "text": "Quality and follow-through beat random volume."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=jobs",
        "label": "Jobs & Skills →"
      },
      {
        "href": "category.html?cat=transportation",
        "label": "Transportation →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "credit",
    "eyebrow": "HELP PLAN",
    "title": "Build credit & make a money plan",
    "intro": "Start by seeing what is actually on your reports before paying anyone promising a quick fix.",
    "checks": [
      {
        "id": "credit-0",
        "text": "List income and essential monthly expenses"
      },
      {
        "id": "credit-1",
        "text": "Review your credit reports"
      },
      {
        "id": "credit-2",
        "text": "Dispute information you believe is inaccurate through the proper process"
      },
      {
        "id": "credit-3",
        "text": "Make a realistic payment plan for valid debts"
      },
      {
        "id": "credit-4",
        "text": "Avoid paying for “credit repair” promises without understanding the service"
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=money#directory",
        "label": "Browse full local directory →"
      }
    ],
    "category": "money"
  },
  {
    "id": "bills",
    "eyebrow": "HELP PLAN",
    "title": "I am behind on bills",
    "intro": "Prioritize housing, utilities, food, transportation and legally required payments before lower-priority unsecured debt.",
    "checks": [
      {
        "id": "bills-0",
        "text": "List every bill, amount due and due date"
      },
      {
        "id": "bills-1",
        "text": "Mark essentials and anything with immediate legal/service consequences"
      },
      {
        "id": "bills-2",
        "text": "Call providers and ask about hardship/payment plans"
      },
      {
        "id": "bills-3",
        "text": "Check benefit and local assistance programs"
      },
      {
        "id": "bills-4",
        "text": "Get any payment agreement in writing when possible"
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=money#directory",
        "label": "Browse full local directory →"
      }
    ],
    "category": "money"
  },
  {
    "id": "child-support",
    "eyebrow": "HELP PLAN",
    "title": "Child support",
    "intro": "First identify whether your support issue is a new order, payment/arrears, enforcement or a modification.",
    "checks": [
      {
        "id": "child-support-0",
        "text": "Find your case/order information"
      },
      {
        "id": "child-support-1",
        "text": "Write down the current order and what has changed"
      },
      {
        "id": "child-support-2",
        "text": "Contact the Oregon Child Support Program or court resource that handles your case"
      },
      {
        "id": "child-support-3",
        "text": "Ask whether modification rules apply to your situation"
      },
      {
        "id": "child-support-4",
        "text": "Keep payment records and written notices"
      },
      {
        "id": "child-support-5",
        "text": "Get legal help for disputed custody/parenting or complex court issues"
      }
    ],
    "actions": [
      {
        "href": "https://www.courts.oregon.gov/programs/family/forms/pages/modifications.aspx",
        "label": "Official / local next step →"
      }
    ],
    "category": "legal"
  },
  {
    "id": "court-forms",
    "eyebrow": "HELP PLAN",
    "title": "Court papers, fines or government forms",
    "intro": "Court staff can explain procedure but generally cannot choose forms or give legal advice.",
    "checks": [
      {
        "id": "court-forms-0",
        "text": "Identify the court/agency and case number"
      },
      {
        "id": "court-forms-1",
        "text": "Read the entire notice and mark deadlines"
      },
      {
        "id": "court-forms-2",
        "text": "Use the official Oregon court/agency forms source"
      },
      {
        "id": "court-forms-3",
        "text": "Ask the local court about filing fees or fee-waiver procedure"
      },
      {
        "id": "court-forms-4",
        "text": "Keep stamped/filed copies and proof of service/payment"
      }
    ],
    "actions": [
      {
        "href": "https://www.courts.oregon.gov/forms/Pages/default.aspx",
        "label": "Official / local next step →"
      }
    ],
    "category": "legal"
  },
  {
    "id": "divorce",
    "eyebrow": "HELP PLAN",
    "title": "Divorce papers",
    "intro": "Oregon has different divorce packets for petitioners/respondents and cases with/without children.",
    "checks": [
      {
        "id": "divorce-0",
        "text": "Decide whether you are starting the case or responding to papers"
      },
      {
        "id": "divorce-1",
        "text": "Identify whether children are involved"
      },
      {
        "id": "divorce-2",
        "text": "Use the matching Oregon Judicial Department packet/instructions"
      },
      {
        "id": "divorce-3",
        "text": "Check filing/service requirements and deadlines"
      },
      {
        "id": "divorce-4",
        "text": "Ask about fee waiver/deferral if needed"
      },
      {
        "id": "divorce-5",
        "text": "Use family-law self-help or legal aid when custody, safety, property or debt issues are complicated"
      }
    ],
    "actions": [
      {
        "href": "https://www.courts.oregon.gov/programs/family/forms/Pages/divorce.aspx",
        "label": "Official / local next step →"
      }
    ],
    "category": "legal"
  },
  {
    "id": "legal-help",
    "eyebrow": "HELP PLAN",
    "title": "I need legal help",
    "intro": "Start by identifying the type of case and any deadline.",
    "checks": [
      {
        "id": "legal-help-0",
        "text": "Save every notice, court paper and envelope"
      },
      {
        "id": "legal-help-1",
        "text": "Write down deadlines, hearing dates and case numbers"
      },
      {
        "id": "legal-help-2",
        "text": "Contact legal aid or lawyer-referral resources"
      },
      {
        "id": "legal-help-3",
        "text": "Ask whether self-help forms or a facilitator can help with procedure"
      },
      {
        "id": "legal-help-4",
        "text": "Do not miss a court deadline while waiting for assistance"
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=legal#directory",
        "label": "Browse full local directory →"
      }
    ],
    "category": "legal"
  },
  {
    "id": "withdrawal",
    "eyebrow": "HELP PLAN",
    "title": "I need detox / withdrawal help",
    "intro": "Alcohol, benzodiazepine and other withdrawal situations can require medical assessment. Use a treatment provider or emergency care to decide what is safe.",
    "checks": [
      {
        "id": "withdrawal-0",
        "text": "Write down what substances are involved, when they were last used and any medications"
      },
      {
        "id": "withdrawal-1",
        "text": "Call ARC admissions and ask about Fresh Start withdrawal-management screening"
      },
      {
        "id": "withdrawal-2",
        "text": "Tell staff about pregnancy, seizures, serious medical conditions, mental-health symptoms and medications"
      },
      {
        "id": "withdrawal-3",
        "text": "Ask what to bring and whether transportation/help getting there is available"
      },
      {
        "id": "withdrawal-4",
        "text": "Before discharge, ask what the next treatment step is so there is not a gap in care"
      }
    ],
    "actions": [
      {
        "href": "https://www.addictionsrecovery.org/about-arc/contact-us/",
        "label": "ARC contact ↗"
      },
      {
        "href": "https://www.addictionsrecovery.org/about-arc/locations/",
        "label": "ARC locations ↗"
      },
      {
        "href": "category.html?cat=recovery#directory",
        "label": "Local recovery resources →"
      }
    ],
    "category": "recovery"
  },
  {
    "id": "relapse",
    "eyebrow": "HELP PLAN",
    "title": "I relapsed / returned to use",
    "intro": "A return to use does not tell you what the next level of care should be. Reconnect quickly and reassess safety.",
    "checks": [
      {
        "id": "relapse-0",
        "text": "If overdose or immediate danger is possible, use emergency help now"
      },
      {
        "id": "relapse-1",
        "text": "Tell one safe person or recovery support what happened"
      },
      {
        "id": "relapse-2",
        "text": "Contact treatment/peer support and ask for a new assessment or same-day next step"
      },
      {
        "id": "relapse-3",
        "text": "If opioids are involved, ask about naloxone and medication treatment options"
      },
      {
        "id": "relapse-4",
        "text": "Review what changed before the return to use: housing, people, stress, medication, meetings, treatment or transportation"
      },
      {
        "id": "relapse-5",
        "text": "Choose one next appointment or recovery connection today instead of trying to fix everything at once"
      }
    ],
    "actions": [
      {
        "href": "https://www.oregon.gov/oha/bh/adults/pages/substance-use.aspx",
        "label": "Oregon substance-use help ↗"
      },
      {
        "href": "https://www.211info.org/agency/25704/21641/",
        "label": "Recovery Café listing ↗"
      },
      {
        "href": "category.html?cat=recovery#directory",
        "label": "Local recovery resources →"
      }
    ],
    "category": "recovery"
  },
  {
    "id": "residential",
    "eyebrow": "HELP PLAN",
    "title": "I think I need residential treatment",
    "intro": "Residential treatment is different from detox and outpatient care. An assessment/access team can help determine whether it fits.",
    "checks": [
      {
        "id": "residential-0",
        "text": "Call OnTrack Residential Access or another treatment provider for screening"
      },
      {
        "id": "residential-1",
        "text": "Ask about current openings/waitlist and what assessment is required"
      },
      {
        "id": "residential-2",
        "text": "Ask whether the program fits women, parents, pregnancy/postpartum needs, or children staying with a parent"
      },
      {
        "id": "residential-3",
        "text": "Ask what insurance/OHP covers and what personal items/documents are needed"
      },
      {
        "id": "residential-4",
        "text": "Make a plan for children, medications, court/probation requirements, work and transportation"
      },
      {
        "id": "residential-5",
        "text": "Ask what outpatient, housing and peer support will be arranged for discharge"
      }
    ],
    "actions": [
      {
        "href": "https://ontrackroguevalley.org/residential-programs/",
        "label": "OnTrack residential ↗"
      },
      {
        "href": "https://ontrackroguevalley.org/locations/womens-residential-treatment-medford/",
        "label": "Women's HOME Program ↗"
      },
      {
        "href": "category.html?cat=recovery#directory",
        "label": "Local recovery resources →"
      }
    ],
    "category": "recovery"
  },
  {
    "id": "peer-support",
    "eyebrow": "HELP PLAN",
    "title": "I want peer support / recovery community",
    "intro": "Treatment and recovery community are not the same thing. Peer support can be useful before, during and after treatment.",
    "checks": [
      {
        "id": "peer-support-0",
        "text": "Choose what feels useful: one-on-one peer, recovery circle/meeting, women's support, family support or sober social connection"
      },
      {
        "id": "peer-support-1",
        "text": "Check Flourish Anyway for women-centered peer support"
      },
      {
        "id": "peer-support-2",
        "text": "Check Recovery Café for recovery circles, peer support and relapse-prevention activities"
      },
      {
        "id": "peer-support-3",
        "text": "Ask whether there are eligibility, sobriety or attendance requirements before going"
      },
      {
        "id": "peer-support-4",
        "text": "Put one realistic connection on your calendar this week"
      },
      {
        "id": "peer-support-5",
        "text": "If the first group is not a fit, try a different style rather than assuming recovery support is not for you"
      }
    ],
    "actions": [
      {
        "href": "https://weflourishanyway.org/",
        "label": "Flourish Anyway ↗"
      },
      {
        "href": "https://www.211info.org/agency/25704/21641/",
        "label": "Recovery Café / 211 ↗"
      },
      {
        "href": "category.html?cat=recovery#directory",
        "label": "Local recovery resources →"
      }
    ],
    "category": "recovery"
  },
  {
    "id": "treatment",
    "eyebrow": "HELP PLAN",
    "title": "I want to stop using / I need treatment",
    "intro": "Start with safety and an assessment. You do not have to already know whether you need outpatient, residential or another level of care.",
    "checks": [
      {
        "id": "treatment-0",
        "text": "If there is immediate danger or a medical emergency, call 911"
      },
      {
        "id": "treatment-1",
        "text": "If withdrawal may be medically risky, ask specifically about withdrawal management/detox instead of trying to guess the safest level of care"
      },
      {
        "id": "treatment-2",
        "text": "Call a local treatment access point or the Oregon Alcohol & Drug Helpline and ask for an assessment"
      },
      {
        "id": "treatment-3",
        "text": "Ask: outpatient, intensive outpatient, residential, withdrawal management, or medication treatment — what level is recommended?"
      },
      {
        "id": "treatment-4",
        "text": "Ask what OHP/insurance covers and whether there is a sliding fee"
      },
      {
        "id": "treatment-5",
        "text": "If you are a parent, ask about child watch, residential programs that allow children, and family supports"
      },
      {
        "id": "treatment-6",
        "text": "Write down the intake date, person you spoke with, documents needed and next appointment"
      }
    ],
    "actions": [
      {
        "href": "https://www.oregon.gov/oha/hsd/amh/pages/addictions.aspx",
        "label": "Oregon addiction help ↗"
      },
      {
        "href": "https://www.oregon.gov/oha/ohp/members/pages/behavioral-health.aspx",
        "label": "OHP treatment coverage ↗"
      },
      {
        "href": "category.html?cat=recovery#directory",
        "label": "Local recovery resources →"
      }
    ],
    "category": "recovery"
  },
  {
    "id": "caregiver",
    "eyebrow": "HELP PLAN",
    "title": "I am caring for someone",
    "intro": "Caregiver support should include the caregiver’s capacity, not only the other person’s needs.",
    "checks": [
      {
        "id": "caregiver-0",
        "text": "List the care tasks and hours you are currently covering"
      },
      {
        "id": "caregiver-1",
        "text": "Identify the tasks you cannot safely sustain"
      },
      {
        "id": "caregiver-2",
        "text": "Ask about respite, in-home care, meals and transportation"
      },
      {
        "id": "caregiver-3",
        "text": "Gather medical/benefit information needed for referrals"
      },
      {
        "id": "caregiver-4",
        "text": "Create an emergency backup-contact plan"
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=senior#directory",
        "label": "Browse full local directory →"
      }
    ],
    "category": "senior"
  },
  {
    "id": "disability-services",
    "category": "senior",
    "eyebrow": "HELP PLAN",
    "title": "I need disability services or accommodations",
    "intro": "Use this when disability affects work, school, housing, transportation or daily living.",
    "checks": [
      {
        "id": "disability-services-0",
        "title": "Write the functional barrier",
        "text": "What is hard to do, not only the diagnosis."
      },
      {
        "id": "disability-services-1",
        "title": "Pick the system",
        "text": "Work • school • housing • transportation • benefits • DD services."
      },
      {
        "id": "disability-services-2",
        "title": "Ask what documentation is actually required",
        "text": "Do not gather years of records if one form is needed."
      },
      {
        "id": "disability-services-3",
        "title": "Request the accommodation/service in writing",
        "text": "Keep a copy."
      },
      {
        "id": "disability-services-4",
        "title": "Track follow-up",
        "text": "Set a date to call again."
      },
      {
        "id": "disability-services-5",
        "title": "Use advocacy/legal help if denied/confusing",
        "text": "Especially when deadlines or rights are involved."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=senior",
        "label": "Senior & Disability →"
      },
      {
        "href": "category.html?cat=legal",
        "label": "Legal resources →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "medical-equipment",
    "category": "senior",
    "eyebrow": "HELP PLAN",
    "title": "I need medical equipment or accessibility help",
    "intro": "Use this for mobility, hearing/vision, home equipment or other assistive needs.",
    "checks": [
      {
        "id": "medical-equipment-0",
        "title": "Write the exact item/function needed",
        "text": "Wheelchair • walker • shower safety • hearing • communication • oxygen/power need."
      },
      {
        "id": "medical-equipment-1",
        "title": "Ask the medical provider what documentation/order is needed",
        "text": "Coverage may require a prescription or evaluation."
      },
      {
        "id": "medical-equipment-2",
        "title": "Call insurance/OHP",
        "text": "Ask which suppliers are in network and whether prior authorization is needed."
      },
      {
        "id": "medical-equipment-3",
        "title": "Check loan/reuse/community options",
        "text": "If coverage is slow."
      },
      {
        "id": "medical-equipment-4",
        "title": "Plan transportation/delivery",
        "text": "Large equipment may require accessible transport."
      },
      {
        "id": "medical-equipment-5",
        "title": "Save maintenance/replacement contacts",
        "text": "Do not wait for a breakdown."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=senior",
        "label": "Senior & Disability →"
      },
      {
        "href": "category.html?cat=health",
        "label": "Health →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "independent-living",
    "eyebrow": "HELP PLAN",
    "title": "Senior/disability help living independently",
    "intro": "Start with what daily task is becoming hard, then match the service.",
    "checks": [
      {
        "id": "independent-living-0",
        "text": "List needs: meals, bathing, medications, transportation, housekeeping, safety or benefits"
      },
      {
        "id": "independent-living-1",
        "text": "Contact ADRC/APD or the appropriate disability resource"
      },
      {
        "id": "independent-living-2",
        "text": "Ask for an assessment/navigation help"
      },
      {
        "id": "independent-living-3",
        "text": "Ask about eligibility, cost and waitlists"
      },
      {
        "id": "independent-living-4",
        "text": "Make a backup plan for urgent gaps in care"
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=senior#directory",
        "label": "Browse full local directory →"
      }
    ],
    "category": "senior"
  },
  {
    "id": "military-family",
    "category": "veterans",
    "eyebrow": "HELP PLAN",
    "title": "Military family / caregiver support",
    "intro": "Use this when the veteran/service member's needs are affecting the whole household.",
    "checks": [
      {
        "id": "military-family-0",
        "title": "Name the family impact",
        "text": "Caregiving • children • finances • housing • mental health • transportation."
      },
      {
        "id": "military-family-1",
        "title": "Ask about family/caregiver programs",
        "text": "Not every benefit is only for the veteran."
      },
      {
        "id": "military-family-2",
        "title": "Use Family & Parenting resources too",
        "text": "Local school/respite/parent supports may fit better."
      },
      {
        "id": "military-family-3",
        "title": "Make a shared appointment calendar",
        "text": "VA, school, work and treatment."
      },
      {
        "id": "military-family-4",
        "title": "Ask about caregiver respite/support",
        "text": "Especially with disability/high medical needs."
      },
      {
        "id": "military-family-5",
        "title": "Keep emergency/medication information accessible",
        "text": "So another adult can step in."
      }
    ],
    "actions": [
      {
        "href": "https://www.va.gov/",
        "label": "VA.gov ↗"
      },
      {
        "href": "category.html?cat=senior",
        "label": "Senior / Veteran-related resources →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "veteran-benefits",
    "category": "veterans",
    "eyebrow": "HELP PLAN",
    "title": "Veteran benefits & health care",
    "intro": "Start with one benefits navigator instead of decoding every VA program yourself.",
    "checks": [
      {
        "id": "veteran-benefits-0",
        "title": "Gather service documents if available",
        "text": "Do not delay asking for help if you cannot find everything."
      },
      {
        "id": "veteran-benefits-1",
        "title": "Write the need",
        "text": "Health • disability • pension • records • caregiver • education • another benefit."
      },
      {
        "id": "veteran-benefits-2",
        "title": "Contact a veteran service officer/navigator",
        "text": "Ask them to identify the correct claim/process."
      },
      {
        "id": "veteran-benefits-3",
        "title": "Save claim/reference numbers",
        "text": "Keep submission dates and copies."
      },
      {
        "id": "veteran-benefits-4",
        "title": "Ask about transportation to VA care",
        "text": "VA travel/DAV or other options may apply."
      },
      {
        "id": "veteran-benefits-5",
        "title": "Calendar follow-up",
        "text": "Benefits processes often need later documents/appointments."
      }
    ],
    "actions": [
      {
        "href": "https://www.va.gov/",
        "label": "VA.gov ↗"
      },
      {
        "href": "category.html?cat=senior",
        "label": "Senior / Veteran-related resources →"
      }
    ],
    "quick": [],
    "script": "",
    "resourcePack": {
      "title": "Calls & places to check",
      "contacts": [
        {
          "name": "VA",
          "phone": "800-698-2411",
          "url": "https://www.va.gov/",
          "why": "General VA help and routing."
        },
        {
          "name": "Oregon Department of Veterans' Affairs",
          "url": "https://www.oregon.gov/odva/",
          "why": "Find accredited county veteran service help."
        }
      ],
      "bring": [
        "DD214/service documents if available — do not delay calling if missing",
        "VA letters or claim numbers",
        "Short list of needs"
      ],
      "ask": [
        "Which benefit fits this need?",
        "Can a VSO help file it?",
        "What evidence is needed?",
        "Are caregiver/housing/transportation benefits relevant?"
      ],
      "backup": [
        "Also use Housing, Transportation, Legal or Health in the Hub."
      ]
    }
  },
  {
    "id": "veteran-housing-work",
    "category": "veterans",
    "eyebrow": "HELP PLAN",
    "title": "Veteran housing, work or transportation",
    "intro": "Use veteran-specific programs first, then general Hub categories too.",
    "checks": [
      {
        "id": "veteran-housing-work-0",
        "title": "Choose the immediate problem",
        "text": "Housing • job • transportation • food • legal • benefits."
      },
      {
        "id": "veteran-housing-work-1",
        "title": "Ask about veteran-specific eligibility",
        "text": "Some programs are not obvious in a general directory."
      },
      {
        "id": "veteran-housing-work-2",
        "title": "Use the matching general Hub category too",
        "text": "Do not wait for one veteran program if local help can act now."
      },
      {
        "id": "veteran-housing-work-3",
        "title": "Tell them about disability/service-connected needs",
        "text": "This may change options."
      },
      {
        "id": "veteran-housing-work-4",
        "title": "Keep appointments together",
        "text": "VA, work, housing and treatment can collide."
      },
      {
        "id": "veteran-housing-work-5",
        "title": "Save one primary navigator",
        "text": "Reduce repeated storytelling."
      }
    ],
    "actions": [
      {
        "href": "https://www.va.gov/",
        "label": "VA.gov ↗"
      },
      {
        "href": "category.html?cat=senior",
        "label": "Senior / Veteran-related resources →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "interpreter",
    "category": "language",
    "eyebrow": "HELP PLAN",
    "title": "I need an interpreter / language access",
    "intro": "You should not have to guess through medical, school, court or benefits information.",
    "checks": [
      {
        "id": "interpreter-0",
        "title": "Write the language needed",
        "text": "Include spoken language and reading/writing support."
      },
      {
        "id": "interpreter-1",
        "title": "Tell the agency before the appointment",
        "text": "Ask for a qualified interpreter."
      },
      {
        "id": "interpreter-2",
        "title": "For high-stakes matters",
        "text": "Avoid relying only on a child or untrained family member."
      },
      {
        "id": "interpreter-3",
        "title": "Ask how translated notices will arrive",
        "text": "Paper • portal • email • phone."
      },
      {
        "id": "interpreter-4",
        "title": "Put the interpreter request in the calendar note",
        "text": "Confirm it before the appointment."
      },
      {
        "id": "interpreter-5",
        "title": "If access is refused",
        "text": "Ask for a supervisor/patient advocate or advocacy/legal help."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=legal",
        "label": "Legal & Government →"
      },
      {
        "href": "category.html?cat=health",
        "label": "Health →"
      }
    ],
    "quick": [],
    "script": "“I need a qualified [language] interpreter for this appointment/call. Please note that on my case and tell me how it will be provided.”"
  },
  {
    "id": "immigration-legal",
    "category": "language",
    "eyebrow": "HELP PLAN",
    "title": "I need immigration legal help",
    "intro": "Use qualified immigration legal help. Do not hand original documents or money to an unverified helper.",
    "checks": [
      {
        "id": "immigration-legal-0",
        "title": "Write the exact issue",
        "text": "Status • renewal • work authorization • family petition • court/removal • citizenship • other."
      },
      {
        "id": "immigration-legal-1",
        "title": "Find every deadline/notice",
        "text": "Photograph notices and envelopes."
      },
      {
        "id": "immigration-legal-2",
        "title": "Use a qualified attorney or accredited representative",
        "text": "Ask what credentials they have."
      },
      {
        "id": "immigration-legal-3",
        "title": "Protect original documents",
        "text": "Keep a document inventory."
      },
      {
        "id": "immigration-legal-4",
        "title": "Ask about fees in writing",
        "text": "Know what the fee covers."
      },
      {
        "id": "immigration-legal-5",
        "title": "Do not miss deadlines while seeking help",
        "text": "Ask what must be filed now."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=legal",
        "label": "Legal resources →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "new-to-area",
    "category": "language",
    "eyebrow": "HELP PLAN",
    "title": "I'm new here and need help using local systems",
    "intro": "Use this when school, health, work and benefits all feel unfamiliar at once.",
    "checks": [
      {
        "id": "new-to-area-0",
        "title": "Choose ONE system first",
        "text": "School • health • benefits • work • housing • legal."
      },
      {
        "id": "new-to-area-1",
        "title": "Ask for language access",
        "text": "Do this at the beginning."
      },
      {
        "id": "new-to-area-2",
        "title": "Save household information in one folder",
        "text": "Names, birth dates, address/contact and important documents."
      },
      {
        "id": "new-to-area-3",
        "title": "Use the matching Hub category",
        "text": "Do not learn every agency at once."
      },
      {
        "id": "new-to-area-4",
        "title": "Write every confirmation/case number",
        "text": "Take a screenshot too."
      },
      {
        "id": "new-to-area-5",
        "title": "Pick the next system only after the first is moving",
        "text": "One pathway at a time."
      }
    ],
    "actions": [
      {
        "href": "index.html",
        "label": "Resource Hub home →"
      }
    ],
    "quick": [],
    "script": ""
  },
  {
    "id": "community-events",
    "eyebrow": "HELP PLAN",
    "title": "Find something to do",
    "intro": "Pick what fits today. You do not need to open every event source.",
    "checks": [
      {
        "id": "community-events-0",
        "title": "Pick the kind of thing",
        "text": "Kids/family • art/music • outdoors • recovery/sober • free/cheap • community/volunteer."
      },
      {
        "id": "community-events-1",
        "title": "Pick the travel range",
        "text": "My town • nearby • anywhere in Jackson + Josephine."
      },
      {
        "id": "community-events-2",
        "title": "Open 2–3 matching event sources",
        "text": "Use the Local Events page and choose sources that match the activity and location."
      },
      {
        "id": "community-events-3",
        "title": "Confirm the basics",
        "text": "Date • time • cost • tickets/registration • address."
      },
      {
        "id": "community-events-4",
        "title": "Check transportation",
        "text": "If getting there is the blocker, solve the ride before committing."
      },
      {
        "id": "community-events-5",
        "title": "Save it now",
        "text": "Add the event to your phone calendar or save the source so you do not have to find it again."
      }
    ],
    "actions": [
      {
        "href": "events.html",
        "label": "Local Events & Calendars →"
      },
      {
        "href": "category.html?cat=transportation",
        "label": "Transportation help →"
      }
    ],
    "category": "community",
    "quick": [],
    "script": ""
  },
  {
    "id": "community-connection",
    "category": "community",
    "eyebrow": "HELP PLAN",
    "title": "I need people / community connection",
    "intro": "Use this when isolation is the problem and you need a repeatable place to belong.",
    "checks": [
      {
        "id": "community-connection-0",
        "title": "Choose the type of connection",
        "text": "Recovery • women • parenting • volunteering • faith • hobby • exercise • arts."
      },
      {
        "id": "community-connection-1",
        "title": "Pick one recurring group/event",
        "text": "Recurring is easier than constantly searching."
      },
      {
        "id": "community-connection-2",
        "title": "Check whether children can come",
        "text": "Or make the child-care plan."
      },
      {
        "id": "community-connection-3",
        "title": "Plan transportation",
        "text": "Choose something you can realistically reach."
      },
      {
        "id": "community-connection-4",
        "title": "Go once before deciding",
        "text": "A first visit is information, not a lifetime commitment."
      },
      {
        "id": "community-connection-5",
        "title": "Save one contact or next date",
        "text": "Make it easy to return."
      }
    ],
    "actions": [
      {
        "href": "category.html?cat=recovery",
        "label": "Recovery & Community →"
      },
      {
        "href": "events.html",
        "label": "Local Events →"
      }
    ],
    "quick": [],
    "script": ""
  }
];
