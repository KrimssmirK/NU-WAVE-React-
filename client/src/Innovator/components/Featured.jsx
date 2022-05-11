import React from 'react'
import Ino1 from '../img/innovator1.png'
export default function featured() {
  return (
    <div className="container">
        <div className="row gy-5">
            <div className="col-12">
                <figure className="container" style={{ width: 'fit-content'}}>
                    <div style={{display: 'grid', placeItems: 'center'}}>
                        <img src={Ino1} alt="innovator" className="img-fluid" />
                    </div>
                    <figcaption className="pt-3">
                        <h3>Dr. Ria Canlas</h3>
                        <p className="ps-1">
                            Po Lite technology inc. President, CEO, and Innovator.
                        </p>
                        
                    </figcaption>
                </figure>
            </div>
            <div className="col-12">
                <figure className="container" style={{ width: 'fit-content'}}>
                    <div style={{display: 'grid', placeItems: 'center'}}>
                        <img src={Ino1} alt="innovator" className="img-fluid" />
                    </div>
                    <figcaption className="pt-3">
                        <h3>Dr. Ria Canlas</h3>
                        <p className="ps-1">
                            Po Lite technology inc. President, CEO, and Innovator.
                        </p>
                        
                    </figcaption>
                </figure>
            </div>
            <div className="col-12">
                <figure className="container" style={{ width: 'fit-content'}}>
                    <div style={{display: 'grid', placeItems: 'center'}}>
                        <img src={Ino1} alt="innovator" className="img-fluid" />
                    </div>
                    <figcaption className="pt-3">
                        <h3>Dr. Ria Canlas</h3>
                        <p className="ps-1">
                            Po Lite technology inc. President, CEO, and Innovator.
                        </p>
                        
                    </figcaption>
                </figure>
            </div>
        </div>
        
    </div>
  )
}
