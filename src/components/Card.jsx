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
      <div>
        <button className="btn btn-outline-light me-2">
          <Link to={`/description/${parent}/${id - 1}`}>See details</Link>
        </button>
        <button
          onClick={() => dispatch({ type: 'add_fav', parent: parent, id: id })}
          className={isFavorited ? 'btn btn-warning' : 'btn btn-outline-warning'}
        >
          <FontAwesomeIcon icon={faStar} />
        </button>
      </div>
    </div>
  );
};