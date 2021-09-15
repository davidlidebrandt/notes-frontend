import React from 'react'

export default function LogInCard() {
    return (
        <form className="col-span-12 blue-green-gradient rounded opacity-95 mt-36 mb-16 px-5 custom-b-shadow">
            <h2 className="text-center text-3xl font-bold my-5">
                <span className="">Log </span>
                <span className="grey-text">In</span>
            </h2>
            <label className="font-bold">Username</label>
            <input className="block m-auto w-full grey-bg text-center text-xl rounded mb-5 py-3" type="text"></input>
            <label className="font-bold">Password</label>
            <input className="block m-auto w-full grey-bg text-center text-xl rounded mb-5 py-3" type="password"></input>
            <button type="submit" className="d-blue-green-bg w-full grey-text font-bold text-2xl py-4 rounded border">Log In</button>
            <p className="text-center font-bold text-lg mt-12 grey-text">No account yet?</p>
            <a className="block m-auto text-center font-bold text-2xl py-3 w-2/3 rounded border mt-2">Sign Up</a>
            <button className="block m-auto text-center font-bold text-2xl py-3 w-2/6 rounded border mt-12">Help</button>
        </form>
    ) 
}
