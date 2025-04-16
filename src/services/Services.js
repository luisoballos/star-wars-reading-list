const BASE_URL = `https://www.swapi.tech/api`;

export const Services = {
  fetchCharacters: async () => {
    try {
      const response1 = await fetch(`${BASE_URL}/people`);
      const data1 = await response1.json();
  
      const characters = data1.results;
  
      const detailedCharacters = await Promise.all(
        characters.map(async (char) => {
          const response = await fetch(char.url);
          const detailData = await response.json();
          return {
            id: char.uid,
            properties: detailData.result.properties
          };
        })
      );
      return(detailedCharacters);
    } catch (e) {
      console.log("Error fetching people: ", e);
        return [];
    }
  },
  
  fetchVehicles: async () => {
    try {
      const response1 = await fetch(`${BASE_URL}/vehicles`);
      const data1 = await response1.json();
  
      const vehicles = data1.results;
  
      const detailedVehicles = await Promise.all(
        vehicles.map(async (vehi) => {
          const response = await fetch(vehi.url);
          const detailData = await response.json();
          return {
            id: vehi.uid,
            properties: detailData.result.properties
          };
        })
      );
      return(detailedVehicles);
    } catch (e) {
      console.log("Error fetching vehicles: ", e);
        return [];
    }
  },

  fetchPlanets: async () => {
    try {
      const response1 = await fetch(`${BASE_URL}/planets`);
      const data1 = await response1.json();
  
      const planets = data1.results;
  
      const detailedPlanets = await Promise.all(
        planets.map(async (planet) => {
          const response = await fetch(planet.url);
          const detailData = await response.json();
          return {
            id: planet.uid,
            properties: detailData.result.properties
          };
        })
      );
      return(detailedPlanets);
    } catch (e) {
      console.log("Error fetching planets: ", e);
        return [];
    }
  },
};