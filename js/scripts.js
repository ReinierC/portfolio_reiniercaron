$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();



function submitForm(){
// Initiate Variables With Form Content
var name = $("#name").val();
var email = $("#email").val();
var message = $("#message").val();

$.ajax({
    type: "POST",
    url: "../contactgegevens/process.php",
    data: "name=" + name + "&email=" + email + "&message=" + message,
    success : function(text){
        if (text == "success"){
            formSuccess();
        }
        else if (text == "invalid") {
            formInvalid();
        }
    }
});
}
function formSuccess(){
$( "#msgSubmit" ).removeClass( "hidden" );
}

});

//Weer api
$(document).ready(function() {

//Location Lat+Long from API
  $(function getAPI() {
    $.get("https://ipinfo.io/geo",function(yourLocation){
      var array=yourLocation.loc.split(",");
      lat=array[0];
      lon=array[1]
    getWeather();
    });
  });

//GET WEATHER DATA
  function getWeather() {
      $.get('https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + lon + '', function(data){
      tempC = data.main.temp.toFixed(0);
      tempF = toF(tempC);
      pressure = data.main.pressure;
      humidity = data.main.humidity;
      descr = data.weather[0].description;
      name = data.name;
      country = data.sys.country;
      wImage = data.weather[0].icon;

     console.log(data);

      $('#city').html(name + " - ");
      $('#country').html(country);
      $('#tempCelcius').html(tempC);
      $('#tempFahrenheit').html(tempF);
      $('#summary').html(descr);
      $('#image').attr('src', wImage);
    });
  }

  $('#area').on('click', function() {$('#tempFahrenheit').toggleClass('hide')})
            .on('click', function() {$('#f').toggleClass('hide')})
            .on('click', function() {$('#tempCelcius').toggleClass('hide')})
            .on('click', function() {$('#Celsius').toggleClass('hide')});

//TEMP CONVERSION
  function toC(n) {
    n = (n-32) * 5/9;
    return n.toFixed(0);
  }

  function toF(n){
    n = n * 1.8 + 32;
    return n.toFixed(0);
  }

});
