const currency = () => {
    const coinLists = document.querySelectorAll('.currencies__content-tokens');

    async function stackDataForCoins() {
        let bitcoin = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
            .then(res => res.json())
            .then(data => JSON.parse(JSON.stringify(data)))
            .then(res => {
                renderCoinHTML('bitcoin', res.bitcoin.usd, res.bitcoin.usd_market_cap, res.bitcoin.usd_24h_change, 'btc');
            });

        let ethereum = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
                .then(res => res.json())
                .then(data => JSON.parse(JSON.stringify(data)))
                .then(res => {
                    renderCoinHTML('ethereum', res.ethereum.usd, res.ethereum.usd_market_cap, res.ethereum.usd_24h_change, 'eth');
                });

        let tether = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
                .then(res => res.json())
                .then(data => JSON.parse(JSON.stringify(data)))
                .then(res => {
                    renderCoinHTML('tether', res.tether.usd, res.tether.usd_market_cap, res.tether.usd_24h_change, 'tth');
                });

        let enjin = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=enjincoin&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
                .then(res => res.json())
                .then(data => JSON.parse(JSON.stringify(data)))
                .then(res => {
                    renderCoinHTML('enjin', res.enjincoin.usd.toFixed(4), res.enjincoin.usd_market_cap, res.enjincoin.usd_24h_change, 'enj');
                });
    }

    function renderCoinHTML(name, price, cap, change, img) {
        coinLists.forEach(list => {
            const element = document.createElement('li');
            element.classList.add('currencies__content-token');
            element.innerHTML = `
                <div class="asset">
                    <img src="../img/icons/${img}.svg" alt="icon">
                    ${name.toLowerCase()}
                </div>
                <div class="price">
                    $${price}
                    <span>AUD</span>
                </div>
                <div class="change ${colorChangeText(String(change))}">
                    ${change.toFixed(2)}%
                </div>
                <div class="cap">
                    $${String(cap).slice(0, 3)}B
                </div>
                <a href="#" class="buy__link">Buy</a>
            `;

            list.append(element);
        });
    }

    function colorChangeText(change) {
        if (change.indexOf('-') == -1) {
            return 'change--top';
        } else {
            return 'change--down';
        }
    }

    
    stackDataForCoins();
    setInterval(stackDataForCoins, 1000 * 60 * 60 * 24);
};

export default currency;