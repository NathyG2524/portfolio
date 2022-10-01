import React, { useRef } from "react";
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tbqjqbg', 'template_ij4pa7q', form.current, 'B-3A_gF_cW-JH4uSP')
      .then((result) => {
          alert("Message sent. Thank you for your time");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 xl:mx-20 flex flex-wrap sm:flex-nowrap gap-4  sm:px-0 sm:mx-0 ">
        <div className="lg:w-1/2 md:w-1/2 sm:w-full bg-gray-900 rounded-lg overflow-hidden  md:p-10 md:m-10 flex flex-col  gap-4 justify-center relative lg:p-20 lg:mx-10 md:mx-10  p-5 sm:mx-0 ">
          



            
          <div className="dark:bg-gray-700 bg-slate-100 text-black dark:text-gray-100 relative flex flex-wrap py-6 rounded shadow-md items-center	sm:px-10">
            <div className="lg:w-1/2 px-6 sm:px-0 items-center	">
            <h4 className="text-2xl text-center">Download Resume</h4>
              
            </div>
            <div className="lg:w-1/2 px-10 sm:px-0 mt-4 lg:mt-0 ">
              
              

              
                <a href="https://drive.google.com/file/d/16gza4C4q89_RyVOLB_85HRnXFTXnKhcs/view?usp=sharing" target="_blank"><button
            
            className="text-white bg-indigo-500 border-0 py-2 px-6 mx-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Open Resume         </button></a>
            <a href="https://drive.google.com/file/d/16gza4C4q89_RyVOLB_85HRnXFTXnKhcs/view?usp=sharing" download="Natnael_Girma_Resume.pdf"><button
            
            className="text-white bg-indigo-500 border-0 py-2 px-6  mx-2 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-2">
            Download Pdf         </button></a>
              
               
              
            </div>
          </div>
          <div className="dark:bg-gray-500 bg-slate-300 text-black dark:text-gray-100  flex flex-wrap py-6 rounded shadow-md item-center justify-center	 ">
            <div className="lg:w-1/2  gap-4 flex justify-center">
              <a href="https://github.com/NathyG2524" target="_blank"><i class="fa fa-github text-5xl"></i></a>
              <a href="https://www.linkedin.com/in/nathy-girma/" target="_blank"><i class="fa fa-linkedin text-5xl "></i></a>
              <a href="https://medium.com/me/stories/public" target="_blank"><i class="fa fa-medium text-5xl "></i></a>
              <a href="https://www.linkedin.com/in/nathy-girma/" target="_blank"><i class="fa fa-twitter text-5xl "></i></a>
            
            
            
            
              
              
            </div>
            
          </div>
          <div className="dark:bg-gray-700 bg-slate-400 text-black dark:text-gray-100  flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
            
              <h2 className="title-font font-semibold  tracking-widest text-xs ">
                PHONE
              </h2>
              <p className="leading-relaxed  text-sky-900 dark:text-sky-400">+251934795617</p>
              <h2 className="title-font font-semibold  tracking-widest text-xs mt-4">
                EMAIL
              </h2>
              <a className=" text-sky-900 dark:text-sky-400 " 
              href="nathygirma2524@gmail.com">
                nathygirma2524@gmail.com
              </a>
            </div>
            <div className="lg:w-1/2 md:px-10 mt-4  lg:mt-0 px-6 lg:px-0 md:px-6">
              
              

              <h2 className="title-font font-semibold  tracking-widest text-xs ">
                ADDRESS
              </h2> 
               
              <p className="mt-1 text-sky-900 dark:text-sky-400">
              Addis Ababa <br />
                 Ethiopia
              </p>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8  lg:m-0 lg:px-0">
          <h2 className="text-slate-400 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </ h2> 
           <p className="leading-relaxed mb-5">
            </p>
            
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full dark:bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full dark:bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full dark:bg-gray-900 text-black dark:text-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}