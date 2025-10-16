import React, { useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import conf from '../conf/conf';

function GeoCoding(location) {
  
  // const center = {lat:20.2940403,lang:85.8277004}

  const [center,setCenter] = useState({lat:20.2940403,lng:85.8277004})

  const mapContainerStyle = {
  width: '100%',
  height: '200%',
};



    useEffect(() => {
   const fetchGeoCode = async () => {
   try {
      const rawGeocode = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${conf.googlemapapikey}`)
      const  res = await rawGeocode.json();
      // console.log(res);
      // console.log(results.results[0].geometry.location.lat);

      setCenter({lat:res.results[0].geometry.location.lat,lng:res.results[0].geometry.location.lng})
   } catch (error) {
    console.log(error.message);
   }
   }
   fetchGeoCode()
  }, [])

  
  

//  const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyDKb_sj0RRc1aeSiU0SIb3ya8Av2PW9rFE',
//   });

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }

//   if (!isLoaded) {
//     return <div>Loading maps</div>;
//   }



  

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center}/>
      </GoogleMap>

      </div>
  )
}

export default GeoCoding