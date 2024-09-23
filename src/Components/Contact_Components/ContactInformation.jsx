import React from 'react'
import "../../Styles/Components_Styles/Contact_C_Styles/ContactInformation.css"

function ContactInformation() {
  return (
    
<div className='seccion-informacion-contact'>
    <h1 className='titulo-h1'>Información de Contacto</h1>

    <div className='contenedores-texto'>
        <p>
            Detalles como la dirección física del negocio, número de teléfono, 
            dirección de correo electrónico, y enlaces a redes sociales.
        </p>
        <div className='contact-info'>
            <h2>Connect with Us</h2>
            <p><strong>Email:</strong> info@example.com</p>
            <p><strong>Facebook:</strong> @example</p>
            <p><strong>WhatsApp:</strong> +123456789</p>
            <p><strong>Instagram:</strong> @example</p>
        </div>
    </div>
</div>

  )
}

export default ContactInformation