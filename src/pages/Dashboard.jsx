import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import appwriteService from '../appwrite/config'
import Card from '../components/Card'
import SpaceForm from '../admin/SpaceForm'
import Container from '../components/Container'

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
    <Container className='h-full'>
      <ul>
        {spaces.map((space) => 
            <li key={space.$id}>
              
          <div  className='p-2 w-7xl h-2/5 relative left-15'>
            <Card {...space}/>
          </div>
            
            </li> )
        }
      </ul>
    </Container>
  )
}

export default Dashboard