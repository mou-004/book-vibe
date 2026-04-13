const getAllReadListFormLocalDB = () => {
  const allReadList = localStorage.getItem("readList");

  if (allReadList) return JSON.parse(allReadList);
  return [];
};

const addReadListToLocalDB = (book) => {
  const allBooks = getAllReadListFormLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};

const getAllWishListFormLocalDB = () => {
  const allWishList = localStorage.getItem("wishList");
  if (allWishList) return JSON.parse(allWishList);
  return [];
};

const addWishListToLocalDB = (book) => {
  const allBooks = getAllWishListFormLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("wishList", JSON.stringify(allBooks));
  }
};

const removeWishListFromLocalDB = (bookId) => {
  const allBooks = getAllWishListFormLocalDB();
  const updated = allBooks.filter((bk) => bk.bookId !== bookId);
  localStorage.setItem("wishList", JSON.stringify(updated));
};

export {
  getAllReadListFormLocalDB,
  addReadListToLocalDB,
  getAllWishListFormLocalDB,
  addWishListToLocalDB,
  removeWishListFromLocalDB,
};
