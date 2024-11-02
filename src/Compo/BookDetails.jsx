import { useLoaderData, useParams } from "react-router-dom";
import {addToLS} from "./Utilities/Utilities";

const BookDetails = () => {


    const {bookId} = useParams() ;
    const Id = parseInt(bookId)
    const data = useLoaderData() ;
const book = data.find( d => d.bookId === Id )
    // console.log(book)
    const { bookName, author, image, tags, category, rating, review} = book

    const handleReadBtn = (id) => {
addToLS(id,'readArray')
}

const handleWishlistBtn = (id) => {
    addToLS(id,'wishArray')
}

    return (
        <div className=" min-h-screen py-20">
  <div className="grid grid-cols-2 gap-10">
    <div className="bg-slate-100  py-10">
    <img
      src={image}
      className="h-96 mx-auto rounded-lg  " />
    </div>
    <div className="">
      <h1 className="text-3xl font-bold font-serif">{bookName}</h1>
    
      <p className='text-gray-500 border-b py-2 '>By : {author}</p>
      <div className="text-gray-500 border-b py-2 mb-2">{category}</div>
      <div className="text-gray-500"><span className="text-black font-bold">Review:</span> {review}</div>
      <div className="card-actions mb-2 border-b py-2 w-full">
          <span className="text-black font-bold ">Tags:</span> {
            tags.map((tag, idx) =>  <div key={idx} className="badge text-green-500 bg-green-50 p-3">{tag}</div>)
           }
          </div>
<a
onClick={()=>handleReadBtn(bookId)}
className="text-white font-semibold btn bg-green-500 hover:bg-green-600 px-9">Read</a>
<a
onClick={()=>handleWishlistBtn(bookId)}
className="text-white font-semibold btn bg-sky-400 hover:bg-sky-500 ml-3">Wishlist</a>
    </div>
  </div>
</div>
    );
};

export default BookDetails;