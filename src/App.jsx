import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextPressure from './components/Hello'
import Photo from './components/Photo'
import Name from './components/Name'
import gif from './assets/coding.gif'
import lovely from './assets/lovely.jpeg'
import loveee from './assets/loveee.png'
import ProfileCard from './components/ProfileCard'
import TiltedCard from './components/ProfileCard';
import  Card  from './components/Card'
import Home from './components/mainpage'

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
  const parallax = useRef(null)

  return (
    <div>
      
      <div>
       
       
           <div style={{ display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
}}>

</div>
        <div  style={{position: 'relative',marginBottom:"10rem",}}>
 <Home></Home>
 
</div>

 
      </div>
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      
      
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
         
        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={loveee} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>
       
      

 
    <Card></Card>

  
      </Parallax>
    </div>
    </div>
  )
}
