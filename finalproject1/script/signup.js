var form = document.querySelector("form")

form.addEventListener("submit",function(event){
    event.preventDefault()

  var obj = {
      naam :  document.querySelector("#name").value,
     naam_last : document.querySelector("#last").value,
     e_email:document.querySelector("#email").value,
     con :  confirm = document.querySelector("#confirm").value,
     num : number = document.querySelector("#number").value,
     pass : document.querySelector("#password").value,
  }
  localStorage.setItem("data",JSON.stringify(obj));
  window.location.href = "sign.html";
   })