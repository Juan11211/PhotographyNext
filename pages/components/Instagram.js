import React from 'react'
import Instagramimg from './Instagramimg'
import IgImg1 from '../public/ig-img-1.jpeg'


function instagram() {
  return (
    <div className='max-w-[1240px] text-center py-24 mx-auto'>
        <h1 className='text-2xl font-bold'>Book me for your next event</h1>
        <h3 className='font-bold text-md pb-4'>@Moment</h3>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-4 gap-2'>
        <Instagramimg socialImg={IgImg1} />
        <Instagramimg />
        <Instagramimg />
        <Instagramimg />
        <Instagramimg />
        <Instagramimg />
      </div>
    </div>
 
  )
}

export default instagram