import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";

const home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center gap-x-4 my-4">
        <button
          className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
            showType === "table"
              ? "bg-sky-600 text-white"
              : "bg-sky-200 hover:bg-sky-300"
          }`}
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
            showType === "card"
              ? "bg-sky-600 text-white"
              : "bg-sky-200 hover:bg-sky-300"
          }`}
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link
          to="/books/create"
          className="hover:scale-105 transition-transform"
        >
          <MdOutlineAddBox className="text-sky-800 text-5xl hover:text-sky-600" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default home;
