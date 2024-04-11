import React from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
import vijayresume from "./VijayResume.pdf"
import logo from "../assets/logo1.jpg"
export default function Home() {
  const resume = () => {
    // using Java Script method to get PDF file
    fetch('VijayResume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'VijayResume.pdf';
        alink.click();
      })
    })
  }
  return (
    <>

      <div className="w-full h-full mt-14 " >

        <section className="pt-10 overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16 w-full h-full">

          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

            <div className="grid items-center grid-cols-1 md:grid-cols-2">

              <div>
                <h2 className="text-3xl font-bold leading-tight text-slate-00 sm:text-4xl lg:text-5xl">Hey 👋 I am <br className="block sm:hidden" />Vijay Dabhi</h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-00 md:mt-8">I am MERN Stack developer with a passion for building innovative and user-friendly web applications. I'm currently a student at Ganpat University, where I'm pursuing a B.Tech in Computer Science and Engineering.</p>

                <p className="mt-4 text-xl text-gray-00 md:mt-8 ">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 "></span>
                    <span className="relative dark:hover:bg-yellow-300 dark:hover:text-black" > Have a question? </span>
                  </span>
                  <br className="ml-2 block sm:hidden" />Ask me on <a href="https://linkedin.com/in/vijaydabhi" target={'_blank'} className=" transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline ">Linkedin</a>

                  <br />
                  <a href={vijayresume}
                    onClick={resume} target="_blank" className="mt-5 inline-block px-5 py-2 mx-auto text-white bg-slate-700 rounded-full hover:bg-slate-900 md:mx-0">
                    <i className="fa-solid fa-chevron-down"></i> Download Resume
                  </a>
                </p>
              </div>

              <div className="relative">

                <img className="absolute inset-x-0 index- bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />
                <div className="index-z-0" >
                  <img
                    className="index-z-0"
                    src={logo}
                    height={300}
                    width={300}
                  />
                </div>


              </div>

            </div>
          </div>
        </section>



      </div>
    </>

  );
}
