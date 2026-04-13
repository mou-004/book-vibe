import React from "react";
import { useContext } from "react";
import { use } from "react";
import { useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { id } = useParams();

  const books = use(booksPromise);

  const expectedBook = books.find((book) => book.bookId === Number(id));

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;


  const { handleMarkAsRead, handleWishList } = useContext(BookContext);


  

  return (
    <div className="card lg:card-side bg-base-100 container mx-auto mb-6">
      <figure className="lg:w-82 w-full shrink-0 bg-base-300 rounded-xl p-6">
        <img
          src={image}
          alt={bookName}
          className="h-100 rounded shadow-md font-playfair"
        />
      </figure>

      <div className="card-body space-y-3 p-6">
        <h2 className="text-3xl font-bold font-playfair">{bookName}</h2>
        <p className="text-base-content/80">By : {author}</p>
        <p className="py-2 border-y border-base-300 text-base-content/80">
          {category}
        </p>

        <div>
          <span className="font-bold">Review : </span>
          <span className="text-base-content/70 text-sm leading-relaxed">
            {review}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-bold">Tag</span>
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge rounded-full bg-success/10 text-[#23BE0A] font-medium px-3 py-2"
            >
              #{tag}
            </div>
          ))}
        </div>

        <div className="border-t border-base-300 pt-3 space-y-2">
          <div className="flex items-center gap-16">
            <span className="text-base-content/70 w-35">Number of Pages:</span>
            <span className="font-bold">{totalPages}</span>
          </div>
          <div className="flex items-center gap-16">
            <span className="text-base-content/70 w-35">Publisher:</span>
            <span className="font-bold">{publisher}</span>
          </div>
          <div className="flex items-center gap-16">
            <span className="text-base-content/70 w-35">
              Year of Publishing:
            </span>
            <span className="font-bold">{yearOfPublishing}</span>
          </div>
          <div className="flex items-center gap-16">
            <span className="text-base-content/70 w-35">Rating:</span>
            <span className="font-bold">{rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <button
            onClick={() => handleMarkAsRead(expectedBook)}
            className="btn btn-outline border-base-content/20"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishList(expectedBook)}
            className="btn bg-[#50C0C0] hover:bg-[#3aadad] text-white"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
