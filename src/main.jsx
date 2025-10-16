import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './appwrite/store/store'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Landlords from './pages/Landlords.jsx'
import Tenants from './pages/Tenants.jsx'
import ContactUs from './pages/ContactUs.jsx'
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import Booking from './pages/Booking.jsx'
import Signup from './pages/Signup.jsx'
import AuthLayout from './admin/AuthLayout.jsx'
import Login from './admin/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import EditSpace from './admin/EditSpace.jsx'
import Space from './pages/Space.jsx'
import Search from './components/Search.jsx'



const router = createBrowserRouter([
  {path:"", 
  element:<Layout/>,
  children:[
    {path:"/", element:<Home/>},
    {path:"/search",element:<Search/>},
    {path:"/landlords", element:(                          //landlords k page admin ko hi accessible hona chahiye,        
      <AuthLayout authentication>    
      <Landlords/>                   
      </AuthLayout>
    )},
    {path:"/booking", element:
      (
      <AuthLayout authentication={false}>
        <Booking/>
      </AuthLayout> 
    )
  },
    {path:"/contactus", element:
      (<AuthLayout authentication={false}>
        <ContactUs/>
      </AuthLayout>)
      // <ContactUs/>
      },
    {path:"/signup", element:
      (      <AuthLayout authentication={false}>
        <Signup/>
 </AuthLayout>    ) 
      },

    {
      path:'/login',
      element:(
        <AuthLayout authentication={false}>
          <Login/>
        </AuthLayout>
      )
    }, 
    {
      path:'/edit-space/:slug',
      element:(
        <AuthLayout authentication>
          {""}
          <EditSpace/>
        </AuthLayout>
      )
    },
    {
      path:'/space/:slug',
      element:<Space/>
      // element:(
      //   <AuthLayout>
      //     <Space/>
      //   </AuthLayout>
      // )
    },

    {
      path:'/admin/dashboard',                                  // dashboard page will have add, edit, delete space from spaces 
      element:(
        <AuthLayout authentication>
          <Dashboard/>
        </AuthLayout>
      )
    }
  ]
},
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}>
      <App />
     </RouterProvider>
    </Provider>
  </StrictMode>,
)
