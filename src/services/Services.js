const BASE_URL = `https://www.swapi.tech/api`;

export const Services = {
  fetchInfo: async (section) => {
    try {
      const response = await fetch(`${BASE_URL}/${section}`);
      const data = await response.json();
      const info = data.results;
  
      const detailedInfo = await Promise.all(
        info.map(async (sect) => {
          const response1 = await fetch(sect.url);
          const detailData = await response1.json();
          return {
            id: sect.uid,
            properties: detailData.result.properties
          };
        })
      );
      return(detailedInfo);
    } catch (e) {
      console.log(`Error fetching ${section}: `, e);
        return [];
    }
  },
};