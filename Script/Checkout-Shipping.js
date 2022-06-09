
document.getElementById('buy-btn').addEventListener('click', function() 
{
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const firstAddress = document.getElementById('first-address').value
    const secondAddress = document.getElementById('second-address').value
    const cityName = document.getElementById('city-name').value
    const zipCode = document.getElementById('zip-code').value
    const phoneNumber= document.getElementById('phone-number').value
    const warningLack=document.getElementById('buy-warning')
    
    if (!firstName
        || !lastName || !firstAddress || !secondAddress || !cityName || !zipCode || !phoneNumber 
    ){
        warningLack.style.display= "block"
        
        return false
    }
    if (!/\d+/.test(zipCode)) {
        // 
        warningLack.style.display="block"
        return false
    }

    if (!/\d+/.test(phoneNumber)) {
        // 
        warningLack.style.display="block"
        return false
    }

    document.location.href = 'checkout-payment.html'
}, false)


document.getElementById('shipContinue2').addEventListener('click', function(){ 

    const webFirstName = document.getElementById('web-first-name').value
    const webLastName = document.getElementById('web-last-name').value
    const webAddressOne = document.getElementById('web-address-one').value
    const webAddressTwo = document.getElementById('web-address-two').value
    const webCityName = document.getElementById('web-city-name').value
    const webZipCode = document.getElementById('web-zip-code').value
    const webPhoneNumber = document.getElementById('web-phone-number').value
    const webTipsBottom = document.getElementById('web-tips2')
    
    if (!webFirstName || !webLastName || !webAddressOne || !webAddressTwo
        || !webCityName || !webZipCode || !webPhoneNumber)

        {
            webTipsBottom.style.display='block'

            return false
        }

        if (!/\d+/.test(webZipCode)) {
            // 
            webTipsBottom.style.display="block"
            return false
        }
    
        if (!/\d+/.test(webPhoneNumber)) {
            // 
            webTipsBottom.style.display="block"
            return false
        }
        

        document.location.href='Checkout-Payment.html'

},false)


document.getElementById('shipContinue1').addEventListener('click', function(){ 
    const webFirstName = document.getElementById('web-first-name').value
    const webLastName = document.getElementById('web-last-name').value
    const webAddressOne = document.getElementById('web-address-one').value
    const webAddressTwo = document.getElementById('web-address-two').value
    const webCityName = document.getElementById('web-city-name').value
    const webZipCode = document.getElementById('web-zip-code').value
    const webPhoneNumber = document.getElementById('web-phone-number').value
    const webTipsBottom2 = document.getElementById('web-tips3')
    
    if (!webFirstName || !webLastName || !webAddressOne || !webAddressTwo
        || !webCityName || !webZipCode || !webPhoneNumber)

        {
            webTipsBottom2.style.display = 'block'

            return false
        }
        if (!/\d+/.test(webZipCode)) {
            // 
            webTipsBottom2.style.display="block"
            return false
        }
    
        if (!/\d+/.test(webPhoneNumber)) {
            // 
            webTipsBottom2.style.display="block"
            return false
        }

        

        document.location.href='Checkout-Payment.html'

},false)


