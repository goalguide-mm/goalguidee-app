// live matches API
app.get("/api/live", (req, res) => {
  res.json([
    {
      id: 1,
      league: "Premier League",
      home: "Liverpool",
      away: "Chelsea",
      score: "1 - 0",
      minute: 67
    },
    {
      id: 2,
      league: "La Liga",
      home: "Barcelona",
      away: "Real Madrid",
      score: "2 - 2",
      minute: 54
    }
  ]);
});
