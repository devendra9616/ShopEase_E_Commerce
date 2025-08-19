import React from 'react'
import Header from '../Component/Headers/Header'
import Newsletter from '../Component/Newsletters/Newsletter'
import Footer from '../Component/Footers/Footer'
import PageHeader from '../Component/Contact/PageHeader'
import ContactDetails from '../Component/Contact/ContactDetails'
import ContactForm from '../Component/Contact/ContactForm'

const Contact = () => {
  return (
    <>
      <Header />
      <PageHeader />
      <ContactDetails />
      <ContactForm />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Contact
