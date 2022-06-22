# Weather App

# Project Description

Fetches the weather based on a city, creates a button for new cities, fetches user position on first load

# User Stories

- User can enter a city in the form and view the weather
- User can click on a button and view the weather
- User can see their local weather on first load

# Packages

## Frontend

- CRA (Vite)
- Sass
- Axios

## Backend

- Axios ?
- Express

# Data structure

## City

```jsx
const currentCity = "";
```

## Cities

```jsx
const listOfCities = [];
const fancyListOfCities = new Set();
```

## Weather

Temp: weatherResponse.main.temp
Humidity: weatherResponse.main.humidity
Conditions: weatherResponse.weather[0].description
City: weatherResponse.name

```jsx
const weatherResponse = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 10000,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: "Mountain View",
  cod: 200,
};
```

# Mock Data

# HTML Structure

- body
  - header
    - h1
  - form
    - input city name
    - button
  - ul
    - li
      - button
  - section
    - h1 title section w/ city
    - p temp + humidity
    - p description

# Component Structure

- App
  - Header
  - CityForm
  - CityButtonList
    - CityButtonListItem
  - Weather

# Steps

- PLANNING
- Build mockups / data structures
- Fight between mockup vs ERD (data structure)
- Static version of Frontend (Spearhead one feature)
- Static version of Backend
- Dynamic version of Frontend (up to network)
- Dynamic version of Backend (up to res.json)
- Connect time!
- Make it fancy time

# APIs

- openWeatherAPI
