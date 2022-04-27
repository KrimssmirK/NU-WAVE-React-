import React from 'react'

import prod1 from '../img/prod-1.png'
import prod2 from '../img/prod-2.png'
import prod3 from '../img/prod-3.png'
import prod4 from '../img/prod-4.png'
import prod5 from '../img/prod-5.png'
import prod6 from '../img/prod-6.png'
import prod7 from '../img/prod-7.png'
import prod8 from '../img/prod-8.png'

export default function FeaturedProduct() {
  return (
    
        <div className="container">
            <div className="row g-3">
                <div className="col-md-6">
                    <div className="card prod-container">
                        <img src={prod1} alt="product 1" className="img-fluid img-thumbnail w-100 prod-img" />
                        <div className="card-body text-truncate">
                            <span>Advocates</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card prod-container">
                        <img src={prod2} alt="product 2" className="img-fluid img-thumbnail w-100 prod-img" />
                        <div className="card-body text-truncate">
                            <span>LeaveBag</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card prod-container">
                        <img src={prod3} alt="product 3" className="img-fluid img-thumbnail w-100 prod-img" />
                        <div className="card-body text-truncate">
                            <span>Spark e-book</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card prod-container">
                        <img src={prod4} alt="product 4" className="img-fluid img-thumbnail w-100 prod-img" />
                        <div className="card-body text-truncate">
                            <span>Living Jewerly</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    
  )
}
