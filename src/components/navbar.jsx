import React from "react";
export const Navbar = () => {
  return (
    <div className="flex max-w-[100vw] px-10 md:px-40 items-center justify-between overflow-x-hidden">
      <div className="flex">
        <img src="bkmlogo.png" className="w-max h-max" alt="Logo" />
      </div>
      <div className="flex gap-5 md:gap-[50px] items-center">
        <div className="text-gray-400 font-medium text-xl hover:text-redish-401">
          Features
        </div>
        <div className="text-gray-400 font-medium text-xl hover:text-redish-401">
          Download
        </div>
        <div className="text-gray-400 font-medium text-xl hover:text-redish-401">
          FAQs
        </div>
        <div className="bg-redish-401 rounded-md p-2 px-4 text-white hover:bg-white border-redish-401 hover:text-redish-401 border-2 font-semibold">
          Login
        </div>
      </div>
    </div>
  );
};
