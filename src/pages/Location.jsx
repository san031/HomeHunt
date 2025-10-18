import React from 'react'
import Container from '../components/Container'
import GeoCoding from '../components/GeoCoding'

function Location({location}) {
  return (
    <div>
        <Container>
            <GeoCoding location={location}/>
        </Container>
    </div>
  )
}

export default Location