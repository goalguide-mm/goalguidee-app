const API = "http://localhost:3000";

fetch(API + "/api/fixtures")
  .then(res => res.json())
  .then(data => {
    document.getElementById("live").innerHTML =
      data.live.map(m =>
        `<div>🔴 ${m.home} vs ${m.away} (${m.minute}') </div>`
      ).join("");

    document.getElementById("today").innerHTML =
      data.today.map(m =>
        `<div>📅 ${m.home} vs ${m.away} - ${m.time}</div>`
      ).join("");

    document.getElementById("tomorrow").innerHTML =
      data.tomorrow.map(m =>
        `<div>⏭️ ${m.home} vs ${m.away} - ${m.time}</div>`
      ).join("");
  });

fetch(API + "/api/results")
  .then(res => res.json())
  .then(data => {
    document.getElementById("yesterday").innerHTML =
      data.map(m =>
        `<div>⏮️ ${m.home} ${m.score} ${m.away}</div>`
      ).join("");
  });
