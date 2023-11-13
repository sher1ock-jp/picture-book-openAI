import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-300 h-screen flex flex-col justify-center items-center px-4 sm:px-10 py-8">
      <header className="text-center px-2">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl text-white font-bold mb-2 sm:mb-4" style={{ fontFamily: 'Futura, sans-serif' }}>
          Story-Teller
        </h1>
        {/* Subtitle */}
        <h2 className="text-xl sm:text-3xl text-white font-light mb-4 sm:mb-8" style={{ fontFamily: 'Futura, sans-serif' }}>
          Embark on a Journey of Creative Storytelling & Shared Imaginations
        </h2>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <Link to="/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full text-center">
            Create a Picture-Book
          </Link>
          <Link to="/gallery" className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-violet-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full text-center">
            View Other People's Picture-Books
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;