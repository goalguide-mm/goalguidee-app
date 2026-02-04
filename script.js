// ================== CONFIG ==================
const API_BASE = "https://goalguide-api-1.onrender.com";

// ================== DOM ==================
const fixturesGrid  = document.getElementById("fixtures");
const liveGrid      = document.getElementById("live");
const todayGrid     = document.getElementById("today");
const tomorrowGrid  = document.getElementById("tomorrow");
const yesterdayGrid = document.getElementById("yesterday");
const dateText      = document.getElementById("dateText");

// ================== DATE ==================
let dayOffset = 0;

function updateDateUI(){
  if(dayOffset === 0) dateText.textContent = "Today";
  else if(dayOffset === -1) dateText.textContent = "Yesterday";
  else if(dayOffset === 1) dateText.textContent = "Tomorrow";
  else{
    const d = new Date();
    d.setDate(d.getDate() + dayOffset);
    dateText.textContent = d.toDateString();
  }
}

function changeDate(step){
  dayOffset += step;
  updateDateUI();
  loadFixtures();
}

// ================== RENDER CARD ==================
function matchCard(match, type){
  if(type === "live"){
    return `
      <div class="card">
        <div class="league">🔴 LIVE • ${match.minute}'</div>
        <div class="match">
          <div>${match.home}</div>
          <strong>${match.score || "VS"}</strong>
          <div>${match.away}</div>
        </div>
      </div>
    `;
  }

  if(type === "result"){
    return `
      <div class="card">
        <div class="league">FULL TIME</div>
        <div class="match">
          <div>${match.home}</div>
          <strong>${match.score}</strong>
          <div>${match.away}</div>
        </div>
      </div>
    `;
  }

  // fixtures
  return `
    <div class="card">
      <div class="league">Premier League</div>
      <div class="match">
        <div>${match.home}</div>
        <strong>VS</strong>
        <div>${match.away}</div>
      </div>
      <div class="date">${dateText.textContent}</div>
    </div>
  `;
}

// ================== LOAD LIVE ==================
async function loadLive(){
  liveGrid.innerHTML = "Loading...";
  try{
    const res = await fetch(`${API_BASE}/api/live`);
    const data = await res.json();

    if(data.length === 0){
      liveGrid.innerHTML = "<p>No live matches</p>";
      return;
    }

    liveGrid.innerHTML = data.map(m => matchCard(m,"live")).join("");
  }catch(e){
    liveGrid.innerHTML = "Failed to load live";
  }
}

// ================== LOAD FIXTURES ==================
async function loadFixtures(){
  fixturesGrid.innerHTML = "Loading...";
  todayGrid.innerHTML = "";
  tomorrowGrid.innerHTML = "";
  yesterdayGrid.innerHTML = "";

  try{
    const res = await fetch(`${API_BASE}/api/fixtures?day=${dayOffset}`);
    const data = await res.json();

    if(data.length === 0){
      fixturesGrid.innerHTML = "<p>No fixtures</p>";
      return;
    }

    fixturesGrid.innerHTML = data.map(m => matchCard(m,"fixture")).join("");
  }catch(e){
    fixturesGrid.innerHTML = "Failed to load fixtures";
  }
}

// ================== LOAD RESULTS ==================
async function loadResults(){
  yesterdayGrid.innerHTML = "Loading...";
  try{
    const res = await fetch(`${API_BASE}/api/results`);
    const data = await res.json();

    if(data.length === 0){
      yesterdayGrid.innerHTML = "<p>No results</p>";
      return;
    }

    yesterdayGrid.innerHTML = data.map(m => matchCard(m,"result")).join("");
  }catch(e){
    yesterdayGrid.innerHTML = "Failed to load results";
  }
}

// ================== INIT ==================
updateDateUI();
loadLive();
loadFixtures();
loadResults();
