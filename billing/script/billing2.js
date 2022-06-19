var shipDetails = JSON.parse(localStorage.getItem("form"));

console.log(shipDetails);

let box = document.createElement("div");
let name1 = document.createElement("p");
name1.innerText = shipDetails[0].name;

let add1 = document.createElement("p");
add1.innerText = shipDetails[0].address1;

let add2 = document.createElement("p");
add2.innerText = shipDetails[0].address2;

let city = document.createElement("p");
city.innerText = shipDetails[0].city;

let pin = document.createElement("p");
pin.innerText = shipDetails[0].pin;

let phone = document.createElement("p");
phone.innerText = shipDetails[0].phone;

let edit = document.createElement("p");
edit.innerText = "EDIT";

console.log(name1);
box.append(name1, add1, add2, city, pin, phone, edit);
document.querySelector("#container").append(box);
