import React, { useState } from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";
export default function Contactus() {
    const navigation = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const validateForm = () => {
        let isValid = true;

        if (fullName.trim() === '') {
            setFullNameError('Please enter your name');
            isValid = false;
        } else {
            setFullNameError('');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email.trim() === '') {
            setEmailError('Please enter your email address');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
            isValid = false;
        } else {
            setEmailError('');
        }


        if (message.trim() === '') {
            setMessageError('Please enter your message');
            isValid = false;
        } else {
            setMessageError('');
        }

        return isValid;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsLoading(true)

        const response = await fetch("/send-email", {
            method: "POST",
            changeOrigin: true,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullName: fullName,
                email: email,
                message: message
            }),

        });
        setFullName('');
        setEmail('');
        setMessage('');
        const Maildata = response.json();
        if (response.status === 400 || !Maildata) {
            window.alert("Invaild");
        } else if (response.status === 422 || !Maildata) {
            window.alert("Filled The all Information !!");

        } else {
            window.alert("SucessFully Send Email To Vijay Dabhi");
            setIsLoading(false);

            navigation('')
        }

    };
    return (
        <>
            <div>
                <section className="py-10 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold leading-tight text-gray-400 sm:text-4xl lg:text-5xl">Contact Me</h2>
                        </div>


                        <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3 mt-10">
                            <div className="overflow-hidden bg-white border-solid border-2 border-teal-400 rounded-lg">
                                <div className="p-6">
                                    <div className="relative">
                                        <Player
                                            src="https://assets10.lottiefiles.com/packages/lf20_rw7SpS.json"
                                            className="player"
                                            loop
                                            autoplay
                                            style={{ height: "100px", width: "50px" }}
                                        />
                                    </div>
                                    <p className="mt-1 text-lg font-medium text-gray-900">+91 9328656416</p>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white border-solid border-2 border-teal-400 rounded-lg">
                                <div className="p-6">
                                    <div className="relative">
                                        <Player
                                            src="https://assets3.lottiefiles.com/packages/lf20_nxkmi9um.json"
                                            className="player"
                                            loop
                                            autoplay
                                            speed="0.5"
                                            style={{ height: "100px", width: "50px" }}
                                        />
                                    </div>
                                    <p className="mt-6 text-lg font-medium text-gray-900">vijaydabhi0426@gmail.com</p>
                                    <p className="mt-1 text-lg font-medium text-gray-900">vijaydabhi0428@gmail.com</p>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white border-solid border-2 border-teal-400 rounded-lg">
                                <div className="p-6">
                                    <div className="relative">
                                        <Player
                                            src="https://assets8.lottiefiles.com/packages/lf20_CEyvj2.json"
                                            className="player"
                                            loop
                                            autoplay
                                            style={{ height: "100px", width: "50px" }}
                                        />
                                    </div>
                                    <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">Kathlal,Kheda,Gujarat 387630</p>
                                </div>
                            </div>
                        </div>


                        <div className="lg:flex lg:items-center lg:-mx-6">
                            <div className="lg:w-1/2 lg:mx-6">
                                <div className="relative">


                                    <Player
                                        src="https://assets10.lottiefiles.com/private_files/lf30_vrcurbxk.json"
                                        className="player"
                                        loop
                                        autoplay
                                        style={{ height: "300px", width: "300px" }}
                                    />
                                </div>

                                <div className="mt-6 w-80 md:mt-8">
                                    <h3 className="text-gray-600 dark:text-gray-300 ">Follow Me</h3>

                                    <div className="flex mt-4 -mx-1.5 ">
                                        <ul className="social-icons flex justify-start">
                                            <li className="mx-2" >
                                                <a href="https://www.facebook.com/dabhi.vijay.921677?mibextid=ZbWKwL" target={'_blank'}
                                                    className="footer-icon hover:text-indigo-500  text-2xl flex justify-center items-center w-8 h-8 dark:hover:bg-white rounded-full  text-slate-400 duration-300">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="mx-2">
                                                <a href="https://twitter.com/vijaydabhi28" target={'_blank'}
                                                    className="footer-icon hover:text-blue-400   text-2xl flex justify-center items-center w-8 h-8 dark:hover:bg-white rounded-full  text-slate-400 duration-300">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="mx-2">
                                                <a href="https://instagram.com/vijay_dabhi__04?igshid=NTc4MTIwNjQ2YQ==" target={'_blank'}
                                                    className="footer-icon hover:text-red-500 text-2xl flex justify-center items-center w-8 h-8 dark:hover:bg-white rounded-full  text-slate-400 duration-300  ">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="mx-2">
                                                <a href="https://linkedin.com/in/vijaydabhi" target={'_blank'}
                                                    className="footer-icon hover:text-indigo-600 text-2xl flex justify-center items-center w-8 h-8 dark:hover:bg-white rounded-full  text-slate-400 duration-300 ">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li className="mx-2">
                                                <a href="https://github.com/dabhivijay2478" target={'_blank'}
                                                    className="footer-icon hover:text-white hover:bg-black  text-2xl flex justify-center items-center w-8 h-8 dark:hover:bg-black rounded-full  text-slate-400 duration-300 ">
                                                    <i className="fa-brands fa-github"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 lg:w-1/2 lg:mx-6 border-solid border-2 border-teal-400 rounded-lg">
                                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                                    <h1 className="text-lg font-medium text-gray-600">What do you want to ask</h1>

                                    <form className="mt-6">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter Your Name"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                required
                                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            <span>{fullNameError && <p className="text-red-500">{fullNameError}</p>}</span>
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                            <input
                                                type="email"
                                                placeholder="abc@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            <span>{emailError && <p className="text-red-500">{emailError}</p>}</span>
                                        </div>

                                        <div className="w-full mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                            <textarea
                                                className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                                placeholder="Message"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                required
                                            ></textarea>
                                            <span>{messageError && <p className="text-red-500">{messageError}</p>}</span>
                                        </div>

                                        <button
                                            onClick={handleSubmit}
                                            className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>



                    </div>
                </section>

            </div>


            {isLoading && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
                    <div className="">
                        <Player
                            src="https://assets4.lottiefiles.com/packages/lf20_3rlzwL.json"
                            className="player"
                            loop
                            autoplay
                            style={{ height: "300px", width: "350px" }}
                        />
                    </div>
                </div>
            )}</>
    )
}
