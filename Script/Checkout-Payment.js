
document.getElementById('buy-payment').addEventListener('click', function() {
    const creditCard= document.getElementById('credit-card').value
    const expirationTime = document.getElementById('exporation-time').value
    const dateTime = document.getElementById('date-time').value
    const cvvNumber = document.getElementById('cvv-number').value
    const paymentTips = document.getElementById('payment-tips')
    
    if (!creditCard
        || !expirationTime || !dateTime || !cvvNumber)
        {
        paymentTips.style.display='block'
        
        return false
    } 
    if (!/\d+/.test(creditCard)){
        paymentTips.style.display = 'block'

        return false
    }


    document.location.href = 'Checkout-Confirmation.html'
}, false)



document.getElementById('web-buy-payment').addEventListener('click', function() {
    const creditCard= document.getElementById('payment-card-number').value
    const expirationTime = document.getElementById('payment-expiration').value
    const dateTime = document.getElementById('payment-date').value
    const cvvNumber = document.getElementById('payment-cvv').value
    const paymentTips = document.getElementById('web-payment-tips')


    if (!creditCard
        || !expirationTime || !dateTime || !cvvNumber)
        {
        paymentTips.style.display='block'
        
        return false
    } 
    if (!/\d+/.test(creditCard)){
        paymentTips.style.display = 'block'

        return false
    }
    document.location.href = 'Checkout-Confirmation.html'
},false)


document.getElementById('web-buy-payment2').addEventListener('click', function() {
    const creditCard= document.getElementById('payment-card-number').value
    const expirationTime = document.getElementById('payment-expiration').value
    const dateTime = document.getElementById('payment-date').value
    const cvvNumber = document.getElementById('payment-cvv').value
    const paymentTips = document.getElementById('web-payment-tips2')

    if (!creditCard
        || !expirationTime || !dateTime || !cvvNumber)
        {
        paymentTips.style.display='block'
        
        return false
    } 
    if (!/\d+/.test(creditCard)){
        paymentTips.style.display = 'block'

        return false
    }
    document.location.href = 'Checkout-Confirmation.html'
},false)