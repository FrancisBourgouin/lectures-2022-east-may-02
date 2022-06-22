import { fancyTemp } from "../helpers/weatherHelper";

export default function Weather(props) {
  const { city, temp, humidity, condition } = props;
  return (
    <section className="Weather">
      <h1>Weather for {city}</h1>
      <p>
        {fancyTemp(temp)} @ {humidity}%
      </p>
      <p>{condition}</p>
    </section>
  );
}
