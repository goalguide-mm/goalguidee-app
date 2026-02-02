export default async function handler(req, res) {
  const API_KEY = process.env.ALLSPORTS_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({
      error: "ALLSPORTS_API_KEY is missing in Vercel Environment Variables"
    });
  }

  const url = `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({
        error: "AllSportsAPI request failed"
      });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch data from AllSportsAPI",
      details: error.message
    });
  }
}
