import React, { useState } from 'react';

const cases = [
  { id: 1, material: 'Aluminum', color: 'Silver', image: '/assets/aluminum-silver.png' },
  { id: 2, material: 'Titanium', color: 'Space Black', image: '/assets/titanium-black.png' },
];

const CaseSelector = ({ onSelect }) => {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      {cases.map((c) => (
        <div
          key={c.id}
          className={`border-2 p-4 rounded-lg cursor-pointer transition-transform ${
            selectedCase === c.id ? 'border-blue-500 scale-105' : 'border-gray-300'
          }`}
          onClick={() => {
            setSelectedCase(c.id);
            onSelect(c);
          }}
        >
          <img src={c.image} alt={c.material} className="w-full h-32 object-contain" />
          <p className="text-center mt-2 font-medium">{c.material}</p>
          <p className="text-center text-gray-500">{c.color}</p>
        </div>
      ))}
    </div>
  );
};

export default CaseSelector;
