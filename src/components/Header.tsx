import React from 'react';

const Header = () => (
      <div className="ml-[8%] py-5"> 
          <nav className="fixed md:flex space-x-[60%]">
            <a href="#" className="text-xl font-Fjalla text-white hover:text-gray-500"> HOME </a>
            <a href="#" className="text-xl font-Fjalla text-white hover:text-gray-500"> ABOUT </a>
            <a href="#" className="text-xl font-Fjalla text-white hover:text-gray-500"> HELP </a>
            <a href="#" className="text-xl font-Fjalla text-white hover:text-gray-500"> CLASS </a>
          </nav>
      </div>
  );
  
  export default Header;