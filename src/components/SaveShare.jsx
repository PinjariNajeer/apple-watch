import { saveAs } from 'file-saver';

const SaveShare = ({ configuration }) => {
  const saveConfig = () => {
    const blob = new Blob([JSON.stringify(configuration, null, 2)], { type: 'application/json' });
    saveAs(blob, 'configuration.json');
  };

  return (
    <div className="mt-6 flex justify-center space-x-4">
      <button
        onClick={saveConfig}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Save Configuration
      </button>
      <button
        onClick={() => alert('Share functionality coming soon!')}
        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
      >
        Share
      </button>
    </div>
  );
};

export default SaveShare;
