import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import appwriteService from '../appwrite/config'
import Container from '../components/Container'
import Card from '../components/Card'
import FilterBtn from '../components/FilterBtn'
import Button from '../components/Button'
function Booking() {
  const [spaces,setSpaces] = useState([])
  const [showForm,setShowForm] = useState(false)
  const[formSpace,setFormSpace] = useState([])
  useEffect(() => {
   const fetchSpaces = async() => {
       appwriteService.getPosts([]).then((spaces) => {
    if(spaces){
      setSpaces(spaces.documents)
    }
  })
   }
   fetchSpaces()
  }, [])
  



  if(spaces.length===0){
    return <>No spaces available</>}

  // Error encountered ||

  // Appwrite serive :: getPosts :: error AppwriteException: The current user is not authorized to perform the requested action.
  //   at _Client.<anonymous> (appwrite.js?v=3c6a3041:547:15)
  //   at Generator.next (<anonymous>)
  //   at fulfilled (appwrite.js?v=3c6a3041:13:24)

  //refer to lecture 25: Building Pages after authorization
  
  return (
    <div>
      <Container className='h-full'>
        <SearchBar/>
        {/* <FilterBtn/> */}
        <Button type='button' margin='mx-35 my-7'  onClick={() => setShowForm((prev) => !prev ) }>Filters</Button>
        {showForm && <FilterBtn setFormSpace={setFormSpace}/>}
        <div  className=' m-18'>

            {formSpace.length>0 ?
              formSpace.map(space => <Card key={space.$id}{...space}/>)
             :
              spaces.map(space => <Card key={space.$id} {...space}/>)
            }

        
        </div>
      </Container>

    </div>
  )
}

export default Booking