import React, { useState } from 'react'
import {dummyTrailers} from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle.'

const TrailersSection = () => {
    const [currenttrailer , setCurrentTrailer] = useState(dummyTrailers[0])
  return (
    <div className='px-6 md:px-16 lg:px-24 py-20 overflow-hidden'>
        <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>
        <div className='relative mt-6 border-8'>
            <BlurCircle top='-100px' right='-100px'/>
            <ReactPlayer url={currenttrailer.videoUrl} controls={false}
            className='mx-auto max-w-full ' width='960px' height='540px' 
            />
        </div>
        <div>
            {dummyTrailers.map((trialer)=>(
                <div key={trialer.image}>
                    <img src={trialer.image} alt="trailer" className='' />
                    <PlayerCircleIcon/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TrailersSection