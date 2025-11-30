import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Input from './Input'
import Button from './Button'

function Footer() {
  return (
    <div>
      <Container className='p-2 mt-5.5 bg-[rgba(229,237,232,0.8)]' height='h-[50%]'>
        <div className='grid grid-rows-3 md:flex  items-center justify-center  '>
          <div className='relative left-20 md:left-0'>
            <div >
                <Logo/>
              </div>
              <p> Contact number : 02033074477</p>

          </div>

          <div className='grid grid-rows-3 '>
            <div className='grid grid-cols-2 md:grid-cols-3 '>
              <p className='font-bold '>Company</p>
              <div><div>Home</div>
              <div>About us</div>
              <div>Our Team</div></div>
            </div>
            
            <div className='grid grid-cols-2 '>
              <p className='font-bold'>Guests</p>
              <div><div>Blog</div>
              <div>FAQ</div>
              <div>Career</div></div>
            </div>
            <div className='grid grid-cols-2'>
              <p className='font-bold'>Privacy</p>
              <div><div>Terms of Service</div>
              <div>Privacy Policy</div></div>
              
            </div>

          </div>
          <div className='relative left-6'>
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