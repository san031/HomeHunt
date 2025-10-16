import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import Calendar from 'react-calendar'
import { IoIosPeople } from "react-icons/io";
import { FaCalendarMinus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { useForm } from 'react-hook-form';
import appwriteServices from '../appwrite/config'
import 'react-calendar/dist/Calendar.css';

import '../App.css'
import Select from './Select';
import Input from './Input';
import Button from './Button';
import { useNavigate } from 'react-router';
function SearchBar() {

  const [dateInput, setDateInput] = useState(new Date())
  const {handleSubmit,register} = useForm()
  const [showCalendar,setShowCalendar] = useState(false)
  const navigate = useNavigate()


  async function handleSearch(data){
    console.log(data);
    try {
      const response = await appwriteServices.searchSpace(data)
      console.log(response);
      if(response.length===0){
        return "No spaces found"}
      navigate('/search' , {state : response})
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form
      onSubmit={handleSubmit(handleSearch)}
      className='search-box border-4 border-green-900'>
        <div className='flex flex-row sample'>
          <IoSearchSharp />
          {/* <Select label="Select a city" options={["Jaipur","Jodhpur","Ranchi","Jeruselum"]}/>
           */}
           <Input type = 'text' placeholder='search space' 
            height='h-7x'  margin='-2.5' width='w-3xs'
            className='sticky'
           {...register("search")}
           />
          </div>
        <div className=' flex' style={{cursor:"pointer"}}>
          <div><FaCalendarMinus className='mt-1' size={10} />
          <p className='text-[10px]' onClick={() => setShowCalendar((prev) => !prev)}>Move In → Move Out</p>
          
          <div className='z-10 absolute'>
            {showCalendar &&
            //  <Input type='date'
            //   value={dateInput} onChange = {(e) => setDateInput(e)}/>
            <Input height='h-7x' className='flex' margin='-2.5' width='w-3xs' type='date' {...register('dateInput')}/>
              }
          </div>
          {/* <DatePicker selected={dateInput}
          onChange={(date) => setDateInput(date)}/> */}
          {/* <Input height='h-7x' className='flex' margin='-2.5' width='w-3xs' type='date' {...register('dateInput', {required:true})}/> */}
          </div>
         </div>
        <div  className='flex sample'>
          <IoIosPeople className='mt-1' />
          guests</div>
        <Button type='submit' className='bg-green-900 rounded-full text-white m-0.5 px-0.5 py-1.5 h-9'>Search</Button>
      </form>
      </div>
  )
}

export default SearchBar