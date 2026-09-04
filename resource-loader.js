// Flourish Anyway shared resource loader
// Upgraded 2026-09-01
//
// EVENT AUTO-LINKING:
// - Any resource in ANY data file may add:
//     calendarUrl:"https://..."
//   (also supports older fields: events or eventUrl)
// - That resource keeps its normal category card.
// - Its normal card gets an "Events / Calendar" button.
// - It is ALSO automatically surfaced on the Local Events page.
// - If events-data.js already has the same calendar URL, no duplicate is created.
//
// This lets churches, nonprofits, schools, museums, businesses, etc.
// participate in Local Events without manually duplicating the whole record.

const FILES=[
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
["kids-education-data.js","FLOURISH_KIDS_EDUCATION_DATA"],
["kids-activities-data.js","FLOURISH_KIDS_ACTIVITIES_DATA"],
["childcare-data.js","FLOURISH_CHILDCARE_DATA"]
];

const CAT={
"kids-family":"Kids & Family",
"food":"Food & Everyday Needs",
"housing":"Housing, Rent & Utilities",
"transportation":"Transportation & Driver's License",
"money":"Money & Credit",
"health":"Health & Wellness",
"parenting":"Parenting & Kids",
"jobs":"Jobs, Education & Skills",
"legal":"Legal & Government Help",
"recovery":"Recovery & Community",
"senior":"Senior & Disability Resources",
"emergency":"Emergency Help",
"events":"Local Events & Calendars"
};

let RES=[];

const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
}[c]));

const norm=v=>String(v||"").toLowerCase().trim();

function cleanUrl(v){
  return String(v||"").trim().replace(/\/+$/,"").toLowerCase();
}

function eventUrl(r){
  return r.calendarUrl||r.eventUrl||r.events||"";
}

function loadScript(src){
  return new Promise(ok=>{
    let s=document.createElement("script");
    s.src=src+"?v=20260904a";
    s.onload=ok;
    s.onerror=()=>{
      console.warn("Could not load resource file:",src);
      ok();
    };
    document.head.appendChild(s);
  })
}

async function getResources(){
  RES=[];

  for(const[f]of FILES)await loadScript(f);

  let seen=new Set();

  // First load every real resource exactly once.
  for(const[,g]of FILES){
    for(const r of(window[g]||[])){
      let k=r.id||[r.name,r.category,r.address].join("|");
      if(!seen.has(k)){
        seen.add(k);
        RES.push(r);
      }
    }
  }

  // URLs already represented by a real Events card.
  const existingEventUrls=new Set(
    RES
      .filter(r=>r.category==="events")
      .map(r=>cleanUrl(eventUrl(r)||r.website))
      .filter(Boolean)
  );

  // Automatically mirror event-capable resources into Local Events.
  // The source record itself is NEVER modified.
  const autoEventRows=[];

  for(const r of RES){
    if(r.category==="events")continue;

    const url=eventUrl(r);
    if(!url)continue;

    const normalized=cleanUrl(url);
    if(normalized&&existingEventUrls.has(normalized))continue;

    const baseId=r.id||norm(r.name).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

    autoEventRows.push({
      ...r,
      id:"auto-event-"+baseId,
      category:"events",
      section:r.eventSection||"More Local Event Sources",
      name:r.eventName||`${r.name} — Events`,
      helps:r.eventHelps||`Check ${r.name} for current events, programs, classes, activities or community happenings. Event details can change; confirm with the organizer before attending.`,
      website:url,
      calendarUrl:url,
      sourceName:r.sourceName||r.name,
      labels:[...(r.labels||[]),"AUTO EVENT SOURCE"],
      keywords:[...(r.keywords||[]),"events","calendar"],
      scheduleChangesOften:true,
      autoEventSource:true,
      originalCategory:r.category
    });

    if(normalized)existingEventUrls.add(normalized);
  }

  RES.push(...autoEventRows);
  return RES;
}

