export const Download = () => {
    return(
        <div className="flex flex-col text-center items-center justify-center py-20 bg-gray-200">
            <div className="text-2xl text-black font-semibold">Download the Extension</div>
            <div className="font-light text-gray-600 mt-10 text-xl">We're available on your favorite browsers. Want more?</div>
            <div className="grid grid-cols-1 md:px-20 md:grid-cols-3 my-10 gap-10">
                <div className="flex col-span-1 bg-white rounded-xl flex-col items-center md:w-72 h-80 w-full">
                    <img src="logo-chrome.svg" className="w-20 h-20 mt-10"/>
                    <div className="font-semibold text-black text-md my-10">Add to chrome</div>
                    <div className="flex p-4 text-center border-2 border-[#5368E0] bg-[#5368E0] hover:bg-white hover:text-[#5368E0] text-white font-bold rounded-xl">Install</div>
                </div>
                <div className="flex col-span-1 bg-white rounded-xl flex-col items-center md:w-72 h-80 w-full">
                    <img src="logo-firefox.svg" className="w-20 h-20 mt-10"/>
                    <div className="font-semibold text-black text-md my-10">Add to FireFox</div>
                    <div className="flex p-4 text-center border-2 border-[#5368E0] bg-[#5368E0] hover:bg-white hover:text-[#5368E0] text-white font-bold rounded-xl">Install</div>
                </div>
                <div className="flex col-span-1 bg-white rounded-xl flex-col items-center md:w-72 h-80 w-full">
                    <img src="logo-opera.svg" className="w-20 h-20 mt-10"/>
                    <div className="font-semibold text-black text-md my-10">Add to Opera</div>
                    <div className="flex p-4 text-center border-2 border-[#5368E0] bg-[#5368E0] hover:bg-white hover:text-[#5368E0] text-white font-bold rounded-xl">Install</div>
                </div>
            </div>
        </div>
    )
}