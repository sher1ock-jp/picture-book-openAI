import { useState, useEffect } from 'react';
import axios from 'axios';

const maxImages = 10;
const preloadImages = [
  'png1.jpeg',
  'png2.jpeg',
  'png3.jpeg',
  'png4.jpeg',
  'png5.jpeg',
  'png6.jpeg',
  'png7.jpeg',
  'png8.jpeg',
  'png9.jpeg',
  'png10.jpeg',
];

type BookPageProps = {
  imageSrc: string;
  pageIndex: number;
};


const CreatePage = () => {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState(preloadImages);
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState('');
  
  // Preload images on component mount
  useEffect(() => {
    setImages(preloadImages);
  }, []);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % images.length);
  };


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

  const BookPage = ({ imageSrc, pageIndex }: BookPageProps) => (
    <div className="page">
      <img src={imageSrc} alt={`Scene ${pageIndex}`} className="object-contain w-full h-full" />
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-300 p-4">
       <div className="relative w-full max-w-3xl h-96">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Scene ${index + 1}`}
            className={`absolute inset-0 object-contain w-full h-full transition duration-700 ease-in-out ${index === currentPage ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ‹
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          ›
        </button>
      </div>
      <div className="w-full max-w-3xl p-4 border rounded shadow-lg mb-4">
        <textarea
          className="w-full resize-none p-2 border rounded focus:outline-none"
          placeholder="Enter your creative prompt here"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="w-full mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          onClick={handleGenerateImage}
        >
          Generate Image
        </button>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default CreatePage;