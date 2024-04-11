import React from "react";
import logo from "../assets/logo1.jpg";

export default function Home() {
  const resume = () => {
    // using JavaScript method to get PDF file
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
    <div id="container" class="p-20 w-auto flex px-24 justify-center relative">

      <div id="container" class="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
        <div className="md:mr-10">
          <img
            className="rounded-lg"
            src={logo}
            height={400}
            width={500}
            alt="image of myself"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-white font-bold text-4xl mb-6">
            Hey there, <span className="text-indigo-400">I'm Vijay Dabhi</span>
          </h1>
          <p className="text-gray-300 mb-8">
            👋 Hi! I'm passionate about developing with the <span className="text-cyan-600"> MERN stack </span>(MongoDB, Express.js, React.js, Node.js)
            and enjoy crafting robust and efficient applications.With experience in Linux environments, I bring a wealth of knowledge to my projects.
            I specialize in creating intuitive user interfaces using React.js and React Native, and my backend skills
            include Node.js, Express.js, MongoDB, and Firebase. Let's connect and build something amazing together!
          </p>
          <div className="flex flex-wrap justify-start items-center gap-4">
            <a
              href="https://github.com/iam-aydin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 rounded-lg p-3 flex items-center gap-2 text-white hover:bg-indigo-600"
            >
              <img
                src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                alt="Github"
                className="w-6 h-6"
              />
              <span>Visit my Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aydin-vesali-moghaddam-82a860275/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 rounded-lg p-3 flex items-center gap-2 text-white hover:bg-indigo-600"
            >
              <img
                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6"
              />
              <span>Follow me on Linkedin</span>
            </a>
            <a
              href="https://twitter.com/ichbinaydin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 rounded-lg p-3 flex items-center gap-2 text-white hover:bg-indigo-600"
            >
              <img
                src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                alt="Twitter"
                className="w-6 h-6"
              />
              <span>Follow me on Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



