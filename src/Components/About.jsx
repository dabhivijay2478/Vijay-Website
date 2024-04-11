import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Skills from "./Skills";
export default function About() {
  return (
    <>
      <div className="w-full h-full mb-10 text-slate-00 " textdirection="toutContent w-full my-0 mb-4 mx-auto py-20 sm:py-0  flex flex-col-reverse sm:flex-row text-left sm:text-right">
        <section className="pt-10 overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16 w-full h-full">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">


              <div className="relative">


                <Player
                  src="https://assets7.lottiefiles.com/packages/lf20_w51pcehl.json"
                  className="player"
                  loop
                  autoplay
                  style={{ height: "300px", width: "300px" }}
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold leading-tight text-slate-00 sm:text-4xl lg:text-5xl">About Me</h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-00 md:mt-8">I am a MERN developer with expertise in TailwinCSS UI FarmeWork. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold leading-tight text-slate-00 sm:text-4xl lg:text-5xl">Skills</h2>

              </div>

            </div>
            <Skills />

          </div>

        </section>

      </div>

    </>
  );
}
