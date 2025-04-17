import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Favorites = () => {
  const { store, dispatch } = useGlobalReducer()

  return (
    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
      {store.favorites.map(( fav, i ) => {
        const item = store[fav.parent][fav.id];
        console.log(item);
        return item ? (
          <li key={i} className="d-flex">
            <span className="my-auto ms-1">{item.properties?.name}</span>
            <button
              className="btn ms-auto"
              onClick={() => dispatch({ type: 'remove_fav', parent: parent, id: id })}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ) : <p>No favorites yet.</p>;
      })}
    </ul>
  );
};