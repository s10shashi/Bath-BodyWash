function run() {
  event.preventDefault();
  var arr = [];
  var obj = {
    name: document.querySelector("#name").value,
    address1: document.querySelector("#add1").value,
    address2: document.querySelector("#add2").value,
    city: document.querySelector("#city").value,
    pin: document.querySelector("#pin").value,
    phone: document.querySelector("#number").value,
    delivery: document.querySelector(".rbtn").value,
  };
  console.log(obj);
  arr.push(obj);

  localStorage.setItem("form", JSON.stringify(arr));
  window.location.href = "./billing2.html";
}
