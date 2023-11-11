import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page bg-gradient-to-r from-blue-200 via-indigo-200 to-pink-200 h-screen flex flex-col justify-center items-center">
      <header className="text-center">
        <h1 className="text-5xl text-indigo-900 font-bold mb-8">Welcome to the Picture-Book Creator</h1>
        <div className="space-x-4">
          <Link to="/create" className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200">
            Create a Picture-Book
          </Link>
          <Link to="/gallery" className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200">
            View Other People's Picture-Books
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
