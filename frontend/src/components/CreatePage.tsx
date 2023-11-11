import { useState } from 'react';
import axios from 'axios';

const CreatePage = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleGenerateImage = async () => {
    setError(''); // Clear any previous errors
    if (!prompt) {
      setError('Please enter a prompt.');
      return;
    }
    
    try {
      // Call the backend API to generate images
      const response = await axios.post('http://127.0.0.1:5000/api/generate-image', { prompt });
      console.log('Response:', response);
      setImageUrl(response.data.url); // Assuming the backend responds with { url: 'image_url' }
    } catch (error) {
      console.error('Error generating image:', error);
      setError('Failed to generate image. Please try again later.');
    }
  };

  return (
    <div className="create-page p-6">
      <textarea
        className="textarea w-full h-32 p-2 border rounded mb-4"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompts for your picture-book..."
      />
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleGenerateImage}
      >
        Generate Image
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {imageUrl && (
        <div className="image-gallery mt-4">
          <img src={imageUrl} alt="Generated" className="rounded shadow-lg max-w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default CreatePage;
