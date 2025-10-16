import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import Card from './Card'

function Search() {
  const location = useLocation()
    const navigate = useNavigate()
    const response = location.state || {}
    
  return (
    <div>
        {
          response.map((space) => 
            <div key={space.$id} className='p-2 w-1/4'>
              <Card {...space}/>
            </div>
          )
        }
    </div>
  )
}

export default Search