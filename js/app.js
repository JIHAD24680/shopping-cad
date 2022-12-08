
function productHandler(product, price, isIncreasing) {
    const phoneInput = document.getElementById(product + '-number');
    let phoneInputNumber = phoneInput.value;
    if (isIncreasing == true) {
        phoneInputNumber = parseInt(phoneInputNumber) + 1;
    }
    else if (phoneInputNumber > 0) {
        phoneInputNumber = parseInt(phoneInputNumber) - 1;
    }
    phoneInput.value = phoneInputNumber;

    const updateProduct = document.getElementById(product + '-total');
    updateProduct.innerText = phoneInputNumber * price;

    calculateTotal();
}

function productQuantityHandler(product) {
    const quntity = document.getElementById(product + '-number');
    // const phoneTotal = phone.value;
    const phoneInputText = parseInt(quntity.value);
    return phoneInputText;
}


function calculateTotal() {

    const phoneTotal = productQuantityHandler('phone') * 1220;
    const caseTotal = productQuantityHandler('case') * 60;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = tax + subTotal;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = total;


}



// phone section
document.getElementById('phone-plus').addEventListener('click', function () {
    productHandler('phone', 1220, true)
})

document.getElementById('phone-minus').addEventListener('click', function () {
    productHandler('phone', 1220, false)
})

// case section

document.getElementById('case-plus').addEventListener('click', function () {
    productHandler('case', 60, true)

})
document.getElementById('case-minus').addEventListener('click', function () {
    productHandler('case', 60, false)
})