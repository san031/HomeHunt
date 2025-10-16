import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router'
import SpaceForm from './SpaceForm'

function EditSpace() {
    const [space,setSpace] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      if(slug){
        appwriteService.getPost(slug).then((space) => (
            setSpace(space)
        ))
      }
      else{
        navigate('/')
      }
    }, [slug,navigate])
    
  return (
    space?
    <Container>
      {console.log(space)}
        <SpaceForm space={space} />
    </Container>
    : null
  )
}

export default EditSpace