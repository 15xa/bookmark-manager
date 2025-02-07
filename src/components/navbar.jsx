import React, { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white px-4 md:px-40 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div id="home" className="flex items-center">
          <img src="bkmlogo.png" alt="Logo" className="w-28 h-auto" />
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 items-center">
          <div className="text-gray-400 font-medium text-xl hover:text-redish-401 cursor-pointer">
            Features
          </div>
          <div className="text-gray-400 font-medium text-xl hover:text-redish-401 cursor-pointer">
            Download
          </div>
          <div className="text-gray-400 font-medium text-xl hover:text-redish-401 cursor-pointer">
            FAQs
          </div>
          <div className="bg-redish-401 rounded-md p-2 px-4 text-white hover:bg-white border-redish-401 hover:text-redish-401 border-2 font-semibold cursor-pointer" onClick={() => {
            window.location.href = 'https://webtopilot.pro';
          }}>
            Back to portfolio
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2">
          <div className="text-gray-400 p-2 font-medium text-xl hover:text-redish-401 cursor-pointer">
            Features
          </div>
          <div className="text-gray-400 p-2 font-medium text-xl hover:text-redish-401 cursor-pointer">
            Download
          </div>
          <div className="text-gray-400 p-2 font-medium text-xl hover:text-redish-401 cursor-pointer">
            FAQs
          </div>
          <div className="bg-redish-401 rounded-md p-2 text-white hover:bg-white border-redish-401 hover:text-redish-401 border-2 font-semibold cursor-pointer" onClick={() => {
            window.location.href = 'https://webtopilot.pro';
          }}>
            Back to Portfolio
          </div>
        </div>
      )}
    </nav>
  );
};
