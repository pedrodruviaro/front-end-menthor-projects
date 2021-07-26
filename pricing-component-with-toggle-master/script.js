const switcher = document.getElementById('checkbox')

const prices = document.querySelectorAll('.card__price')

//values on load
window.onload = function() {
    prices[0].textContent = '19.99'
    prices[1].textContent = '24.99'
    prices[2].textContent = '39.99'
} 

// toggle switcher
switcher.addEventListener('change', (e)=> {

    if(e.target.checked){
        prices[0].textContent = '199.99'
        prices[1].textContent = '299.99'
        prices[2].textContent = '399.99'
    } else {
        prices[0].textContent = '19.99'
        prices[1].textContent = '24.99'
        prices[2].textContent = '39.99'
    }
})