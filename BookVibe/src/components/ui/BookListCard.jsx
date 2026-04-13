import React from "react";
import { MapPin, Users, FileText } from "lucide-react";
import { Link } from "react-router";

const BookListCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div>
      <div className="card md:card-side bg-base-100 shadow-sm border border-base-200 my-6 p-4">
        <figure className="md:w-32 w-full bg-base-300 p-6 rounded-xl shrink-0">
          <img
            src={image}
            alt={bookName}
            className="md:w-full md:h-full w-40 h-60 mx-auto object-cover rounded-lg"
          />
        </figure>

        <div className="card-body p-0 md:pl-5 gap-2">
          <h2 className="card-title text-xl font-bold font-playfair">
            {bookName}
          </h2>
          <p className="text-base-content/60 text-sm">By : {author}</p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-sm">Tag</span>
            {tags.map((tag, ind) => (
              <span
                key={ind}
                className="badge rounded-full bg-success/10 text-green-500 font-medium border-0 px-3 py-2 text-xs"
              >
                #{tag}
              </span>
            ))}
            <span className="flex items-center gap-1 text-sm text-base-content/60">
              <MapPin size={14} />
              Year of Publishing: {yearOfPublishing}
            </span>
          </div>

          <div className="flex items-center gap-5 text-sm text-base-content/60">
            <span className="flex items-center gap-1">
              <Users size={14} />
              Publisher: {publisher}
            </span>
            <span className="flex items-center gap-1">
              <FileText size={14} />
              Page {totalPages}
            </span>
          </div>

          <hr className="border-t border-base-300 my-1" />

          <div className="flex items-center gap-3">
            <span className="badge rounded-full bg-info/10 text-blue-400 border-0 px-4 py-3 text-xs font-medium">
              Category: {category}
            </span>
            <span className="badge rounded-full bg-warning/10 text-orange-400 border-0 px-4 py-3 text-xs font-medium">
              Rating: {rating}
            </span>
            <Link
              to={`/books/${bookId}`}
              className="badge rounded-full bg-green-500 text-white border-0 px-4 py-3 text-xs font-medium cursor-pointer hover:bg-green-600"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListCard;
