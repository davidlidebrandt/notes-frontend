import React from 'react'
import Ham from "../images/ham.png"
import {BiNotepad} from "react-icons/bi"

export default function NavBar() {
    return (
        <nav className="fixed l-blue-green-bg  w-full py-4 grid grid-cols-2 custom-b-shadow">
                <div className="grid items-center">
                    <h1 className="inline text-3xl ml-3 font-extrabold ed-blue-green-text">Notes <BiNotepad className="inline" size="30"/></h1>
                    <p className="ml-3 text-lg font-bold italic d-blue-green-text">All your notes in one place</p>
                </div>
                <div className="grid place-items-end">
                    <img className="inline h-16 mr-3" src={Ham}/>
                </div>
        </nav>
    ) 
}
