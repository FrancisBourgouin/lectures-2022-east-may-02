import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Madness from "./components/Madness";
import PlantList from "./components/PlantList";
import { plantListArr, plantListObj } from "./data/plantData";

function App() {
  const [listOfPlants, setListOfPlants] = useState(plantListObj);
  const [number, setNumber] = useState(5);
  // console.log("current number value is", number);

  const listOfPlantValues = Object.values(listOfPlants);
  const updateWateredDateArr = (id) => {
    const todayDate = new Date();
    const todayString = todayDate.toLocaleDateString();

    // Find the plant
    const plantToChange = listOfPlants.find((plant) => plant.id === id);
    const plantToChangeIndex = listOfPlants.findIndex((plant) => plant.id === id);
    // Shallow Copy the plant
    const copiedPlant = { ...plantToChange };
    copiedPlant.lastWateredDate = todayString;

    // Shallow Copy of the plant list
    const newPlantList = [...listOfPlants];
    newPlantList[plantToChangeIndex] = copiedPlant;

    setListOfPlants(newPlantList);
  };

  const updateWateredDateObj = (id) => {
    const todayDate = new Date();
    const todayString = todayDate.toLocaleDateString();

    const updatedPlant = { ...listOfPlants[id], lastWateredDate: todayString };
    const updatedPlantList = { ...listOfPlants, [id]: updatedPlant };

    // const updatedPlantList = { ...listOfPlants };
    // updatedPlantList[id] = updatedPlant;
    console.log(updatedPlantList);
    setListOfPlants(updatedPlantList);
  };

  const updateAllThePlants = () => {
    for (const key in listOfPlants) {
      updateWateredDateObj(key);
    }
  };

  return (
    <div className="App">
      {/* <button onClick={() => setNumber(10)}>10</button>
      <button onClick={() => setNumber(20)}>20</button> */}
      {/* <button onClick={updateAllThePlants}>WATER EVERYTHING</button>
      <Header />
      <PlantList
        listOfPlants={listOfPlantValues}
        updateWateredDate={updateWateredDateObj}
      /> */}
      <Madness />
    </div>
  );
}

export default App;

// const SomeForm = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("") // MEH
//   const [weather, setWeather] = useState({})

//   const handleEmailChange = event => setEmail(event.target.value)
//   const handlePasswordChange = event => setPassword(event.target.value)

//   const [formData, setFormData] = useState({email:"", password:""})
//   const [weather, setWeather] = useState({})

//   const handleChange = event => setFormData({...formData, [event.target.name]:event.target.value})
// }
