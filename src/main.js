console.log('main.js is connected!');

let weatherApi = "http://api.openweathermap.org/data/2.5/weather?zip=";
let key = ",us&APPID=c3455162e8b679d976ca9ed0df540c26";

$(function(){
  console.log('script loaded.')

  let weatherApp = function(zipcode){
    $.ajax({
      url: `${weatherApi}${zipcode}${key}`,
      success: function(data){
      getData(data);
      console.log(data);
      }
    })
  }

    var getData = function(data) {
        let cityName = data.name;
        let temp = data.main.temp;
        let weather = data.weather[0].description;
        let minTemp = data.main.temp_min;
        let maxTemp = data.main.temp_max;
        console.log(weather);
        console.log(cityName);

        //kelvin to fahrenheit
        temp = Math.floor(temp * 9/5 - 459.67);
        minTemp = Math.floor(minTemp * 9/5 - 459.67);
        maxTemp = Math.floor(maxTemp * 9/5 - 459.67);
        console.log(temp);
        console.log(minTemp);
        console.log(maxTemp);
  
      manipulateDom(cityName, temp, weather, minTemp, maxTemp)
      }

      let manipulateDom = function(cityName, temp, weather, minTemp, maxTemp) {
      
        $('#cityname').html(cityName);
        $('#temp').html(temp);
        $('#deg').html('&deg');
        $('#weather').html(weather);
        $('#mintemp').html('<i class="fa fa-thermometer-half " aria-hidden="true"></i> ' + minTemp + '&deg');
        $('#maxtemp').html('<i class="fa fa-thermometer-full" aria-hidden="true"></i> ' + maxTemp + '&deg');

      }

  $('#btn').click(function(){
    let typeZipcode = $('input').val();
    weatherApp(typeZipcode);
  })

})