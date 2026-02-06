// script.js ထဲမှာ ရှာပြီးပြင်ပါ
async function fetchMatches() {
    try {
        // သင့်ရဲ့ Render Backend URL ကို အသုံးပြုပါ
        const response = await fetch('https://goalguide-api-1.onrender.com/api/fixtures/today');
        const data = await response.json();
        
        // အောက်က display function ကို data လှမ်းပို့ပါ
        renderMatches(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById('matches-container').innerHTML = "Error loading matches";
    }
}
