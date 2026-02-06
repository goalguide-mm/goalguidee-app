// script.js ထဲမှာ ရှာပြီးပြင်ပါ
async function fetchMatches() {
    try {
        // သင့်ရဲ့ Render Backend URL ကို အသုံးပြုပါ
        // ရှာပြီး ပြင်ရန်
        const response = await fetch('https://goalguide-api-1.onrender.com/api/fixtures/today');
        const data = await response.json();
        
        // အောက်က display function ကို data လှမ်းပို့ပါ
       function renderMatches(matches) {
    const container = document.getElementById('matches-container'); // သင့် HTML ထဲက ID နဲ့ ကိုက်အောင် စစ်ပါ
    container.innerHTML = ""; 

    if (!matches || matches.length === 0) {
        container.innerHTML = "No matches available at the moment.";
        return;
    }

    matches.forEach(match => {
        // Sportmonks က participants array ထဲမှာ home နဲ့ away ကို ရှာခြင်း
        const homeTeam = match.participants?.find(p => p.meta?.location === 'home');
        const awayTeam = match.participants?.find(p => p.meta?.location === 'away');

        const matchHtml = `
            <div class="match-item">
                <div class="team">
                    <img src="${homeTeam?.image_path || ''}" width="25">
                    <span>${homeTeam?.name || 'TBD'}</span>
                </div>
                <div class="score">vs</div>
                <div class="team">
                    <img src="${awayTeam?.image_path || ''}" width="25">
                    <span>${awayTeam?.name || 'TBD'}</span>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', matchHtml);
    });
}
