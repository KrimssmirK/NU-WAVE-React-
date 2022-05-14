import React, { useEffect } from 'react'
import Workers from './img/underConstruction1.png'
export default function UnderConstruction() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container p-5" style={{display:'grid', placeItems: 'center'}}>
      <div className="text-center">
        <img src={Workers} alt="men at work" className="img-fluid" />
        <div className="text-center">
          <h1>This page is under construction.</h1>
        </div>
      </div>
     
    </div>
  )
}
