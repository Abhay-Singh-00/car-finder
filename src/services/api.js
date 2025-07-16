export const fetchCars = async () => {
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}db.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch car data');
      }
      const data = await response.json();
      return data.cars; 
    } catch (error) {
      console.error("Fetch error:", error);
      return [];
    }
  };
  