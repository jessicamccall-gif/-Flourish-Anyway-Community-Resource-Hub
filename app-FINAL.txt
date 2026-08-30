/* Flourish Anyway Community Resource Hub
   FINAL LOADER + RESOURCE FINDER
   Loads section data files automatically.
*/

(function () {
  const DATA = window.FLOURISH_HUB_DATA;
  if (!DATA || !Array.isArray(DATA.categories)) {
    console.warn("Flourish Hub master data not found.");
    return;
  }

  const files = [
    ["food-data.js", "FLOURISH_FOOD_DATA"],
    ["housing-data.js", "FLOURISH_HOUSING_DATA"],
    ["transportation-data.js", "FLOURISH_TRANSPORTATION_DATA"],
    ["money-data.js", "FLOURISH_MONEY_DATA"],
    ["health-data.js", "FLOURISH_HEALTH_DATA"],
    ["parenting-data.js", "FLOURISH_PARENTING_DATA"],
    ["jobs-data.js", "FLOURISH_JOBS_DATA"],
    ["legal-data.js", "FLOURISH_LEGAL_DATA"],
    ["recovery-data.js", "FLOURISH_RECOVERY_DATA"],
    ["senior-data.js", "FLOURISH_SENIOR_DATA"],
    ["emergency-data.js", "FLOURISH_EMERGENCY_DATA"],
    ["kids-family-data.js", "FLOURISH_KIDS_FAMILY_DATA"],
    ["events-data.js", "FLOURISH_EVENTS_DATA"]
  ];

  const state = { query: "", county: "all", category: "all" };

  const loadScript = (src) => new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve(true);
    s.onerror = () => {
      console.warn("Could not load " + src);
      resolve(false);
    };
    document.head.appendChild(s);
  });

  const normalize = (value) =>
    String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const escapeHtml = (value) =>
    String(value ?? "").replace(/[&<>"']/g, ch => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[ch]));

  const collectData = () => {
    const seen = new Set();
    const combined = [];
    files.forEach(([, globalName]) => {
      const rows = window[globalName];
      if (!Array.isArray(rows)) return;
      rows.forEach(r => {
        const key = r.id || `${r.category}|${r.name}`;
        if (seen.has(key)) return;
        seen.add(key);
        combined.push(r);
      });
    });
    DATA.resources = combined;
  };

  const categoryName = (id) => {
    const c = DATA.categories.find(x => x.id === id);
    return c ? c.name : id;
  };

  const matches = (r) => {
    const countyOK = state.county === "all" || (r.counties || []).includes(state.county);
    const categoryOK = state.category === "all" || r.category === state.category;
    if (!countyOK || !categoryOK) return false;

    const q = normalize(state.query);
    if (!q) return true;

    const haystack = normalize([
      r.name, r.helps, r.address, r.cost, r.eligibility,
      r.eventDate, r.eventTime, r.text, r.tollFree,
      ...(r.audience || []), ...(r.counties || []),
      ...(r.labels || []), ...(r.keywords || [])
    ].join(" "));
    return haystack.includes(q);
  };

  const linkButton = (label, href, cls = "") => {
    if (!href) return "";
    return `<a class="resource-action ${cls}" href="${escapeHtml(href)}" target="_blank" rel="noopener">${label}</a>`;
  };

  const phoneButton = (phone) => {
    if (!phone) return "";
    const tel = String(phone).replace(/[^\d+]/g, "");
    return `<a class="resource-action call" href="tel:${tel}">Call ${escapeHtml(phone)}</a>`;
  };

  const card = (r) => `
    <article class="resource-result-card">
      <div class="resource-result-top">
        <div>
          <div class="resource-category">${escapeHtml(categoryName(r.category))}</div>
          <h3>${escapeHtml(r.name)}</h3>
        </div>
        <div class="resource-verified">Checked ${escapeHtml(r.lastVerified || DATA.verified || "recently")}</div>
      </div>
      <p class="resource-helps">${escapeHtml(r.helps || "")}</p>
      <div class="resource-meta">
        ${r.eventDate ? `<div><strong>Date:</strong> ${escapeHtml(r.eventDate)}${r.eventTime ? ` • ${escapeHtml(r.eventTime)}` : ""}</div>` : ""}
        ${r.counties?.length ? `<div><strong>Area:</strong> ${r.counties.map(escapeHtml).join(" + ")}</div>` : ""}
        ${r.audience?.length ? `<div><strong>Who:</strong> ${r.audience.map(escapeHtml).join(", ")}</div>` : ""}
        ${r.cost ? `<div><strong>Cost:</strong> ${escapeHtml(r.cost)}</div>` : ""}
        ${r.eligibility ? `<div><strong>Eligibility:</strong> ${escapeHtml(r.eligibility)}</div>` : ""}
        ${r.address ? `<div><strong>Location:</strong> ${escapeHtml(r.address)}</div>` : ""}
        ${r.text ? `<div><strong>Text:</strong> ${escapeHtml(r.text)}</div>` : ""}
        ${r.tollFree ? `<div><strong>Toll-free:</strong> ${escapeHtml(r.tollFree)}</div>` : ""}
      </div>
      ${r.labels?.length ? `<div class="resource-chips">${r.labels.map(x => `<span class="resource-chip">${escapeHtml(x)}</span>`).join("")}</div>` : ""}
      <div class="resource-actions">
        ${linkButton("Official Website ↗", r.website)}
        ${linkButton("Apply / Register ↗", r.apply, "secondary")}
        ${linkButton("211 Listing ↗", r.source211, "secondary")}
        ${linkButton("Events ↗", r.events, "secondary")}
        ${phoneButton(r.phone)}
      </div>
    </article>
  `;

  const addEventsCard = () => {
    if (document.getElementById("events")) return;
    const toc = document.querySelector(".toc");
    if (!toc) return;
    const a = document.createElement("a");
    a.id = "events";
    a.className = "card category-anchor";
    a.href = "#events";
    a.innerHTML = `<div class="icon">📅</div><h3>Local Events & Calendars</h3><p>Free and low-cost local events, library calendars, family activities and seasonal community happenings.</p>`;
    toc.appendChild(a);
  };

  const style = () => {
    const el = document.createElement("style");
    el.textContent = `
      .resource-finder{margin-top:30px;background:#FFFDF3;border:3px solid #111;border-radius:22px;padding:22px;box-shadow:6px 6px 0 rgba(0,0,0,.12)}
      .resource-finder h2{margin-bottom:6px}.resource-finder p{margin-top:0}
      .resource-controls{display:grid;grid-template-columns:2fr 1fr 1.3fr;gap:12px;margin:18px 0 12px}
      .resource-controls label{display:grid;gap:6px;font-weight:800}
      .resource-controls input,.resource-controls select{width:100%;min-height:48px;border:2px solid #111;border-radius:12px;padding:10px 12px;background:#fff;font:inherit;color:#111}
      .county-shortcuts,.finder-actions,.gateway-actions{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 16px}
      .county-shortcuts button,.finder-actions button{border:2px solid #111;background:#fff;border-radius:999px;padding:8px 11px;font-weight:800;cursor:pointer}
      .finder-actions button{background:#111;color:#fff}
      .resource-result-count{font-weight:900;margin:8px 0 12px}
      .resource-results{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
      .resource-result-card{border:3px solid #111;border-radius:18px;background:#fff;padding:18px;box-shadow:4px 4px 0 rgba(0,0,0,.10)}
      .resource-result-card h3{margin:3px 0 7px;font-size:1.25rem}
      .resource-result-top{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}
      .resource-category{color:#D23B67;font-size:.78rem;font-weight:900;text-transform:uppercase}
      .resource-verified{font-size:.74rem;color:#645c56;white-space:nowrap}
      .resource-helps{margin:10px 0 12px}.resource-meta{display:grid;gap:6px;font-size:.9rem}
      .resource-chips{display:flex;flex-wrap:wrap;gap:6px;margin:13px 0}
      .resource-chip{border:2px solid #111;border-radius:999px;padding:3px 7px;font-size:.72rem;font-weight:900;background:#FFF8D8}
      .resource-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
      .resource-action{display:inline-block;border:2px solid #111;border-radius:10px;padding:8px 10px;background:#111;color:#fff;text-decoration:none;font-weight:900;font-size:.86rem}
      .resource-action.secondary{background:#fff;color:#111}.resource-action.call{background:#4E8F3A}
      .resource-empty{grid-column:1/-1;border:2px dashed #111;border-radius:14px;padding:18px;background:#fff}
      .resource-gateway{margin:18px 0 0;padding:16px;border:2px solid #111;border-radius:16px;background:#FFF8D8}
      .resource-gateway h3{margin:0 0 5px}
      .scope-note{cursor:pointer}
      @media(max-width:760px){.resource-controls{grid-template-columns:1fr}.resource-results{grid-template-columns:1fr}.resource-result-top{display:block}.resource-verified{margin-top:5px}}
    `;
    document.head.appendChild(el);
  };

  const render = () => {
    let results = (DATA.resources || []).filter(matches);

    if (state.category === "events") {
      results.sort((a,b) => {
        const da = a.eventDate || "9999-99-99";
        const db = b.eventDate || "9999-99-99";
        return da.localeCompare(db) || a.name.localeCompare(b.name);
      });
    } else {
      results.sort((a,b) => a.name.localeCompare(b.name));
    }

    const holder = document.getElementById("resource-results");
    const count = document.getElementById("resource-count");
    if (!holder || !count) return;

    count.textContent = `${results.length} resource${results.length === 1 ? "" : "s"} found`;
    holder.innerHTML = results.length ? results.map(card).join("") : `
      <div class="resource-empty">
        <strong>No matching resources found.</strong>
        <p>Try a broader word, switch the county, or use the 211 links below. A missing result does not mean the service does not exist.</p>
      </div>`;
  };

  const reset = () => {
    state.query = "";
    state.county = "all";
    state.category = "all";
    document.getElementById("resource-search").value = "";
    document.getElementById("resource-county").value = "all";
    document.getElementById("resource-category").value = "all";
    render();
  };

  const chooseCategory = (id) => {
    state.query = "";
    state.category = id;
    document.getElementById("resource-search").value = "";
    document.getElementById("resource-category").value = id;
    render();
    document.getElementById("resource-finder").scrollIntoView({behavior:"smooth"});
  };

  const buildUI = () => {
    addEventsCard();
    style();

    const mount = document.createElement("section");
    mount.id = "resource-finder";
    mount.className = "resource-finder";
    mount.innerHTML = `
      <div class="status">RESOURCE FINDER</div>
      <h2>Find a local resource</h2>
      <p>Search Jackson and Josephine County resources by need, place, program or organization.</p>
      <div class="resource-controls">
        <label><span>Search</span><input id="resource-search" type="search" placeholder="Try: rent, child therapist, GED, food, license..." /></label>
        <label><span>County</span><select id="resource-county">
          <option value="all">Both counties</option><option value="Jackson">Jackson County</option><option value="Josephine">Josephine County</option>
        </select></label>
        <label><span>Category</span><select id="resource-category">
          <option value="all">All categories</option>
          ${DATA.categories.map(c => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.name)}</option>`).join("")}
        </select></label>
      </div>
      <div class="county-shortcuts">
        <button type="button" data-county="Jackson">Jackson County</button>
        <button type="button" data-county="Josephine">Josephine County</button>
        <button type="button" data-county="all">Both counties</button>
      </div>
      <div class="finder-actions"><button type="button" id="resource-reset">Start over</button></div>
      <div class="resource-result-count" id="resource-count"></div>
      <div class="resource-results" id="resource-results"></div>
      <div class="resource-gateway">
        <h3>Can't find it here? Use 211.</h3>
        <p>211info maintains Oregon's larger statewide resource directory. Listings and eligibility can change, so confirm details with the provider.</p>
        <div class="gateway-actions">
          <a class="resource-action" href="https://www.211info.org/" target="_blank" rel="noopener">Search 211info ↗</a>
          <a class="resource-action call" href="tel:211">Call 211</a>
          <a class="resource-action secondary" href="sms:898211">Text ZIP to 898211</a>
        </div>
      </div>
    `;

    const rules = document.querySelector(".rules");
    if (rules) rules.parentNode.insertBefore(mount, rules);
    else document.querySelector("main")?.appendChild(mount);

    document.getElementById("resource-search").addEventListener("input", e => { state.query = e.target.value; render(); });
    document.getElementById("resource-county").addEventListener("change", e => { state.county = e.target.value; render(); });
    document.getElementById("resource-category").addEventListener("change", e => { state.category = e.target.value; state.query=""; document.getElementById("resource-search").value=""; render(); });
    document.getElementById("resource-reset").addEventListener("click", reset);

    document.querySelectorAll(".county-shortcuts button").forEach(btn => btn.addEventListener("click", () => {
      state.county = btn.dataset.county;
      document.getElementById("resource-county").value = state.county;
      render();
    }));

    document.querySelectorAll(".toc .card").forEach(el => el.addEventListener("click", e => {
      e.preventDefault();
      chooseCategory(el.id);
    }));

    document.querySelectorAll(".quick-card").forEach(el => el.addEventListener("click", e => {
      const href = el.getAttribute("href") || "";
      if (!href.startsWith("#")) return;
      const id = href.slice(1);
      if (!DATA.categories.some(c => c.id === id)) return;
      e.preventDefault();
      chooseCategory(id);
    }));

    const scope = document.querySelector(".scope-note");
    if (scope) {
      scope.setAttribute("role","button");
      scope.setAttribute("tabindex","0");
      const go = () => {
        state.county = "all";
        document.getElementById("resource-county").value = "all";
        render();
        document.getElementById("resource-finder").scrollIntoView({behavior:"smooth"});
      };
      scope.addEventListener("click", go);
      scope.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") go(); });
    }

    render();
  };

  const start = async () => {
    for (const [src] of files) await loadScript(src);
    collectData();
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildUI);
    else buildUI();
  };

  start();
})();
