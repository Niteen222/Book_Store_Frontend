import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Store from '../components/Store'


const Stores = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Store/>
      </div>
      <br />
      <br />
      <Footer/>
    </>
  )
}

export default Stores
