import React from 'react'
import Container from '../components/Container'
import Select from '../components/Select'
import Input from '../components/Input'

function ContactUs() {
  return (
    <Container className='w-full h-1/2 md:py-20 md:px-8'>
      
      <div className='grid grid-rows-1 md:grid-cols-2 gap-5 md:gap-60 items-center justify-evenly'>
        <div className='mt-7'>
          <h1 className='text-3xl'>Please tell us a little about you</h1>
          <Select options = {['I am a Customer','I am a landlord', 'Something else']}
          label={"What would you like to contact us about?"
          }
          />
          <Input type="text" className={'mt-3'} placeholder={"Name"}/>
          <Input type="email" className={'mt-3'} placeholder={"Email"}/>
          <Input type="tel" className={'mt-3'} placeholder={"Phone Number"}/>
          <Input className={'mt-3'} placeholder="message"/>
        </div>
        <div className='grid md:grid-rows-3 grid-flow-row gap-0.5 '>
          <div className='grid md:grid-cols-2 grid-rows-2 justify-center items-center'>
            <p className='font-bold'>Reservations</p>
            <p>reservations@theflexliving.com <br/> 0203 307 4477 </p>
          </div>
          <div className='grid md:grid-cols-2 grid-rows-2 justify-center items-center'>
            <p className='font-bold'>For landlords</p>
            <p>suppy@theflexliving.com <br/> 0203 307 4477 </p>
          </div>
          <div className='grid md:grid-cols-2 grid-rows-2 justify-center items-center'>
            <p className='font-bold'>For Maintenance</p>
            <p>maintenance@theflexliving.com <br/> 0203 307 4477 </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ContactUs