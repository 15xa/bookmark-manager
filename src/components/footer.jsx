import React from "react";

export const Footer = () => {
  return (
    <div className="bg-blue-300 w-full px-4 md:px-20 flex flex-col items-center py-10 md:py-20 gap-6">
      <div className="text-center font-normal text-base md:text-lg">
        600000+ already joined
      </div>
      <div className="text-center font-semibold text-lg md:text-xl">
        Get Updates in your inbox
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
        <input
          className="rounded-xl w-full sm:w-40 h-10 text-black font-normal outline-none p-4"
          placeholder="Email"
        />
        <div
          className="bg-redish-401 rounded-xl p-2 px-4 text-white hover:bg-white border-redish-401 hover:text-redish-401 border-2 font-semibold cursor-pointer text-center"
          onClick={() => window.location.href = "#home"}
        >
          Sign-up
        </div>
      </div>
    </div>
  );
};
