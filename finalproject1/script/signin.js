var form = document.querySelector("form")
   var userData=JSON.parse(localStorage.getItem
   ("userData"))
   

    form.addEventListener("submit",function(event){    

      event.preventDefault()
        var data = {
          email : document.querySelector("#email").value,
          password : document.querySelector("#password").value,
      }
      if(userData===null){
        //   alert("create your account")
        window.location.href="index.html"
      }
      else if(userData.email == data.e_email && userData.password == data.pass){
        //   alert("login Successful")
        window.location.href="index.html"
          localStorage.setItem("login",JSON.stringify
         (userData))
      
         
      }
      else{
       alert("User does not exist")
    }
      
   
    })