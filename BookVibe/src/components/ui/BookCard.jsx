import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link
      to={`/bookDetails/${bookId}`}
      className="card bg-base-100 shadow-sm rounded-2xl transition-all duration-150 active:scale-[0.985] cursor-pointer"
    >
      <figure className="p-6 m-6 rounded-xl bg-base-300">
        <img src={image} alt={bookName} className="rounded h-62.5" />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge rounded-full bg-success/10 text-[#23BE0A] font-medium"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title font-bold text-2xl font-playfair">
          {bookName}
        </h2>
        <p className="font-medium text-lg text-base-content/80">
          By : {author}
        </p>

        <div className="card-actions justify-between border-t-2 border-dashed border-base-content/15 pt-4 text-lg font-medium text-base-content/80">
          <div>{category}</div>
          <div className="flex items-center gap-2">
            {rating} <Star />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
