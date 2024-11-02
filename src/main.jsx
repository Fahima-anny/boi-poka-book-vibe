import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Compo/Root';
import ErrorPage from './Compo/ErrorPage';
import Home from './Compo/Home';
import Dashboard from './Compo/Dashboard';
import BookDetails from './Compo/BookDetails';
import BookTabs from './Compo/BookTabs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage> ,
    children:[
      {
        path: '/' ,
        element: <Home></Home>
      } ,
      {
        path: '/dashboard' ,
        element: <Dashboard></Dashboard>
      },
      {
        path: '/books/:bookId',
        element: <BookDetails></BookDetails>,
        loader:() => fetch('/booksData.json')
      },
      {
        path: '/tabs',
        element: <BookTabs></BookTabs>,
        loader:() => fetch('/booksData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
    </StrictMode>,
)
