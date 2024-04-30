const LAT = "44.828250",
      LON = "25.021070";

const DAYS = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"],
      DAY_ORDER = [],
      NOW = new Date();

let today = NOW.getDay();
let time = NOW.toString();

for (let i = 0; i <= 5; ++i) {
    DAY_ORDER[i] = DAYS[(today + i - 1) % 7];
}

fetch("/config.json").then((response) => response.json()).then((API) => {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+LAT+"&lon="+LON+"&appid="+API.key)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let temp = toCelsius(data.list[0].main.temp);
        let h1 = document.getElementsByTagName("h1")[0];
        h1.innerHTML = "Vremea în " + data.city.name;
        let card = document.getElementsByClassName("weather")[0];
        let today = card.getElementsByClassName("today")[0];
        let todayDesc = today.getElementsByTagName("h2")[0];
        let todayDay = today.getElementsByTagName("p")[0];
        let todayWeather = today.getElementsByTagName("h2")[1];
        let nextDays = card.getElementsByClassName("next-days")[0];
        let nextDaysDivs = nextDays.children;
        todayDesc.innerHTML = data.list[0].weather[0].main;
        todayDay.innerHTML = DAY_ORDER[0] + ", " + time.slice(16,21);
        todayWeather.innerHTML = temp + "°C";
        let dayIndex = 1;
        for (day of nextDaysDivs) {
            ps = day.getElementsByTagName("p");
            ps[0].innerHTML = DAY_ORDER[dayIndex].slice(0,3);
            ps[1].innerHTML = toCelsius(data.list[8*dayIndex++ - 1].main.temp) + "°C";
        }
    });
});


function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}