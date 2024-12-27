const WatchPreview = ({ selectedCase, selectedSize, selectedBand }) => {
    return (
      <div className="mt-6 p-6 border rounded-lg flex flex-col items-center">
        <div className="w-40 h-40 border border-gray-300 flex items-center justify-center">
          <p className="text-gray-500">
            {selectedCase?.material || 'Case'} + {selectedBand?.name || 'Band'}
          </p>
        </div>
        <p className="mt-4 text-lg font-medium">
          {selectedSize || 'Size'} - {selectedCase?.color || 'Color'}
        </p>
      </div>
    );
  };
  
  export default WatchPreview;
  