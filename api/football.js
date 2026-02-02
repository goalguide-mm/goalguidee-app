export default async function handler(req, res) {
  const API_KEY = process.env.ALLSPORTS_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "API key not found" });
  }

  const url = `https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
