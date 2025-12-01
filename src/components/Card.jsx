import React from 'react'
import appwriteService from '../appwrite/config'
import { IoIosBed } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaBath } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from 'react-router'
import Geolocation from './Geolocation';
function Card({$id, title, gallery, description,location,city,bedroom, bathroom,price,contactNo
  ,disabledAccess,parking, elevator, washingMachine, dishwasher, dateAvailable }) {

  return (
    <Link to = {`/space/${$id}`}>
        <div className=' bg-gray-100 rounded-xl p-4 shadow-md shadow-green-300 mb-12.5 flex md:flex-row flex-col text-[18px]'>
            <div className='w-lg justify-center mb-4 pr-10.5'>
                <img src={appwriteService.getFileView(gallery)}
                alt={title}
                className='rounded-xl w-4xl'/>
            </div>
           <div className='md:w-full w-1/2 pl-5'>
             <h2 className='text-2xl font-bold'>{title}</h2>

            <p>{description}</p>
            <p>{location}</p>
            <p>{city}</p>
           <div className='flex flex-row gap-9.5'>
             <div className='flex flex-row gap-2.5'>
              <IoIosBed />
              <p>{bedroom} bedrooms</p>
              
              </div>
            <div className='flex flex-row gap-2.5'>
              <FaBath/>
              {bathroom} bathroom</div>
           </div>
              
              <div className='flex flex-row gap-2.5'>
                <LiaRupeeSignSolid/>
              {price}
              </div>
            <div className='flex flex-row gap-2.5'>
              <FaPhoneSquareAlt/>
              {contactNo}</div>

              <div className='flex md:flex-row flex-col gap-2.5'>

            <p> {disabledAccess?'disabled Access    |':''}</p> 

           
            <p>{parking ? 'parking    |':''} </p> 

           
            <p>{elevator ? 'elevator    |':''}</p>

            <p>{washingMachine ? 'washing Machine    |':''}</p>

            <p>{dishwasher ? 'dishwasher    |':''}</p>

            <Geolocation/>
           
           </div>
           </div>

           <div>
            {dateAvailable?new Date(dateAvailable).toLocaleDateString("en-GB",{day:'numeric' , month: "long", year: "numeric" }):""}
           </div>
        
        </div>

    </Link>
  )
}

export default Card