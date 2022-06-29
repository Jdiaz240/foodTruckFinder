// query selector for button that says "find food trucks near you"
var findTrucks = document.querySelector('#search');
var foodSelection = document.querySelector('.drops');
var dropMenu = document.querySelector('.dropdown-menu');
var dropDown = document.getElementById('dropdown-button');



fetch('https://maps.googleapis.com/maps/api/geocode/json?address=Washington&key=AIzaSyDFd1rcFFUqsm2rWJr8kJn_tJXP8SPzmq8')
.then(response => response.json())
.then(data => console.log(data));




function selectOnlyThis(id){
  var myCheckbox = document.getElementsByName("myCheckbox");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
}


// findTrucks.addEventListener("click",) // add modal function))
