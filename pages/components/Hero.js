import React from 'react'


function Hero() {
  return (
    <div className='flex items-center text-white justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'  >
            {/* overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>

        <div className='p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]'>
            <h2>Heading</h2>
                <p>Message</p>
                <button>Book</button>
        </div>
    </div>
  )
}

export default Hero