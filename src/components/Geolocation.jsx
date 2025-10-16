import React, { useState } from 'react'

function Geolocation() {

    const [userLocation,setUserLocation] = useState(null)

    const getUserLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                const {latitude, longitude} = position.coords
                setUserLocation({latitude,longitude})
            },
        (error) =>{console.log(error);}
        )
        }
        else{
            console.log('geolocation is not supported by this browser');
        }
    }
  return (
    <div>
        <button onClick={() => getUserLocation()}>Get user location</button>
        {
            userLocation && (
                <div>
                    <p>Latitude : {userLocation.latitude}</p>
                    <p>Longitude: {userLocation.longitude}</p>
                </div>
            )
        }
    </div>
  )
}

export default Geolocation