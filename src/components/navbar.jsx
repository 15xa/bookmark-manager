import React from "react"
export const Navbar = () => {
    return(
        <>
            <div className="flex w-screen px-40 items-center justify-between ">
                <div className="flex  "><img src="bkmlogo.png" className="w-48 h-16 "></img></div>
                <div className="">
                    <div className="text-gray-400 font-medium text-xl hover:text-redish-401">features</div>
                </div>
            </div>
        </>
    )
}