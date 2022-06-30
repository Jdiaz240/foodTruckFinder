// query selector for button that says "find food trucks near you"
var findTrucks = document.querySelector("#search");
var foodSelection = document.querySelector(".drops");
var dropMenu = document.querySelector(".dropdown-menu");
var dropDown = document.getElementById("dropdown-button");
var myCheckbox = document.getElementsByName("myCheckbox");
var checkBoxes = document.querySelector(".check");
var mexican = document.querySelector("#mexican");
var american = document.querySelector("#american");
var chinese = document.querySelector("#chinese");
var userZip = document.getElementById('site-search')
var submit = document.getElementById('submit')

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




// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     mode: 'no-cors'
//   };
function search() {
    var zipcode = userZip.value
    fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode + '&key=AIzaSyDFd1rcFFUqsm2rWJr8kJn_tJXP8SPzmq8') 
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.results[0].geometry.location.lat)
            var lat = data.results[0].geometry.location.lat
            console.log(data.results[0].geometry.location.lng)
            var lon = data.results[0].geometry.location.lng
            getTrucks(lat, lon)
        });       
}

function getTrucks(lat, lon) {    
    fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee+shop&location=' + lat + ',' + lon + '&radius=2000&region=us&type=cafe,bakery&key=AIzaSyCvNkAXwUBzuPBRlTKvVyVuNNujHjGgb88')
        .then(response => response.json())
        .then(data => console.log(data));
}

var mex = mexican.addEventListener("change", foodType);
var merica = american.addEventListener("change", foodType);
var chin = chinese.addEventListener("change", foodType);

submit.addEventListener('click', search)
// foodSelection.addEventListener('click', changeSelection)
// findTrucks.addEventListener("click",) // add modal function))
