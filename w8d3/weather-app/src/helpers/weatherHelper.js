export const fancyTemp = (tempInK) => `${Math.round(tempInK - 273.15)}°C`;

export const cleanWeatherData = (weatherData) => {
  if (weatherData) {
    const fancyOutput = {
      temp: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      condition: weatherData.weather[0].description,
      city: weatherData.name,
    };

    return fancyOutput;
  }

  return {};
};
