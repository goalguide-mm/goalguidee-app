export default async function handler(req, res) {
  const API_KEY = process.env.ALLSPORTS_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({
      error: "ALLSPORTS_API_KEY is missing"
    });
  }

  const today = new Date().toISOString().slice(0, 10);

  try {
    const url = `https://apiv2.allsportsapi.com/football/?met=Fixtures&from=${today}&to=${today}&APIkey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data.result || []);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch fixtures"
    });
  }
}
