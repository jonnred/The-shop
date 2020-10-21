const productContainer=document.querySelector('.productsContainer');
/////////////Removing an item in the cart/////////////
const cartRemoveButton=document.querySelectorAll('.cart-remove-button');
for (let index = 0; index < cartRemoveButton.length; index++) {
    let element = cartRemoveButton[index];
    element.addEventListener('click', (e)=>{
        e.target.parentElement.remove();
        })   
}
/////////////Adding an item in the cart/////////////
const buy=document.querySelectorAll('.buy');
for (let index = 0; index < buy.length; index++) {
    let element = buy[index];
    element.addEventListener('click', addToCart)   
}
/////////////Function Adding an item in the cart/////////////

function addToCart (e){
    let product = e.target.parentElement
    //Price
    price = product.querySelectorAll('.price');
    productsPrice = price[0].innerText;
    console.log(productsPrice);
    //Item name
    itemName = product.querySelectorAll('.products-title');
    productsName = itemName[0].innerText;
    console.log(productsName);
    //Picture of the products
    picture = product.querySelectorAll('.products-picture');
    productsPicture = picture[0].src;
    console.log(productsPicture);
}
