import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <Container fluid className="container landpage-image ">
      <p>&nbsp;</p>
      <h2>
        <b>Baby Shower Honoring Kinjal & Ajay</b>
      </h2>
      <h2>
        Please join us in celebrating the expecting parents and the imminent
        arrival of our dumpling!
      </h2>
      <p>&nbsp;</p>
      <h3>Hosted by Jagubhai and Ilaben Patel</h3>
      <h3>
        <b>When</b>
      </h3>
      <h4>August, 18 2024 </h4>
      <h4> 09:00 AM</h4>
      <p>&nbsp;</p>
      <h3>
        <b>Where</b>
      </h3>
      <h4>Holiday Inn</h4>
      <h4>3005 Airport Fwy,</h4>
      <h4>Bedford, TX 76022</h4>
      <p>&nbsp;</p>
      <h3>
        <b>HOPE YOU CAN MAKE IT!</b>
      </h3>
      <p>&nbsp;</p>
      <h4>Kindly RSVP By August,1 2024</h4>
      <a href="https://forms.gle/exWHNfMZHw4Kh1LN6">
        <button className="btn btn-primary btn-lg">RSVP</button>
      </a>
    </Container>
  )
}

export default App
