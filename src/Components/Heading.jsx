import React from 'react'

const Heading = ({heading}) => {
    let headingChar = heading.split('');
  return (
    <div className='pt-5'>
        {
            headingChar.map((c, idx)=>{
                return (
                    <span key={idx} className={`xs:text-2xl md:text-4xl text-white font-lora ${idx < 3 ? "font-normal" : "font-bold"}`}>{c}</span>
                )
            })
        }
        
    </div>
  )
}

export default Heading