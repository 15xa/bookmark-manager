import React from "react";

export const Download = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center py-10 md:py-20 bg-gray-200 px-4">
      <div className="text-xl md:text-2xl text-black font-semibold">
        Download the Extension
      </div>
      <div className="font-light text-gray-600 mt-4 md:mt-10 text-base md:text-xl">
        We're available on your favorite browsers. Want more?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 w-full">
        {/* Chrome Card */}
        <div className="flex flex-col bg-white rounded-xl items-center md:w-72 w-full h-auto md:h-80 p-4">
          <img src="logo-chrome.svg" alt="Chrome logo" className="w-16 h-16 mt-4 md:mt-10" />
          <div className="font-semibold text-black text-md my-4 md:my-10">
            Add to Chrome
          </div>
          <div className="flex justify-center p-2 md:p-4 text-center border-2 border-[#5368E0] bg-[#5368E0] hover:bg-white hover:text-[#5368E0] text-white font-bold rounded-xl cursor-pointer">
            Install
          </div>
        </div>
        {/* Firefox Card */}
        <div className="flex flex-col bg-white rounded-xl items-center md:w-72 w-full h-auto md:h-80 p-4">
          <img src="logo-firefox.svg" alt="Firefox logo" className="w-16 h-16 mt-4 md:mt-10" />
          <div className="font-semibold text-black text-md my-4 md:my-10">
            Add to Firefox
          </div>
          <div className="flex justify-center p-2 md:p-4 text-center border-2 border-[#5368E0] bg-[#5368E0] hover:bg-white hover:text-[#5368E0] text-white font-bold rounded-xl cursor-pointer">
            Install
          </div>
        </div>
        {/* Opera Card */}
        <div className="flex flex-col bg-white rounded-xl items-center md:w-72 w-full h-auto md:h-80 p-4">
          <img src="logo-opera.svg" alt="Opera logo" className="w-16 h-16 mt-4 md:mt-10" />
          <div className="font-semibold text-black text-md my-4 md:my-10">
            Add to Opera
          </div>
          <div className="flex justify-center p-2 md:p-4 text-center border-2 border-[#5368E0] bg-[#5368E0] hover:bg-white hover:text-[#5368E0] text-white font-bold rounded-xl cursor-pointer">
            Install
          </div>
        </div>
      </div>
    </div>
  );
};
