let coinCount = 0;

document.getElementById('tap-button').addEventListener('click', function() {
    coinCount++;
    document.getElementById('coin-count').textContent = `Coins: ${coinCount}`;
});
