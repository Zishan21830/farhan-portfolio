import React from 'react'
import thankYouImage from "../assets/Image post-cuate.svg"

const ThankyouPage = () => {
  return (
    <div className='w-full h-full bg-black flex flex-col items-center'>
        <h1 className='text-white text-5xl font-bold'>Thankyou</h1>
        <img src={thankYouImage} alt="Thank You Image" className='w-[30rem] h-[30rem]'/>
    </div>
  )
}

export default ThankyouPage