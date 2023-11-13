import { useState } from 'react';
import axios from 'axios';

const CreatePage = () => {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState('');

  const maxImages = 10;

  const handleGenerateImage = async () => {
    setError('');
    if (!prompt) {
      setError('Please enter a prompt.');
      return;
    }

    if (images.length >= maxImages) {
      setError(`You have reached the maximum number of images (${maxImages}).`);
      return;
    }
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/generate-image', { prompt });
      console.log('Response:', response);
      setImages([...images, response.data.url]); 
      setPrompt('');
    } catch (error) {
      console.error('Error generating image:', error);
      setError('Failed to generate image. Please try again later.');
    }
  };

  return (
    <div className="create-page bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-300 min-h-screen flex flex-col justify-center items-center px-4 sm:px-10 py-8">
      <div className="prompt-area mb-4 p-4 border rounded shadow-lg w-full max-w-md">
        <textarea
          className="w-full p-2 resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your creative prompt here"
          style={{ fontFamily: 'Futura, sans-serif', minHeight: '4rem' }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out mt-2 w-full"
          onClick={handleGenerateImage}
        >
          Generate Image
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <div className="book-display-area">
        <div className="image-gallery grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Scene ${index + 1}`}
              className="rounded shadow-lg w-full h-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatePage;