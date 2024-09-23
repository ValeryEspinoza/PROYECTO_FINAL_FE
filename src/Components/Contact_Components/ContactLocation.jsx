import React from 'react'
import "../../Styles/Components_Styles/Contact_C_Styles/ContactLocation.css"
function ContactLocation() {
  return (
    
      
    <div className='SeccionTres'>
    <h1 className='TituloH1'>Location</h1>
    <h2 className='Subtitulo'>Mapa de Nosara, Guanacaste</h2>
    <iframe
      title="Mapa de Nosara"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125755.53128982428!2d-85.72243512567611!3d9.945575035228423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e536e6bd969fd%3A0x58596696fa52d8b2!2sNosara%2C%20Provincia%20de%20Guanacaste%2C%20Nicoya!5e0!3m2!1ses-419!2scr!4v1726865251566!5m2!1ses-419!2scr"
      width="600"
      height="450"
      className='MapaIframe'
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>


  )
}

export default ContactLocation