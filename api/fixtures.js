app.get("/api/fixtures/today", async (req, res) => {
    try {
        // ၁။ ဒီနေ့ရက်စွဲကို YYYY-MM-DD format ပြောင်းခြင်း (ဥပမာ- 2026-02-08)
        const today = new Date().toISOString().split('T')[0];

        // ၂။ သင့်ရဲ့ Render API URL (ရက်စွဲကို variable နဲ့ ချိတ်ဆက်ထားသည်)
        const url = `https://goalguide-api-1.onrender.com/api/fixtures/date/${today}`;

        // ၃။ Render Server ထံမှ ဒေတာလှမ်းယူခြင်း
        const response = await fetch(url);
        const data = await response.json();

        // ၄။ ရရှိလာသော ပွဲစဉ်ဒေတာများကို Website format နှင့် ကိုက်ညီအောင် ပြန်စီစဉ်ခြင်း
        // မှတ်ချက်- Render API မှ ဒေတာပုံစံအပေါ်မူတည်၍ mapping ကို လိုအပ်သလို ပြင်နိုင်သည်
        const formattedFixtures = (data || []).map(fixture => {
            // Render API မှ ပြန်ပေးသော field အမည်များကို အသုံးပြုထားပါသည်
            return {
                id: fixture.id,
                league: fixture.tournament?.name || "Premier League",
                home: fixture.homeTeam?.name || "TBD",
                away: fixture.awayTeam?.name || "TBD",
                homeLogo: fixture.homeTeam?.image_path || "",
                awayLogo: fixture.awayTeam?.image_path || "",
                time: fixture.starting_at || "ပွဲချိန်မသိရသေးပါ"
            };
        });

        res.json(formattedFixtures);
    } catch (e) {
        console.error("Error fetching fixtures:", e);
        res.status(500).json({ error: e.message });
    }
});
