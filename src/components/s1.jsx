export const S1 = () => {
    return (
      <>
        <div className="max-w-[100vw] mx-auto overflow-x-hidden">
          <div className="flex flex-col md:flex-row pt-20 pl-4 md:pl-32">
            <div className="flex flex-col w-full md:w-1/2 text-center md:text-left pl-4 md:pl-12 gap-8">
              <div className="text-5xl font-bold">
                A{" "}
                <span className="text-red-600 font-extrabold text-6xl">
                  Powerful
                </span>{" "}
                Bookmark Manager
              </div>
              <div className="text-2xl font-light">
                A clean and simple interface to organize your favourite websites.
                Open a new browser tab and see your sites load instantly. Try it
                for free.
              </div>
              <div className="flex justify-center md:justify-start">
                <button className="bg-blueish-401 text-white px-6 py-4 rounded-xl font-semibold hover:bg-white hover:text-blueish-401 border-2 border-blueish-401 text-lg">
                  Add to your Browser
                </button>
              </div>
            </div>
  
            <div className="flex items-center justify-center pt-5 md:pt-0 mt-0 md:mt-12">
              <img
                src="s1-r-.png"
                className="max-w-screen md:w-full h-auto "
                alt="Bookmark illustration"
              />
            </div>
          </div>
  
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-3xl font-semibold text-black mt-10">Features</div>
            <div className="text-lg font-medium text-gray-600 max-w-prose md:max-w-xl my-10">
              Our aim is to make it quick and easy for you to access your favourite
              websites. Your bookmarks sync between your devices so you can access
              them on the go.
            </div>
          </div>
        </div>
      </>
    );
  };
  