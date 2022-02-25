var cartDetails = JSON.parse(localStorage.getItem("meallocal"));
console.log(cartDetails);
var subtotal=0;
cartDetails.filter(function (elem, index) {
  var row = document.createElement("tr");

  var col1 = document.createElement("button");
  col1.innerText = "X";
  col1.setAttribute("style", "margin:25px;")
  col1.addEventListener("click", function(){
    document.getElementById("body").deleteRow(index);

  })
  
  var col2 = document.createElement("td");
  col2.innerText = index + 1;
  //    var col1=document.createElement("td");
  //    col1.innerText=elem.Mealpreference;

  //    var col2=document.createElement("td");
  //    col2.innerText=elem.Breakfast;

  var col3 = document.createElement("td");
  col3.innerText =
    "Meal Preference:" +
    elem.Mealpreference +
    "\n" +
    "Choice:" +
    "BreakFast" +
    "," +
    "Lunch" +
    "," +
    "Dinner"+
    "\n" +
    "Add On:"+"Snack"+","+"Drink";

  //    col3.innerText=elem.Breakfast;
  //    col3.innerText=elem.Lunch;
  //    col3.innerText=elem.Dinner;
  var col4 = document.createElement("td");
  col4.innerText =
    "\n" +
    (elem.Breakfast || 0) +
    " + " +
    (elem.Lunch || 0) +
    " + " +
    (elem.Dinner || 0) +
    "\n"+
    (elem.Snack || 0) +
    " + " +
    (elem.Drink || 0);

  var col5 = document.createElement("td");
  //    col5.type="number";
  //    col5.min=1;
  //    col5.setAttribute("class","quantity");

  col5.innerText = elem.Quantity;

  var col6 = document.createElement("td");
  col6.innerText = Number(elem.Quantity) * ((Number(elem.Breakfast) || 0)  +
  (Number(elem.Lunch) || 0) +(Number(elem.Dinner) || 0)+(Number(elem.Snack) || 0)+(Number(elem.Drink) || 0));
  
   subtotal+=Number(col6.innerText);
  console.log(subtotal);
  // console.log(elem.Breakfast);
  // console.log(elem.Quantity)

  row.append(col1, col2, col3, col4, col5,col6);

  document.querySelector("#body").append(row);
});

var discount=document.querySelector("#tdata").innerText =subtotal;

document.querySelector("#tdata3").innerText=subtotal+50;

function promo()
{
  if(document.querySelector("#promo").value=="masai30")
  {
    document.querySelector("#tdata").innerText =subtotal-(discount*0.3);
    document.querySelector("#tdata3").innerText=subtotal-(discount*0.3)+50;
    document.querySelector("#showdiscount").innerText="'Congratulations! you got 30% discount'";
    document.querySelector("#showdiscount").style.color="green";

  }
  else{
    document.querySelector("#showdiscount").innerText="Invalid promo";
    document.querySelector("#showdiscount").style.color="red";
  }

}
