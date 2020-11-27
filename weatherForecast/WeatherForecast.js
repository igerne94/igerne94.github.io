const forecast = document.getElementById('forecast');

forecast.addEventListener('click', getForecast);

function getForecast() {
    console.log("pressed");
    const inputElem = document.getElementById('location');
    const location = inputElem.value;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location
    + '&appid=6fa1c171e9be35b55af68decbb9889a3&units=metric';

    if(!location) {
        return;
    }
    fetch(url)
        .then(function (response) {
                response.json().then(function (data) {

                    const BR = '</br>'
                    let res = BR;

                    res+='Temperature is: ' + data.main.temp + BR;
                    res+='Feels like: ' + data.main.feels_like+ BR;
                    res+='Humidity is: ' + data.main.humidity + BR;
                    res+='Wind is: ' + data.wind.speed + BR;
                    res+='Clouds: ' + data.clouds.all + BR;

                    console.log(res);

                    let span = document.getElementById('result');
                    span.innerHTML = res;
             });
        });
}
