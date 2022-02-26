document.getElementById("myform").addEventListener("submit",get)
 
var data=JSON.parse(localStorage.getItem("logindata"))||[];
function get(event){
    event.preventDefault();
    var email=document.getElementById("user").value;
    var Password=document.getElementById("pass").value;
    var  confirm=document.getElementById("confirmpass").value;
   
        
     var obj={
        email:email,
        Password:Password,
        confirm:confirm
        }
        data.push(obj)
        localStorage.setItem("logindata",JSON.stringify(data))
    
  
}