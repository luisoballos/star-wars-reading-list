import { useEffect } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Services } from '../services/Services';
import { Card } from '../components/Card';

export const Home = () => {

  const {store, dispatch} = useGlobalReducer()

  useEffect(() => {
	  handleFetchData();
  },[]);

  const handleFetchData = async () => {
    try {
      const characters = await Services.fetchCharacters();
      const vehicles = await Services.fetchVehicles();
      const planets = await Services.fetchPlanets();
      dispatch({ type: "saveData", payload: {characters: characters, vehicles: vehicles, planets: planets}});
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };
  
  return(
    <>
      <div className="mx-5" style={{color:"white"}}>
        <h3 className="h1 my-2 text-center mt-4">CHARACTERS</h3>
        <div className="d-flex overflow-auto">
          {store.characters.map((_, i) => (
            <Card key={i} parent="characters" id={i} />
          ))}
        </div>
      </div>
      <div className="mx-5" style={{color:"white"}}>
        <h3 className="h1 my-2 text-center mt-4">VEHICLES</h3>
        <div className="d-flex overflow-auto">
          {store.vehicles.map((_, i) => (
            <Card key={i} parent="vehicles" id={i} />
          ))}
        </div>
      </div>
      <div className="mx-5" style={{color:"white"}}>
        <h3 className="h1 my-2 text-center mt-4">PLANETS</h3>
        <div className="d-flex overflow-auto">
          {store.planets.map((_, i) => (
            <Card key={i} parent="planets" id={i} />
          ))}
        </div>
      </div>
    </>

  );
};