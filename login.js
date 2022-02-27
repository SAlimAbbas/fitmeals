// var logindata=JSON.parse(localStorage.getItem("logindata"))
// document.querySelector("#myform").addEventListener("submit",get)


// function get(event){
//     event.preventDefault();
   
//     var email=document.getElementById("user").value;
//     var Password=document.getElementById("pass").value;
    
//     logindata.map(function(item){
//         if(item.email==email && item.Password==Password){
//             // window.location.href="www.google.com"
//             alert(item.email)
//         }
      
//     })
//}

var regUser = JSON.parse(localStorage.getItem("logindata"));
document.querySelector("#myform").addEventListener("submit", formSubmit);
var form = document.querySelector("#myform");
function formSubmit(event) {
event.preventDefault();

var userName = document.querySelector("#user").value;
var passWord = document.querySelector("#pass").value;

var flag =false;
for (var i = 0; i < regUser.length; i++) {
  if (regUser[i].email == userName && regUser[i].Password == passWord) {
    flag=true;
  }
}
if (flag ==true) {
    
    document.querySelector("input[type='submit']").addEventListener("click",function(){
            window.location.href="index.html";
            // alert("Login successful")
    })
}
else {
    alert("Wrong username or password")
    // document.querySelector("#warning").innerText="Wrong username or password";      
}

}