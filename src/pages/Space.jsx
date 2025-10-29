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
import BookingReview from './BookingReview'




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
      <Container className='w-4xl h-full  '>
        <img src={appwriteService.getFileView(space.gallery)} alt={space.title} className='w-4xl border-2'/>
        <div className='grid grid-cols-[2fr_1fr]  gap-48 '>
          
          <div className='m-3 w-2xl h-screen relative left-14 p-8'>
            
          <div >
            <h1 className='text-4xl font-bold m-auto mb-3'>
            {space.title}
          </h1>
          <div className='mb-4 text-1.5xl'>
            {space.location}
            
          </div>
           
           <div className='flex flex-row mb-5'>
           <div> 
            <div className=' gap-1.5 text-1.5xl'>
            <IoIosBed size={25}/>
            {space.bedroom} bedrooms
           </div>

           <div className='  gap-1.5 text-1.5xl'>
            <FaBath size={25}/>
            {space.bathroom} bathrooms
           </div>

           
           </div>
           <div>
            <div>
            {space.elevator?'elevator   |':''}
           </div>

           <div className='text-1.5xl'>
            {space.city}
           </div>
           </div>
           </div>


          
          </div>
          <div className='text-1.5xl'>
            <h3 className='text-4xl font-bold mb-1.5'>Description</h3>
            {space.description}
          </div>
          </div>

        <BookingReview space={space}/>
          

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