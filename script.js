// =====================
// API BASE
// =====================
const API_BASE = "https://goalguide-api-1.onrender.com";

// =====================
// DOM Elements
// =====================
const liveGrid = document.getElementById("live");
const todayGrid = document.getElementById("today");
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
// FETCH TODAY FIXTURES ✅ (အရေးကြီး)
// =====================
async function loadToday() {
  todayGrid.innerHTML = "Loading...";

  try {
    const res = await fetch(`${API_BASE}/api/fixtures/today`);
    const data = await res.json();

    todayGrid.innerHTML = "";

    data.forEach(match => {
      // DEBUG (မဖျက်ပါနဲ့)
      console.log("MATCH 👉", match);

      todayGrid.innerHTML += `
        <a href="match.html?id=${match.id}" class="card">
          <h3>${match.home} vs ${match.away}</h3>
          <p>${match.league || "Unknown League"}</p>
        </a>
      `;
    });

  } catch (err) {
    todayGrid.innerHTML = "Error loading fixtures";
    console.error(err);
  }
}

// =====================
// DATE
// =====================
function updateDateText() {
  dateText.textContent = new Date().toDateString();
}

// =====================
// INIT
// =====================
updateDateText();
loadLive();
loadToday();
