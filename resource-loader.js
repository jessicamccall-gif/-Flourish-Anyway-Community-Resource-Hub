// Flourish Anyway Community Resource Hub
// MASTER RESOURCE LOADER — 2026-09-04
// After this one master update, ordinary chapter changes should be data-only.

const FILES = [
  ["food-data.js","FLOURISH_FOOD_DATA"],
  ["housing-data.js","FLOURISH_HOUSING_DATA"],
  ["transportation-data.js","FLOURISH_TRANSPORTATION_DATA"],
  ["money-data.js","FLOURISH_MONEY_DATA"],
  ["health-data.js","FLOURISH_HEALTH_DATA"],
  ["parenting-data.js","FLOURISH_PARENTING_DATA"],
  ["jobs-data.js","FLOURISH_JOBS_DATA"],
  ["legal-data.js","FLOURISH_LEGAL_DATA"],
  ["recovery-data.js","FLOURISH_RECOVERY_DATA"],
  ["senior-data.js","FLOURISH_SENIOR_DATA"],
  ["emergency-data.js","FLOURISH_EMERGENCY_DATA"],
  ["kids-family-data.js","FLOURISH_KIDS_FAMILY_DATA"],
  ["events-data.js","FLOURISH_EVENTS_DATA"],
  ["kids-health-data.js","FLOURISH_KIDS_HEALTH_DATA"],
  ["kids-needs-data.js","FLOURISH_KIDS_NEEDS_DATA"],
  ["kids-activities-data.js","FLOURISH_KIDS_ACTIVITIES_DATA"],
  ["childcare-data.js","FLOURISH_CHILDCARE_DATA"],
  ["education-data.js","FLOURISH_EDUCATION_DATA"],
  ["safety-data.js","FLOURISH_SAFETY_DATA"],
  ["veterans-data.js","FLOURISH_VETERANS_DATA"],
  ["language-data.js","FLOURISH_LANGUAGE_DATA"]
];

let RES = [];

const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
}[c]));

const norm = v => String(v || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim();

function cleanUrl(v){ return String(v||"").trim().replace(/\/+$/,"").toLowerCase(); }
function eventUrl(r){ return r.calendarUrl || r.eventUrl || r.events || ""; }

function loadScript(src){
  return new Promise(resolve=>{
    const s=document.createElement("script");
    s.src=src+"?v=20260904master1";
    s.onload=()=>resolve(true);
    s.onerror=()=>{ console.warn("Could not load resource file:",src); resolve(false); };
    document.head.appendChild(s);
  });
}

async function getResources(){
  RES=[];
  for(const [f] of FILES) await loadScript(f);

  const seen=new Set();
  for(const [,globalName] of FILES){
    const rows=window[globalName]||[];
    for(const r of rows){
      const key=r.id || [r.name,r.category,r.address].join("|");
      if(seen.has(key)) continue;
      seen.add(key);
      RES.push(r);
    }
  }

  const eventSeen=new Set(
    RES.filter(r=>r.category==="events").map(r=>cleanUrl(eventUrl(r)||r.website)).filter(Boolean)
  );
  for(const r of [...RES]){
    if(r.category==="events") continue;
    const u=eventUrl(r);
    if(!u || eventSeen.has(cleanUrl(u))) continue;
    eventSeen.add(cleanUrl(u));
    RES.push({
      ...r,
      id:"event-"+(r.id||Math.random().toString(36).slice(2)),
      category:"events",
      name:r.name+" — Events / Calendar",
      website:u,
      helps:r.eventHelps||("Current events, classes or calendar information from "+r.name+"."),
      labels:[...(r.labels||[]),"EVENTS / CALENDAR"],
      keywords:[...(r.keywords||[]),"events","calendar"]
    });
  }
  return RES;
}

function resourceHaystack(r){
  return norm([
    r.name,r.helps,r.description,r.service,r.section,r.address,r.city,r.cost,r.eligibility,
    r.eventDate,r.eventTime,r.text,r.tollFree,
    ...(r.situations||[]),...(r.audience||[]),...(r.counties||[]),
    ...(r.labels||[]),...(r.keywords||[])
  ].filter(Boolean).join(" "));
}

function matchesCircumstance(r, terms){
  if(!terms || !terms.length) return true;
  const h=resourceHaystack(r);
  return terms.some(t=>h.includes(norm(t)));
}

function resultCard(r){
  const phone=(r.phone||"").split("|")[0].trim();
  const meta=[];
  if(r.helps) meta.push(`<div>${esc(r.helps)}</div>`);
  if(r.address) meta.push(`<div><b>Where:</b> ${esc(r.address)}</div>`);
  if(r.cost) meta.push(`<div><b>Cost:</b> ${esc(r.cost)}</div>`);
  if(r.eligibility) meta.push(`<div><b>Who:</b> ${esc(r.eligibility)}</div>`);
  const actions=[];
  if(phone) actions.push(`<a class="call" href="tel:${esc(phone.replace(/[^\d+]/g,""))}">Call ${esc(phone)}</a>`);
  if(r.website) actions.push(`<a href="${esc(r.website)}" target="_blank" rel="noopener">Website ↗</a>`);
  if(r.apply) actions.push(`<a class="alt" href="${esc(r.apply)}" target="_blank" rel="noopener">Apply / Start ↗</a>`);
  const cal=eventUrl(r);
  if(cal && cleanUrl(cal)!==cleanUrl(r.website)) actions.push(`<a class="alt" href="${esc(cal)}" target="_blank" rel="noopener">Events / Calendar ↗</a>`);
  return `<article class="result">
    <div class="category">${esc(r.section||"Resource")}</div>
    <h3>${esc(r.name||"Resource")}</h3>
    <div class="meta">${meta.join("")}</div>
    <div class="actions">${actions.join("")}</div>
  </article>`;
}
