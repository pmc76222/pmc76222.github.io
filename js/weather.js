const API_KEY = "b85da51aa888a958d05b676821c70cfa";

async function onGeook(position) {
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    let response = await fetch(url);
    let data = await response.json();
    const weather = document.querySelector('#weather span:last-child');
    const temp = document.querySelector('#weather #temp');
    const city = document.querySelector('#weather span:first-child');
    city.innerText = data.name;
    temp.innerText = data.main.temp;
    weather.innerText = data.weather[0].main;
}

function onGeoError() {
   alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeook,onGeoError)