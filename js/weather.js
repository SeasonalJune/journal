
const weather = document.querySelector("#weather h2:last-child");
const city = document.querySelector("#weather h2:first-child");
const API_KEY = "98826e932ee2cddb6748f1570de6787e";

function YesGeo(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `${data.name}`;
      weather.innerText = `Today: ⛅${data.weather[0].main}
      🌡️${data.main.temp}°C`;
    });
}

function NoGeo() {
    alert("Can't find your location. No weather info for you.");
}

navigator.geolocation.getCurrentPosition(YesGeo, NoGeo);