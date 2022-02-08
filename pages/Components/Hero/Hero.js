import React from 'react';

const Hero = () => (
    <div className="w-screen h-screen relative bg-black">
      <div className=" mx-144 md:sm-2 ">
        <div className=" py-5">    
          <nav className="hidden md:flex space-x-20">
            <a href="#" className="text-xl font-Fjalla text-white hover:text-gray-500"> HOME </a>
            <a href="#" className="text-xl font-Fjalla text-white hover:text-gray-500"> ABOUT </a>
            <a href="#" className="text-xl font-Fjalla text-white hover:text-gray-500"> HELP </a>
            <a href="#" className="text-xl font-Fjalla text-white hover:text-gray-500"> CLASS </a>
          </nav>
        </div>
      </div>
    </div>
  );
  
  export default Hero;