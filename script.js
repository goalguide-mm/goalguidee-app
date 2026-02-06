// script.js ထဲမှာ ဒီလိုမျိုး ပြင်ပေးပါ
async function loadMatches(type) {
    const statusElement = document.getElementById('loading-status'); // သင့် ID အလိုက် ပြင်ပါ
    try {
        // သင့်ရဲ့ Render Backend URL ကို သုံးပါ
        const response = await fetch(`https://goalguide-api-1.onrender.com/api/fixtures/today`);
        const data = await response.json();
        
        // Sportmonks data format က array တိုက်ရိုက်လာတာမို့လို့ပါ
        displayMatches(data); 
    } catch (error) {
        console.error("Error:", error);
        document.body.innerHTML += '<p style="color:red">Error loading matches</p>';
    }
}
