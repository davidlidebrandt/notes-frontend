import React from 'react'
import {FiFacebook, FiGithub, FiLinkedin} from "react-icons/fi"

export default function Footer() {
    return (
        <div className="m-blue-green-bg py-5" style={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}}>
            <div className="text-center my-3">
              
                <a><FiFacebook className="inline yellow-text mx-2" size="40"/></a>
                <a><FiGithub className="inline yellow-text mx-2" size="40"/></a>
                <a><FiLinkedin className="inline yellow-text mx-2" size="40"/></a>
                </div>
                <p className="ed-blue-green-text text-center font-semibold text-xl">Site created by David Lidebrandt</p>
        </div>
    )
}
