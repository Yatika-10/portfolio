/*
  Routing + rendering. Content lives in content.js — this file never needs to
  change when you update copy.

  URL scheme (shareable):
    #/                      -> Overview
    #/flagship              -> Flagship work
    #/impact                -> Business impact
    #/campaigns             -> All campaigns
    #/career                -> Career
    #/<tab>/<campaign-id>   -> same tab, with that campaign's case open
    #/<campaign-id>         -> shorthand, opens the case over Overview
*/
(function () {
  "use strict";

  var DATA = window.PORTFOLIO_CONTENT;

  var TABS = [
    { slug: "", label: "Overview" },
    { slug: "flagship", label: "Flagship work" },
    { slug: "impact", label: "Business impact" },
    { slug: "campaigns", label: "All campaigns" },
    { slug: "career", label: "Career" }
  ];

  var state = {
    tab: "",
    caseId: null,
    role: "All",
    medium: "All",
    view: "cards"
  };

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function hrefFor(tabSlug, caseId) {
    return "#/" + tabSlug + (caseId ? "/" + caseId : "");
  }

  function campaignById(id) {
    return DATA.campaigns.find(function (c) { return c.id === id; });
  }

  function filteredCampaigns() {
    return DATA.campaigns
      .filter(function (c) {
        var roleOk = state.role === "All" || c.roles.indexOf(state.role) !== -1;
        var mediumOk = state.medium === "All" || c.mediums.indexOf(state.medium) !== -1;
        return roleOk && mediumOk;
      })
      .slice()
      .sort(function (a, b) { return b.period.localeCompare(a.period); });
  }

  // ---------- routing ----------

  function parseHash() {
    var raw = (location.hash || "").replace(/^#\/?/, "");
    var parts = raw.split("/").filter(Boolean);
    var tabSlugs = TABS.map(function (t) { return t.slug; });

    var tab = "", caseId = null;

    if (parts.length === 0) {
      tab = "";
    } else if (tabSlugs.indexOf(parts[0]) !== -1) {
      tab = parts[0];
      if (parts[1]) caseId = parts[1];
    } else if (campaignById(parts[0])) {
      tab = "";
      caseId = parts[0];
    } else {
      tab = "";
    }

    if (caseId && !campaignById(caseId)) caseId = null;
    return { tab: tab, caseId: caseId };
  }

  function onRoute() {
    var parsed = parseHash();
    state.tab = parsed.tab;
    state.caseId = parsed.caseId;
    render();
    window.scrollTo(0, state.caseId ? window.scrollY : 0);
  }

  function closeModal() {
    location.hash = hrefFor(state.tab);
  }

  // ---------- section renderers ----------

  var TINTS = ["tint-pink", "tint-blue", "tint-yellow"];

  function renderOverview() {
    var highlights = (DATA.highlights || []).map(function (h, i) {
      return '<div class="stat-card ' + TINTS[i % TINTS.length] + '"><div class="stat-card__value">' + esc(h.stat) +
        '</div><div class="stat-card__label">' + esc(h.label) + "</div></div>";
    }).join("");

    var principles = (DATA.principles || []).map(function (p, i) {
      return '<div class="principle-card ' + TINTS[i % TINTS.length] + '"><h3>' + esc(p.heading) + "</h3><p>" + esc(p.body) + "</p></div>";
    }).join("");

    var bio = (DATA.profile.bio || []).map(function (line) {
      return '<p class="hero__bio-line">' + esc(line) + "</p>";
    }).join("");

    var c = DATA.contact;
    var contactButtons = (
      (c.email ? '<a class="btn btn-ghost" href="mailto:' + esc(c.email) + '">Email</a>' : "") +
      (c.linkedin ? '<a class="btn btn-ghost" href="' + esc(c.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>' : "") +
      (c.instagram ? '<a class="btn btn-ghost" href="' + esc(c.instagram) + '" target="_blank" rel="noopener">Instagram</a>' : "")
    );

    return (
      '<section class="hero">' +
        '<div class="hero__avatar" aria-hidden="true">' + esc(DATA.profile.initials) + "</div>" +
        "<h1>" + esc(DATA.profile.name) + "</h1>" +
        '<p class="hero__title">' + esc(DATA.profile.title) + (DATA.profile.location ? " &middot; " + esc(DATA.profile.location) : "") + "</p>" +
        '<p class="hero__tagline">' + esc(DATA.profile.tagline) + "</p>" +
        (bio ? '<div class="hero__bio">' + bio + "</div>" : "") +
        (contactButtons ? '<div class="hero__actions">' + contactButtons + "</div>" : "") +
        '<div class="hero__actions">' +
          '<a class="btn btn-primary" href="' + hrefFor("flagship") + '">See flagship work</a>' +
        "</div>" +
      "</section>" +
      (highlights ? '<section class="stat-grid">' + highlights + "</section>" : "") +
      (principles ? '<section class="principle-grid"><h2 class="section-heading">How I work</h2><div class="principle-grid__inner">' + principles + "</div></section>" : "")
    );
  }

  function renderFlagship() {
    var picks = (DATA.flagshipPicks || []).map(function (pick, i) {
      var c = campaignById(pick.campaignId);
      if (!c) return "";

      var media = (pick.coverImages || []).length
        ? '<div class="flagship-card__media tint-' + ["pink", "blue", "yellow"][i % 3] + '">' +
            pick.coverImages.map(function (src) { return '<img src="' + esc(src) + '" alt="">'; }).join("") +
          "</div>"
        : '<div class="flagship-card__media flagship-card__media--empty tint-' + ["pink", "blue", "yellow"][i % 3] + '"></div>';

      var stats = (pick.metrics || []).map(function (m) {
        return '<div class="stat-chip"><div class="stat-chip__value">' + esc(m.stat) + '</div><div class="stat-chip__label">' + esc(m.label) + "</div></div>";
      }).join("");

      var metaParts = [c.company];
      if (c.context) metaParts.push(c.context);
      metaParts.push(c.displayDate);

      var secondaryBtn = (pick.secondaryLink && pick.secondaryLink.url)
        ? '<a class="btn btn-ghost" href="' + esc(pick.secondaryLink.url) + '" target="_blank" rel="noopener">' + esc(pick.secondaryLink.label || "Read more") + "</a>"
        : "";

      return (
        '<article class="flagship-card">' +
          media +
          '<div class="flagship-card__body">' +
            '<div class="flagship-card__meta">' + metaParts.map(esc).join(" &middot; ") + "</div>" +
            "<h3>" + esc(c.title) + "</h3>" +
            '<p class="flagship-card__hook">' + esc(pick.pitch) + "</p>" +
            '<div class="flagship-card__columns">' +
              '<div><h4>Problem</h4><p>' + esc(c.challenge) + "</p></div>" +
              '<div><h4>Idea</h4><p>' + esc(c.approach) + "</p></div>" +
            "</div>" +
            (stats ? '<div class="stat-chip-row">' + stats + "</div>" : "") +
            '<div class="flagship-card__actions">' +
              '<a class="btn btn-primary" href="' + hrefFor("flagship", c.id) + '">See the full case &rarr;</a>' +
              secondaryBtn +
            "</div>" +
          "</div>" +
        "</article>"
      );
    }).join("");

    return (
      '<section class="section-intro"><h1>Flagship work</h1><p>The campaigns I\'d walk you through first, each broken down by problem, idea and proof.</p></section>' +
      '<section class="flagship-list">' + (picks || '<p class="empty-note">Add entries to flagshipPicks in content.js to populate this tab.</p>') + "</section>"
    );
  }

  function renderImpact() {
    var rows = (DATA.impactMetrics || []).map(function (m) {
      var pct = Math.max(0, Math.min(100, (m.afterValue / m.maxValue) * 100));
      var beforePct = Math.max(0, Math.min(100, (m.beforeValue / m.maxValue) * 100));
      return (
        '<div class="impact-row">' +
          '<div class="impact-row__head"><strong>' + esc(m.company) + "</strong><span>" + esc(m.metric) + "</span></div>" +
          '<div class="impact-bar"><div class="impact-bar__before" style="width:' + beforePct + '%"></div><div class="impact-bar__after" style="width:' + pct + '%"></div></div>' +
          '<div class="impact-row__values"><span>' + esc(m.before) + " &rarr; " + esc(m.after) + "</span></div>" +
          (m.note ? '<p class="impact-row__note">' + esc(m.note) + "</p>" : "") +
        "</div>"
      );
    }).join("");

    return (
      '<section class="section-intro"><h1>Business impact</h1><p>Before/after numbers from campaigns I led or drove.</p></section>' +
      '<section class="impact-list">' + (rows || '<p class="empty-note">Add entries to impactMetrics in content.js to populate this tab.</p>') + "</section>"
    );
  }

  function renderFilterChips(groupLabel, dataAttr, options, activeValue) {
    var all = ["All"].concat(options);
    var chips = all.map(function (opt) {
      var active = opt === activeValue;
      return '<button type="button" class="chip' + (active ? " is-active" : "") + '" data-' + dataAttr + '="' + esc(opt) + '" aria-pressed="' + active + '">' + esc(opt) + "</button>";
    }).join("");
    return '<div class="filter-group"><span class="filter-group__label">' + esc(groupLabel) + "</span><div class=\"chip-row\">" + chips + "</div></div>";
  }

  function renderCampaignsTab() {
    var list = filteredCampaigns();
    var cardsHtml = list.map(function (c) {
      return (
        '<article class="campaign-card">' +
          (c.isVideo ? '<span class="badge">Video</span>' : "") +
          '<div class="campaign-card__meta">' + esc(c.company) + " &middot; " + esc(c.displayDate) + "</div>" +
          "<h3>" + esc(c.title) + "</h3>" +
          '<p class="campaign-card__hook">' + esc(c.summary) + "</p>" +
          '<div class="campaign-card__stat"><strong>' + esc(c.heroStat.stat) + "</strong> " + esc(c.heroStat.label) + "</div>" +
          '<div class="tag-row">' + c.roles.concat(c.mediums).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
          '<a class="btn btn-ghost" href="' + hrefFor("campaigns", c.id) + '">View case</a>' +
        "</article>"
      );
    }).join("");

    var tableRows = list.map(function (c) {
      return (
        "<tr>" +
          '<td data-label="Campaign"><a href="' + hrefFor("campaigns", c.id) + '">' + esc(c.title) + "</a></td>" +
          '<td data-label="Company">' + esc(c.company) + "</td>" +
          '<td data-label="Date">' + esc(c.displayDate) + "</td>" +
          '<td data-label="Role">' + esc(c.roles.join(", ")) + "</td>" +
          '<td data-label="Medium">' + esc(c.mediums.join(", ")) + "</td>" +
          '<td data-label="Result">' + esc(c.heroStat.stat) + " " + esc(c.heroStat.label) + "</td>" +
        "</tr>"
      );
    }).join("");

    var empty = '<p class="empty-note">No campaigns match these filters.</p>';

    return (
      '<section class="section-intro"><h1>All campaigns</h1><p>Filter by role or medium, and switch between cards and a table.</p></section>' +
      '<section class="filters">' +
        renderFilterChips("Role", "role", DATA.filterOptions.roles, state.role) +
        renderFilterChips("Medium", "medium", DATA.filterOptions.mediums, state.medium) +
        '<div class="filter-group view-toggle">' +
          '<span class="filter-group__label">View</span>' +
          '<div class="chip-row">' +
            '<button type="button" class="chip' + (state.view === "cards" ? " is-active" : "") + '" data-view="cards" aria-pressed="' + (state.view === "cards") + '">Cards</button>' +
            '<button type="button" class="chip' + (state.view === "table" ? " is-active" : "") + '" data-view="table" aria-pressed="' + (state.view === "table") + '">Table</button>' +
          "</div>" +
        "</div>" +
      "</section>" +
      (list.length === 0 ? empty :
        state.view === "table"
          ? '<section class="table-wrap"><table class="campaign-table"><thead><tr><th>Campaign</th><th>Company</th><th>Date</th><th>Role</th><th>Medium</th><th>Result</th></tr></thead><tbody>' + tableRows + "</tbody></table></section>"
          : '<section class="campaign-grid">' + cardsHtml + "</section>")
    );
  }

  function renderCareer() {
    var entries = (DATA.career || []).map(function (e) {
      return (
        '<div class="career-row">' +
          '<div class="career-row__period">' + esc(e.period) + "</div>" +
          '<div class="career-row__body"><h3>' + esc(e.role) + " &middot; " + esc(e.company) + "</h3><p>" + esc(e.summary) + "</p></div>" +
        "</div>"
      );
    }).join("");

    var awards = (DATA.awards || []).map(function (a) {
      var inner = esc(a.title) + (a.detail ? " &mdash; " + esc(a.detail) : "");
      return '<li>' + (a.url ? '<a href="' + esc(a.url) + '" target="_blank" rel="noopener">' + inner + "</a>" : inner) + "</li>";
    }).join("");

    return (
      '<section class="section-intro"><h1>Career</h1><p>Where I\'ve worked and what I was responsible for.</p></section>' +
      '<section class="career-list">' + entries + "</section>" +
      (awards ? '<section class="awards"><h2 class="section-heading">Awards & recognition</h2><ul>' + awards + "</ul></section>" : "")
    );
  }

  var ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="8.2" cy="8.2" r="1.3"/><rect x="7.1" y="11" width="2.2" height="7" /><path d="M12.3 11h2.1v1.1c.5-.8 1.3-1.3 2.4-1.3 2 0 2.7 1.3 2.7 3.3V18h-2.2v-3.5c0-1-.4-1.6-1.2-1.6-.9 0-1.5.6-1.5 1.7V18h-2.3z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="1.1"/></svg>'
  };

  function renderContact() {
    var c = DATA.contact;
    var icons = (
      (c.linkedin ? '<a class="icon-btn" href="' + esc(c.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn profile">' + ICONS.linkedin + "</a>" : "") +
      (c.instagram ? '<a class="icon-btn" href="' + esc(c.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram profile">' + ICONS.instagram + "</a>" : "")
    );
    return (
      '<h2>Let\'s talk</h2>' +
      '<div class="contact-links">' +
        (c.email ? '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>" : "") +
        (c.phone ? '<a href="tel:' + esc(c.phone.replace(/\s+/g, "")) + '">' + esc(c.phone) + "</a>" : "") +
        (c.resumeUrl ? '<a href="' + esc(c.resumeUrl) + '" target="_blank" rel="noopener">R&eacute;sum&eacute;</a>' : "") +
      "</div>" +
      (icons ? '<div class="icon-row">' + icons + "</div>" : "") +
      '<p class="footer-note">&copy; <span id="year"></span> ' + esc(DATA.profile.name) + "</p>"
    );
  }

  function renderModal(c) {
    var results = (c.results || []).map(function (r) {
      return '<div class="metric"><div class="metric__value">' + esc(r.stat) + '</div><div class="metric__label">' + esc(r.label) + "</div></div>";
    }).join("");

    var gallery = (c.gallery || []).length
      ? '<div class="modal-gallery">' + c.gallery.map(function (src) { return '<img src="' + esc(src) + '" alt="" loading="lazy">'; }).join("") + "</div>"
      : "";

    var videoLinks = (c.videoLinks || []).map(function (v) {
      return '<li><a href="' + esc(v.url) + '" target="_blank" rel="noopener">' + esc(v.title || v.label) + "</a></li>";
    }).join("");

    var pressLinks = (c.pressLinks || []).map(function (p) {
      return '<li><a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title || p.label) + "</a></li>";
    }).join("");

    var preAmp = "";
    if (c.preAmp) {
      var paParagraphs = (c.preAmp.paragraphs || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
      var paMetrics = (c.preAmp.metrics || []).map(function (m) {
        return '<div class="metric"><div class="metric__value">' + esc(m.stat) + '</div><div class="metric__label">' + esc(m.label) + "</div></div>";
      }).join("");
      var paGallery = (c.preAmp.gallery || []).length
        ? '<div class="modal-gallery">' + c.preAmp.gallery.map(function (src) { return '<img src="' + esc(src) + '" alt="" loading="lazy">'; }).join("") + "</div>"
        : "";
      preAmp = (
        '<div class="modal-preamp">' +
          "<h4>" + esc(c.preAmp.heading) + "</h4>" +
          paParagraphs +
          (paMetrics ? '<div class="metric-row">' + paMetrics + "</div>" : "") +
          paGallery +
        "</div>"
      );
    }

    return (
      '<div class="modal-overlay" data-modal-overlay>' +
        '<div class="modal-panel" role="dialog" aria-modal="true" aria-label="' + esc(c.title) + '">' +
          '<button type="button" class="modal-close" data-modal-close aria-label="Close">&times;</button>' +
          (c.coverImage ? '<img class="modal-cover" src="' + esc(c.coverImage) + '" alt="">' : "") +
          '<div class="modal-meta">' + esc(c.company) + " &middot; " + esc(c.displayDate) + " &middot; " + esc(c.mediums.join(", ")) + "</div>" +
          "<h2>" + esc(c.title) + "</h2>" +
          '<p class="modal-hook">' + esc(c.summary) + "</p>" +
          '<div class="modal-columns">' +
            '<div><h4>Challenge</h4><p>' + esc(c.challenge) + "</p></div>" +
            '<div><h4>Approach</h4><p>' + esc(c.approach) + "</p></div>" +
          "</div>" +
          (results ? '<div class="metric-row">' + results + "</div>" : "") +
          gallery +
          preAmp +
          (videoLinks ? '<div class="modal-links"><h4>Watch</h4><ul>' + videoLinks + "</ul></div>" : "") +
          (pressLinks ? '<div class="modal-links"><h4>Press</h4><ul>' + pressLinks + "</ul></div>" : "") +
          (c.ctaUrl ? '<a class="btn btn-primary" href="' + esc(c.ctaUrl) + '" target="_blank" rel="noopener">' + esc(c.ctaLabel || "View case") + "</a>" : "") +
        "</div>" +
      "</div>"
    );
  }

  // ---------- top-level render ----------

  function renderNav() {
    var row = document.getElementById("tab-row");
    row.innerHTML = TABS.map(function (t) {
      var active = state.tab === t.slug;
      return '<a class="tab-chip' + (active ? " is-active" : "") + '" href="' + hrefFor(t.slug) + '"' + (active ? ' aria-current="page"' : "") + ">" + esc(t.label) + "</a>";
    }).join("");
  }

  function updateTitle() {
    var tabMeta = TABS.find(function (t) { return t.slug === state.tab; });
    var bits = [DATA.profile.name];
    if (tabMeta && tabMeta.label !== "Overview") bits.unshift(tabMeta.label);
    if (state.caseId) {
      var c = campaignById(state.caseId);
      if (c) bits.unshift(c.title);
    }
    document.title = bits.join(" – ");
  }

  function render() {
    renderNav();
    updateTitle();

    var main = document.getElementById("main");
    if (state.tab === "flagship") main.innerHTML = renderFlagship();
    else if (state.tab === "impact") main.innerHTML = renderImpact();
    else if (state.tab === "campaigns") main.innerHTML = renderCampaignsTab();
    else if (state.tab === "career") main.innerHTML = renderCareer();
    else main.innerHTML = renderOverview();

    document.getElementById("contact").innerHTML = renderContact();
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    var modalRoot = document.getElementById("modal-root");
    var openCampaign = state.caseId ? campaignById(state.caseId) : null;
    modalRoot.innerHTML = openCampaign ? renderModal(openCampaign) : "";
    document.body.classList.toggle("modal-open", !!openCampaign);
    if (openCampaign) {
      var closeBtn = modalRoot.querySelector(".modal-close");
      if (closeBtn) closeBtn.focus();
    }
  }

  // ---------- event wiring (delegated, survives re-renders) ----------

  document.addEventListener("click", function (e) {
    var roleBtn = e.target.closest("[data-role]");
    if (roleBtn) { state.role = roleBtn.getAttribute("data-role"); render(); return; }

    var mediumBtn = e.target.closest("[data-medium]");
    if (mediumBtn) { state.medium = mediumBtn.getAttribute("data-medium"); render(); return; }

    var viewBtn = e.target.closest("[data-view]");
    if (viewBtn) { state.view = viewBtn.getAttribute("data-view"); render(); return; }

    if (e.target.matches("[data-modal-overlay]")) { closeModal(); return; }

    var closeBtn = e.target.closest("[data-modal-close]");
    if (closeBtn) { closeModal(); return; }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && state.caseId) closeModal();
  });

  window.addEventListener("hashchange", onRoute);
  window.addEventListener("DOMContentLoaded", onRoute);
})();
