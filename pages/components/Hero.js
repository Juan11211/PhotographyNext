import React from 'react';

function Hero({ heading, message }) {
  return (
    <div className='flex items-center text-white justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img relative'>
      {/* overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />

      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='text-xl py-5'>{message}</p>
        <button className='px-8 py-2 border relative overflow-hidden'>
          <span className='absolute top-0 left-0 w-0 bg-white/50 h-full transform origin-left transition-all duration-300 ease-in-out group-hover:w-full'></span>
          <span className='relative z-10'>Book</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
