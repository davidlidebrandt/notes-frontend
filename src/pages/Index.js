import React from 'react'
import LogInCard from '../components/LogInCard'

export default function Index() {
    return (
        <div className="grid grid-cols-12 min-h-screen px-10 py-36">
            <div className="col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3   d-blue-green-bg m-auto rounded py-10 px-4 custom-b-shadow grey-text text-4xl mb-8" style={{zIndex: "-1000"}}><span className="l-blue-green-text" >A</span>ll your notes in one plac<span className="l-blue-green-text">e</span></div>
            <LogInCard/>
        </div>
    )
}
