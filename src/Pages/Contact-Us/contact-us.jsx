import React from 'react'
import "./contact-us.css"
import phone from "../../Images/phone.png"
import mail from "../../Images/email.png"
import location from "../../Images/map-marker.png"

function ContactUs() {
  return (
    <div className='outer-contact'>
      <div className='contact-us'>
      <div className='info'>
        <div className='info-details'>
          <img src={phone} alt="phone icon" />
          <div className='info-detail-ka-detail'>
            <h4>CALL US</h4>
            <p>+91 12345 67890, +91 12345 67890</p>
          </div>
        </div>
        <div className='info-details'>
          <img src={mail} alt="mail icon" style={{width:"30px"}}/>
          <div className='info-detail-ka-detail'>
            <h4>EMAIL US</h4>
            <p>www.iothinc@gmail.com</p>
          </div>
        </div>
        <div className='info-details'>
          <img src={location} alt="location icon" style={{width:"30px", height:"30px"}} />
          <div className='info-detail-ka-detail'>
            <h4>REACH US</h4>
            <p>VIT, Vellore </p>
          </div>
        </div>
      </div>
      <div className='contact-form'>
        <h1>CONTACT US</h1>
        <div className='form-inputs'>
          <input type="text" placeholder='Enter your name'/>
          <input type="text" placeholder='Enter a valid email address'/>
          <textarea type="text" rows={6} />
          <div className='submit-button'>Submit</div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default ContactUs;