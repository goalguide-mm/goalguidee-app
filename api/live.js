app.get("/api/live", async (req, res) => {
  try {
    const API_TOKEN = "W3FI2JepFynSaW5J1fuzuDyMcWVbJTV7kWhGSdm2hGbpo4WUAYFsC6eh0Mrd";
    // Sportmonks v3 URL format
    const r = await fetch(
      `https://api.sportmonks.com/v3/football/livescores?api_token=${API_TOKEN}`
    );

    const data = await r.json();
    // Sportmonks က data ကို .data ထဲမှာ ပြန်ပေးတာမို့လို့ပါ
    res.json(data.data || []); 
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
