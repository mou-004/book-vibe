import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import BookListCard from "../ui/BookListCard";
import { BookOpen } from "lucide-react";

const ListedReadList = ({ sortingType }) => {
  const { readList } = useContext(BookContext);
  const [filteredReadList, setFilteredReadList] = useState(readList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "Pages") {
        const sortedData = [...readList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );

        setFilteredReadList(sortedData);
      } else if (sortingType === "Rating") {
        const sortedData = [...readList].sort((a, b) => a.rating - b.rating);

        setFilteredReadList(sortedData);
      } else if (sortingType === "Year") {
        const sortedData = [...readList].sort(
          (a, b) => a.yearOfPublishing - b.yearOfPublishing,
        );

        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, readList]);

  if (filteredReadList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-base-content/40">
        <BookOpen size={48} />
        <p className="text-lg font-medium">Your read list is empty</p>
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

export default ListedReadList;
