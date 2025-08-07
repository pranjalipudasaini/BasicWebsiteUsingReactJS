import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import CityCard from './CityCard';
import type { CityCardProps } from './CityCard';

interface City extends CityCardProps {
  id: string;
}

function App() {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      const querySnapshot = await getDocs(collection(db, 'cities'));
      const cityList: City[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as City));
      setCities(cityList);
    };
    fetchCities();
  }, []);

  return (
  <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-900">
        Cities to Visit in Europe
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {cities.map((city) => (
          <CityCard key={city.id} {...city} />
        ))}
      </div>
    </div>
  </div>
);

}

export default App;
