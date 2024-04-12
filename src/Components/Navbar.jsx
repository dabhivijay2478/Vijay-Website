import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="bg-black">
      <nav class="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-0">
        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <NavLink to="/Home" aria-label="Home">
              <img src="https://user-images.githubusercontent.com/80666494/209432961-00bd3921-d913-4b27-9945-c187fda92d21.jpg" height="40" width="40" className="rounded-2xl " />
            </NavLink>
            <div class="-mr-2 flex items-center md:hidden">
              <button type="button" id="main-menu" aria-label="Main menu" aria-haspopup="true" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:flex md:space-x-10">
          <NavLink to="/Projects"
            class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Project</NavLink>
          <NavLink to="/Experience"
            class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Experience</NavLink>
          <NavLink to="/blog"
            class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Blog</NavLink>
          <NavLink to="/About" 
            class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">About</NavLink>
        </div>
       
      </nav>
      <div className="bg-black">
        <main className="">
          <Outlet />
          {/* <Footer/> */}
        </main>
      </div>
      </div>
    </>
  );
}