function resourceHaystack(r){
  return norm([
    r.name,r.helps,r.service,r.description,r.address,r.city,r.cost,r.eligibility,
    r.sourceName,r.eventDate,r.eventTime,r.section,r.eventSection,
    ...(r.counties||[]),...(r.audience||[]),...(r.labels||[]),...(r.keywords||[]),
    ...(r.schedule||[]).flatMap(s=>[...(s.days||[]),s.time,s.note])
  ].join(" "))
}

const SAVE_KEY="flourish-saved-resources-v1";

function savedIds(){
  try{return JSON.parse(localStorage.getItem(SAVE_KEY)||"[]")}
  catch{return[]}
}

function isSaved(id){
  return savedIds().includes(id)
}

function toggleSaved(id){
  let x=savedIds();
  x=x.includes(id)?x.filter(v=>v!==id):[...x,id];
  localStorage.setItem(SAVE_KEY,JSON.stringify(x));
  document.querySelectorAll("[data-save-id]").forEach(b=>{
    if(b.dataset.saveId===id)b.textContent=x.includes(id)?"♥ Saved":"♡ Save this"
  })
}

function resultCard(r){
  let tel=r.phone?String(r.phone).replace(/[^\d+]/g,""):"",
      sch=(r.schedule||[]).map(s=>
        `${(s.days||[]).join(", ")}${s.time?" • "+s.time:""}${s.note?" — "+s.note:""}`
      ).join(" | "),
      cal=eventUrl(r),
      website=r.website||"",
      showCalendar=cal&&cleanUrl(cal)!==cleanUrl(website);

  return `<article class="result">
    <div class="category">${esc(CAT[r.category]||r.category||"Resource")}</div>
    <h3>${esc(r.name||"Resource")}</h3>
    ${r.helps?`<p>${esc(r.helps)}</p>`:""}
    <div class="meta">
      ${r.eventDate?`<div><b>Date:</b> ${esc(r.eventDate)}</div>`:""}
      ${r.eventTime?`<div><b>Time:</b> ${esc(r.eventTime)}</div>`:""}
      ${sch?`<div><b>Schedule:</b> ${esc(sch)}</div>`:""}
      ${r.counties?.length?`<div><b>Area:</b> ${esc(r.counties.join(" + "))}</div>`:""}
      ${r.cost?`<div><b>Cost:</b> ${esc(r.cost)}</div>`:""}
      ${r.eligibility?`<div><b>Eligibility:</b> ${esc(r.eligibility)}</div>`:""}
      ${r.address?`<div><b>Location:</b> ${esc(r.address)}</div>`:""}
      ${r.sourceName?`<div><b>Source:</b> ${esc(r.sourceName)}</div>`:""}
      ${r.lastVerified?`<div><b>Last checked:</b> ${esc(r.lastVerified)}${r.scheduleChangesOften?" • Check current schedule / availability":""}</div>`:""}
    </div>
    <div class="actions">
      <button type="button" data-save-id="${esc(r.id)}" onclick="toggleSaved(this.dataset.saveId)">
        ${isSaved(r.id)?"♥ Saved":"♡ Save this"}
      </button>
      ${website?`<a href="${esc(website)}" target="_blank" rel="noopener">${r.category==="events"&&cal?"Events / Calendar ↗":"Check current info ↗"}</a>`:""}
      ${showCalendar?`<a class="alt" href="${esc(cal)}" target="_blank" rel="noopener">Events / Calendar ↗</a>`:""}
      ${r.apply?`<a class="alt" href="${esc(r.apply)}" target="_blank" rel="noopener">Apply ↗</a>`:""}
      ${r.source211?`<a class="alt" href="${esc(r.source211)}" target="_blank" rel="noopener">211 Listing ↗</a>`:""}
      ${r.phone?`<a class="call" href="tel:${tel}">Call ${esc(r.phone)}</a>`:""}
    </div>
  </article>`
}
