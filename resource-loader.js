// Flourish Anyway shared resource loader
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
const CAT={"kids-family":"Kids & Family","food":"Food & Everyday Needs","housing":"Housing, Rent & Utilities","transportation":"Transportation & Driver's License","money":"Money & Credit","health":"Health & Wellness","parenting":"Parenting & Kids","jobs":"Jobs, Education & Skills","legal":"Legal & Government Help","recovery":"Recovery & Community","senior":"Senior & Disability Resources","emergency":"Emergency Help","events":"Local Events & Calendars"};
let RES=[];
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const norm=v=>String(v||"").toLowerCase().trim();
function loadScript(src){return new Promise(ok=>{let s=document.createElement("script");s.src=src+"?v=20260901kids";s.onload=ok;s.onerror=ok;document.head.appendChild(s)})}
async function getResources(){
  RES=[];
  for(const[f]of FILES)await loadScript(f);
  let seen=new Set();
  for(const[,g]of FILES)for(const r of(window[g]||[])){
    let k=r.id||[r.name,r.category,r.address].join("|");
    if(!seen.has(k)){seen.add(k);RES.push(r)}
  }
  return RES
}
function resourceHaystack(r){
  return norm([
    r.name,r.helps,r.service,r.description,r.address,r.city,r.cost,r.eligibility,r.sourceName,r.eventDate,r.eventTime,
    ...(r.counties||[]),...(r.audience||[]),...(r.labels||[]),...(r.keywords||[]),
    ...(r.schedule||[]).flatMap(s=>[...(s.days||[]),s.time,s.note])
  ].join(" "))
}
const SAVE_KEY="flourish-saved-resources-v1";
function savedIds(){try{return JSON.parse(localStorage.getItem(SAVE_KEY)||"[]")}catch{return[]}}
function isSaved(id){return savedIds().includes(id)}
function toggleSaved(id){
  let x=savedIds();
  x=x.includes(id)?x.filter(v=>v!==id):[...x,id];
  localStorage.setItem(SAVE_KEY,JSON.stringify(x));
  document.querySelectorAll("[data-save-id]").forEach(b=>{if(b.dataset.saveId===id)b.textContent=x.includes(id)?"♥ Saved":"♡ Save this"})
}
function resultCard(r){
  let tel=r.phone?String(r.phone).replace(/[^\d+]/g,""):"",
      sch=(r.schedule||[]).map(s=>`${(s.days||[]).join(", ")}${s.time?" • "+s.time:""}${s.note?" — "+s.note:""}`).join(" | ");
  return `<article class="result"><div class="category">${esc(CAT[r.category]||r.category||"Resource")}</div><h3>${esc(r.name||"Resource")}</h3>${r.helps?`<p>${esc(r.helps)}</p>`:""}<div class="meta">${sch?`<div><b>Schedule:</b> ${esc(sch)}</div>`:""}${r.counties?.length?`<div><b>Area:</b> ${esc(r.counties.join(" + "))}</div>`:""}${r.cost?`<div><b>Cost:</b> ${esc(r.cost)}</div>`:""}${r.eligibility?`<div><b>Eligibility:</b> ${esc(r.eligibility)}</div>`:""}${r.address?`<div><b>Location:</b> ${esc(r.address)}</div>`:""}${r.sourceName?`<div><b>Source:</b> ${esc(r.sourceName)}</div>`:""}${r.lastVerified?`<div><b>Last checked:</b> ${esc(r.lastVerified)}${r.scheduleChangesOften?" • Check current schedule / availability":""}</div>`:""}</div><div class="actions"><button type="button" data-save-id="${esc(r.id)}" onclick="toggleSaved(this.dataset.saveId)">${isSaved(r.id)?"♥ Saved":"♡ Save this"}</button>${r.website?`<a href="${esc(r.website)}" target="_blank" rel="noopener">Check current info ↗</a>`:""}${r.apply?`<a class="alt" href="${esc(r.apply)}" target="_blank" rel="noopener">Apply ↗</a>`:""}${r.source211?`<a class="alt" href="${esc(r.source211)}" target="_blank" rel="noopener">211 Listing ↗</a>`:""}${r.phone?`<a class="call" href="tel:${tel}">Call ${esc(r.phone)}</a>`:""}</div></article>`
}
