export const Footer = () => {
    
    return(
        <div className="bg-blue-300 w-screen px-20 flex flex-col items-center py-20 gap-6">
            <div className="flex text-center font-normal">600000+ already joined </div>
            <div className="flex text-center font-semibold text-xl">Get Updates in your inbox</div>
            <div className="flex text-center gap-6"><input className="rounded-xl w-40 h-10 text-black font-normal outline-none p-4" placeholder="Email"></input>
                    <div className="bg-redish-401 rounded-xl p-2 px-4 text-white hover:bg-white border-redish-401 hover:text-redish-401 border-2 font-semibold" onClick="#home">
                Sign-up
                </div>
            </div>
        </div>
    )
}