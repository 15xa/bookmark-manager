import { useState } from "react";

export const Sec2 = () => {
  const [sec2, setSec2] = useState("sb");

  const Sb = () => (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 md:px-20 py-8 md:py-10 min-h-[400px]">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src="illustration-features-tab-1.svg"
          alt="Bookmark in a click"
          className="w-full max-w-sm h-auto object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Bookmark in a click
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your favorite sites.
        </p>
        <button className="bg-purple-600 text-white px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
          More Info
        </button>
      </div>
    </div>
  );

  const Es = () => (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 md:px-20 py-8 md:py-10 min-h-[400px]">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src="illustration-features-tab-2.svg"
          alt="Intelligent search"
          className="w-full max-w-sm h-auto object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Intelligent search
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Our powerful search feature will help you find saved sites in no time at all.
          No need to trawl through all of your bookmarks.
        </p>
        <button className="bg-purple-600 text-white px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
          More Info
        </button>
      </div>
    </div>
  );

  const Ss = () => (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 md:px-20 py-8 md:py-10 min-h-[400px]">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src="illustration-features-tab-3.svg"
          alt="Easily share your bookmarks"
          className="w-full max-w-sm h-auto object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Easily share your bookmarks
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Share your bookmarks with others quickly and easily. Our user-friendly interface makes collaboration a breeze.
        </p>
        <button className="bg-purple-600 text-white px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
          More Info
        </button>
      </div>
    </div>
  );

  return (
    <section className="mt-10">
      <div className="flex gap-6 md:gap-10 text-gray-800 items-center justify-center mt-6 px-20">
        <div
          className={`cursor-pointer font-medium text-sm  md:text-lg hover:border-b-2 p-2 transition-colors ${
            sec2 === "sb" ? "border-b-2 border-red-600" : ""
          }`}
          onClick={() => setSec2("sb")}
        >
          Simple Bookmarking
        </div>
        <div
          className={`cursor-pointer font-medium text-sm md:text-lg hover:border-b-2 md:p-2 transition-colors ${
            sec2 === "es" ? "border-b-2 border-red-600" : ""
          }`}
          onClick={() => setSec2("es")}
        >
          Easy Sharing
        </div>
        <div
          className={`cursor-pointer font-medium text-sm  md:text-lg hover:border-b-2 p-2 transition-colors ${
            sec2 === "ss" ? "border-b-2 border-red-600" : ""
          }`}
          onClick={() => setSec2("ss")}
        >
          Speedy Searching
        </div>
      </div>

      <div className="mt-8">
        {sec2 === "sb" && <Sb />}
        {sec2 === "es" && <Es />}
        {sec2 === "ss" && <Ss />}
      </div>
    </section>
  );
};
