import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { Link, useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import appwriteService from '../appwrite/config'
import Container from '../components/Container'
import Button from '../components/Button'
import {FaBath, IoIosBed} from '../utils/index'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Geolocation from '../components/Geolocation'
import GeoCoding from '../components/GeoCoding'

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '200%',
};
const center = {
  lat: 25.2905715, // default latitude
  lng: 77.6337262, // default longitude
};

function Space() {
  const [space,setSpace] = useState(null)
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

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDKb_sj0RRc1aeSiU0SIb3ya8Av2PW9rFE',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (
   space?
    <div>
      <Container className='w-full h-full border-2'>
        <img src={appwriteService.getFileView(space.gallery)} alt={space.title} className='w-xl'/>
        <div className='grid grid-cols-2'>
          
          <div className='m-3'>
            
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

           {/* <div>
            {space.elevator?'elevator   |':''}
           </div> */}

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

          <div>
            <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>

      <Geolocation/>
      <GeoCoding location={location}/>

      {/* <GeoCoding location={space?.location}/> */}
          </div>
          
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
    </div>
   :null
  )
}

export default Space