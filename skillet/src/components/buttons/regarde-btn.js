import React from 'react'
import Button from 'react-bootstrap/Button';




function AddButton({onClick}) {

  return (
<Button variant="light"  onClick={onClick}>Regarder</Button>

  )
}

export default AddButton