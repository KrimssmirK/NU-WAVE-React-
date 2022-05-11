import React, { useEffect } from 'react'
import Exhibit2022 from './components/Exhibit2022'

export default function Products() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className="pb-5">
        <header className="container-fluid text-light text-center p-5" style={{backgroundColor: '#999999'}}>
            <h1>2022 Exhibit</h1>
            <p>
                These are the innovations of the competent NU student presented by the NU WAVE.  
            </p>
        </header>
        <section className="p-md-5 mt-5">
            <Exhibit2022 />
        </section>
    </div>
  )
}
