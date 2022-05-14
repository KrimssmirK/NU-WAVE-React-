import { useEffect } from 'react'
import axios from 'axios'


import MainArticle from './MainArticle'
import SubArticle from './SubArticle'
import Item from './Item'
import Button from './Button'



// hard coded (database)
// const data = [
//   {title: 'london'},
//   {title: 'kenji'},
//   {title: 'parayno'}
// ]


function Container() {
  useEffect(() => {
    window.scrollTo(0, 0)
    // window.location.reload(1)
    
  },[])
  
  return (
    <div className="container-fluid pt-3" style={{display:'grid', placeItems: 'center'}}>
      <div className="fb-page" style={{width: '100%', display:'grid', placeItems: 'center'}}
        data-href="https://www.facebook.com/NUCentIE" 
        data-tabs="timeline" 
        data-width="800" 
        data-height="600" 
        data-small-header="false" 
        data-adapt-container-width="true" 
        data-hide-cover="true" 
        data-show-facepile="true">
        <blockquote 
          cite="https://www.facebook.com/NUCentIE" 
          className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/NUCentIE">
              NU - Center for Innovation and Entrepreneurship
            </a>
        </blockquote>
      </div>
    </div>
  //   <div className='Container m-2 p-2'>
  //   <h1 className='text-center' style={{fontSize: 5 + 'vw'}}>Articles</h1>
  //   <hr/>
  //   <div className='main'>
  //     <MainArticle />
  //   </div>
  //   <hr/>
  //   <div className='sub'>
  //     <div className='d-flex justify-content-center'>
  //       <SubArticle />
  //       <SubArticle class='border-start border-end'/>
  //       <SubArticle />
  //     </div>
  //   </div>
  //   <hr/>
  //   <h2 className='text-center fs-1'>The Latest</h2>
  //   <hr/>
  //   {/* {
  //     data.map((data) => (
  //       <Item title={data.title} />
  //     ))
  //   } */}
  //   <Item />
  //   <Item />
  //   <Item />
  //   <Item />
  //   <Item />
  //   <div className='d-flex justify-content-center'>
  //     <Button />
  //   </div>
  // </div>
  ) 
}

export default Container