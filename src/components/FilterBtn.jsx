import React from 'react'
import { useForm } from 'react-hook-form'
import appwriteServices from '../appwrite/config'
import Input from './Input'
import Select from './Select'
import Button from './Button'
import Container from './Container'
import { IoIosBed,FaBath,FaWheelchair,FaCar,
  GrElevator,BiDish,GiWashingMachine
 } from '../utils/index'
function FilterBtn({setFormSpace}) {
    const {register,handleSubmit} = useForm()
    const create = async(data) => {
        // console.log(data)
        try {
          const response = await appwriteServices.filterSpace(data)
          console.log(response);
          setFormSpace(response)
        } catch (error) {
           console.log("Appwrite serive :: searchSpace :: error", error);
        }
    }
  return (
    
    <Container className='py-0.5 px-35 h-[110%] ml-2.5'>
        <form onSubmit={handleSubmit(create)} className='border-amber-50 w-60 text-[10px] rounded-md bg-amber-50 shadow-2xl '>
            <div className='ml-4'>
              <div className='flex flex-row gap-1.5'>
              <IoIosBed size={25}/>
            <Select size='2'  optionClass='inline w-2xs px-2 py-1'  className='overflow-y-visible overflow-x-visible w-fit gap-2.5' label='Bedrooms' options={[1,2,3]} 
            {...register("bedroom")}/>
            </div>
           <div className='flex flex-row gap-1.5'>
            <FaBath size={25}/>
             <Select size='2' optionClass='inline w-2xs gap-2.5 px-2 py-1'  className='overflow-y-visible overflow-x-visible   w-fit gap-2.5' label='bathrooms' options={[1,2,3]}
            {...register("bathroom")}
            />
           </div>
           <div className='flex flex-row gap-1.5'>
            <FaWheelchair size={25}/>
             <Input type='checkbox' label='disabled access'
            width='w-5' margin='mx-0 my-auto'
            {...register("disableAccess")}
            />
           </div>
            <div className='flex flex-row gap-1.5'>
              <FaCar size={25}/>
              <Input type='checkbox' label='parking'
            margin='mx-0 my-auto'  width='w-5'
            {...register("parking")}
            />
            </div>
            <div className='flex flex-row gap-1.5'>
              <GrElevator size={25}/>
              <Input type='checkbox'
            width='w-5' margin='mx-0 my-auto'
            label='elevator'{...register("elevator")}/>
            </div>
            <div className='flex flex-row gap-1.5'>
              <BiDish size={25}/>
              <Input type='checkbox'
            width='w-5' margin='mx-0 my-auto'
            label='dishwasher'
            {...register("dishwaher")}
            />
            </div>
            <div className='flex flex-row gap-1.5'>
              <GiWashingMachine size={25}/>
              <Input type='checkbox' 
            width='w-5' margin='mx-0 my-auto'
            label='washing machine'
            {...register('washingMachine')}
            />
            </div>
            <Button type='submit' className="w-12 rounded-md mx-0 my-auto">Ok</Button>
            </div>
        </form>

    </Container>
  )
}

export default FilterBtn