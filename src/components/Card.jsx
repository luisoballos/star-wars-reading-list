import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Card = ({ parent, id }) => {
  const { store , dispatch } = useGlobalReducer();
  const item = store[parent]?.[id - 1]; 

  if (!item) return null;

  const isFavorited = store.favorites.some(
    (fav) => fav.id === id && fav.parent === parent
  );  

  return (
    <div
      className="p-5 border d-flex flex-column"
      style={{"minWidth": "275px", "minHeight":"400px"}}>
      <img className="w-100 border mb-2" style={{"height":"100px"}} />
      <h2>
        {item.properties.name}
      </h2>
      {parent === "characters" && (
        <>
          <span>Gender: {item.properties.gender}</span>
          <span>Hair Color: {item.properties.hair_color}</span>
          <span>Eye Color: {item.properties.eye_color}</span>
        </>
      )}
      {parent === "vehicles" && (
        <>
          <span>Model: {item.properties.model}</span>
          <span>Manufacturer: {item.properties.manufacturer}</span>
        </>
      )}
      {parent === "planets" && (
        <>
          <span>Climate: {item.properties.climate}</span>
          <span>Terrain: {item.properties.terrain}</span>
        </>
      )}
      <div className="d-flex mt-auto">
        <button className="btn btn-outline-light">
          <Link to={`/description/${parent}/${id - 1}`}>See details</Link>
        </button>
        <button
          onClick={() => dispatch({ type: 'add_fav', parent: parent, id: id })}
          className={isFavorited ? "btn btn-warning ms-auto" : "btn btn-outline-warning ms-auto"}
        >
          <FontAwesomeIcon icon={faStar} />
        </button>
      </div>
    </div>
  );
};