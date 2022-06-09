document.getElementById('j-buy-decrease').addEventListener('click', function() {
    const buyNum = document.getElementById('j-buy-number-val').innerHTML * 1
    if (buyNum == 0) {
        return
    }
    document.getElementById('j-buy-number-val').innerHTML = buyNum - 1
})
document.getElementById('j-buy-increse').addEventListener('click', function() {
    const buyNum = document.getElementById('j-buy-number-val').innerHTML * 1
    document.getElementById('j-buy-number-val').innerHTML = buyNum + 1
})
