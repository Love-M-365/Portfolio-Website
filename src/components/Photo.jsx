import React from 'react'
import photo from '../assets/coding.gif'
export default function Photo() {
  return (
    <div style={{textAlign:"center"}}>
      <img src={photo} style={{position:"absolute",display:"block",marginLeft:"auto",marginRight:"auto",top:"0",right:"0",maxHeight:"20rem",maxWidth:"20rem",borderRadius:"50%",border:"5px solid black",objectFit:"cover"}}></img>
    </div>
  )
}
