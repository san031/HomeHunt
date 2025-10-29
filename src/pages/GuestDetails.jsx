import React from 'react'
import Container from '../components/Container'
import Input from '../components/Input'
import Select from '../components/Select'
import Button from '../components/Button'
import { Form, useForm } from 'react-hook-form'
import BookingReview from './BookingReview'

function GuestDetails({space}) {
  const {register,handleSubmit} = useForm({
    defaultValues:{
      firstName:'',
      lastName:'',
      guestEmail:'',
      phoneNo:''
    }
  })

  const submit = () => {}
  return (
    <Container className='p-5 pl-10 '>
      <div className='text-3xl relative left-12'>Guest Details</div>
      <div className='grid grid-cols-[2fr_1fr]'>
        <form onSubmit={handleSubmit(submit)} className='p-10'>
          <div className='w-xl p-10 rounded-2xl bg-amber-50 shadow-xl/30'>
            <Input placeholder="First Name" 
          
          />
          <Input placeholder="Last Name"/>
          <Input type='email' placeholder="Email"/>
          <Input type='tel' placeholder='Phone Number'/>

          <Select size='3'
          optionClass='flex w-3xs gap-2.5 px-7 py-1 radiobutton'
          label='Purpose of stay' options={['Business Travel/Work','Moving to this city/country','Holiday','other']}/>

          <div>
            <p className='text-2xl'>Payment Method</p>
            <Button>Pay Now</Button>
          </div>
          </div>
        </form>
        <div className=''>
          <BookingReview/>
        </div>
      </div>
    </Container>
  )
}

export default GuestDetails