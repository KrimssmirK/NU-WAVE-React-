import React, { useEffect } from 'react'
import Innovator from './components/Featured'

export default function Featured() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="container py-5">
      <div className="container pb-5">
        <h1>Featured Innovators</h1>
        <p className="ps-3">
          Meet and get to know the innovators that had contributed greatly to make NU WAVE a tsunami.
        </p>
      </div>
      <section className="p-md-5">
        <Innovator />
      </section>

    </div>
  )
}
