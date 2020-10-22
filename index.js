/////////////Adding an item in the cart/////////////
const buy = document.querySelectorAll('.buy');
for (let index = 0; index < buy.length; index++) {
    let element = buy[index];
    element.addEventListener('click', addToCart)
}
/////////////Function Adding an item in the cart/////////////

function addToCart(e) {
    let product = e.target.parentElement
    //Price
    price = product.querySelectorAll('.price');
    let productsPrice = price[0].innerText;
    //Item name
    itemName = product.querySelectorAll('.products-title');
    let productsName = itemName[0].innerText;
    //Picture of the products
    picture = product.querySelectorAll('.products-picture');
    let productsPicture = picture[0].src;


    let cartContainer = document.querySelector('.cart-container');
    let cartRowContents = `<div class="cart">
        <span class="cart-column cart-item">
            <img src="${productsPicture}" width="100px">
            <div>
                ${productsName}
            </div>
        </span>
        <span class="cart-column cart-quantity-size">
            <input class="cart-quantity" type="number" name="" id="">
        </span>
        <span class="cart-column cart-price">${productsPrice}</span>
        <button class="cart-column cart-remove-button">REMOVE</button>
    </div>
    `;
    cartContainer.innerHTML += cartRowContents;
    cartRemoveButtonFunction();
    cartQuantityButton();
}
/////////////Removing an item in the cart/////////////
const cartRemoveButtonFunction = () => {
    const cartRemoveButton = document.querySelectorAll('.cart-remove-button');
    for (let index = 0; index < cartRemoveButton.length; index++) {
        let element = cartRemoveButton[index];
        element.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
    }
}
/////////////Raising the item in the cart/////////////
const cartQuantityButton = () => {
    const cartQuantity = document.querySelectorAll('.cart-quantity');
    for (let index = 0; index < cartQuantity.length; index++) {
        let element = cartQuantity[index];
        element.addEventListener('change', (e) => {
            let input = e.target;
            let quantity = input.value;
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1;
            }
            updateCartTotalFunction(quantity);
        })
        
    }
}
/////////////Updating the cart total prices/////////////
const updateCartTotalFunction = (quantity) => {

    //cart Price
    const cartPrice = document.querySelectorAll('.cart-price');
    for (let index = 0; index < cartPrice.length; index++) {
        let element = cartPrice[index].innerText;
        let price = parseFloat(element.replace('$', ''))    
        const productTotalPrice = price * quantity;
        console.log(productTotalPrice);
    }
    //cart Total Price
    
}