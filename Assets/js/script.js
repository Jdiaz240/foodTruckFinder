function test() {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' ,{
    method: 'GET',
    headers: {}
    })
    .then(function (response) {
        return response.json();
      })
  
      .then(function (body) {
      })
}