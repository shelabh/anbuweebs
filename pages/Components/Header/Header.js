import React from 'react';

const Header = () => (
    <div className="bg-black">
      <div className=" mx-144 py-5"> 
          <nav className="hidden md:flex space-x-20">
            <a href="#" className="text-xl font-Fjalla text-white hover:text-gray-500"> HOME </a>
            <a href="#" className="text-xl font-Fjalla text-white hover:text-gray-500"> ABOUT </a>
            <a href="#" className="text-xl font-Fjalla text-white hover:text-gray-500"> HELP </a>
            <a href="#" className="text-xl font-Fjalla text-white hover:text-gray-500"> CLASS </a>
          </nav>
      </div>
    </div>
  );
  
  export default Header;