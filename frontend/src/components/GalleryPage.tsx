import React from 'react';

const GalleryPage = () => {
  // This state would be populated with the list of available picture-books
  const [books, setBooks] = React.useState<string[]>([]);

  // Fetch the list of books from the backend on component mount
  React.useEffect(() => {
    // Mock fetching books
    setBooks(['Book1', 'Book2', 'Book3']); // Replace with actual API call
  }, []);

  return (
    <div className="gallery-page">
      <h2>Picture-Book Gallery</h2>
      <div className="book-grid">
        {books.map((book, index) => (
          <div key={index} className="book-thumbnail">
            {book} {/* You would display the book cover image here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
