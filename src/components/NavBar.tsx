import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          👋
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            <li className="nav-item">
              <Link href="/" passHref>
                <span className="text-white text-lg md:text-xl font-semibold">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" passHref>
                <span className="text-white text-lg md:text-xl font-semibold">
                  About
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" passHref>
                <span className="text-white text-lg md:text-xl font-semibold">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
