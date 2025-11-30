import React, { useCallback, useEffect, useState } from 'react'
import Container from '../components/Container'
import Input from '../components/Input'
import Select from '../components/Select'
import Button from '../components/Button'
import { Form, useForm } from 'react-hook-form'
import BookingReview from './BookingReview'
import appwriteService from '../appwrite/config'
import Confirmation from '../components/Confirmation'

function GuestDetails({space}) {
  const[confirmationPage,setConfirmationPage] = useState(false)
  const {register,handleSubmit} = useForm({
    defaultValues:{
      first_name:'',
      last_name:'',
      email:'',
      contactNo:''
    }
  })

 
  

  const submit = async(data) => {
    try {
      const customerDetail = await appwriteService.createCustomer({...data})
      if(customerDetail){
        setConfirmationPage(true)
      }
    } catch (error) {
      console.log(error);
    }
  }
  // const submit = (data) => console.log(data);

//   contactNo
// : 
// "7488924835"
// email
// : 
// "p@gmail.com"
// first_name
// : 
// "sans"
// last_name
// : 
// ""
  return (
    <Container className='p-5 pl-10 '>
      <div className='text-3xl '>Guest Details</div>
      <div className='grid md:grid-cols-[2fr_1fr] grid-rows-1'>
        <form onSubmit={handleSubmit(submit)} className='p-10'>
          <div className='w-xl p-10 rounded-2xl bg-amber-50 shadow-xl/30'>
            <Input placeholder="First Name" 
            {...register("first_name",{required:true})}
          
          />
          <Input placeholder="Last Name"
          {...register("last_name")}
          />
          <Input type='email' placeholder="Email"
          {...register("email",{required:true})}
          />
          <Input type='tel' placeholder='Phone Number'
           {...register("contactNo",{required:true})}
          />
          
          {/* <Select size='3'
          optionClass='flex w-3xs gap-2.5 px-7 py-1 radiobutton'
          label='Purpose of stay' options={['Business Travel/Work','Moving to this city/country','Holiday','other']}/> */}

          <div>
            <p className='text-2xl'>Payment Method</p>
            <Button type="submit"  >Pay Now</Button>
          </div>
          </div>
        </form>

        <div className='brcss'>
          <BookingReview/>
        </div>
      </div>

      {
        confirmationPage?<Confirmation/>:""
      }
    </Container>
  )
}

export default GuestDetails