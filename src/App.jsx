import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './appwrite/store/authSlice'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'


function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      console.log(userData);
        if(userData){
          dispatch(login({userData:userData}))
        }
        else{
          dispatch(logout())
        }

    })
    .finally(() => setLoading(false))
  },[])

  return (
    
    !loading ? (
      <div className='min-h-screen flex flex-wrap content-between'>
        <div className='w-full block'>
          <Header/>
          <main>
            <Outlet/>
            {/* Home Hunt */}
          </main>
          <Footer/>
        </div>

      </div>
    ):null
  )
}

export default App
