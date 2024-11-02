import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({book}) => {

const {bookId, bookName, author, image, tags, category, rating} = book

    return (
     <Link to={`/books/${bookId}`}>
        <div className="card p-5 border">
        <figure className='bg-gray-100 py-10'>
          <img
          className='h-40 '
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body p-0 pt-5">
        <div className="card-actions">
           {
            tags.map((tag, idx) =>  <div key={idx} className="badge text-green-500 bg-green-50 p-3">{tag}</div>)
           }
          </div>
          <h2 className="card-title font-serif ">
            {bookName}
          </h2>
          <p className='text-gray-500 border-b w-full pb-2 mb-2'>By : {author}</p>
          <div className="card-actions justify-between">
            <div className="text-gray-500">{category}</div>
            <div className="text-gray-500 flex items-center gap-1">{rating}<FaRegStar className='text-xl'></FaRegStar></div>
          </div>
        </div>
      </div>
     </Link>
    );
};

export default Book;