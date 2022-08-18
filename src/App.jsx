import React from 'react'
import About from './About/About'
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";


export default function App() {


  return (
    <>
    
    <div className='font=inter bg:white dark:bg-slate-900 '>
    <Navbar />
    <About></About>
    <Skills />
    <Projects />
    <Contact />
    
    </div>
    </>
  )
}
