var logindata=JSON.parse(localStorage.getItem("logindata"))
document.querySelector("#myform").addEventListener("submit",get)
function get(event){
    event.preventDefault();
    var email=document.getElementById("user").value;
    var Password=document.getElementById("pass").value;
    
    logindata.map(function(item){
        if(item.email==email && item.Password==Password){
            console.log("enter")
        }
        else{
            console.log("wrong")
        }
    })
}