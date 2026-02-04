// =====================
// API BASE
// =====================
const API_BASE = "https://goalguide-api-1.onrender.com";

// =====================
// DOM Elements
// =====================
const fixturesGrid = document.getElementById("fixtures");
const liveGrid = document.getElementById("live");
const todayGrid = document.getElementById("today");
const tomorrowGrid = document.getElementById("tomorrow");
const yesterdayGrid = document.getElementById("yesterday");
const dateText = document.getElementById("dateText");

// =====================
// FETCH LIVE MATCHES
// =====================
async function loadLive() {
  liveGrid.innerHTML = "Loading...";

  try {
    const res = await fetch(`${API_BASE}/api/live`);
    const data = await res.json();

    if (!data.length) {
      liveGrid.innerHTML = "No live matches";
      return;
    }

    liveGrid.innerHTML = "";

    data.forEach(match => {
      liveGrid.innerHTML += `
        <div class="card live">
          <h3>${match.home} vs ${match.away}</h3>
          <p>⏱ ${match.minute}'</p>
          <p>⚽ ${match.score}</p>
        </div>
      `;
    });

  } catch (err) {
    liveGrid.innerHTML = "Error loading live matches";
    console.error(err);
  }
}

// =====================
// DATE NAV (Optional)
// =====================
let currentDate = new Date();

function updateDateText() {
  dateText.textContent = currentDate.toDateString();
}

function changeDate(step) {
  currentDate.setDate(currentDate.getDate() + step);
  updateDateText();
}

// =====================
// INIT
// =====================
updateDateText();
loadLive();
