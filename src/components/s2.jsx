import { useState } from "react"
export const Sec2 = () => {
    const [sec2, setSec2] = useState("sb");

    function Sb() {
        return (
          <div className="flex flex-col md:flex-row items-center gap-10 px-5 md:px-20 py-10 h-[450px]">
            {/* Left Image Section */}
            <div className="flex justify-center md:justify-start w-full md:w-1/2">
              <img
                src="illustration-features-tab-1.svg"
                alt="Feature Illustration"
                className="max-w-full h-full object-contain"
              />
            </div>
      
            {/* Right Text Section */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/2 gap-5">
              <h2 className="text-3xl font-bold text-black">Bookmark in a click</h2>
              <p className="text-lg text-gray-600">
                Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
                More Info
              </button>
            </div>
          </div>
        );
      }
      
      function Es() {
        return (
          <div className="flex flex-col md:flex-row items-center gap-10 px-5 md:px-20 py-10 h-[450px]">
            {/* Left Image Section */}
            <div className="flex justify-center md:justify-start w-full md:w-1/2">
              <img
                src="illustration-features-tab-2.svg"
                alt="Feature Illustration"
                className="max-w-full h-full object-contain"
              />
            </div>
      
            {/* Right Text Section */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/2 gap-5">
              <h2 className="text-3xl font-bold text-black">Intelligent search</h2>
              <p className="text-lg text-gray-600">
                Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
                More Info
              </button>
            </div>
          </div>
        );
      }
      
      function Ss() {
        return (
          <div className="flex flex-col md:flex-row items-center gap-10 px-5 md:px-20 py-10 h-[450px]">
            {/* Left Image Section */}
            <div className="flex justify-center md:justify-start w-full md:w-1/2">
              <img
                src="illustration-features-tab-3.svg"
                alt="Feature Illustration"
                className="max-w-full h-full object-contain"
              />
            </div>
      
            {/* Right Text Section */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/2 gap-5">
              <h2 className="text-3xl font-bold text-black">Easily share your bookmarks</h2>
              <p className="text-lg text-gray-600">
                Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
                More Info
              </button>
            </div>
          </div>
        );
      }
      
   
    return(
    <div className="flex flex-col items-center justify-center mt-10">

        <div className="flex gap-10 text-gray-800 items-center justify-center mt-10">
            <div className={`flex font-medium text-lg hover:border-2 hover:border-gray-600 p-2 ${sec2 == "sb" && 'border-b-2 border-red-600'}` } id="sb" onClick={() => {setSec2("sb")}}>Simple Bookmarking</div>
            <div className={`flex font-medium text-lg hover:border-2 hover:border-gray-600 p-2 ${sec2 == "es" && 'border-b-2 border-red-600'}` } id="es" onClick={() => {setSec2("es")}}>Easy Sharing</div>
            <div className={`flex font-medium text-lg hover:border-2 hover:border-gray-600 p-2 ${sec2 == "ss" && 'border-b-2 border-red-600'}` } id="ss" onClick={() => {setSec2("ss")}}>Speedy Searching</div>
            </div>
            <div className="mt-10">
                {sec2 == "sb" && <Sb/>}
                {sec2 == "es" && <Es/>}
                {sec2 == "ss" && <Ss/>}
            </div>

        </div>
        
    )  
}
