export const initialStore=()=>{
    return{
      message: null,
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
          return {
            ...store,
            favorites: [...store.favorites, store.characters.find((char) => char.id === action.id)]
          }
        case 'remove_fav':
          return {
            ...store,
            favorites: store.favorites.filter((fav) => fav !== action.payload.id)
            };
        default:
          throw Error('Unknown action.');
    }
  }