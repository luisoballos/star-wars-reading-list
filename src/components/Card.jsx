import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({ parent, id }) => {
  const { store , _ } = useGlobalReducer();
  const item = store[parent]?.[id - 1]; 

  if (!item) return null;

  return (
    <div className="p-5 border">
      <img className="w-100 border" />
      <h2 className="pb-2 capitalize">
        {item.properties.name}
      </h2>
      {parent === "characters" && (
        <>
          <p>Gender: {item.properties.gender}</p>
          <p>Hair Color: {item.properties.hair_color}</p>
          <p>Eye Color: {item.properties.eye_color}</p>
        </>
      )}
      {parent === "vehicles" && (
        <>
          <p>Model: {item.properties.model}</p>
          <p>Manufacturer: {item.properties.manufacturer}</p>
        </>
      )}
      {parent === "planets" && (
        <>
          <p>Climate: {item.properties.climate}</p>
          <p>Terrain: {item.properties.terrain}</p>
        </>
      )}
      <button className="btn btn-outline-light"><Link to={`/description/${parent}/${id - 1}`}>See details</Link></button>
    </div>
  );
};