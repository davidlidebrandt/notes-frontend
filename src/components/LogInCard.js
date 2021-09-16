import React from 'react'
import {BiNotepad} from "react-icons/bi"

export default function LogInCard() {
    return (
        <>
        <form className="col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 xl:col-span-4 xl:col-start-5 blue-green-gradient rounded  mt-3 mb-16 px-5 custom-b-shadow" >
            <h2 className="text-center text-3xl font-bold my-5">
                <span className="ed-blue-green-text">Log </span>
                <span className="grey-text">In</span>
            </h2>
            <label className="font-bold ed-blue-green-text">Username</label>
            <input className="block m-auto w-full grey-bg text-center text-xl rounded mb-5 py-3 ed-blue-green-text" type="text"></input>
            <label className="font-bold ed-blue-green-text">Password</label>
            <input className="block m-auto w-full grey-bg text-center text-xl rounded mb-5 py-3 ed-blue-green-text" type="password"></input>
            <button type="submit" className="d-blue-green-bg w-full grey-text font-bold text-2xl py-4 rounded border">Log In</button>
            <p className="text-center font-bold text-lg mt-12 grey-text">No account yet?</p>
            <a className="block m-auto text-center font-bold text-2xl py-3 w-2/3 rounded border mt-2 ed-blue-green-text">Sign Up</a>
            <button className="block m-auto mb-10 text-center d-blue-green-bg border font-bold text-2xl py-3 w-1/6 rounded border mt-12 grey-text">Help</button>
        </form>
        </>
    ) 
}
