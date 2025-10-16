import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import appwriteService from '../appwrite/config'
import Card from '../components/Card'
import SpaceForm from '../admin/SpaceForm'

function Dashboard() {

  const [spaces,setSpaces] = useState([])
  
  useEffect(() => {
    const fetchSpaces = async() => {
    appwriteService.getPosts([]).then((space) => {
    if(space){
      setSpaces(space.documents)
    }
  })
  }
  fetchSpaces()
  }, [])
  

  return (
    <div>
      <SpaceForm/>
      <ul>
        {spaces.map((space) => 
            <li key={space.$id}>
              
          <div  className='p-2 w-1/4'>
            <Card {...space}/>
          </div>
            
            </li> )
        }
      </ul>
    </div>
  )
}

export default Dashboard