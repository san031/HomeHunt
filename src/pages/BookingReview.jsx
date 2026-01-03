import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from '../components/Button'

function BookingReview({space}) {

  const navigate = useNavigate()
  const [isGuestDetail,setisGuestDetail] = useState(true)
  
  return (
     <div className=' m-3 p-5 '>
            <div className='glass w-96 h-full text-center shadow-xl/30 '>
              <h1 className='text-3xl font-bold pb-8'>Rs.{space?.price}/month</h1>
              <h3 className='text-[1.25em] pb-8'>{space?.dateAvailable?
              
              `Date Available : ${new Date(space?.dateAvailable).toLocaleDateString("en-GB",{day:'numeric' , month: "long", year: "numeric" })}`:""}</h3>

              <h3 className='text-[1.15em] pb-8 text-left'>All utilities are included</h3>

              <h3 className='text-[1.15em] pb-8 text-left'>Average monthly rent</h3>

              <h3 className='text-[1.15em] pb-8 text-left'>Pay Upon Booking</h3>

              <h3 className='text-[1.15em] pb-8 text-left'>Total Costs</h3>

              {
                isGuestDetail ? <Button margin='m-5' className='pointer' onClick = {() => 
              {
                setisGuestDetail(false)
              navigate('/guest-details',{state:space})
            }

              }>Continue Booking</Button>:"Payment Timeline"
              }

              <p>When you book this apartment , your reservation will be confirmed instantly</p>
              
            </div>
          </div>
  )
}

export default BookingReview