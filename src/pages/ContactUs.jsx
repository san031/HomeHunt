import React from 'react'
import Container from '../components/Container'
import Select from '../components/Select'
import Input from '../components/Input'

function ContactUs() {
  return (
    <Container className='w-full h-1/2 py-20 px-8'>
      <h1 className='text-3xl'>Please tell us a little about you</h1>
      <div className='grid grid-cols-2'>
        <div className='mt-7'>
          <Select options = {['I am a Customer','I am a landlord', 'Something else']}
          label={"What would you like to contact us about?"
          }
          />
          <Input type="text" className={'mt-3'} placeholder={"Name"}/>
          <Input type="email" className={'mt-3'} placeholder={"Email"}/>
          <Input type="tel" className={'mt-3'} placeholder={"Phone Number"}/>
          <Input className={'mt-3'} placeholder="message"/>
        </div>
        <div className='grid grid-rows-3 gap-0.5'>
          <div className='grid grid-cols-2'>
            <p className='font-bold'>Reservations</p>
            <p>reservations@theflexliving.com <br/> 0203 307 4477 </p>
          </div>
          <div className='grid grid-cols-2'>
            <p className='font-bold'>For landlords</p>
            <p>suppy@theflexliving.com <br/> 0203 307 4477 </p>
          </div>
          <div className='grid grid-cols-2'>
            <p className='font-bold'>For Maintenance</p>
            <p>maintenance@theflexliving.com <br/> 0203 307 4477 </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ContactUs