import { NavLink } from "react-router-dom";

const Navbar = () => {

const links = <>
 <li className="text-gray-500 font-medium"><NavLink to='/'>Home</NavLink></li>
 <li className="text-gray-500 font-medium"><NavLink to='/tabs'>Listed Books</NavLink></li>
 <li className="text-gray-500 font-medium"><NavLink to='/pagesToRead'>Pages to Read</NavLink></li>
</>

    return (
        <div className="navbar py-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <a className="font-bold text-2xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="text-white font-semibold btn bg-green-500 hover:bg-green-600">Sign In</a>
          <a className="text-white font-semibold btn bg-sky-400 hover:bg-sky-500 ml-3">Sign Up</a>
        </div>
      </div>
    );
};

export default Navbar;