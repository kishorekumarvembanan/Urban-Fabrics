let shirt =document.getElementById("shirt");
let price =document.getElementById("price");


console.log(shirt);
let shopItemData = [{
    id:"1",
    name:"Modo Rapido",
    img1:"../men_img/m1.1.png",
    img2:"../men_img/m1.2.png",
    img3:"../men_img/m1.3.png",
    img4:"../men_img/m1.4.png",
},]

let shopItemPrice =[{
    name:"Modo Rapido",
    price:"₹ 749",
    dis:"1899",
    off:"1150"
}]
let genarateshop = () =>{
    return (shirt.innerHTML= shopItemData.map((x)=>{
        return ` 
        <p>Casual Shirt / ${x.name}</p>
        <div class="cas-shirt-img">
            <img src="${x.img1}">
            <img src="${x.img2}">
        </div>
        <div class="cas-shirt-img1">
            <img src="${x.img3}">
            <img src="${x.img4}">
        </div>
    `
    }).join(""));
};
let genarateprice = () =>{
    return (price.innerHTML= shopItemPrice.map((y)=>{
        return ` 
        <h3>${y.name}</h3><br>
        <p style="font-weight:lighter; color: gray;">Men Slim Fit Opaque Casual Shirt</p><br>
        <p style="display: inline;" class="rup">${y.price} </p>
        <p style="color: grey; display: inline;">MRP <s>₹${y.dis}</s></p>
        <p style="color: #ff905a; display: inline;">(Rs.${y.off} OFF)</p><br><br>
        <p style="color: #03a685; font-size: small;">inclusive of all taxes</p><br><br>
        <p style="font-weight: bold;">select size</p>
        <span class="size1"><p>38</p></span>
        <span class="size2"><p>40</p></span>
        <span class="size3"><p>42</p></span>
        <span class="size4"><p>44</p></span>
        <span class="size5"><p>46</p></span>
        <button onclick="cart" class="a-cart"><img src="../home_navbar_img/trolley-cart.png">Add to cart</button>
        <button class="a-wishlist"><img src="../home_navbar_img/heart1.png"><p>Wishlist</p></button><br>
        <span class="del" style="font-weight: bold;">DELIVERY OPTION</span>
        <img class="del-img" src="../home_navbar_img/delivery.png">
        <p class="get">Get it by Saturday</p>
        <img class="pay" src="../home_navbar_img/payment-method.png">
        <p class="get1">Pay on delivery available</p>
        <img class="ret" src="../home_navbar_img/return.png">
        <p class="get2">Easy 14 days return </p>
        `
    }));
}
genarateshop();
genarateprice();