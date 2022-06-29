// query selector for button that says "find food trucks near you"
var findTrucks = document.querySelector("#search");
var foodSelection = document.querySelector(".drops");
var dropMenu = document.querySelector(".dropdown-menu");
var dropDown = document.getElementById("dropdown-button");
var myCheckbox = document.getElementsByName("myCheckbox");
var checkBoxes = document.querySelector(".check");
var mexican = document.querySelector("#mexican");
console.log(mexican);
var american = document.querySelector("#american");
console.log(american);
var chinese = document.querySelector("#chinese");

var isChecked = fetch(
  "https://maps.googleapis.com/maps/api/geocode/json?address=Washington&key=AIzaSyDFd1rcFFUqsm2rWJr8kJn_tJXP8SPzmq8"
)
  .then((response) => response.json())
  .then((data) => console.log(data));

function foodType() {
  // var foodTypes;
  const foodTypes = mexican.checked
    ? mexican.value
    : american.checked
    ? american.value
    : chinese.value;

  // if (mexican.checked) {

  //    foodTypes = mexican.value;

  // }else  if (american.checked) {
  //   foodTypes = american.value;

  // }else {
  //   foodTypes = chinese.value;

  // }
  console.log(foodTypes);
}

function selectOnlyThis(id) {
  Array.prototype.forEach.call(myCheckbox, function (el) {
    el.checked = false;
  });
  id.checked = true;
  // var foodTypes = myCheckbox.textContent;
  // console.log(foodTypes);
}

var mex = mexican.addEventListener("change", foodType);
var merica = american.addEventListener("change", foodType);
var chin = chinese.addEventListener("change", foodType);
// findTrucks.addEventListener("click",) // add modal function))
