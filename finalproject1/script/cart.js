var totalItems = 0;
var totalPrice = 0;
var isPromoCodeApplied = false;

var data = JSON.parse(localStorage.getItem("cartItems")) || [] ;

var product = document.querySelector(".productcont");

data.forEach((element,i) => {

    totalItems += element.qty;
    totalPrice += element.rate;

    var productDiv = document.createElement("div")
    productDiv.classList.add("product")

    var imgDiv = document.createElement("div")
    imgDiv.classList.add("imgDiv")

    var img = document.createElement("img")
    img.setAttribute("src",element.img)

    var detailsDiv = document.createElement("div")
    detailsDiv.classList.add("detailsDiv")

    var productName = document.createElement("h3")
    productName.classList.add("productName")
    productName.innerText = element.name;

    var qty = document.createElement("h4")
    qty.innerText = "QTY : " + element.qty;
    

    var price = document.createElement("h3")
    price.innerText = "price : $"  + element.rate;
    price.classList.add("price")
    
    var deleteItem = document.createElement("button")
    deleteItem.innerText = "DELETE"
    deleteItem.addEventListener("click",function (){
        var filteredItem = data.filter(function(cur,i){
            return cur.id != element.id
        })
        localStorage.setItem("cartItems",JSON.stringify(filteredItem))
        window.location.reload();
    })  

    imgDiv.append(img)
    detailsDiv.append(productName,qty,price,deleteItem)
    productDiv.append(imgDiv,detailsDiv)
    product.append(productDiv)
});


document.querySelector(".totalItem").innerText = totalItems;
showTotalCartValue(totalPrice)

document.querySelector("#checkout").addEventListener("click",goToPayment);

function goToPayment() {
    alert("Confirm Payment ?");
    window.location.href="billing.html";
}

document.querySelector("#applyPromo").addEventListener("click",addPromoCode);

function addPromoCode() {
    var promocode = document.querySelector("#promoCode").value;
    console.log(promocode);

    if(promocode == "masai30" && isPromoCodeApplied == false)
    {
        isPromoCodeApplied = true;
        totalPrice = 0.7 * Number(totalPrice);
        showTotalCartValue(totalPrice);
    } else if(promocode == "masai30" && isPromoCodeApplied == true)
    {
        alert("Promocode already applied");
    } else {
        alert("Promocode is Wrong");
    }
}

function showTotalCartValue(totalPrice) {
    document.querySelector(".totalPrice").innerText = "$"+totalPrice;
}


document.querySelector("#emptyCart").addEventListener("click",emptyCart);

function emptyCart() {
    localStorage.removeItem('cartDetails');
    window.location.reload();
}

