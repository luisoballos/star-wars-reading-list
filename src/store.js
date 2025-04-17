export const initialStore=()=>{
    return{
      characters: [],
      vehicles: [],
      planets: [],
      searchResults: [],
      favorites: []
    }
  }
  
  export default function storeReducer(store, action = {}) {
    switch(action.type){
      case 'saveData':
        return {
          ...store,
          characters: action.payload.characters,
          vehicles: action.payload.vehicles,
          planets: action.payload.planets
        }
      case 'add_fav':
        const alreadyExists = store.favorites.some(
          fav => fav.parent === action.parent && fav.id === action.id
        );
        return {
          ...store,
          favorites: alreadyExists
            ? store.favorites
            : [...store.favorites, { parent: action.parent, id: action.id }]
        };
      
      case 'remove_fav':
        return {
          ...store,
          favorites: store.favorites.filter(
            fav => !(fav.parent === action.parent && fav.id === action.id)
          )
        };
      default:
        throw Error('Unknown action.');
    }
  }