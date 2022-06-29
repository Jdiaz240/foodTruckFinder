// query selector for button that says "find food trucks near you"
var findTrucks = document.querySelector('#search');
var foodSelection = document.querySelector('.drops');
var dropMenu = document.querySelector('.dropdown-menu');
var dropDown = document.getElementById('dropdown-button');
// var chinese = document.getElementById('drop1');
// var mexican = document.getElementById('drop2');
// var american = document.getElementById('drop3');
// var indian = document.getElementById('drop4');



fetch('https://maps.googleapis.com/maps/api/geocode/json?address=Washington&key=AIzaSyDFd1rcFFUqsm2rWJr8kJn_tJXP8SPzmq8')
.then(response => response.json())
.then(data => console.log(data));

// $(function(){
  
//   $(".drops").click(function(){
    
//     $("#dropdown-button").text($(this).text());
//     //  $(".btn:first-child").val($(this).text());
//   });

// });


function changeSelection () {
  var foodType = foodSelection.textContent;
  console.log(foodType);
  // var dropDown = document.getElementById('dropdown-button');

  // dropDown.textContent = foodType;
  
}


foodSelection.addEventListener('click', changeSelection)
// findTrucks.addEventListener("click",) // add modal function))
