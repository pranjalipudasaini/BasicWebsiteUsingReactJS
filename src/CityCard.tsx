import React from 'react';

export interface CityCardProps {
  name?: string;
  country?: string;
  description?: string;
  imageUrl?: string;
}

const CityCard: React.FC<CityCardProps> = ({
  name = '',
  country = '',
  description = '',
  imageUrl = '',
}) => (
  <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden w-full max-w-3xl sm:max-w-4xl border hover:shadow-lg transition">
    <img
      src={imageUrl}
      alt={name}
      className="w-full sm:w-40 md:w-52 h-48 sm:h-auto object-cover"
    />
    <div className="p-4 sm:p-5 flex flex-col justify-center">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 uppercase">{name}</h2>
      <h3 className="text-xs sm:text-sm text-gray-500">{country}</h3>
      <p className="mt-2 text-xs sm:text-sm text-gray-700">{description}</p>
    </div>
  </div>
);

export default CityCard;
