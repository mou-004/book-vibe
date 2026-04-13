import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import BookListCard from "../ui/BookListCard";
import { BookX } from "lucide-react";

const ListedWishlist = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);
  const [filteredReadList, setFilteredReadList] = useState(wishList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "Pages") {
        const sortedData = [...wishList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );

        setFilteredReadList(sortedData);
      } else if (sortingType === "Rating") {
        const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);

        setFilteredReadList(sortedData);
      } else if (sortingType === "Year") {
        const sortedData = [...wishList].sort(
          (a, b) => a.yearOfPublishing - b.yearOfPublishing,
        );

        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, wishList]);

  if (filteredReadList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-base-content/40">
        <BookX size={48} />
        <p className="text-lg font-medium">Your wishlist is empty</p>
      </div>
    );
  }

  return (
    <div>
      {filteredReadList.map((book, ind) => (
        <BookListCard key={ind} book={book}></BookListCard>
      ))}
    </div>
  );
};

export default ListedWishlist;
