// query selector for button that says "find food trucks near you"
var findTrucks = document.querySelector('#search');
var zipcode;

function search() {


fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode + '&key=AIzaSyDFd1rcFFUqsm2rWJr8kJn_tJXP8SPzmq8')
.then(response => response.json())
.then(data => console.log(data));

}





findTrucks.addEventListener("click", search) // add modal function))
