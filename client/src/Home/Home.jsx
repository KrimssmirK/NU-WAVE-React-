import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import banner from './img/banner-nu-manila.webp'

import CarouselItem from './components/carousel_item'
import Table from './table'
import FeaturedP from './feautredProduct.jsx'
import FeatInnovator from './components/featured_innovator'


// const fetchBannerData = async () => {
//     return await axios.get('https://nu-centie.herokuapp.com/sabater')
//     .then(({data}) => {
//         console.log(data)
//         return data;
//     })
//     .catch(err => {
//         console.log(err)
//     })
//   }


export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="Home">
            <div className="hero">
                {/* <img src={banner} alt="creative and technology"  className='img-fluid'/> */}
                {/* <div className="container p-md-5">
                    <h1 className="textH">
                        Creative + Technology
                    </h1>
                </div>   */}
                <section className="pb-5">
                <div id="centie_carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#centie_carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#centie_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#centie_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <CarouselItem />
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#centie_carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#centie_carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            </div>
            {/* <img src={waved} alt="" className="img-fluid banner"/> */}
            <section className="container pt-5">
                <h1>Featured Articles</h1>
                <p className="p-md-2">
                This is what we are up to. Be updated on what's new on our projects, activities and achievements.
                </p>
                <Table />
            </section>
            <section className="container" style={{marginTop: 10 +'%', marginBottom: 5 + '%'}}>
                <h1>Featured Products</h1>
                <p className="p-md-2">
                Ideas, Innovations, Inventions, Creations....
                <br />
                Browse through and take interest in the fruits of our innovator's relentless efforts to compete in the modern world.
                </p>
                <FeaturedP />
            </section>
            <section className='container py-5'>
                <div className="">
                    <div className="row g-5">
                        <div className="col-md-5">
                            <div className="mx-auto">
                                <h1>Featured Innovator</h1>
                                <p className="p-md-2">
                                    Meet and get to know one of the innovators that had contributed greatly to make NU WAVE a tsunami.
                                </p>
                            </div>
                            
                        </div>
                        <div className="col-md-7">
                            <div className="container">
                                <FeatInnovator />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center p-5">
                    <Link to="/featured_innovators">
                        <button className="btn text-light" style={{backgroundColor: 'blue'}}>View more innovators</button>
                    </Link>
                </div>
                   
            </section>
         {/* <img src={bag} alt="bag" className="products d-none d-sm-block"/>    */}
        {/* carsouel banner */}
            {/* <section className="pb-5">
                <div id="centie_carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#centie_carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#centie_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#centie_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <CarouselItem />
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#centie_carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#centie_carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section> */}
        {/* featured products */}
            {/* <section className="prod-section p-md-5 py-5"> */}
            {/* <div className="products">
                
            </div> */}
            {/* <div className="text-center mb-5">
                <span className="fs-1 text-center border-warning border-2 border-bottom">Featured Products</span>
            </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 ps-sm-5 pe-0">
                            <div className="pt-sm-5 mt-sm-5 ps-sm-5 ms-sm-5">
                                <h4 className="pb-5">“Center for Innovation and Entrepreneurship”</h4>
                                <p className="lh-lg">
                                    aims to produce successful startups participating from both the NU community and external organizations 
                                    or groups who are interested in developing innovative business ideas and creative output.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <FeaturedProduct />
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Todo: for now, featured innovator and articles are in the same container; it should be separated */}
            {/* featured innovator and articles */}
         {/* <img src={paper} alt="bag" className="paper d-none d-sm-block"/>   

            <section className="articles-section p-5">
                <div className="text-center mb-5">
                    <span className="fs-1 text-center border-warning border-2 border-bottom">Featured Articles</span>
                </div>
                <FeaturedArticles />
                
            </section>

            <section className="pt-5">
                <About />
            </section> */}
        </div>
        
    );
}

