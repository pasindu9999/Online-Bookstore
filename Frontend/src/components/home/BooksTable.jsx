import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

const BooksTable = ({books}) => {
  return (
    <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
      <thead className="bg-sky-100 text-sky-900">
        <tr>
          <th className="px-4 py-2 text-left">No</th>
          <th className="px-4 py-2 text-left">Title</th>
          <th className="px-4 py-2 text-left max-md:hidden">Author</th>
          <th className="px-4 py-2 text-left max-md:hidden">Publish Year</th>
          <th className="px-4 py-2 text-left">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="hover:bg-sky-50 transition-colors">
            <td className="px-4 py-2">{index + 1}</td>
            <td className="px-4 py-2">{book.title}</td>
            <td className="px-4 py-2 max-md:hidden">{book.author}</td>
            <td className="px-4 py-2 max-md:hidden">{book.publishYear}</td>
            <td className="px-4 py-2">
              <div className="flex gap-x-3 text-lg items-center">
                <Link
                  to={`/books/details/${book._id}`}
                  className="hover:text-green-600"
                >
                  <BsInfoCircle />
                </Link>
                <Link
                  to={`/books/edit/${book._id}`}
                  className="hover:text-yellow-500"
                >
                  <AiOutlineEdit />
                </Link>
                <Link
                  to={`/books/delete/${book._id}`}
                  className="hover:text-red-500"
                >
                  <MdOutlineDelete />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BooksTable