import React from 'react'
import Container from '../components/Container'
import bright_homie from '../utils/bright_homie.jpg'
import { FaCalendarMinus } from "react-icons/fa";
import future1 from '../utils/future1.jpeg'
import future7 from '../utils/future7.jpeg'
import future3 from '../utils/future3.jpeg'
import future5 from '../utils/future5.jpeg'
import { GiSofa } from "react-icons/gi";
import { BsChat } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import shoreditch from '../utils/shoreditch.png'
import cityofLondon from '../utils/city_of_london.png'
import westend from '../utils/the_west_end.png'
import kensington from '../utils/kensington2.png'
import hammersmith from '../utils/hammersmith.png'
import kingston_thames from '../utils/kingston_thames.png'
import interior from '../utils/interior.jpeg'
import '../App.css'
import Button from '../components/Button';
import { useNavigate } from 'react-router';
import SearchBar from '../components/SearchBar'
import GlassCard from '../components/GlassCard';

function Home() {

  const navigate = useNavigate()
  return (
    <div>
      <Container>

          <div className='tag'>
            <p className='text-3xl font-bold mx-4'>We rent your property</p>
            <p className='text-pretty mx-4'>Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis proin fermentum, consectetur cursus. </p>
          </div>
          <img src={bright_homie} className='w-full h-full'/>
        
      </Container>
      <SearchBar/>
      <Container className=' w-full h-1/2 py-22 px-11'>
      <div className='future rounded-4xl glass'>
        <div className='img-grp'>
            
            <img src={future7} alt="" 
            //  width='25%' height='30%'
            className='rounded-tl-4xl'
             />
            <img src={future1} alt="" />
            <img src={future5} alt=""  className='rounded-bl-4xl' />
            <img src={future3} alt="" 
             />
            
          </div>
        <div className='mx-0 my-auto p-2.5  '>
           <p className='text-3xl font-bold'>The future is flexible</p> 
          <p className='text-[20px]'>We believe in a world where finding a home is just a click away. 
Whether you’re selling your home, travelling for work or moving to 
a new city.  Just bring your bags, and we’ll handle the rest.</p>
        </div>
      </div>
          
      </Container>
      <Container>
        <div className='w-full  py-22 relative bottom-40 md:bottom-10 lg:top-24   px-18 h-[90%] text-center '>
          
            <h2 className='text-3xl font-bold '>Id aliquam molestie nunc quis turpis imperdiet quis</h2>
            <p>Euismod condimentum tempus quis nibh. Accumsan imperdiet non vulputate venenatis, lorem amet, purus amet, sagittis. Cum orci quam enim adipiscing interdum purus.</p>
          
          <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] xl:grid-cols-4 gap-2.5 features'>

            <GlassCard
             glassIcon={<FaCalendarMinus style={{fontSize:'35px', margin:'0 auto'}}/>}
             glassHead="Flexible living"
             glassText="We believe in a world where finding a home is just a click away. 
Whether you’re selling your home, travelling for work or moving to 
a new city.  Just bring your bags, and we’ll handle the rest."
             />


            <GlassCard
             glassIcon={<GiSofa style={{fontSize:'35px', margin:'0 auto'}}/>}
             glassHead="Move-in ready"
             glassText="Ready to move in with everything you need"
             />

            <GlassCard
             glassIcon={<FaWifi style={{fontSize:'35px', margin:'0 auto'}}/>}
             glassHead="High-speed Wi-Fi"
             glassText="Best in class internet speeds suitable to working from home"
             />
            

            <GlassCard
             glassIcon={<BsChat style={{fontSize:'35px', margin:'0 auto'}}/>}
             glassHead="24/7 support"
             glassText="On hand team for any issues you have"
             />
          </div>

        </div>
      </Container>
      <Container className=' py-18 px-11 h-[110%]'>
        <div className='address flex flex-col justify-evenly flex-wrap text-center'>
          <p className='text-3xl font-bold'>Choose your location</p>
          <div className='grid grid-cols-3 md:grid-cols-6 addressimg'>
            <div >
              <p>Shoreditch</p>
              <img src={shoreditch} alt="" className='w-full h-full' />
            </div>
            <div>
              <p>City of London</p>
              <img src={cityofLondon} alt="" className='w-full h-full' />
            </div>
            <div>
              <p>The West End</p>
              <img src={westend} alt="" className='w-full h-full' />
            </div>
            <div>
              <p>Kensington</p>
              <img src={kensington} alt="" className='w-full h-full' />
            </div>
            <div>
              <p>Kingston-Upon-Thames</p>
              <img src={kingston_thames} alt="" className='w-full  h-full' />
            </div>
            <div>
              <p>Hammersmith</p>
              <img src={hammersmith} alt="" className='w-full h-full' />
            </div>
          </div>
          <Button className=' w-3xs bg-green-900' 
          style={{margin:"0 auto"}}
          > View all spaces</Button>
        </div>
      </Container>

      <Container 
      className='pt-25 pb-10' 
      // style={{padding:"25px 0 25px 0"}}
      >
        <div className='relative bespokespaces'>
          <img src={interior} 
          className='h-150 w-full absolute left-0 top-0'
          />
          <div className='z-100 absolute text-white w-7 h-7 border-2'>
            <p className='text-5xl'>BeSpoke Spaces</p>
            <p className='text-lg'>
Expertly designed to create extraordinary spaces with the flexible renter in mind
Start booking</p>
            <Button
            onClick={() => {navigate('booking')}}
            >Start Booking</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home