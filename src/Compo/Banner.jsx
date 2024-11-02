import img from '../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200  lg:p-20 rounded-xl mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold leading-relaxed font-serif">Books to freshen <br /> up your bookshelf</h1>
          
            <button className="text-white font-semibold btn bg-green-500 hover:bg-green-600  mt-10">View the list</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;