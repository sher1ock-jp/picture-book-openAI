import { useState } from 'react';
import axios from 'axios';

const CreatePage = () => {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const handleGenerateBook = async () => {
    // Here you would call the backend API to generate images
    // For this example, we'll mock the API call
    const generatedImages = await axios.post('/api/generate-book', { prompt });
    setImages(generatedImages.data);
  };

  return (
    <div className="create-page">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompts for your picture-book..."
      />
      <button onClick={handleGenerateBook}>Generate Picture-Book</button>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Page ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default CreatePage;
