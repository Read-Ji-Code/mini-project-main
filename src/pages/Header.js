import React from "react";
import { Link } from "react-router-dom";


const Header = () => {

    const handleLogout = () => {
      localStorage.removeItem("token");
      //  window.location.href="/login";
    }
  return (
    <header className="text-gray-600 body-font from-purple-600 via-indigo-500 to-indigo-200 bg-gradient-to-br border rounded-xl shadow-2xl border-solid">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link to="/">
          <div className="flex font-semibold items-center text-gray-900 mb-4 md:mb-0 text-3xl">
            Busan Tasty Load Map
          </div>
        </Link>
        <nav className="flex space-x-4">
          { !localStorage.getItem("token") ?
          <Link to="/Login">
            <button className="inline-flex items-center from-purple-500 via-indigo-300 to-indigo-200 bg-gradient-to-br border-0 py-2 px-4 focus:outline-none hover:bg-blue-100 text-white rounded-lg font-semibold">
              Login
            </button>
          </Link>
        : <div>
            <button onClick={handleLogout} className="inline-flex items-center from-purple-500 via-indigo-300 to-indigo-100 bg-gradient-to-br border-0 py-2 px-4 focus:outline-none hover:bg-blue-100 text-white rounded-lg font-semibold">
              Logout
            </button>
        </div>
        }
          <Link to="/SignUp">
            <button className="inline-flex items-center from-purple-500 via-indigo-300 to-indigo-100 bg-gradient-to-br border-0 py-2 px-4 focus:outline-none hover:bg-blue-100 text-white rounded-lg font-semibold">
              SignUp
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
