app.get("/api/fixtures", async (req, res) => {
  try {
    res.json([
      {
        id: 1,
        home: "Liverpool",
        away: "Chelsea",
        date: "2026-02-06",
        time: "20:00"
      },
      {
        id: 2,
        home: "Man City",
        away: "Arsenal",
        date: "2026-02-07",
        time: "22:30"
      }
    ]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
