
import prod1 from './img/prod-7.png'
import prod2 from './img/prod-5.png'
import prod3 from './img/prod-4.png'
import textProduct from './img/textProduct.svg'
import './Home.css'
const FeaturedP = ({ FeaturedP }) => (
    <div className='container'>
        {/* <div className='container ter'>
            <img src ={textProduct} className='mt-5 pt-5'style={{width: 50 + '%'}}/>
        </div> */}
        <div className="container mt-5">
             <div className="row gy-5">
                <div className="col-md-4">
                    <div className="card">
                        <img src={prod1} className="card-img-top img-fluid" alt="..."></img>
                        <div className="card-body">
                            <h6 className="card-text text-center">Micro</h6>                         
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                        <img src={prod2} className="card-img-top img-fluid" alt="..."></img>
                            <div className="card-body">
                                <h6 className="card-text text-center">Lip Care Kit</h6>
                            </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                        <img src={prod3} className="card-img-top img-fluid" alt="..."></img>
                            <div className="card-body">
                                <h6 className="card-text text-center">Living Jewerly</h6>
                            </div>
                    </div>
                </div>
             </div>
        </div>
        <div className="p-5 text-center">
            <button className="btn text-light" style={{backgroundColor: 'blue'}}>View more products</button>
        </div>
    </div>
)

export default FeaturedP

// IT’S Women’s Month! Let us celebrate Women!