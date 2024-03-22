const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");

const api = {
  key: "83a26b3e594c180056a774079013adfb",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    GetInfo(searchbox.value);
  }
}

document.querySelector(".btn").addEventListener("click", function () {
  searchCity();
});

function searchCity() {
  getResults(document.querySelector(".search-box").value);
  GetInfo(document.querySelector(".search-box").value);
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(
    weather.main.temp_max
  )}°C`;

  const { icon } = weather.weather[0];
  document.querySelector(".icon").src =
    "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + weather.name + "')";
}

getResults("Bucharest");

function GetInfo(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=83a26b3e594c180056a774079013adfb"
  )
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Min").innerHTML =
          "Min:  " +
          Number(data.list[i].main.temp_min - 273.15).toFixed(1) +
          "°C";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Max").innerHTML =
          "Max:  " +
          Number(data.list[i].main.temp_max - 273.15).toFixed(1) +
          "°C";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("icon" + (i + 1)).src =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }

      console.log(data);
    })

    .catch((err) =>
      alert("Something Went Wrong: Try Checking Your Internet Conection")
    );
}

var d = new Date();
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function CheckDay(dayy) {
  if (dayy + d.getDay() > 6) {
    return dayy + d.getDay() - 7;
  } else {
    return dayy + d.getDay();
  }
}

for (i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}

GetInfo("Bucharest");

const spinner = document.getElementById("spinner");

function loadData() {
  spinner.removeAttribute("hidden");
  fetch("https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=5000ms")
    .then((response) => response.json())
    .then((data) => {
      spinner.setAttribute("hidden", "");
      console.log(data);
    });
}

function activatePlacesSearch() {
  var input = document.getElementById("search_term");
  var autocomplete = new google.maps.places.Autocomplete(input);
}

autocomplete.addEventListener("click", setQuery1);
function setQuery1(evt) {
  getResults(autocomplete);
  GetInfo(autocomplete);
}
