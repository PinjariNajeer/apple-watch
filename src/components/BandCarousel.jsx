import React, { useState } from 'react';

const bands = [
  { id: 1, name: 'Solo Loop', color: 'Pink', image: '/assets/band-pink.png' },
  { id: 2, name: 'Braided Solo Loop', color: 'Green', image: '/assets/band-green.png' },
];

const BandCarousel = ({ onBandSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((currentIndex + 1) % bands.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + bands.length) % bands.length);

  return (
    <div className="mt-6 flex items-center justify-center">
      <button onClick={prev} className="text-gray-500 hover:text-blue-500">
        &lt;
      </button>
      <div
        className="mx-6 p-4 border rounded-lg flex flex-col items-center cursor-pointer hover:shadow-lg transition"
        onClick={() => onBandSelect(bands[currentIndex])}
      >
        <img
          src={bands[currentIndex].image}
          alt={bands[currentIndex].name}
          className="w-24 h-24 object-contain"
        />
        <p className="mt-2 font-medium">{bands[currentIndex].name}</p>
        <p className="text-gray-500">{bands[currentIndex].color}</p>
      </div>
      <button onClick={next} className="text-gray-500 hover:text-blue-500">
        &gt;
      </button>
    </div>
  );
};

export default BandCarousel;
