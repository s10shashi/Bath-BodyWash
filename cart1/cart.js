// console.log("bol bhai");
let cartData = JSON.parse(localStorage.getItem("user"));
console.log("user: ", cartData);

display(cartData);

function display(cartData) {
  cartData.forEach((item) => {
    let initialTotalPrice = document.querySelector(
      "#price > div > h2:nth-child(2)"
    );
    initialTotalPrice.innerHTML = `Rs. ${item.totalPrice}.00`;

    console.log(item.price);
    let products = document.getElementById("products");

    let product = document.createElement("div");
    product.classList.add("product");
    let desc = document.createElement("div");
    desc.classList.add("desc");

    let productImage = document.createElement("img");
    productImage.src = item.img;

    let productName = document.createElement("div");
    productName.setAttribute("class", "title");
    productName.innerHTML = item.name;

    let productQty = document.createElement("div");
    productQty.setAttribute("class", "qty");

    let productQtyInput = document.createElement("input");
    productQtyInput.setAttribute("type", "number");
    productQtyInput.setAttribute("id", "qty");
    productQtyInput.setAttribute("min", 0);
    productQtyInput.setAttribute("value", item.qty);
    productQtyInput.setAttribute("onchange", "updatePrice()");

    let productPrice = document.createElement("div");
    productPrice.setAttribute("class", "price");
    productPrice.innerHTML = `Rs. ${item.price}.00`;

    productQty.appendChild(productQtyInput);
    desc.append(productImage, productName);
    product.append(desc, productQty, productPrice);
    products.append(product);

    let updateCart = document.querySelector("#update-cart");
    updateCart.addEventListener("click", () => {
      const showPrice = document
        .querySelector("#price > div > h2:nth-child(2)")
        .innerHTML.trim()
        .split(" ")[1]
        .split(".")[0];
      localStorage.setItem("totalPrice", showPrice);
    });
  });
}

function updatePrice() {
  //   console.log(event.target.value);
  let qty = event.target.value;
  console.log("qty: ", qty);
  let price = event.target.parentElement.nextElementSibling.innerHTML
    .trim()
    .split(" ")[1]
    .split(".")[0];
  let totalPrice = qty * +price;
  console.log("totalPrice: ", totalPrice);

  const showPrice = document.querySelector("#price > div > h2:nth-child(2)");
  //   console.log("showPrice: ", showPrice.innerText);
  showPrice.innerHTML = `Rs. ${totalPrice}.00`;
  showPrice.classList.add("changed");

  setTimeout(() => {
    showPrice.classList.remove("changed");
  }, 5000);
}

// goto checkout page
let checkout = document.querySelector("#checkout");
checkout.addEventListener("click", () => {
  checkout.innerText = "Loading...";
  setTimeout(() => {
    window.location.href = "checkout.html";
  }, 3000);
});