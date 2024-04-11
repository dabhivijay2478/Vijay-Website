import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Modalprojects({ project }) {
  return (
    <>
      <dialog id="my_modal_4" className="modal className='px-2 py-3'">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl text-slate-00">
          <div >
            <Player
              src={project && project['Project-Logo']}
              className="player"
              loop
              autoplay
              style={{ height: '150px', width: '100px' }}
            />
          </div>
          <div>
            <h3 className="font-bold text-lg "><span>Project Name : </span><span className='text-teal-600'>{project && project['Project-Name']}</span></h3>
            <p className="font-bold text-lg "><span>Project Details : </span><span className='text-teal-600'>{project && project['Project-Details']}</span></p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Technologies:</h3>
            <ul>

              {project && project['Project-Technology'].map((technology, index) => (
                <li key={index}><span><i className="fa-regular fa-circle-dot mr-2 text-blue-600"></i></span><span className='text-emerald-500'>{technology}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg"><span>Project DataBase : </span><span className='text-teal-600'>{project && project['Project-Database']}</span></h3>
            <h3 className="font-bold text-lg"><span>Project GitHubLink : </span><a href={project && project['Project-GitHubLink']} target='_blank' className='text-blue-500 underline'>View On GitHub</a> </h3>
            <h3 className="font-bold text-lg"><span>Project Live Link : </span><a href={project && project['Project-Live-Link']} target='_blank' className='text-blue-500 underline'>View On Live</a> </h3>

          </div>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
