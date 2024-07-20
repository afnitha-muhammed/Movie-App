import React from 'react'
import View from '../components/View'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header/>
    <div>
     
    </div>
    
<h1 className='d-flex justify-content-center mt-5 '>Now Showing</h1>
      <div className="row w-100 p-5">
        <div className="col-md-3">
          <View/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home