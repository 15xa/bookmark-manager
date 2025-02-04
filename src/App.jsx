import React from "react";
import { Download } from "./components/download";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Sec2 } from "./components/s2";
import { Sec1 } from "./sections/sec1";
 
export default function App (){
  return(
    <div className="flex flex-col h-full max-w-[100vw] overflow-x-hidden">
      <Sec1></Sec1>
      <Sec2/>
      <Download/>
      <Footer/>
    </div>
  )
}