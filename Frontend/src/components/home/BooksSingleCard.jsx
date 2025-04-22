import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import BookModal from "./BookModal"; // Assuming you have this

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border border-gray-300 rounded-2xl px-4 py-3 m-4 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
      <span className="absolute top-2 right-2 bg-red-300 text-red-900 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
        {book.publishYear}
      </span>

      <p className="text-xs text-gray-400 mb-2 break-all">{book._id}</p>

      <div className="flex items-center gap-2 mb-1">
        <PiBookOpenTextLight className="text-red-400 text-xl" />
        <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <BiUserCircle className="text-red-400 text-xl" />
        <h3 className="text-md text-gray-600">{book.author}</h3>
      </div>

      <div className="flex justify-evenly items-center border-t pt-3 mt-2 text-xl">
        <BiShow
          title="Quick View"
          className="text-blue-700 hover:text-black transition-colors cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`} title="Details">
          <BsInfoCircle className="text-green-700 hover:text-black transition-colors" />
        </Link>
        <Link to={`/books/edit/${book._id}`} title="Edit">
          <AiOutlineEdit className="text-yellow-500 hover:text-black transition-colors" />
        </Link>
        <Link to={`/books/delete/${book._id}`} title="Delete">
          <MdOutlineDelete className="text-red-600 hover:text-red-800 transition-colors" />
        </Link>
      </div>

      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
