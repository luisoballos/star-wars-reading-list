import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Favorites = () => {
  const { store, dispatch } = useGlobalReducer()

  return (
    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
      {store.favorites.map(({ parent, id }) => {
        const item = store[parent]?.find((favd) => favd.id === id);
        return item ? (
          <li key={`${parent}-${id}`} className="d-flex">
            <span className="my-auto ms-1">{item.properties?.name}</span>
            <button
              className="btn ms-auto"
              onClick={() => dispatch({ type: 'remove_fav', parent, id })}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ) : null;
      })}
    </ul>
  );
};