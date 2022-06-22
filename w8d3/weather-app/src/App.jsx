import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import CityForm from "./components/CityForm";
import CityButtonList from "./components/CityButtonList";
import Weather from "./components/Weather";

import "./App.scss";
import { cleanWeatherData } from "./helpers/weatherHelper";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 09fd719b4b698ec0260e424f83378e3d

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [cityList, setCityList] = useState([]);

  // useEffect(() => {
  //   if (currentCity) {
  //     fetchWeather(currentCity);
  //   }
  // }, [currentCity]);

  const updateCityFromForm = (formData) => {
    fetchWeatherByCity(formData.city)
      .then((data) => {
        setCurrentCity(formData.city);
        setWeatherData(data);
        if (!cityList.includes(formData.city)) {
          setCityList([...cityList, formData.city]);
        }
      })
      .catch((err) => {
        console.log(err);
        setCurrentCity("");
        setWeatherData(null);
      });
  };

  const updateCityFromButton = (city) => {
    fetchWeatherByCity(city)
      .then((data) => {
        setCurrentCity(city);
        setWeatherData(data);
      })
      .catch((err) => {
        console.log(err);
        setCurrentCity("");
        setWeatherData(null);
      });
  };

  const fetchWeatherByCity = (city) => {
    const WEATHER_API_KEY = "09fd719b4b698ec0260e424f83378e3d";
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
      )
      .then((res) => res.data);
  };

  const fetchWeatherByLatLong = (lat, lon) => {
    const WEATHER_API_KEY = "09fd719b4b698ec0260e424f83378e3d";
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      )
      .then((res) => res.data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherByLatLong(position.coords.latitude, position.coords.longitude)
        .then((data) => {
          setCurrentCity(data.name);
          setWeatherData(data);
        })
        .catch((err) => {
          console.log(err);
          setCurrentCity("");
          setWeatherData(null);
        });
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <CityForm onSubmit={updateCityFromForm} />
      <CityButtonList cityList={cityList} updateCityFromButton={updateCityFromButton} />
      {/* <Weather {...cleanWeatherData(weatherData)} /> */}
      {weatherData && <Weather {...cleanWeatherData(weatherData)} />}
    </div>
  );
}

export default App;
