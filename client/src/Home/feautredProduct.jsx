
import prod1 from './img/prod-7.png'
import prod2 from './img/prod-5.png'
import prod3 from './img/prod-4.png'
import textProduct from './img/textProduct.svg'
import './Home.css'
const FeaturedP = ({ FeaturedP }) => (
    <div className='container'>
        {/* <div className='container d-flex justify-content-center'>
            <img src ={textProduct} className='mt-5 pt-5'style={{width: 50 + '%'}}/>
        </div> */}
        <div className="container mt-5">
             <div className="row gy-5">
                <div className="col-md-4 d-flex justify-content-start">
                    <div className="card" style={{width: 25 + 'rem'}}>
                        <img src={prod1} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <p className="card-text text-center" style={{fontFamily:'Futura'}}><h2>Micro</h2></p>
                            </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                <div className="card" style={{width: 25 + 'rem'}}>
                        <img src={prod2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <p className="card-text text-center" style={{fontFamily:'Futura'}}><h2>Care Kit</h2></p>
                            </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                <div className="card" style={{width: 25 + 'rem'}}>
                        <img src={prod3} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <p className="card-text text-center" style={{fontFamily:'Futura'}}><h2>Care Kit</h2></p>
                            </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
)

export default FeaturedP

// IT’S Women’s Month! Let us celebrate Women!