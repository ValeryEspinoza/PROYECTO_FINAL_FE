import React from 'react'
import "../../Styles/Components_Styles/Genaral_C_Styles/Footer.css"




function Footer() {
  return (
    <footer className='footer'>
    <div className="CardContainer">
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <h5 className="card-title">Special Title Treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button className="btn btn-primary">Learn More</button>
      </div>
      <div className="card-footer text-body-secondary">
        2 days ago
      </div>
    </div>
  
    <div className="CardContainer">
      <div className="card-header">
        Connect with Us
      </div>
      <div className="card-body">
        <p>Email: info@example.com</p>
        <p>Facebook: @example</p>
        <p>WhatsApp: +123456789</p>
        <p>Instagram: @example</p>
      </div>
      <div className="comentarioFooter">
        Stay updated!
      </div>
    </div>
  
    <div className="CardContainerForm">
      <div className="cardHeader">
        Leave a Comment
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">Your Comment:</label>
            <textarea className="textareaFooter" id="comment" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="card-footer text-body-secondary">
        We value your feedback!
      </div>
    </div>
  </footer>
  )
}

export default Footer