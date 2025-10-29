import React from 'react'
import Logo from './Logo'
import Container from './Container'
import { Link, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import LogoutBtn from '../admin/LogoutBtn'
function Header() {
  const authStatus = useSelector((state) => state.auth.status )
  const navigate = useNavigate()

  const navItems = [
    {name:'Home', slug:"", active:!authStatus},
    {name:"Landlords", slug:"/landlords", active:authStatus},
    {name:"Contact Us", slug:"/contactus",active:!authStatus},
    {name:"login", slug:"/login",active:!authStatus},
    {name:"sign up", slug:"/signup",active:!authStatus},
    {name:"Dashboard", slug:"/admin/dashboard",active:authStatus},   
  ]
  return (
    <div className='fixed z-10 bg-gray-50 w-full mb-20'>
        {/* <Container> */}
            <nav className='flex '>
              {/* <Logo/> */}
              {/* <Link to='home'>Home</Link>
              <Link to='landlords'>Landlords</Link>
              <Link to='tenants'>Tenants</Link>
              <Link to='contactus'>Contact us</Link> */}
              <div className='mr-4'>
                <Logo/>
              </div>

              <ul className='flex ml-auto'>
                {navItems.map((item) => 
                item.active ? (
                  <li key={item.name}>
                    <button onClick={() => navigate(item.slug)}
                      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                      >{item.name}</button>
                  </li>
                ) : null
                )}

                {
                  authStatus && (
                    <li className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                      <LogoutBtn/>
                    </li>
                  )
                }
              </ul>
            </nav>

        {/* </Container> */}
        
    </div>
  )
}

export default Header
