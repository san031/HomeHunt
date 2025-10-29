import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Input from './Input'
import Button from './Button'

function Footer() {
  return (
    <div>
      <Container className='p-2 mt-5.5 bg-gray-50' height='h-[60%]'>
        <div className='grid grid-cols-3'>
          <div>
            <div className='mr-4'>
                <Logo/>
              </div>
              <p> Contact number : 02033074477</p>

          </div>

          <div className='grid grid-cols-3 '>
            <div className='grid grid-rows-4 '>
              <p className='font-bold'>Company</p>
              <div>Home</div>
              <div>About us</div>
              <div>Our Team</div>
            </div>
            <div className='grid grid-rows-4 '>
              <p className='font-bold'>Guests</p>
              <div>Blog</div>
              <div>FAQ</div>
              <div>Career</div>
            </div>
            <div className='grid grid-rows-3 '>
              <p className='font-bold'>Privacy</p>
              <div>Terms of Service</div>
              <div>Privacy Policy</div>
              
            </div>

          </div>
          <div>
            <p className='font-bold'>Stay upto date</p>
            <p>Be the first to know our newest apartments</p>
            <Input placeholder = "Email adress"/>
            <Button>Subscribe</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer