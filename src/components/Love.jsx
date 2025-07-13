import React from 'react'
import photo from '../assets/lovely.png'
export default function Love() {
  return (
     <div style={{display:"flex",justifyContent:"flex-end",alignItems:"flex-start"}}>
          <img src={photo} style={{position:"absolute",top:"0",right:"0",maxHeight:"35rem",maxWidth:"35rem"}}></img>
        </div>
  )
}
