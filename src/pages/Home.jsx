import { useEffect } from 'react'
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Services } from '../services/Services';

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  useEffect(() => {
	handleFetchData();
  },[]);

  const handleFetchData = async () => {
    try {
      const characters = await Services.fetchCharacters();
	  const vehicles = await Services.fetchVehicles();
	  const planets = await Services.fetchPlanets();
      console.log("Data fetched: ", characters);
	  console.log(vehicles);
	  console.log(planets);
	  dispatch({ type: "saveData", payload: {characters, vehicles, planets}})
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };

	return (
		<div styles={{color: "white", backgroundColor: "black"}}>
			<h3>Data</h3>
			{store.characters.length > 0 ? (
        store.characters.map((characters) => (
          <p key={characters.uid}>
            {characters.name}
          </p>
        ))
      ) : (
        <p className="text-center">No data available.</p>
      )}
	  </div>
	);
}; 