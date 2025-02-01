export const S1 = () => {
return (
    <>
        <div className="flex flex-row w-screen pt-20 pl-20">
            <div className="flex flex-col w-[45%] px-24 gap-8">
                <div className="text-5xl font-bold"> A <span className="text-red-600 font-extrabold text-6xl p-0">Powerful</span> Bookmark Manager</div>
                <div className="text-2xl font-light">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</div>
                <div className="flex flex-row">
                    <div className="bg-blueish-401 text-white px-6 p-4 rounded-xl font-semibold hover:bg-white hover:text-blueish-401 border-2 border-blueish-401 text-lg">Add to your Browser</div>
                </div>
            </div>
            <div className="flex pt-[20px] p-0"><img src="s1-r-.png"></img></div>
        </div>
        <div className=" flex flex-col justify-center items-center text-center">
            <div className="text-3xl font-semibold text-black text-center">Features</div>
            <div className="text-lg font-medium text-gray-600 text-center mx-96 my-10">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</div>

        </div>
    </>
)
}