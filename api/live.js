export default async function handler(req, res) {
  const API_KEY = process.env.ALLSPORTS_API_KEY;

  const url = `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${API_KEY}`;

  try {
    const r = await fetch(url);
    const json = await r.json();

    res.status(200).json({
      result: json.result || []
    });

  } catch (e) {
    res.status(500).json({ result: [] });
  }
}
