import CityButtonListItem from "./CityButtonListItem";

export default function CityButtonList(props) {
  const { cityList, updateCityFromButton } = props;

  const parsedCities = cityList.map((city) => (
    <CityButtonListItem
      key={city}
      city={city}
      onClick={() => updateCityFromButton(city)}
    />
  ));
  return <ul>{parsedCities}</ul>;
}
