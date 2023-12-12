import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username")
    setIsLoggedIn(false); // 상태 업데이트로 로그인 여부 변경
    alert("You have been logged out.")
  };

  return (
    <header className="text-gray-600 border-solid">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link to="/">
          <div className="flex font-semibold items-center justify-center text-gray-600 mb-4 md:mb-0 text-3xl">
            Busan Tasty Load Map
          </div>
        </Link>
        <nav className="flex space-x-4">
          {!isLoggedIn ? (
            <Link to="/Login">
              <button className="inline-flex items-center text-gray-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-100 text-black rounded-lg font-semibold">
                Login
              </button>
            </Link>
          ) : (
            <div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center text-gray-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-100 text-black rounded-lg font-semibold"
              >
                Logout
              </button>
            </div>
          )}
          <Link to="/SignUp">
            <button className="inline-flex items-center text-gray-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-100 text-black rounded-lg font-semibold">
              SignUp
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
