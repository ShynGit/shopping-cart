import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

const NavBar = () => {
  const [searchShow, setSearchShow] = useState(false);
  const cartSize = useAppSelector(
    (state: RootState) => state.cart[0].total_items
  );
  return (
    <nav className="fixed w-full text-white bg-black px-2 sm:px-4 py-1 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/shopping" className="flex items-center pl-4">
          <svg className="pre-logo-svg w-8 h-8" fill="#fff" viewBox="0 0 69 32">
            <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
          </svg>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Nike
          </span>
        </Link>

        <div className="flex md:order-1 items-center justify-end gap-0">
          <div className="w-full">
            <div className="flex absolute inset-y-0  items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block p-1.5 pl-10 w-48 md:w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          <Link to="/cart">
            <div className="relative m-2">
              <svg width="24px" height="24px" fill="#fff" viewBox="0 0 24 24">
                <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
              </svg>
              <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  top-1/2 text-center text-xs font-semibold">
                {cartSize}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
