import React from 'react'
import Instagramimg from './Instagramimg'
import IgImg1 from '/Users/juanaviles/Desktop/photograph/public/ig-img-1.jpeg'
import IgImg2 from '/Users/juanaviles/Desktop/photograph/public/ig-img-2.jpeg'
import IgImg3 from '/Users/juanaviles/Desktop/photograph/public/ig-img-3.jpeg'
import IgImg4 from '/Users/juanaviles/Desktop/photograph/public/ig-img-4.jpeg'
import IgImg5 from '/Users/juanaviles/Desktop/photograph/public/ig-img-5.jpeg'
import IgImg6 from '/Users/juanaviles/Desktop/photograph/public/ig-img-6.jpeg'

function instagram() {
  return (
    <div className='max-w-[1240px] text-center py-24 mx-auto'>
        <h1 className='text-2xl font-bold'>Book me for your next event</h1>
        <h3 className='font-bold text-md pb-4'>@Moment</h3>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-4 gap-2'>
        <Instagramimg socialImg={IgImg1}  />
        <Instagramimg socialImg={IgImg2}/>
        <Instagramimg socialImg={IgImg3}/>
        <Instagramimg socialImg={IgImg4}/>
        <Instagramimg socialImg={IgImg5}/>
        <Instagramimg socialImg={IgImg6}/>
      </div>
    </div>
 
  )
}

export default instagram