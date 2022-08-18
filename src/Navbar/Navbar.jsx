import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import icon from '../assets/icons16.png'
import nathy from "../assets/nathyG.png"



export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('prefer-color-scheme: dark)').
      matches) {
      setTheme('dark');
    } else {
      setTheme('light');

    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwith = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  const customItemClass = `inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 dark:hover:bg-gray-700 `
  return (
    <>
      <header className="bg-white dark:bg-slate-900 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center dark:text-slate-400">
          <div className="title-font font-medium text-white mb-4 md:mb-0 flex flex-row" >
            <a href="#about" className="text-slate-900 dark:text-white ml-3 text-xl">
              Natnael Girma
            </a>
           
          {/* <img
            className="object-cover object-center rounded w-230 h-24"
            alt="hero"
            src={nathy}
          /> */}
        
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center ">
            <section className="MOBILE-MENU flex lg:hidden dark:bg-slate-900 " >
              <div
                className="HAMBURGER-ICON absolute top-0 right-0   px-8 py-4 space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"} dark:bg-slate-900`}>
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ">
                  <li className="border-b border-gray-400 my-8 uppercase dark:text-gray-300">
                    <a href="/about">About</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/contact">Contact</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/skills">Skills</a>
                  </li>
                  <li>
                    <button type='button' onClick={handleThemeSwith} className={`${customItemClass} `}>
                      {theme === 'light' ? <img
                        className="object-cover object-center rounded border-b border-gray-400"
                        alt="hero"
                        src={icon}
                      /> : "🌞"}
                    </button>
                  </li>
                </ul>
              </div>
            </section>
            <div className="DESKTOP-MENU  hidden lg:vissible space-x-8 lg:flex ">
              <a href="#projects" className={`${customItemClass}`}>
                Projects
              </a>
              <a href="#skills" className={`${customItemClass}`}>
                Skills
              </a>
              <a href="#testimonials" className={`${customItemClass}`}>
                Testimonials
              </a>

              <a
                href="#contact"
                className={`${customItemClass} ` }>
                Contact Me

              </a>
              <button type='button' onClick={handleThemeSwith} className={`${customItemClass} `}>
                {theme === 'light' ? <img
                  className="object-cover object-center rounded "
                  alt="hero"
                  src={icon}
                /> : <div className="place-self-end">🌞</div>}
              </button>

            </div>

          </nav>

        </div>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        right: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #f4f4f4;
      }
    `}</style>
      </header>

    </>
  );
}