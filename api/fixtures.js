eapp.get("/api/fixtures/today", (req, res) => {
  res.json([
    {
      id: 12345,
      league: "Premier League",
      home: "Arsenal",
      away: "Chelsea",
      homeLogo: "https://...",
      awayLogo: "https://..."
    }
  ]);
});
