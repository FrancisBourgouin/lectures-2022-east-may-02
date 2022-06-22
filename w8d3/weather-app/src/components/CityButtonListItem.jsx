export default function CityButtonListItem(props) {
  const { city, onClick } = props;
  return (
    <li className={city}>
      <button onClick={onClick}>{city}</button>
    </li>
  );
}
