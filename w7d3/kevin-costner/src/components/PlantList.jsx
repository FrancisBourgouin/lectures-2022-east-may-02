import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { listOfPlants, updateWateredDate } = props;

  // const parsedItems = listOfPlants.map((plant) => (
  //   <PlantListItem
  //     name={plant.name}
  //     type={plant.type}
  //     lastWateredDate={plant.lastWateredDate}
  //     wateringInterval={plant.wateringInterval}
  //   />
  // ));

  const parsedItems =
    Array.isArray(listOfPlants) && // Making sure that the input is an array (safe)
    listOfPlants.map((plant) => (
      <PlantListItem key={plant.id} {...plant} updateWateredDate={updateWateredDate} />
    ));

  return (
    <main>
      <h1>List of plants</h1>
      {parsedItems}
    </main>
  );
}
