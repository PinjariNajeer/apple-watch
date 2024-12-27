const CollectionSwitch = ({ onCollectionChange }) => {
    const collections = ['Series 10', 'Hermès', 'SE'];
  
    return (
      <select onChange={(e) => onCollectionChange(e.target.value)}>
        {collections.map((col) => (
          <option key={col} value={col}>
            {col}
          </option>
        ))}
      </select>
    );
  };
  
  export default CollectionSwitch;
  