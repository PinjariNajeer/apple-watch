const PriceDisplay = ({ basePrice, selectedCase, selectedBand }) => {
    const totalPrice = basePrice + (selectedCase?.price || 0) + (selectedBand?.price || 0);
  
    return (
      <div className="mt-6 text-center">
        <p className="text-2xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    );
  };
  
  export default PriceDisplay;
  