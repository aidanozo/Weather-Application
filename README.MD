[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9671290&assignment_repo_type=AssignmentRepo)
# Weather viewer application

## Story

People Always Talk About The Weather...

They are also always checking the weather in native and web applications.

Now you can go further and create your own web based Weather application!

## What are you going to learn?

- Create a GET requests
- Getting data from an open API
- Working with JSON files

## Tasks

1. Create a simple input field with an autocomplete feature (when the user starts typing, after 3 characters a list of cities appear which matches that search). Create a card that shows the weather data (temperature, sky conditions, humidity, etc.) of the selected city.  Searching and selecting a new city should update the card.
    - When we open up the page, there is a simple input field with an autocomplete feature that shows search matches after 3 characters
    - When we search and select a city, the weather of this city is showing up
    - A way to access and view the forecast for the next five days.

2. Do some improvements in order to make the web application more interesting.
    - There is a button to put a city into the favourites, which list shows up when the input field is selected and the input is empty (the favourite list data doesn't need to persist after a reload, but the [LocalStorge API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) could be used to persist the list)
    - Weather panel is showing a fetch api spinner while the content is loading [Sample loading fetch API spinner on Codepen](https://codepen.io/wang0nya/pen/bzwQPr).
    - Assign a nice background image to the chosen city that fits nicely to the site and apply it on the background. You can create object which store city name and image url. You can also
    - You can use Pexels API to get image for chosen city dynamically. Read the official [Pexels API Documentation](https://www.pexels.com/api/documentation).
    - Generate a free API key from in order to access the Pexels API.
    - Use presented endpoint to get image for chosen city e.g. for Bucharest: https://api.pexels.com/v1/search?query=Bucharest

## General requirements

- There is a `<div id="root">` tag without children when the page loads in
- All the contents are placed and removed by javascript

## Hints

- There are multiple APIs you can use for weather:
    - [WeatherApi](https://www.weatherapi.com/docs/).
    - [OpenWeatherMap](https://openweathermap.org/api)
    - [OpenMeteo](https://open-meteo.com/en)
    - And many other more, just search for "free weather API"
- For searching for citites try to find an API that exposes a list of cities.
- For students that want to play around with frameworks, this project can also be implemented using a frontend framework like React or Vue.

## Background materials

- <i class="far fa-exclamation"></i> [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- <i class="far fa-exclamation"></i> [JavaScript Fetch API Examples](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
- <i class="far fa-exclamation"></i> [Weather API](https://www.weatherapi.com/docs/)
- <i class="far fa-exclamation"></i> [Example autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)
- <i class="far fa-book-open"></i> [CSS Weather Widgets you can draw inspiration from - Do NOT copy and paste one, create your own!](https://freefrontend.com/css-weather-widgets/)
