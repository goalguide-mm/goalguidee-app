export default async function handler(req, res) {
  const API_KEY = process.env.ALLSPORTS_API_KEY;

  const today = new Date().toISOString().split("T")[0];

  const url =
    "https://apiv2.allsportsapi.com/football/?met=Fixtures&from=" +
    today +
    "&to=" +
    today +
    "&APIkey=" +
    API_KEY;

  try {
    const r = await fetch(url);
    const data = await r.json();
    res.status(200).json(data.result || []);
  } catch {
    res.status(500).json({ error: "Failed to load fixtures" });
  }
}
