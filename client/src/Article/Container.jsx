import MainArticle from './MainArticle'
import SubArticle from './SubArticle'
import Item from './Item'
import Button from './Button'
import React, { useState, useEffect } from 'react'

// hard coded (database)
// const data = [
//   {title: 'london'},
//   {title: 'kenji'},
//   {title: 'parayno'}
// ]
const Container = () => {
  const [item_data, setItem_data] = useState([])
  const [main_data, setMain_data] = useState([])
  
  // Similar to componentDidMount and componentDidUpate
  useEffect(() => {
    retrieveData()
  }, [])

  function retrieveData() {
    setItem_data([
      {
        title: 'kenji',
        description: 'hi hi hi hi hi',
        uploadedby: 'Ria Liza Centeno',
        date: 'March 26, 2022'
      }
    ])
  }

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
        <SubArticle style='border-start border-end'/>
        <SubArticle />
      </div>
    </div>
    <hr/>
    <h2 className='text-center fs-1'>The Latest</h2>
    <hr/>
    {
      item_data.map((data) => (
        <Item data={data} />
      ))
    }
    <div className='d-flex justify-content-center'>
      <Button />
    </div>
  </div>
  )
}

export default Container