// query selector for button that says "find food trucks near you"
var findTrucks = document.querySelector('#search');
var foodSelection = document.querySelector('.drops');
var dropMenu = document.querySelector('.dropdown-menu');
var dropDown = document.getElementById('dropdown-button');
// var chinese = document.getElementById('drop1');
// var mexican = document.getElementById('drop2');
// var american = document.getElementById('drop3');
// var indian = document.getElementById('drop4');
var userZip = document.getElementById('site-search')
var submit = document.getElementById('submit')
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

// function changeSelection() {
//     var foodType = foodSelection.textContent;
//     console.log(foodType);
//     // var dropDown = document.getElementById('dropdown-button');

//     // dropDown.textContent = foodType;

// }

submit.addEventListener('click', search)
// foodSelection.addEventListener('click', changeSelection)
// findTrucks.addEventListener("click",) // add modal function))
