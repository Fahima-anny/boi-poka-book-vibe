import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaCaretDown } from "react-icons/fa6";
import { useLoaderData } from 'react-router-dom';
import { getFromLS } from './Utilities/Utilities';
import { useEffect, useState } from 'react';
import Book from './Book';


const BookTabs = () => {
const [readList, setReadList] = useState([])
const [wishList, setWishList] = useState([])
const allBooks = useLoaderData() ;
// const wishArr = getFromLS('wishArray')

useEffect( ()=> {
    const readArr = getFromLS('readArray')
const readArrInt = readArr.map(id=> parseInt(id))
const readBookList = allBooks.filter( book => readArrInt.includes(book.bookId))
setReadList(readBookList)
} ,[])

useEffect( ()=> {
    const wishArr = getFromLS('wishArray')
const wishArrInt = wishArr.map(id=> parseInt(id))
const wishBookList = allBooks.filter( book => wishArrInt.includes(book.bookId))
setWishList(wishBookList)
} ,[])
    return (
        <div className='space-y-10 pb-20 flex flex-col justify-center items-center'>
<h1 className='text-center w-full py-6 font-bold text-2xl bg-gray-100 rounded-xl'>Books</h1>
<div className="dropdown dropdown-hover">
   <div tabIndex={0} role="button" className="w-40 text-white font-semibold btn bg-green-500 hover:bg-green-600 px-9">Sort By <FaCaretDown ></FaCaretDown></div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
</div>
             <Tabs className='w-full'>
    <TabList >
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
     
     <div className='grid grid-cols-3 gap-6'>
     {
        readList.map(book => <Book book={book} key={book.bookId}></Book>)
      }
     </div>
    </TabPanel>
    <TabPanel>

     <div className='grid grid-cols-3 gap-6'>
     {
        wishList.map(book => <Book book={book} key={book.bookId}></Book>)
      }
     </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default BookTabs;