const byId = (id) => document.getElementById(id);

function renderVertebrae() {
  const group = document.getElementById("vertebrae");
  if (!group) return;
  const points = [
    [206, 82], [214, 112], [202, 144], [194, 176], [206, 208],
    [197, 240], [190, 272], [199, 304], [188, 336], [198, 368],
    [205, 402], [192, 436]
  ];
  group.innerHTML = points
    .map(([x, y], index) => {
      const width = 58 - Math.min(index * 1.7, 18);
      return `<rect class="vertebra" x="${x - width / 2}" y="${y - 11}" width="${width}" height="22" rx="9" />`;
    })
    .join("");
}

function renderFacts() {
  const grid = byId("factGrid");
  grid.innerHTML = storyData.facts
    .map(
      (fact) => `
        <article class="fact-card">
          <strong>${fact.value}</strong>
          <p>${fact.label}</p>
          <span>${fact.source}</span>
        </article>
      `
    )
    .join("");
}

function renderAgeChart() {
  const container = byId("ageChart");
  const minAge = 10;
  const maxAge = 50;
  const pct = (age) => ((age - minAge) / (maxAge - minAge)) * 100;
  const start = pct(17);
  const end = 100 - pct(45);
  const markers = storyData.onsetMarkers
    .map(
      (marker) => `
        <div class="age-marker ${marker.type}" style="--x: ${pct(marker.age)}%">
          <small>${marker.label}</small>
        </div>
      `
    )
    .join("");
  container.innerHTML = `
    <div class="age-track">
      <div class="age-range" style="--start: ${start}%; --end: ${end}%"></div>
      ${markers}
    </div>
    <div class="age-axis">
      <span>Age 10</span>
      <span>Age 20</span>
      <span>Age 30</span>
      <span>Age 40</span>
      <span>Age 50</span>
    </div>
  `;
}

function renderJourney() {
  const journey = byId("journey");
  journey.innerHTML = storyData.diagnosisJourney
    .map(
      (item) => `
        <article class="journey-card">
          <h3>${item.step}</h3>
          <p><strong>Common barrier</strong>${item.commonBarrier}</p>
          <p><strong>What awareness can change</strong>${item.systemNeed}</p>
        </article>
      `
    )
    .join("");
}

function setSymptom(areaId) {
  const item = storyData.symptomAreas.find((area) => area.id === areaId) || storyData.symptomAreas[0];
  document.querySelectorAll(".symptom-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.area === item.id);
  });
  document.querySelectorAll(".hotspot").forEach((hotspot) => {
    hotspot.classList.toggle("active", hotspot.dataset.area === item.id);
  });
  const intensity = Array.from({ length: 5 })
    .map((_, index) => `<span class="${index < item.intensity ? "on" : ""}"></span>`)
    .join("");
  byId("symptomDetail").innerHTML = `
    <h3>${item.label}</h3>
    <p>${item.summary}</p>
    <div class="intensity" aria-label="Relative visual emphasis">${intensity}</div>
    <p class="source-note">Source note: ${item.source}. Relative emphasis is used for storytelling, not clinical scoring.</p>
  `;
}

function renderSymptoms() {
  const buttons = byId("symptomButtons");
  buttons.innerHTML = storyData.symptomAreas
    .map(
      (area, index) => `
        <button class="symptom-button ${index === 0 ? "active" : ""}" type="button" data-area="${area.id}">
          ${area.label}
        </button>
      `
    )
    .join("");
  buttons.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-area]");
    if (button) setSymptom(button.dataset.area);
  });
  document.querySelectorAll(".hotspot").forEach((hotspot) => {
    hotspot.addEventListener("click", () => setSymptom(hotspot.dataset.area));
  });
  setSymptom("spine");
}

function renderInvisibleBurden() {
  const grid = byId("compareGrid");
  grid.innerHTML = storyData.invisibleBurden
    .map(
      (item) => `
        <article class="compare-card">
          <span>What may be visible</span>
          <h3>${item.visible}</h3>
          <span>What may be hidden</span>
          <p>${item.hidden}</p>
        </article>
      `
    )
    .join("");
}

function renderSources() {
  const list = byId("sourceList");
  list.innerHTML = storyData.sources
    .map(
      (source) => `
        <article class="source-card">
          <h3>${source.name}</h3>
          <p>${source.title}</p>
          <a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a>
        </article>
      `
    )
    .join("");
}

function markActiveSection() {
  const sections = ["diagnosis", "burden", "sources"];
  const links = document.querySelectorAll(".nav-links a");
  const active = sections.find((id) => {
    const rect = byId(id).getBoundingClientRect();
    return rect.top < 160 && rect.bottom > 160;
  });
  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${active}`);
  });
}

renderVertebrae();
renderFacts();
renderAgeChart();
renderJourney();
renderSymptoms();
renderInvisibleBurden();
renderSources();
window.addEventListener("scroll", markActiveSection, { passive: true });
