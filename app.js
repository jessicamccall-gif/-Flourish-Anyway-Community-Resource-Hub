/* Flourish Anyway Community Resource Hub
   app.js
   Makes hub-data.js searchable/filterable and renders detailed resource cards.
*/

(function () {
  const DATA = window.FLOURISH_HUB_DATA;
  if (!DATA || !Array.isArray(DATA.resources)) {
    console.warn("Flourish Hub data not found.");
    return;
  }

  const state = {
    query: "",
    county: "all",
    category: "all"
  };

  const normalize = (value) =>
    String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const matches = (resource) => {
    const q = normalize(state.query);

    const countyMatch =
      state.county === "all" ||
      (resource.counties || []).includes(state.county);

    const categoryMatch =
      state.category === "all" ||
      resource.category === state.category;

    if (!q) return countyMatch && categoryMatch;

    const haystack = normalize([
      resource.name,
      resource.helps,
      resource.address,
      resource.cost,
      ...(resource.audience || []),
      ...(resource.counties || []),
      ...(resource.labels || []),
      ...(resource.keywords || [])
    ].join(" "));

    return countyMatch && categoryMatch && haystack.includes(q);
  };

  const slugToName = (id) => {
    const found = DATA.categories.find((c) => c.id === id);
    return found ? found.name : id;
  };

  const button = (label, href, extraClass = "") => {
    if (!href) return "";
    return `<a class="resource-action ${extraClass}" href="${href}" target="_blank" rel="noopener">${label}</a>`;
  };

  const phoneButton = (phone) => {
    if (!phone) return "";
    const tel = phone.replace(/[^\d+]/g, "");
    return `<a class="resource-action call" href="tel:${tel}">Call ${phone}</a>`;
  };

  const labelChips = (labels = []) =>
    labels.map((label) => `<span class="resource-chip">${label}</span>`).join("");

  const resourceCard = (r) => {
    return `
      <article class="resource-result-card">
        <div class="resource-result-top">
          <div>
            <div class="resource-category">${slugToName(r.category)}</div>
            <h3>${r.name}</h3>
          </div>
          <div class="resource-verified">Checked ${r.lastVerified || DATA.verified || "recently"}</div>
        </div>

        <p class="resource-helps">${r.helps || ""}</p>

        <div class="resource-meta">
          ${r.counties?.length ? `<div><strong>Area:</strong> ${r.counties.join(" + ")}</div>` : ""}
          ${r.audience?.length ? `<div><strong>Who:</strong> ${r.audience.join(", ")}</div>` : ""}
          ${r.cost ? `<div><strong>Cost:</strong> ${r.cost}</div>` : ""}
          ${r.address ? `<div><strong>Location:</strong> ${r.address}</div>` : ""}
        </div>

        ${r.labels?.length ? `<div class="resource-chips">${labelChips(r.labels)}</div>` : ""}

        <div class="resource-actions">
          ${button("Official Website ↗", r.website)}
          ${button("Apply / Register ↗", r.apply, "secondary")}
          ${phoneButton(r.phone)}
        </div>
      </article>
    `;
  };

  const buildUI = () => {
    const mount = document.createElement("section");
    mount.id = "resource-finder";
    mount.className = "resource-finder";
    mount.innerHTML = `
      <div class="resource-finder-head">
        <div>
          <div class="status">RESOURCE FINDER</div>
          <h2>Find a local resource</h2>
          <p>Search Jackson and Josephine County resources by need, place or program.</p>
        </div>
      </div>

      <div class="resource-controls">
        <label>
          <span>Search</span>
          <input id="resource-search" type="search" placeholder="Try: rent, women doctor, GED, food, license..." />
        </label>

        <label>
          <span>County</span>
          <select id="resource-county">
            <option value="all">Both counties</option>
            <option value="Jackson">Jackson County</option>
            <option value="Josephine">Josephine County</option>
          </select>
        </label>

        <label>
          <span>Category</span>
          <select id="resource-category">
            <option value="all">All categories</option>
            ${DATA.categories.map(c => `<option value="${c.id}">${c.name}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="county-shortcuts">
        <button type="button" data-county="Jackson">Jackson County resources</button>
        <button type="button" data-county="Josephine">Josephine County resources</button>
        <button type="button" data-county="all">Show both counties</button>
      </div>

      <div class="resource-result-count" id="resource-count"></div>
      <div class="resource-results" id="resource-results"></div>
    `;

    const rules = document.querySelector(".rules");
    if (rules) {
      rules.parentNode.insertBefore(mount, rules);
    } else {
      document.querySelector("main")?.appendChild(mount);
    }

    const style = document.createElement("style");
    style.textContent = `
      .resource-finder{
        margin-top:30px;
        background:#FFFDF3;
        border:3px solid #111;
        border-radius:22px;
        padding:22px;
        box-shadow:6px 6px 0 rgba(0,0,0,.12);
      }
      .resource-finder h2{margin-bottom:6px}
      .resource-finder p{margin-top:0}
      .resource-controls{
        display:grid;
        grid-template-columns:2fr 1fr 1.3fr;
        gap:12px;
        margin:18px 0 12px;
      }
      .resource-controls label{display:grid;gap:6px;font-weight:800}
      .resource-controls input,
      .resource-controls select{
        width:100%;
        min-height:48px;
        border:2px solid #111;
        border-radius:12px;
        padding:10px 12px;
        background:#fff;
        font:inherit;
        color:#111;
      }
      .county-shortcuts{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        margin-bottom:16px;
      }
      .county-shortcuts button{
        border:2px solid #111;
        background:#fff;
        border-radius:999px;
        padding:8px 11px;
        font-weight:800;
        cursor:pointer;
      }
      .resource-result-count{
        font-weight:900;
        margin:8px 0 12px;
      }
      .resource-results{
        display:grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:14px;
      }
      .resource-result-card{
        border:3px solid #111;
        border-radius:18px;
        background:#fff;
        padding:18px;
        box-shadow:4px 4px 0 rgba(0,0,0,.10);
      }
      .resource-result-card h3{
        margin:3px 0 7px;
        font-size:1.25rem;
      }
      .resource-result-top{
        display:flex;
        justify-content:space-between;
        gap:12px;
        align-items:flex-start;
      }
      .resource-category{
        color:#D23B67;
        font-size:.78rem;
        font-weight:900;
        text-transform:uppercase;
      }
      .resource-verified{
        font-size:.74rem;
        color:#645c56;
        white-space:nowrap;
      }
      .resource-helps{margin:10px 0 12px}
      .resource-meta{
        display:grid;
        gap:6px;
        font-size:.9rem;
      }
      .resource-chips{
        display:flex;
        flex-wrap:wrap;
        gap:6px;
        margin:13px 0;
      }
      .resource-chip{
        border:2px solid #111;
        border-radius:999px;
        padding:3px 7px;
        font-size:.72rem;
        font-weight:900;
        background:#FFF8D8;
      }
      .resource-actions{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        margin-top:14px;
      }
      .resource-action{
        display:inline-block;
        border:2px solid #111;
        border-radius:10px;
        padding:8px 10px;
        background:#111;
        color:#fff;
        text-decoration:none;
        font-weight:900;
        font-size:.86rem;
      }
      .resource-action.secondary{background:#fff;color:#111}
      .resource-action.call{background:#4E8F3A}
      .resource-empty{
        grid-column:1/-1;
        border:2px dashed #111;
        border-radius:14px;
        padding:18px;
        background:#fff;
      }
      @media(max-width:760px){
        .resource-controls{grid-template-columns:1fr}
        .resource-results{grid-template-columns:1fr}
        .resource-result-top{display:block}
        .resource-verified{margin-top:5px}
      }
    `;
    document.head.appendChild(style);

    document.getElementById("resource-search").addEventListener("input", (e) => {
      state.query = e.target.value;
      render();
    });

    document.getElementById("resource-county").addEventListener("change", (e) => {
      state.county = e.target.value;
      render();
    });

    document.getElementById("resource-category").addEventListener("change", (e) => {
      state.category = e.target.value;
      render();
    });

    document.querySelectorAll(".county-shortcuts button").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.county = btn.dataset.county;
        document.getElementById("resource-county").value = state.county;
        render();
        document.getElementById("resource-finder").scrollIntoView({ behavior: "smooth" });
      });
    });

    // Turn homepage category cards into filters for the detailed finder.
    document.querySelectorAll(".toc .card").forEach((card) => {
      const categoryId = card.id;
      if (!categoryId) return;

      card.addEventListener("click", (e) => {
        e.preventDefault();
        state.category = categoryId;
        document.getElementById("resource-category").value = categoryId;
        render();
        document.getElementById("resource-finder").scrollIntoView({ behavior: "smooth" });
      });
    });

    // Make quick-start buttons use the same detailed finder.
    document.querySelectorAll(".quick-card").forEach((card) => {
      const href = card.getAttribute("href") || "";
      if (!href.startsWith("#")) return;

      const categoryId = href.slice(1);
      if (!DATA.categories.some(c => c.id === categoryId)) return;

      card.addEventListener("click", (e) => {
        e.preventDefault();
        state.category = categoryId;
        document.getElementById("resource-category").value = categoryId;
        render();
        document.getElementById("resource-finder").scrollIntoView({ behavior: "smooth" });
      });
    });

    render();
  };

  const render = () => {
    const results = DATA.resources.filter(matches);
    const holder = document.getElementById("resource-results");
    const count = document.getElementById("resource-count");

    if (!holder || !count) return;

    count.textContent = `${results.length} resource${results.length === 1 ? "" : "s"} found`;

    holder.innerHTML = results.length
      ? results.map(resourceCard).join("")
      : `
        <div class="resource-empty">
          <strong>No matching resources yet.</strong>
          <p>Try a broader search or switch the county/category. More local listings can be added to hub-data.js without rebuilding the site.</p>
        </div>
      `;
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildUI);
  } else {
    buildUI();
  }
})();
