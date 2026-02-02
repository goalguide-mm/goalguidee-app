export default async function handler(req, res) {
  const API_KEY = process.env.ALLSPORTS_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "API KEY missing" });
  }

  const url =
    "https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=" +
    API_KEY;

  try {
    const r = await fetch(url);
    const data = await r.json();
    res.status(200).json(data.result || []);
  } catch (e) {
    res.status(500).json({ error: "Failed to load live matches" });
  }
}
