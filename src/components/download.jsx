import React from "react";

export const Download = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto py-12 md:py-20 bg-gray-200 px-4 md:px-8">
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl text-black font-semibold">
          Download the Extension
        </h2>
        <p className="font-light text-gray-600 mt-4 text-base md:text-xl max-w-2xl mx-auto">
          We're available on your favorite browsers. Want more?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
        <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex-1 flex flex-col items-center p-6">
            <img 
              src="logo-chrome.svg" 
              alt="Chrome logo" 
              className="w-16 h-16 mb-6"
            />
            <h3 className="font-semibold text-black text-lg mb-auto">
              Add to Chrome
            </h3>
          </div>
          <div className="p-6 pt-0">
            <button className="w-full py-3 px-6 text-center border-2 border-[#5368E0] bg-[#5368E0] hover:bg-white hover:text-[#5368E0] text-white font-semibold rounded-xl transition-colors duration-300">
              Install
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex-1 flex flex-col items-center p-6">
            <img 
              src="logo-firefox.svg" 
              alt="Firefox logo" 
              className="w-16 h-16 mb-6"
            />
            <h3 className="font-semibold text-black text-lg mb-auto">
              Add to Firefox
            </h3>
          </div>
          <div className="p-6 pt-0">
            <button className="w-full py-3 px-6 text-center border-2 border-[#5368E0] bg-[#5368E0] hover:bg-white hover:text-[#5368E0] text-white font-semibold rounded-xl transition-colors duration-300">
              Install
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex-1 flex flex-col items-center p-6">
            <img 
              src="logo-opera.svg" 
              alt="Opera logo" 
              className="w-16 h-16 mb-6"
            />
            <h3 className="font-semibold text-black text-lg mb-auto">
              Add to Opera
            </h3>
          </div>
          <div className="p-6 pt-0">
            <button className="w-full py-3 px-6 text-center border-2 border-[#5368E0] bg-[#5368E0] hover:bg-white hover:text-[#5368E0] text-white font-semibold rounded-xl transition-colors duration-300">
              Install
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};