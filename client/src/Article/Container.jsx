import { useEffect } from 'react'
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
  }, [])

  return (
    <div className='Container m-2 p-2'>
    <h1 className='text-center' style={{fontSize: 5 + 'vw'}}>Articles</h1>
    <hr/>
    <div className='main'>
      <MainArticle />
    </div>
    <hr/>
    <div className='sub'>
      <div className='d-flex justify-content-center'>
        <SubArticle />
        <SubArticle class='border-start border-end'/>
        <SubArticle />
      </div>
    </div>
    <hr/>
    <h2 className='text-center fs-1'>The Latest</h2>
    <hr/>
    {/* {
      data.map((data) => (
        <Item title={data.title} />
      ))
    } */}
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <div className='d-flex justify-content-center'>
      <Button />
    </div>
  </div>
  ) 
}

export default Container