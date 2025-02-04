export const S1 = () => {
  return (
    <section className="max-w-full mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row pt-16 md:pt-20 px-4 md:px-32">
        {/* Text Column */}
        <div className="flex flex-col w-full md:w-1/2 text-center md:text-left px-2 md:px-12 gap-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A{" "}
            <span className="text-red-600 font-extrabold text-5xl md:text-6xl">
              Powerful
            </span>{" "}
            Bookmark Manager
          </h1>
          <p className="text-lg md:text-2xl font-light">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for free.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-blueish-401 text-white px-6 py-3 md:py-4 rounded-xl font-semibold hover:bg-white hover:text-blueish-401 border-2 border-blueish-401 text-base md:text-lg transition-colors">
              Add to your Browser
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center pt-6 md:pt-0 mt-4 md:mt-0">
          <img
            src="s1-r-.png"
            alt="Bookmark illustration"
            className="w-full max-w-md md:max-w-full h-auto object-contain -mr-10"
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-center px-4 mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          Features
        </h2>
        <p className="text-base md:text-lg font-medium text-gray-600 max-w-prose md:max-w-xl my-6">
          Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>
    </section>
  );
};
