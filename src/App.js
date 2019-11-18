import React from 'react'
import Landing from './components/Landing'
import Attorneys from './components/Attorneys'
import Stats from './components/Stats'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { Container } from "shards-react"

import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"

function App() {
  return (
    <div>
      <Landing />
      <Container className="main">
        <Attorneys />
        <Services />
        <Stats />
        <Testimonials />
        <ContactForm />
      </Container>
      <Footer />
    </div>
  );
}

export default App
