import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../components/ListedBooks/ListedReadList";
import ListedWishlist from "../../components/ListedBooks/ListedWishlist";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Books = () => {
  const [sortingType, setSortingType] = useState("");

  return (
    <div className="container mx-auto mb-6">
      <h2 className="text-center font-bold text-3xl p-8 bg-base-300 rounded-2xl">
        Books
      </h2>

      <div className="flex justify-center my-4">
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-green-500 hover:bg-green-600 text-white border-none px-6 flex items-center gap-2"
          >
            Sort By {sortingType} <ChevronDown size={16} />
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => setSortingType("Pages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => setSortingType("Year")}>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList sortingType={sortingType}></ListedReadList>
        </TabPanel>
        <TabPanel>
          <ListedWishlist sortingType={sortingType}></ListedWishlist>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