// const Home = () => (
    // <div className='Home'>
    //     <div id="centie_carousel" className="carousel slide" data-bs-ride="carousel">
    //         <div className="carousel-indicators">
    //             <button type="button" data-bs-target="#centie_carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    //             <button type="button" data-bs-target="#centie_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //             <button type="button" data-bs-target="#centie_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //         </div>
    //         <div className="carousel-inner">
    //             <div className="carousel-item active">
    //                 <img src={banner1} className="img-fluid" alt="Centie Banner"/>
    //             </div>
    //             <div className="carousel-item">
    //                 <img src={banner2} className="img-fluid" alt="Centie Banner"/>
    //             </div>
    //             <div className="carousel-item">
    //                 <img src={banner3} className="img-fluid" alt="Centie Banner"/>
    //             </div>
    //         </div>
    //         <button className="carousel-control-prev" type="button" data-bs-target="#centie_carousel" data-bs-slide="prev">
    //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //             <span className="visually-hidden">Previous</span>
    //         </button>
    //             <button className="carousel-control-next" type="button" data-bs-target="#centie_carousel" data-bs-slide="next">
    //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //             <span className="visually-hidden">Next</span>
    //         </button>
    //     </div>

  
//     <section className="py-5">
//         <div className="container main-prod-container p-5">
//             <div className="mx-auto" style={{width: 'fit-content'}}>
//                 <h3 className="feat-title">FEATURED PRODUCTS</h3>
//                 <hr className="feat-title" size="8"/>
//             </div>
//             <div className="row g-5">
//                 <div className="col-md-4">
//                     <div className="card card-prod">
//                         <img src={prod1} alt="" className="img-fluid "/>

//                         <div className="card-body text-truncate">
//                             <span>Advocates</span>
//                         </div>
//                     </div>
                    
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card card-prod">
//                         <img src={prod2} alt="" className="img-fluid"/>

//                         <div className="card-body text-truncate">
//                             <span>LeaveBag</span>
//                         </div>
//                     </div>
                    
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card card-prod">
//                         <img src={prod3} alt="" className="img-fluid"/>

//                         <div className="card-body text-truncate">
//                             <span>Spark e-book</span>
//                         </div>
//                     </div>
                   
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card card-prod">
//                         <img src={prod4} alt="" className="img-fluid"/>

//                         <div className="card-body text-truncate">
//                             <span>Living Jewerly</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card card-prod">
//                         <img src={prod5} alt="" className="img-fluid"/>

//                         <div className="card-body text-truncate">
//                             <span>E-Lip-Sees</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card card-prod">
//                         <img src={prod6} alt="" className="img-fluid"/>

//                         <div className="card-body text-truncate">
//                             <span>Escential</span>
//                         </div>
//                     </div>
//                 </div>

//             </div>
            
//         </div>
//     </section>


//     <section className="py-3 pb-5">
//         <div className="container">
//             <div className="row gy-5">
//                 <div className="col-md-6 vl-innovator">
//                     <div className="mx-auto" style={{width: 'fit-content'}}>
//                         <h3 className="feat-prod">FEATURED INNOVATOR</h3>
//                         <hr className="feat-prod" size="8"/>
//                     </div>
//                     <div className="container">
//                         <div className="row innovator bg-light">
//                             <div className="card card-innovator">
//                                 <img src="../img/article4.png" alt="Dr. Ria Canlas" className="img-fluid mx-auto rounded-3 py-2" style={{height: 200}}/>
//                                 <div className="card-body text-truncate">
//                                     <span className="fw-bold text-center">Dr. Ria Canlas</span>
//                                     <p className="text-start innovator-p py-3">
//                                         Dr. Ria Canlas is National University’s very own Director of Center for Innovation and Entrepreneurship. 
//                                         She is currently the CEO of Po Lite Technology Inc., a local manufacturing company that formulates and designs 
//                                         construction materials using green innovation and technology to contribute to nation-building. In 2020, she was 
//                                         the grand winner of the Alfredo M. Yao Intellectual Property Awards for her intellectual property called 
//                                         “An Eco-Couture Panel System and a Method of Manufacture of Prefabricated Building Materials”
//                                     </p>
//                                 </div>
//                             </div>
                         
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <div className="mx-auto" style={{width: 'fit-content'}}>
//                         <h3 className="feat-prod">ARTICLES</h3>
//                         <hr className="feat-prod" size="8"/>
//                     </div>
//                     <div className="container articles text-center ml-5">

//                         <iframe 
//                             className="mt-3 article-container"
//                             width="100%" 
//                             height="315" 
//                             src="https://www.youtube.com/embed/EnZb14MsQi0?&autoplay=1" 
//                             frameborder="0" allowfullscreen >
//                         </iframe>


