export default async function handler(req, res) {
  try {
    const matches = [
      { title: "Man City vs Arsenal", competition: "Premier League" },
      { title: "Barcelona vs Real Madrid", competition: "La Liga" },
      { title: "Bayern Munich vs Dortmund", competition: "Bundesliga" }
    ];

    const highlights = matches.map(m => ({
      title: m.title,
      competition: m.competition,
      video: `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
        `${m.title} ${m.competition} official match highlights football`
      )}`
    }));

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ status: "ok", highlights });

  } catch (e) {
    res.status(500).json({ status: "error" });
  }
}
