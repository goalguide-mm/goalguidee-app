app.get("/api/fixtures", async (req, res) => {
  try {
    const r = await fetch(
      "https://v3.football.api-sports.io/fixtures?next=10",
      {
        headers: {
          "x-apisports-key": process.env.FOOTBALL_API_KEY
        }
      }
    );

    const data = await r.json();
    res.json(data.response); // ⭐ အရေးကြီး
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
