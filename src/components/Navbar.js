import React from "react";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <header id="navbar" className="bg-black bg-opacity-90 md:sticky top-0 z-10">
      <nav className="container mx-auto flex flex-row p-3 md:flex-row items-center">
        <div className="w-1/3 text-left pl-10">
            <a className="transition delay-40 title-font font-bold text-2xl w-20 cursor-pointer text-white flex flex-row items-center hover:text-pink-500 duration-500" href="#starter">Sam
            <i className="transition delay-40 fab fa-md fa-node-js m-1 mb-0 text-white cursor-pointer hover:text-pink-500 duration-500"></i></a>
        </div>
        <div id="link" className="w-2/3 md:py-1 md:pl-3 flex flex-row items-center text-base justify-center">
          <NavHashLink to="#" className="transition delay-40 mr-7 font-bold font-mono text-xl text-white border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500 duration-500">
            Home
          </NavHashLink>
          <NavHashLink to="#about" className="transition delay-40 mr-7 font-bold font-mono text-xl text-white border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500  duration-500">
            About
          </NavHashLink>
          <NavHashLink to="#skills" className="transition delay-40 mr-7 font-bold font-mono text-xl text-white border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500  duration-500">
            Skills
          </NavHashLink>
          <NavHashLink to="#education" className="transition delay-40 mr-7 font-bold font-mono text-xl text-white border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500  duration-500">
            Education
          </NavHashLink>
          <NavHashLink to="#projects" className="transition delay-40 mr-7 font-bold font-mono text-xl text-white border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500  duration-500">
            Projects
          </NavHashLink>
          <NavHashLink to="#contact" className="transition delay-40 font-bold font-mono text-xl text-white border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500  duration-500">
            Contact
          </NavHashLink>
        </div>
      </nav>
    </header>
  );
}
