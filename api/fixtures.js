app.get("/api/fixtures/today", async (req, res) => {
  try {
    const API_TOKEN = "W3FI2JepFynSaW5J1fuzuDyMcWVbJTV7kWhGSdm2hGbpo4WUAYFsC6eh0Mrd";
    
    // ဒီနေ့ရက်စွဲကို YYYY-MM-DD format ပြောင်းခြင်း
    const today = new Date().toISOString().split('T')[0];

    // Sportmonks Fixtures by Date URL
    // include=participants ထည့်မှ အသင်းနာမည်နဲ့ Logo တွေ ပါလာမှာဖြစ်ပါတယ်
    const url = `https://api.sportmonks.com/v3/football/fixtures/date/${today}?api_token=${API_TOKEN}&include=participants`;

    const r = await fetch(url);
    const data = await r.json();

    // ပွဲစဉ်တွေကို သင့် Website format နဲ့ ကိုက်အောင် ပြန်စီစဉ်ခြင်း
    const formattedFixtures = (data.data || []).map(fixture => {
      const homeTeam = fixture.participants.find(p => p.meta.location === 'home');
      const awayTeam = fixture.participants.find(p => p.meta.location === 'away');

      return {
        id: fixture.id,
        league: fixture.name, // သို့မဟုတ် League ID
        home: homeTeam ? homeTeam.name : "TBD",
        away: awayTeam ? awayTeam.name : "TBD",
        homeLogo: homeTeam ? homeTeam.image_path : "",
        awayLogo: awayTeam ? awayTeam.image_path : "",
        time: fixture.starting_at // ပွဲစမည့်အချိန်
      };
    });

    res.json(formattedFixtures);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
