import { toast } from "react-toastify";

const getFromLS = (Arr) => {
    const storedBooks = localStorage.getItem(Arr) ;
    if(storedBooks){
      const  storedBooksParsed = JSON.parse(storedBooks) ;
        return storedBooksParsed ;
    }
    else{
        return [] ;
    }
}

const addToLS = (id,Arr) => {
const storedBooks = getFromLS(Arr) ;
if(storedBooks.includes(id)){
console.log('Book is Already Included')
toast("Sorry, This book is Already added")
}
else{
    storedBooks.push(id)
    const storedBooksStr = JSON.stringify(storedBooks) ;
    localStorage.setItem(Arr,storedBooksStr) ;
    toast('Book added to your List')
}
}
export  {addToLS, getFromLS} ;