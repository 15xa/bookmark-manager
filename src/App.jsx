import React from "react";
import { Navbar } from "./components/navbar";
import { Sec1 } from "./sections/sec1";
 
export default function App (){
  return(
    <div className="flex flex-col h-full w-full">
      <Sec1></Sec1>
    </div>
  )
}