
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";



export default function Projects() {
  return (
    <section id="projects" className="text-black dark:bg-gray-900 dark:text-gray-300 body-font ">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="font-sans sm:text-4xl text-3xl font-medium title-font mb-4 ">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            // <div class="group relative">
            // <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              
            
             <div
              key={project.image}
              className="sm:w-1/2 w-100 p-4 rounded">
                
              <div className="flex relative">
              
                <img
                  alt="gallery"
                  className=" rounded absolute inset-0 w-full h-full  object-center object-cover"
                  src={project.image}
                />
                
               
                <div className="px-8 py-10 rounded relative z-10 w-full border-4 border-gray-800  opacity-0 hover:opacity-100 hover:shadow-[inset_40rem_0_0_0] hover:shadow-gray-900 duration-[500ms,900ms] transition-[color,box-shadow] hover:outline hover:outline-offset-2 outline-grey-800 rounded ">
                
                
<h2 className="tracking-widest text-2xl title-font font-medium text-green-400 mb-1 font-serif">
                    {project.title}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3 ">
                  {project.subtitle}
                  </h1>
                  <p className="leading-relaxed text-white h-32 overflow-hidden ">{project.description.slice(0, 180)}...</p>
                  <div className=" flex justify-center py-4 ">
                    
                    { project.link && <div><a target="_blank"
              href={project.link} className="self-center"><button class="  z-20 rounded font-serif bg-slate-700 px-4 py-2 text-xl  text-slate-300 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[500ms,900ms] transition-[color,box-shadow] hover:border-b-indigo-500">
                    Live site
                </button></a>
                 </div>}
                    <div><a  target="_blank" href={project.github}><button class=" z-20 rounded font-serif  mx-3   text-xl  text-slate-300   hover:outline hover:outline-offset-2 outline-grey-800 rounded-full ">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png"/>
                          </button></a></div> 
                  
                
                </div>
                </div>
              </div>

            </div>
            // </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}