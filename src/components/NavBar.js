import React from 'react'
import { useState } from 'react'
import Ham from "../images/ham.png"
import {RiCloseCircleFill} from "react-icons/ri"


export default function NavBar() {
    const [showModal, setShowModal] = useState("hidden")
    const [showNav, setShowNav] = useState("")
    
    return (
        <>
          <div className={showModal + " absolute m-blue-green-bg top-0 right-0 w-1/2 xl:w-1/4 min-h-screen z-100 py-3"}>
          <h1 className="inline text-3xl ml-3 font-extrabold ed-blue-green-text underline" style={{textDecorationColor: "#fec806"}}><span className="text-5xl">N</span>otes</h1>
          <div className="pb-20">
          <a className="block text-center d-blue-green-bg mt-10  grey-bg ed-blue-green-text font-bold text-2xl py-4 rounded mx-5">Home</a>
              <a className="block text-center d-blue-green-bg mt-10 grey-text font-bold text-2xl py-4 rounded mx-5">Log In</a>
              <a className="block text-center font-bold mt-10 text-2xl py-4 rounded mt-2 grey-text yellow-bg mx-5">Sign Up</a>
              <button className="absolute bottom-0 mb-10 block ed-blue m-auto-green-text mt-20 text-center center-absolute-x">
          <RiCloseCircleFill onClick={()=> {setShowNav(""); setShowModal("hidden")}} className="ed-blue-green-text" size="80"/>
            </button>  
              </div>
   
         </div>
        <nav className={showNav + "fixed l-blue-green-bg  w-full py-4 grid grid-cols-2 custom-b-shadow"}>
                <div className="grid items-center">
                    <h1 className="inline text-3xl ml-3 font-extrabold ed-blue-green-text underline" style={{textDecorationColor: "#fec806"}}><span className="text-5xl">N</span>otes</h1>
                </div>
                <div className="grid place-items-end">
                    <button onClick={()=> {setShowModal(""); setShowNav("hidden"); }} className="border-none bg-none">
                        <img alt="Hamburger icon" className="inline h-16 mr-3" src={Ham}/>
                    </button>
                </div>
            
        </nav>
          
            </>
    ) 
}
