export default async function handler(req, res) {
  const API_KEY = process.env.ALLSPORTS_API_KEY;

  // 1️⃣ API key စစ်
  if (!API_KEY) {
    return res.status(500).json({
      error: "ALLSPORTS_API_KEY is missing in Vercel Environment Variables"
    });
  }

  try {
    // 2️⃣ AllSports API URL
    const url = `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${API_KEY}`;

    // 3️⃣ fetch
    const response = await fetch(url);
    const data = await response.json();

    // 4️⃣ JSON ပြန်
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch football data",
      detail: error.message
    });
  }
}
