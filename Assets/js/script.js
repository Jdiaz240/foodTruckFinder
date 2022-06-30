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


function selectOnlyThis(id) {
    Array.prototype.forEach.call(myCheckbox, function (el) {
        el.checked = false;
    });
    id.checked = true;
}

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     mode: 'no-cors'
//   };
function foodType() {
    let foodTypes = mexican.checked
        ? mexican.value
        : american.checked
            ? american.value
            : chinese.value;
    console.log(foodTypes);
    submit.addEventListener('click', search)
    function search() {
      var beginning = document.querySelector('.begin')
      var hide = beginning.setAttribute('class', 'hide');
        var zipcode = userZip.value
        fetch('https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode + '&key=AIzaSyDFd1rcFFUqsm2rWJr8kJn_tJXP8SPzmq8')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log(data.results[0].geometry.location.lat)
                var lat = data.results[0].geometry.location.lat
                console.log(data.results[0].geometry.location.lng)
                var lon = data.results[0].geometry.location.lng
                getTrucks(lat, lon, foodTypes)
            });
    }
}


function getTrucks(lat, lon, foodTypes) {
    fetch('https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=food+truck+' + foodTypes + '&location=' + lat + ',' + lon + '&radius=2000&region=us&type=food&key=AIzaSyCvNkAXwUBzuPBRlTKvVyVuNNujHjGgb88')
        .then(response => response.json())
        .then(data => {
            console.log(foodTypes)
            console.log(data)
            renderData(data)
        });
}

function renderData(data) {
    var results = data.results
    var onPage = document.getElementById('row1')
    for (let i = 0; i < 10; i++) {
      let truck = results[i].name;

      // var div1 = document.createElement("div").setAttribute("class", "col-lg-2 mb-4 mx-3");
      // var div2 = document.createElement("div").setAttribute("class", "card p-5 mt-3");
      // var div3 = document.createElement("div").setAttribute("class","card-body");
      // var h5 = document.createElement("h5");
      // h5.setAttribute("class", "card-title");
      // h5.innerHTML = truck;
      // div1.appendChild(div2);
      // div2.appendChild(div3);
      // div3.appendChild(h5);
      // onPage.appendChild(div1);
      // let div = document.createElement('div').setAttribute('class', 'col')
      //   cards.append(truck)
      //   div.textContent = '<div class h-100>\n\<div class="card-body">\n\<h5 class="card-title>' + truckName + '</h5>\n\<p>this works</p>\n\</div>\n\</div>\n\</div>\n\</div>'  
   }              
}




mexican.addEventListener("change", foodType);
american.addEventListener("change", foodType);
chinese.addEventListener("change", foodType);


// foodSelection.addEventListener('click', changeSelection)
// findTrucks.addEventListener("click",) // add modal function)