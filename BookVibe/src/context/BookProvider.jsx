import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  getAllReadListFormLocalDB,
  addWishListToLocalDB,
  getAllWishListFormLocalDB,
  removeWishListFromLocalDB,
} from "../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() => getAllReadListFormLocalDB());
  const [wishList, setWishList] = useState(() => getAllWishListFormLocalDB());

  const handleMarkAsRead = (currentBook) => {
    addReadListToLocalDB(currentBook);
    const isExistBook = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.warning("Already in your read list!");
      return;
    }

    setReadList([...readList, currentBook]);

    const isExistInWishList = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInWishList) {
      removeWishListFromLocalDB(currentBook.bookId);
      setWishList(
        wishList.filter((book) => book.bookId !== currentBook.bookId),
      );
      toast.info(`${currentBook.bookName} moved from wishlist to read list!`);
    } else {
      toast.success(`${currentBook.bookName} added to read list!`);
    }
  };

  const handleWishList = (currentBook) => {
    const isExistInReadList = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.warning("Already in read list. Can't add to wishlist!");
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.warning("Already in your wishlist!");
      return;
    }
    addWishListToLocalDB(currentBook);
    setWishList([...wishList, currentBook]);
    toast.success(`${currentBook.bookName} added to wishlist!`);
  };

  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
