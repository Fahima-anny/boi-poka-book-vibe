import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div className="">
         <div className="max-w-7xl mx-auto">
         <Navbar></Navbar>
         <Outlet></Outlet>
         </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;