import Typewriter from 'typewriter-effect';
import React from 'react'

export default function Name() {
  return (

      
    <h1 className="text-3xl font-bold" style={{fontSize:"2.9rem"}}>
      <Typewriter
        options={{
          strings: ["Love Maggo","A Web Developer"],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
      />
    </h1>
  
  )
}
