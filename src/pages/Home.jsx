import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiRefreshCw, FiLock, FiArrowRight, FiGithub,
} from 'react-icons/fi';
import pre from '../assets/pre.png';
import smPre from '../assets/smpre.png';
import mdPre from '../assets/mdpre.png';
import lgPre from '../assets/lgpre.png';
import { GlobalContext } from '../store/GlobalStorage';

function Home() {
  const { themeState: [, setTheme] } = React.useContext(GlobalContext);
  setTheme('dark');
  return (
    <div className="w-[90%] max-w-7xl mx-auto h-max">
      <div style={{ boxShadow: 'inset -2px -25px 80px 40px rgba(45,47,51,1)' }} className=" opacity-50 border-none w-[80vw] h-[500px] rounded-[100%] bg-green-900 top-[-300px] absolute m-auto left-0 right-0 -z-50" />

      <header className="w-full text-xl p-3 font-bold flex justify-between">
        RGenerator
        <FiGithub size={24} className="hover:w-7 hover:h-7 cursor-pointer" />
      </header>
      <main className="flex w-full flex-col items-center justify-center">
        <h1 className="border-none text-center font-display font-light mt-[7vh]">
          Maximize Your
          <span className="font-bold"> Productivity </span>
          with Our Intelligent README Generator and GPT-3
        </h1>
        <p className="border-none text-sm text-center font-display text-gray-300">
          With our Intelligent README Generator, easily create high-quality
          README files for your project using the powerful GPT-3 language API.
          Save time and ensure your documentation is clear and comprehensive
          with just a few clicks.
        </p>
        <Link to="/form" className="decoration-transparent">
          <button
            type="button"
            className="mt-20 w-32 flex items-center justify-center bg-blue-500 hover:bg-blue-700 font-bold py-4"
          >
            Try Now
            <FiArrowRight size={20} className="ml-2" />
          </button>
        </Link>
        <div className="h-[700px] w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex justify-center mt-20 relative">
          <div style={{ boxShadow: 'inset -2px -25px 80px 40px rgba(45,47,51,1)' }} className=" opacity-20 border-none w-full h-[700px] top-[-100px] rounded-[100%] bg-green-900 absolute m-auto left-0 right-0 -z-50" />
          <div className="absolute top-5 left-7 flex flex-row gap-2 p-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <div className="absolute top-5 h-9 w-1/2 max-w-md border-none bg-white rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm border border-gray-100 flex items-center justify-between font-display px-4 py-1">
            <FiLock />
            RGenerator.md
            <FiRefreshCw />
          </div>
          <img src={pre} alt="preview" className=" sm:hidden h-[85%] w-[95%] mt-20 rounded-md" />
          <img src={smPre} alt="preview" className="hidden sm:block md:hidden h-[85%] w-[95%] mt-20 rounded-md" />
          <img src={mdPre} alt="preview" className="hidden md:block lg:hidden h-[85%] w-[95%] mt-20 rounded-md" />
          <img src={lgPre} alt="preview" className="hidden lg:block h-[85%] w-[95%] mt-20 rounded-md" />
        </div>
      </main>
    </div>
  );
}

export default Home;
