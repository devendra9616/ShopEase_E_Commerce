import React from 'react'

const ContactDetails = () => {
  return (
    <section id='contact-details' className='section-p1'>
      <div className='details'>
        <span>GET IN TOUCH</span>
        <h2>Visit one of our agency locations or contact us today</h2>
        <h3>Head Office</h3>
        <div>
          <li>
            <i className="fal fa-map"></i>
            <p>56 Glassford Street Glasgow G1 1UL New York</p>
          </li>
           <li>
            <i className="fal fa-map"></i>
            <p>contact@example.com</p>
          </li>
           <li>
            <i className="fal fa-map"></i>
            <p>contact@example.com</p>
          </li>
           <li>
            <i className="fal fa-map"></i>
            <p>Monday to Saturday: 9.00am to 16.pm</p>
          </li>
        </div>
      </div>
      <div className='map'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.687214909832!2d-1.2545179!3d51.75704289999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1752486641506!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="University of Oxford Map"
      ></iframe>
      </div>

    </section>
  )
}

export default ContactDetails
