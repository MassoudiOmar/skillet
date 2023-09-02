import React from 'react'
import Button from 'react-bootstrap/Button';




function InformationButton({onClick}) {

  return (
      <Button variant="outline-light" onClick={onClick}>En savoir plus</Button>

  )
}

export default InformationButton