import React from "react";
import Home from "./Home";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/Home">Home</NavLink>
              </li>

              <li>
                <NavLink to="/Projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
              <NavLink to="/Contact" className="ml-1">
                Contact
              </NavLink>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Vijay Dabhi</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 py-2 ">
            <li>
              <NavLink to="/Home" className="ml-1 ">Home</NavLink>
            </li>

            <li>
              <NavLink to="/Projects" className="ml-1 ">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="ml-1">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="ml-1">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Contact</a>
        </div>
      </div>
      <div>
        <main>
          <Outlet />
          {/* <Footer/> */}
        </main>
      </div>
    </>
  );
}
