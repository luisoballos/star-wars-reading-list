const BASE_URL = `https://www.swapi.tech/api`;

export const Services = {
  fetchCharacters: async () => {
    try {
      const request = await fetch(`${BASE_URL}/people`);
      const response = await request.json();
      return response;
    } catch (e) {
      console.log("Error fetching people: ", e);
        return [];
    }
  },
  
  fetchVehicles: async () => {
    try {
      const request = await fetch(`${BASE_URL}/vehicles`);
      const response = await request.json();
      return response;
    } catch (e) {
      console.log("Error fetching vehicles: ", e);
        return [];
    }
  },

  fetchPlanets: async () => {
    try {
      const request = await fetch(`${BASE_URL}/planets`);
      const response = await request.json();
      return response;
    } catch (e) {
      console.log("Error fetching vehicles: ", e);
        return [];
    }
  },
};