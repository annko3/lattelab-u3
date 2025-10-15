import React, { useState, useEffect } from "react";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=a&maxResults=25")
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          const formattedBooks = data.items.map((book) => ({
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors?.join(", ") || "Autor desconocido",
            description: book.volumeInfo.description || "Sin descripción disponible.",
            thumbnail: book.volumeInfo.imageLinks?.thumbnail || "/no-cover.png",
          }));
          setBooks(formattedBooks);
        }
      })
      .catch((error) => console.log("Error al cargar los libros: ", error));
  }, []);

  return (
    <section className="bg-background text-brown-dark">
      <h1 className="font-bold text-4xl mb-5 text-brown-dark">Libros</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 hover:cursor-pointer">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl outset-border border-1 border-brown-dark transition-transform duration-300 hover:scale-103 hover:shadow-lg hover:shadow-red overflow-hidden"
          >
            <img
                src={book.thumbnail}
                alt={book.title}
                className="w-full object-cover rounded-lg mb-3"
              />
            <div className="p-4">
              
              <h3 className="font-bold text-2xl mb-5 text-brown-dark line-clamp-3">
                {book.title}
              </h3>
              <p className="line-clamp-3">{book.description}</p>
              <p className="font-light line-clamp-1">{book.authors}</p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Books;
