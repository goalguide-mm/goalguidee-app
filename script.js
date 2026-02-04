const matches = [
  {
    id: 101,
    home: "Liverpool",
    away: "Man United",
    status: "LIVE",
    minute: 67
  },
  {
    id: 201,
    home: "Arsenal",
    away: "Chelsea",
    score: "2 - 1",
    status: "FT"
  }
];

function render(data) {
  const container = document.getElementById("matches");
  container.innerHTML = "";

  data.forEach(m => {
    container.innerHTML += `
      <div class="card">
        <div class="league">${m.status}</div>
        <div class="match">
          <div>${m.home}</div>
          <strong>${m.score || "VS"}</strong>
          <div>${m.away}</div>
        </div>
      </div>
    `;
  });
}

function setLoading(isLoading) {
  document.querySelector(".loading").style.display =
    isLoading ? "block" : "none";
}

setLoading(true);
setTimeout(() => {
  render(matches);
  setLoading(false);
}, 800);
