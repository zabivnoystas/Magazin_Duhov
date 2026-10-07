let fragrances = [
    {name: 'swy powerfully', capacity:'100ml', price: '4150', img: 'swy_powerfully.jpg'},
    {name: 'swy edt', capacity:'100ml', price: '3500', img: 'swy_edt.webp'},
    {name: 'ysl myslf edp', capacity:'60ml', price: '5200', img: 'ysl_myslf_edp.webp'},
    {name: 'ysl y edp', capacity:'100ml', price: '6100', img: 'ysl_y_edp.webp'},
    {name: 'jpg le male', capacity:'125ml', price: '5700', img: 'jpg_lemale.jpg'},
    {name: 'jpg le male le parfum', capacity:'125ml', price: '5900', img: 'jpg_lemale_le_parfum.jpg'},
    {name: 'jpg le beau narcisse', capacity:'125ml', price: '6400', img: 'jpg_le_beau_narc.jpg'},
    {name: 'bir purple melancholia', capacity:'100ml', price: '4000', img: 'bir_pur_melan.webp'},
    {name: 'xerjoff naxos', capacity:'50ml', price: '7500', img: 'xerjoff_naxos.jpg'}
]

function updateFragrances(){
    let out_1 = document.querySelector(".out-1")
    out_1.innerHTML = ""// clear list

    for(let i=0; i<fragrances.length;i++){
        let li = document.createElement("li")
        li.classList.add("card")
        li.innerHTML = `
              <span><?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M8.55284 3.00012C7.93598 3.00012 7.23841 3.06514 6.57209 3.29224C2.55494 4.60387 1.26341 8.894 2.39877 12.43L2.40354 12.4448L2.40877 12.4595C3.03435 14.2174 4.04226 15.8127 5.35336 17.1249L5.36091 17.1324L5.36862 17.1398C7.23782 18.9323 9.27254 20.4953 11.4756 21.8515L11.9934 22.1703L12.5147 21.8573C14.7226 20.5315 16.7964 18.9254 18.6432 17.1474L18.649 17.1419L18.6547 17.1362C19.9771 15.8215 20.9851 14.2144 21.6015 12.4549L21.6066 12.4402L21.6113 12.4253C22.7251 8.89703 21.4401 4.60176 17.4507 3.30948C16.7976 3.09221 16.1236 3.00012 15.4648 3.00012C13.9828 3.00011 12.8858 3.62064 12.0004 4.25309C11.1219 3.62545 10.0176 3.00012 8.55284 3.00012Z" fill="#000000"/>
</svg></span>
              <img src="img/${fragrances[i].img}">
              <h1>Товар - ${fragrances[i].name}</h1>
              <h1>Ціна - ${fragrances[i].price}</h1>
              <h1>Об'єм - ${fragrances[i].capacity}</h1>
              <button class="toCart">до кошика</button>
             
        `
        out_1.append(li)

        let toCart = li.querySelector(".toCart ")
        toCart.onclick = function(){
            addToCart(fragrances[i])
        }

        let span = li.querySelector("path")
        span.onclick = function(){
            span.classList.toggle("active")
        }
    }
}


updateFragrances()


// function addFruits() {
//     let i_name = document.querySelector(".i-name")
//     let i_price = document.querySelector(".i-price")
//     let i_img = document.querySelector(".i-img")
    
//     fruits.push({name:i_name.value, price:i_price.value, img:i_img.value})
//     updateFruits()
// }
// document.querySelector(".b-add").onclick = addFruits

//cart
 let cart = [

 ]

function updateCart(){
    let out_2 = document.querySelector(".out-2")
        out_2.innerHTML = ""
        let total = 0

    for(let i=0; i<cart.length; i++){     
        let li = document.createElement("li")
        li.innerHTML = `
            <img src="img/${cart[i].img}" alt="">
            <span>${cart[i].name}</span>
            <span>${cart[i].capacity}</span>
            <button class="btn-minus" data-index="${i}">-</button>
            <span>${cart[i].quatity}шт.</span>
            <button class="btn-plus" data-index="${i}">+</button>
            <span>${cart[i].price}</span>
            <button class="removeBtn"><?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6H21M5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
            
        `
        out_2.append(li)

        total += cart[i].price * cart[i].quatity
        document.querySelector(".total").innerHTML = `До оплати:${total}грн`

        let cartSend = document.querySelector(".cart-send")
        cartSend.innerHTML = "Замовити"
        cartSend.style.cssText = `
            background-color:burlywood;
            padding:7px 12px;
            color:white;
            cursor:pointer;
        `
        cartSend.onclick = clearCart

        let btnPlus = document.querySelectorAll(".btn-plus")
        for (let i = 0; i < btnPlus.length; i++) {
            btnPlus[i].onclick = function () {
                plusQuanity(btnPlus[i].dataset.index)
            }
        }

        let btnMinus = document.querySelectorAll(".btn-minus")
        for (let i = 0; i < btnMinus.length; i++) {
            btnMinus[i].onclick = function () {
                minusQuanity(btnMinus[i].dataset.index)
            }
        }

        let removeBtn = document.querySelectorAll(".removeBtn")
        for (let i = 0; i < removeBtn.length; i++) {
            removeBtn[i].onclick = function () {
                let numCart = this.parentElement.dataset.item
                removeFromCart(numCart)
            }
        }
        let count = document.querySelector(".count")
        count.innerHTML = cart.length
    }
}

function clearCart(){
    cart.length = 0
    updateCart()
    let cartArea = document.querySelector(".cart-area")
    let send = document.createElement("div")
    send.innerHTML = "Замовлення відправлено"
    send.classList.add("order-message")
    cartArea.append(send)

    setTimeout(function(){
        send.remove()
    },2000)
}

function plusQuanity(index) {
    cart[index].quatity++
    updateCart()
}

function minusQuanity(index) {
    if (cart[index].quatity > 1) {
        cart[index].quatity--
    } else {
        cart[index].quatity = 0
    }
    updateCart()
}

function removeFromCart(index){
    if(index !== -1){
        cart.splice(index,1)
    }
    updateCart()
}

 function addToCart(fruitEl){
    let checkFruit = null

    for(let i=0;i<cart.length;i++){
        if(cart[i].name == fruitEl.name){
           checkFruit = cart[i]
           break
        }
    }

    if(checkFruit == null){
        cart.push({...fruitEl, quatity:1})
    }else{
        checkFruit.quatity++
    }
    updateCart()
    
}

let cartButton = document.querySelector(".cart")
let shopArea = document.querySelector(".shop-area")
let cartArea = document.querySelector(".cart-area")

function cartOpen(){
    cartArea.classList.toggle("active")
    shopArea.classList.toggle("active")
}cartButton.onclick = cartOpen