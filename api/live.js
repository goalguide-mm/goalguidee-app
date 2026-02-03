const API_BASE = "https://goalguide-api.onrender.com";

fetch(`${API_BASE}/api/live`)
  .then(res => res.json())
  .then(data => {
    console.log("LIVE DATA:", data);
    // render matches here
  })
  .catch(err => {
    console.error("LIVE FETCH ERROR:", err);
    document.body.innerHTML = "Failed to load live matches";
  });
