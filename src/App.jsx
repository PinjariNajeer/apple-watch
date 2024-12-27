import React, { useState } from 'react';
import CaseSelector from './components/CaseSelector';
import SizeSelector from './components/SizeSelector';
import BandCarousel from './components/BandCarousel';
import WatchPreview from './components/WatchPreview';
import PriceDisplay from './components/PriceDisplay';
import SaveShare from './components/SaveShare';

const App = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Apple Watch Studio</h1>
      <CaseSelector onSelect={setSelectedCase} />
      <SizeSelector onSizeChange={setSelectedSize} />
      <BandCarousel onBandSelect={setSelectedBand} />
      <WatchPreview selectedCase={selectedCase} selectedSize={selectedSize} selectedBand={selectedBand} />
      <PriceDisplay basePrice={399} selectedCase={selectedCase} selectedBand={selectedBand} />
      <SaveShare configuration={{ selectedCase, selectedSize, selectedBand }} />
    </div>
  );
};

export default App;
