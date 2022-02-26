var form = document.querySelector("#mealform");
form.addEventListener("submit", mealfunction);
var mealArr = JSON.parse(localStorage.getItem("meallocal")) || [];

// for(var key in mealobj)
// for(var i=0; i<mealArr.length;i++)
// {
  
// }



function mealfunction(event) {
  event.preventDefault();

  var mealpreference = form.mealPreference.value;
  var quantity = form.quantity.value;
  if (form.breakfast.checked == true) {
    var breakfast = form.breakfast.value;
  }
  if (form.lunch.checked == true) {
    var lunch = form.lunch.value;
  }
  if (form.dinner.checked == true) {
    var dinner = form.dinner.value;
  }
  if (form.snack.checked == true) {
    var snack = form.snack.value;
  }
  if (form.drink.checked == true) {
    var drink = form.drink.value;
  }

  var mealobj = {
    Mealpreference: mealpreference,
    Breakfast: breakfast,
    Lunch: lunch,
    Dinner: dinner,
    Snack: snack,
    Drink: drink,
    Quantity: quantity,
  };

  mealArr.push(mealobj);
  console.log(mealArr);
  
  localStorage.setItem("meallocal", JSON.stringify(mealArr));
}
var bag=0;
 

showPrice();
function showPrice()
{

  var priceshow=document.querySelector("#priceTag");
  priceshow.innerText=bag; 

  document.getElementById("breakfast").addEventListener("click", function()
  {
    mybreakfastfunction();
  })
  function mybreakfastfunction()
  {
      if(document.getElementById("breakfast").checked==true)
      {
        // priceshow.innerText=breakfast.value;
        bag+=Number(breakfast.value);
        document.querySelector("#priceTag").innerText=bag;
      }else{
        bag=bag-Number(breakfast.value);
        document.querySelector("#priceTag").innerText=bag;
      }
   
  }




  document.getElementById("lunch").addEventListener("click", function()
  {
    mylunchfunction();
  })
  
  function mylunchfunction()
  {
      if(document.getElementById("lunch").checked==true)
      {
      bag+=Number(lunch.value);
      document.querySelector("#priceTag").innerText=bag;
      }
      else
      {
        bag=bag-Number(lunch.value);
        document.querySelector("#priceTag").innerText=bag;
      }
  }




  document.getElementById("dinner").addEventListener("click", function()
  {
    mydinnerfunction();
  })
  function mydinnerfunction()
  {
      if(document.getElementById("dinner").checked==true)
      {
      bag+=Number(dinner.value);
      document.querySelector("#priceTag").innerText=bag;
      }
      else
      {
        bag=bag-Number(dinner.value);
        document.querySelector("#priceTag").innerText=bag;
      }
  }





  document.getElementById("snack").addEventListener("click", function()
  {
    mysnackfunction();
  })
  function mysnackfunction()
  {
        if(document.getElementById("snack").checked==true)
      {
      
        bag+=Number(snack.value);
        document.querySelector("#priceTag").innerText=bag;
      }
      else
      {
        bag=bag-Number(snack.value);
        document.querySelector("#priceTag").innerText=bag;
      }
  }





  document.getElementById("drink").addEventListener("click", function()
  {
    mydrinkfunction();
  })
  function mydrinkfunction()
  {
        if(document.getElementById("drink").checked==true)
      {
        bag+=Number(drink.value);
        document.querySelector("#priceTag").innerText=bag;
      }
      else
      {
        bag=bag-Number(drink.value);
        document.querySelector("#priceTag").innerText=bag;
      }
  }



}


