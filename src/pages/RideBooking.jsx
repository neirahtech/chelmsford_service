import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import RideBookingForm from '../components/RideBookingForm'

const Booking = () => {
  return (
    <div>
        <NavBar />
        <Banner />
        <RideBookingForm />
        <Footer />
    </div>
  )
}

export default Booking