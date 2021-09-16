import React from 'react'
import { useState } from 'react'
import Ham from "../images/ham.png"
import {GrClose} from "react-icons/gr"


export default function NavBar() {
    const [showModal, setShowModal] = useState("hidden")
    const [showNav, setShowNav] = useState("")
    
    return (
        <>
          <div className={showModal + " absolute m-blue-green-bg top-0 left-0 w-full h-48 z-100"}>
            <GrClose onClick={()=> {setShowNav(""); setShowModal("hidden")}} className="m-auto" size="40"/>
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
