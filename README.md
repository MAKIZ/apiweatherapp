# A Simple Weather Application

[screenshot]

## My Funny Weather

> A simple weather app that will show some funny humor about the weather condition using words, gifs, or images.

# List of the technologies

> HTML, CSS, jQuery, Ajax

Sample codes

```js
  let weatherApp = function(zipcode){
    $.ajax({
      url: `${weatherApi}${zipcode}${key}`,
      success: function(data){
      getData(data);
      console.log(data);
      }
    })
  }
```

```js
        $('#cityname').html(cityName);
        $('#temp').html(temp);
        $('#deg').html('&deg');
        $('#weather').html(weather);
        $('#mintemp').html('<i class="fa fa-thermometer-half " aria-hidden="true"></i> ' + minTemp + '&deg');
        $('#maxtemp').html('<i class="fa fa-thermometer-full" aria-hidden="true"></i> ' + maxTemp + '&deg');
```
