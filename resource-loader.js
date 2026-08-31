// Flourish Anyway Community Resource Hub
// Shared loader for search.html and category.html

const FILES = [
  [
    "food-data.js",
    "FLOURISH_FOOD_DATA"
  ],
  [
    "housing-data.js",
    "FLOURISH_HOUSING_DATA"
  ],
  [
    "transportation-data.js",
    "FLOURISH_TRANSPORTATION_DATA"
  ],
  [
    "money-data.js",
    "FLOURISH_MONEY_DATA"
  ],
  [
    "health-data.js",
    "FLOURISH_HEALTH_DATA"
  ],
  [
    "parenting-data.js",
    "FLOURISH_PARENTING_DATA"
  ],
  [
    "jobs-data.js",
    "FLOURISH_JOBS_DATA"
  ],
  [
    "legal-data.js",
    "FLOURISH_LEGAL_DATA"
  ],
  [
    "recovery-data.js",
    "FLOURISH_RECOVERY_DATA"
  ],
  [
    "senior-data.js",
    "FLOURISH_SENIOR_DATA"
  ],
  [
    "emergency-data.js",
    "FLOURISH_EMERGENCY_DATA"
  ],
  [
    "kids-family-data.js",
    "FLOURISH_KIDS_FAMILY_DATA"
  ],
  [
    "events-data.js",
    "FLOURISH_EVENTS_DATA"
  ]
];
const CAT = {
  "kids-family": "Kids & Family",
  "food": "Food & Everyday Needs",
  "housing": "Housing, Rent & Utilities",
  "transportation": "Transportation & Driver's License",
  "money": "Money & Credit",
  "health": "Health & Wellness",
  "parenting": "Parenting & Kids",
  "jobs": "Jobs, Education & Skills",
  "legal": "Legal & Government Help",
  "recovery": "Recovery & Community",
  "senior": "Senior & Disability Resources",
  "emergency": "Emergency Help",
  "events": "Local Events & Calendars"
};

let RES = [];

const esc = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));

const norm = (value) => String(value || "").toLowerCase().trim();

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src + "?v=20260831f";
    script.onload = resolve;
    script.onerror = () => {
      console.warn("Could not load resource file:", src);
      resolve();
    };
    document.head.appendChild(script);
  });
}

async function getResources() {
  RES = [];

  for (const [filename] of FILES) {
    await loadScript(filename);
  }

  const seen = new Set();

  for (const [, globalName] of FILES) {
    const rows = window[globalName] || [];

    for (const resource of rows) {
      const key =
        resource.id ||
        [resource.name, resource.category, resource.address].join("|");

      if (!seen.has(key)) {
        seen.add(key);
        RES.push(resource);
      }
    }
  }

  return RES;
}

function resourceHaystack(resource) {
  return norm([
    resource.name,
    resource.helps,
    resource.service,
    resource.description,
    resource.address,
    resource.city,
    resource.cost,
    resource.eligibility,
    resource.eventDate,
    resource.eventTime,
    ...(resource.counties || []),
    ...(resource.audience || []),
    ...(resource.labels || []),
    ...(resource.keywords || [])
  ].join(" "));
}

function resultCard(resource) {
  const tel = resource.phone
    ? String(resource.phone).replace(/[^\d+]/g, "")
    : "";

  const area = (resource.counties || []).join(" + ");
  const audience = (resource.audience || []).join(", ");

  return `
    <article class="result">
      <div class="category">${esc(CAT[resource.category] || resource.category || "Resource")}</div>
      <h3>${esc(resource.name || "Resource")}</h3>

      ${resource.helps ? `<p>${esc(resource.helps)}</p>` : ""}

      <div class="meta">
        ${resource.eventDate ? `<div><b>Date:</b> ${esc(resource.eventDate)}</div>` : ""}
        ${resource.eventTime ? `<div><b>Time:</b> ${esc(resource.eventTime)}</div>` : ""}
        ${area ? `<div><b>Area:</b> ${esc(area)}</div>` : ""}
        ${audience ? `<div><b>Who:</b> ${esc(audience)}</div>` : ""}
        ${resource.cost ? `<div><b>Cost:</b> ${esc(resource.cost)}</div>` : ""}
        ${resource.eligibility ? `<div><b>Eligibility:</b> ${esc(resource.eligibility)}</div>` : ""}
        ${resource.address ? `<div><b>Location:</b> ${esc(resource.address)}</div>` : ""}
      </div>

      <div class="actions">
        ${resource.website ? `<a href="${esc(resource.website)}" target="_blank" rel="noopener">Website ↗</a>` : ""}
        ${resource.apply ? `<a class="alt" href="${esc(resource.apply)}" target="_blank" rel="noopener">Apply ↗</a>` : ""}
        ${resource.source211 ? `<a class="alt" href="${esc(resource.source211)}" target="_blank" rel="noopener">211 Listing ↗</a>` : ""}
        ${resource.events ? `<a class="alt" href="${esc(resource.events)}" target="_blank" rel="noopener">Events ↗</a>` : ""}
        ${resource.phone ? `<a class="call" href="tel:${tel}">Call ${esc(resource.phone)}</a>` : ""}
      </div>
    </article>
  `;
}
