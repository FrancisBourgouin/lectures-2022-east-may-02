export default function PlantListItem(props) {
  const { id, name, type, lastWateredDate, wateringInterval, updateWateredDate } = props;

  const isWellWatered = (lastWatered, wateringInterval) => {
    const todayDate = new Date();
    const lastWateredDate = new Date(lastWatered);

    const differenceInMs = todayDate.getTime() - lastWateredDate.getTime();

    const differenceInDays = Math.floor(differenceInMs / 1000 / 86400);

    return differenceInDays < wateringInterval;
  };

  const style = {
    border: "2px solid black",
    margin: "1em",
    padding: "1em",
    borderColor: isWellWatered(lastWateredDate, wateringInterval) ? "green" : "red",
  };

  return (
    <article style={style}>
      <h1>
        {name} - {type}
      </h1>
      <h2>Last watered on: {lastWateredDate}</h2>
      <button onClick={() => updateWateredDate(id)}>WATER ME</button>
    </article>
  );
}
