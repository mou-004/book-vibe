import React from "react";
import { use } from "react";
import BookCard from "../ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <div className="my-12 container mx-auto">
      <h2 className="font-bold text-4xl text-center mb-6 font-playfair">
        Books
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {books.map((book) => {
          return <BookCard key={book.bookId} book={book}></BookCard>;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
