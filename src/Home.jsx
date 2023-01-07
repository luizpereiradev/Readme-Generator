import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="w-[90%] max-w-7xl mx-auto h-max">
      <div style={{ boxShadow: 'inset -2px -25px 80px 40px rgba(45,47,51,1)' }} className=" opacity-50 border-none w-[80vw] h-[500px] rounded-[100%] bg-purple-900 top-[-300px] absolute m-auto left-0 right-0 -z-50" />

      <header className="w-full text-xl p-3 font-bold">RGenerator</header>
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
            className="w-32 flex items-center justify-center bg-blue-500 hover:bg-blue-700 font-bold"
          >
            Try Now
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Home;