//                         <div className="article-container text-start p-3 mt-5">
//                             <p >
//                                 1st TouchDown Meeting for Creative and Technology Innovation Hub Incubatees
//                                 Thanks to all who joined us in this fruitful and engaging meeting with CentIE Director Dr. Ria Liza Centeno - Canlas   
//                                 To our Incubatees, Mentors, Core Members, Faculty, and Collaborators, Thank you all and see you at our next activity...
//                                 THE END IS JUST THE START
//                                 #CentIE #Startup #Innovation #Entreprenurship #TheEndisJusttheStart
//                                 #EntrepreNUr #EducationThatWorks 
//                                 #C&T
//                             </p>
//                             <img src="../img/article1.png" alt="" className="py-1"/>
//                             <img src="../img/article1-a.png" alt="" className="py-1"/>
//                             <img src="../img/article1-b.png" alt="" className="py-1"/>
//                         </div>
//                         <div className="article-container text-start p-3 mt-5">
//                             <p >
//                                 5 REASONS TO START A STARTUP TODAY!!!
//                                 Filipino Startup owners may enjoy perks and privileges thru the Innovative Startup Act (Republic Act No. 11337):
//                                 1.  Subsidies on permits - Full or partial subsidy for the registration and cost in the application and processing of permits and certificates required for the business registration and operation of an enterprise with the appropriate national and local government agency;
//                                 2.  Use of government facilities - Full or partial subsidy for the use of facilities, office space, equipment, and/or services provided by the government or private enterprises or institutions;
//                                 3. Grants - Grants-in-aid for research, development, training, and expansion projects
//                                 4.  MORE SUBSIDIES!!!- Full or partial subsidy for fees and charges incurred in applying for travel documents, baggage allowance for materials, equipment, and products required for the participation in local and international startup events;
//                                 5.  Additional Funding - The Startup Grant Fund,  an available additional funding through DOST, DTI and DICT.  A Startup Venture Fund, as administered by DTI and the National Development Company, shall be used to correspond investments from the private sector with startups.   
//                                 For more information, go to www.DTI.gov.ph, www.DICT.gov.ph
//                                 #StartupAct  #centie  #NationalUniversity 
//                                 #Startup #entrepreneur
//                             </p>
//                             <img src="../img/article2.png" alt="" className="py-1"/>
                            
//                         </div>
//                         <div className="article-container text-start p-3 mt-5">
//                             <p >
//                                 For the first episode of Brand NU Network’s The EntrepreNUr, let’s meet the young, creative, passionate, and talented movers and shakers of tomorrow!
//                                 These groups of young entrepreneurs presented their innovative products at the CentIE Demo Day and out of 241 teams across NU campuses all over the country, these 16 teams stood out with their outstanding ideas.
//                                 Like, comment, subscribe, and hit the notification bell to stay updated for Episode 2! 💛💙
//                                 https://m.youtube.com/watch?v=EnZb14MsQi0&feature=youtu.be
//                                 #EducationThatWorks
//                             </p>
//                             <iframe 
//                             className="mt-3 article-container"
//                             width="100%" 
//                             height="315" 
//                             src="https://www.youtube.com/embed/EnZb14MsQi0" 
//                             frameborder="0" allowfullscreen>
//                             </iframe>
                            
//                         </div>
//                         <div className="article-container text-start p-3 mt-5">
//                             <p >
//                                 Webinar on Intellectual Property and its connection with Customer Value Proposition
//                                 Speaker: Dr. Ria Liza Canlas
//                                 Date: January 26, 2022
//                                 Time: 10AM to 12NN
//                                 Via MS Teams
//                                 #NationalUniversity #intellectualproperty #EducationThatWorks #theendisjustthestart
//                             </p>
//                             <img src="../img/article3.png" alt="" className="py-1"/>
                            
//                         </div>
//                         <div className="article-container text-start p-3 mt-5">
//                             <p >
//                                 Once again, National University is beaming with pride over the win of Dr. Ria Canlas, National University’s Director of Center for Innovation and Entrepreneurship, as she takes home two awards from the 2021 DOST Regional Invention Contest and Exhibits in NCR.
//                                 The Regional Invention Contest and Exhibits or RICE is a nationwide activity that recognizes the indispensability of Filipino inventors in the landscape of national economic development through appropriate platforms especially under the new normal (DOST, 2021). 
//                                 Dr. Ria Canlas walks her talk when it comes to innovation — through her invention, she is able to provide families around the world with modern, affordable, resilient, and sustainable homes.
//                                 Congratulations, Dr. Ria! You are true Nation Builder and #EntrepreNUr 💛💙
//                             </p>
//                             <img src="../img/article4.png" alt="" className="py-1"/>
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     </div>

  
// )

// export default Home