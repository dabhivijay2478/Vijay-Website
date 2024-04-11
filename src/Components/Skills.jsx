import React from 'react'
import tailwindcss from "../assets/tailwindcss.svg"
import mongodbimg from "../assets/mongodb.png"
import express from "../assets/express.svg"
import mysql from "../assets/mysql.svg"
import firebase from "../assets/firebase.svg"
export default function Skills() {
    return (
        <>
            <div className="py-10  sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">

                        <div className="relative flex items-center justify-center mx-auto  text-6xl text-orange-500">
                            <i className="fa-brands fa-html5"></i>
                        </div>
                        <div className="relative flex items-center justify-center mx-auto  text-6xl text-blue-600">
                            <i className="fa-brands fa-css3"></i>
                        </div>

                        <div className="relative flex items-center justify-center mx-auto  text-6xl text-yellow-500">
                            <i className="fa-brands fa-square-js"></i>
                        </div>

                        <div className="relative flex items-center justify-center mx-auto  text-6xl text-green-600">
                            <i className="fa-brands fa-node-js"></i>
                        </div>
                        <div className="relative flex items-center justify-center mx-auto  text-6xl text-blue-500">
                            <i className="fa-brands fa-react"></i>
                        </div>

                        <div className="relative flex items-center justify-center mx-auto  text-6xl text-red-500">
                            <i class="fa-brands fa-angular"></i>
                        </div>

                        <div className="relative flex items-center justify-center mx-auto  text-6xl">
                            <img src={express} alt="express" height={50} width={100} />
                        </div>

                        <div className="relative flex items-center justify-center mx-auto  text-6xl text-purple-400">
                            <i className="fa-brands fa-php"></i>
                        </div>

                        <div className="relative flex items-center justify-center mx-auto  text-6xl">
                            <img src={tailwindcss} alt="tailwind" height={50} width={100} />
                        </div>

                        <div className="relative flex items-center justify-center mx-auto  text-6xl">
                            <img src={mongodbimg} alt="" srcSet="" height={50} width={100} />

                        </div>

                        <div className="relative flex items-center justify-center mx-auto  text-6xl">
                            <img src={mysql} alt="mysql" height={50} width={100} />
                        </div>
                        <div className="relative flex items-center justify-center mx-auto  text-6xl">
                            <img src={firebase} alt="firebase" height={50} width={100} />

                        </div>


                    </div >
                </div >
            </div >
        </>
    )
}
