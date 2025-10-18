import React, { useEffect, useState } from 'react'
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import conf from '../conf/conf';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

function GeoCoding(location) {
  
  // const center = {lat:20.2940403,lang:85.8277004}

  const [center,setCenter] = useState({lat:20.2940403,lng:85.8277004})

//   const center = {
//   lat: 25.2905715, // default latitude
//   lng: 77.6337262, // default longitude
// };
  const mapContainerStyle = {
  width: '100%',
  height: '200%',
};

const libraries=['places']

 console.log(location.location);

    useEffect(() => {
   const fetchGeoCode = async () => {
   try {
      const rawGeocode = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location.location}&key=${conf.googlemapapikeynp}`)
      const res = await rawGeocode.json();
      console.log(res);
      // console.log(res.results[0].geometry.location.lat);

      setCenter({lat:res.results[0].geometry.location.lat,lng:res.results[0].geometry.location.lng})
   } catch (error) {
    console.log(error.message);
   }
   }
   fetchGeoCode()
  }, [])

  
// const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: 'AIzaSyDKb_sj0RRc1aeSiU0SIb3ya8Av2PW9rFE',
  //   libraries,
  // });

  // if (loadError) {
  //   return <div>Error loading maps</div>;
  // }

  // if (!isLoaded) {
  //   return <div>Loading maps</div>;
  // }


//  const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyDKb_sj0RRc1aeSiU0SIb3ya8Av2PW9rFE',
//     libraries,
//   });

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }

//   if (!isLoaded) {
//     return <div>Loading maps</div>;
//   }


 

  

  return (
    <div>
      {/* <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center}/>
      </GoogleMap> */}

      <APIProvider apiKey={conf.googlemapapikey}>
        <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 53.54992, lng: 10.00678}}
      defaultZoom={2}
      gestureHandling='greedy'
      disableDefaultUI
    >
      <Marker position={center} />
    </Map>
      </APIProvider>
      </div>
  )
}

export default GeoCoding