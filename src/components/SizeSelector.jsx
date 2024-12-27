const SizeSelector = ({ onSizeChange }) => {
    const sizes = ['42mm', '46mm'];
  
    return (
      <div className="flex justify-center space-x-4 mt-6">
        {sizes.map((size) => (
          <button
            key={size}
            className="px-6 py-2 bg-gray-200 rounded-full hover:bg-blue-200 text-gray-700 font-medium transition"
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    );
  };
  
  export default SizeSelector;
  