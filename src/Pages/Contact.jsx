import React from 'react'
import NavBar from '../Components/General_Components/NavBar'
import Footer from '../Components/General_Components/Footer'
import { ContactUs } from '../Components/Contact_Components/ContactUs'
import ContactLocation from '../Components/Contact_Components/ContactLocation'
import ContactInformation from '../Components/Contact_Components/ContactInformation'
import "../Styles/Pages_Styles/Contact.css"


function Contact() {
  return (
    <div>

      <NavBar />
      <ContactInformation />
     
      <div className='columnasContact'>
      <ContactLocation />
      <ContactUs />
      </div>
    
      <Footer />
    </div>
  )
}

export default Contact