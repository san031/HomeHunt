import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import appwriteService from '../appwrite/config'
import Container from '../components/Container'
import Button from '../components/Button'
import {FaBath, IoIosBed} from '../utils/index'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Geolocation from '../components/Geolocation'
import GeoCoding from '../components/GeoCoding'
import Amenities from './Amenities'
import Location from './Location'




function Space() {
  const [space,setSpace] = useState(null)
  const [address,setAddress] = useState("")
  const {slug} = useParams()
  const navigate = useNavigate()

  const userData = useSelector((state) => state.auth.userData)

  const isAuthor = space && userData ? userData.$id===space.userId:false


  useEffect(() => {
    if(slug){
      appwriteService.getPost(slug).then((space)=>{
        if(space)
          setSpace(space)
        else
          navigate('/')
      })
    }
  },[slug, navigate])

  const deleteSpace = () => {
    appwriteService.deletePost(space.$id).then((status) => {
      if(status){
        appwriteService.deleteFile(space.gallery)
        navigate("/")
      }
    })
  }

  useEffect(() => {setAddress(space?.location)},[space])

  
  return (
   space?
    <div>
      <Container className='w-full h-full border-2'>
        <img src={appwriteService.getFileView(space.gallery)} alt={space.title} className='w-4xl'/>
        <div className='grid grid-cols-2 gap-48'>
          
          <div className='m-3 border-2 w-2xl h-screen'>
            
          <div >
            <h1 className='text-3xl font-bold m-2'>
            {space.title}
          </h1>
          <div>
            {space.location}
            
          </div>
           
           <div className='flex flex-row'>
            <div className='m-3 flex flex-row gap-1.5'>
            <IoIosBed size={25}/>
            {space.bedroom} bedrooms
           </div>

           <div className='m-3 flex flex-row gap-1.5'>
            <FaBath size={25}/>
            {space.bathroom} bathrooms
           </div>

           <div>
            {space.elevator?'elevator   |':''}
           </div>

           <div>
            {space.city}
           </div>
           </div>


          
          </div>
          <div>
            <h3 className='text-2xl font-bold'>Description</h3>
            {space.description}
          </div>
          </div>

          <div className='border-2 m-3 p-5 '>
            <div className='glass w-full h-full text-center '>
              <h1 className='text-3xl font-bold pb-8'>Rs.{space.price}/month</h1>
              <h3 className='text-[1.25em] pb-8'>{space.dateAvailable?
              
              `Date Available : ${new Date(space.dateAvailable).toLocaleDateString("en-GB",{day:'numeric' , month: "long", year: "numeric" })}`:""}</h3>

              <h3 className='text-[1.15em] pb-8 text-left'>All utilities are included</h3>

              <h3 className='text-[1.15em] pb-8 text-left'>Average monthly rent</h3>

              <h3 className='text-[1.15em] pb-8 text-left'>Pay Upon Booking</h3>

              <h3 className='text-[1.15em] pb-8 text-left'>Total Costs</h3>

              <Button margin='m-5' className='pointer' onClick = {() => navigate('/booking-review')}>Continue Booking</Button>

              <p>When you book this apartment , your reservation will be confirmed instantly</p>
              
            </div>
          </div>
          

          {/* <div>
            <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>

      <Geolocation/>
      <GeoCoding location={location}/>

      <GeoCoding location={space?.location}/>
          </div> */}
          
        </div>

        {
          isAuthor&&(
            <div>
              <Link to={`/edit-space/${space.$id}`}><Button>Edit</Button></Link>
            <Button onClick={deleteSpace}>Delete</Button>
            </div>
          )
        }
      </Container>
      <Amenities/> 
      <Location location = {address}/>
    </div>
   :null
  )
}

export default Space