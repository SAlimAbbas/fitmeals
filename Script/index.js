var item = 1;

function prev() {
  var items = document.querySelectorAll("#items > div");
  if (item == 1) {
    item = items.length;
  } else {
    item--;
  }
  showItem();
}

function next() {
  var items = document.querySelectorAll("#items > div");
  if(item == items.length) {
    item = 1
  } else {
    item++
  }
  showItem();
}

function showItem() {
  var items = document.querySelectorAll("#items > div");
  for (var i = 0; i < items.length; i++) {
    if (i + 1 == item) {
      items[i].style.display = "block"
    } else {
      items[i].style.display = "none";
    }
  }
}

showItem();


document.querySelector("#downloadBtn").addEventListener("click",function() {
  window.location.href="https://play.google.com/store/apps/details?id=com.zoconut.fitmeals&hl=en&gl=US";
})

function wlpm() {
  document.querySelector("#mealPlan >div >img").src= "https://www.fitmeals.co.in/wp-content/uploads/2021/05/weight.jpg";
  document.querySelector("#mealText>h2").innerText = "Weight Loss Meal Plan";
  document.querySelector("#mealText>h3").innerText = "1200-1400 Kcal";
  document.querySelector("#mealText>p").innerText ="If your aim is to lose weight in a gradual, healthy manner then this diet would meet your requirements. The meals are well balanced and consist of complex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet."
}
function amp() {
  document.querySelector("#mealPlan >div >img").src= "https://www.fitmeals.co.in/wp-content/uploads/2021/05/maintenance.jpg";
  document.querySelector("#mealText>h2").innerText = "Athletic Meal Plan";
  document.querySelector("#mealText>h3").innerText = "1400-1800 Kcal";
  document.querySelector("#mealText>p").innerText ="A diet rich in protein is essential for promoting muscle growth and repair while simultaneously burning fat to ensure you stay in shape. This plan includes high protein meals for individuals who want to gain weight or build muscle. If you are a fitness enthusiast who’s looking for meals higher in calories and lean protein then we’ve got you covered.";
}
function mmp() {
  document.querySelector("#mealPlan >div >img").src= "https://www.fitmeals.co.in/wp-content/uploads/2021/05/athletic.jpg";
  document.querySelector("#mealText>h2").innerText = "Maintenance Meal Plan";
  document.querySelector("#mealText>h3").innerText = "1400-1600";
  document.querySelector("#mealText>p").innerText ="This plan is for individuals looking for meals that will help in weight maintenance. All the meals have moderately portioned macros and micros.";
}
function kmp() {
  document.querySelector("#mealPlan >div >img").src= "https://www.fitmeals.co.in/wp-content/uploads/2021/05/keto.jpg"
  document.querySelector("#mealText>h2").innerText = "Keto Meal Plan";
  document.querySelector("#mealText>h3").innerText = "1300-1500 Kcal";
  document.querySelector("#mealText>p").innerText ="The keto diet is all about eating meals that are high in fat, consist moderate portions of protein and very low in carbs. The reduction of carbohydrates results in a metabolic process called ketosis where your body fat is then used to generate energy in the body.";
}