import React from 'react'
import Container from '../components/Container'

import { BiSolidDish, BiSolidDryer, CgSmartHomeBoiler, GiFireplace, GiWashingMachine, HiOutlineDesktopComputer, IoTvSharp, MdCoffeeMaker, RiBookShelfFill, TbDeviceLandlinePhone, TbFridge, TbIroning3Filled } from '../utils/index'

function Amenities() {
  return (
    <div>
        <Container className='py-18 px-22'
         width='w-full' height='max-h-1/2' >
            <h3 className='text-3xl text-center font-bold mb-15'>
              Amenities
            </h3>
            <div className='grid grid-cols-3 gap-30'>
              <div>
                <div className='flex flex-row p-5 gap-1.5'>
                  <IoTvSharp size={60}/>
                  <p className='text-2xl mt-3'>TV</p>
                  
                </div>
                <div className='flex flex-row p-5 gap-1.5'>
                  <GiFireplace size={60}/>
                  <p className='text-2xl mt-3'>Fireplace</p>
                  </div>
                <div className='flex flex-row p-5 gap-1.5'>
                  <TbDeviceLandlinePhone size={60}/>
                  <p className='text-2xl mt-3'>Phone</p>
                  </div>
                <div className='flex flex-row p-5 gap-1.5'>
                  <HiOutlineDesktopComputer size={60}/>
                  <p className='text-2xl mt-3'>Work Desk</p>
                  </div>
              </div>
              <div>
                <div className='flex flex-row p-5 gap-1.5'>
                  <TbFridge size={60} />
                  <p className='text-2xl mt-3 '>Fridge</p>
                  </div>
                <div className='flex flex-row p-5 gap-1.5'>
                  <CgSmartHomeBoiler size={60} />
                  <p className='text-2xl mt-3'>Kettle</p>
                  </div>
                <div className='flex flex-row p-5 gap-1.5'>
                  <MdCoffeeMaker size={60} />
                  <p className='text-2xl mt-3'>Coffee Machine</p>
                  </div>
                <div className='flex flex-row p-5 gap-1.5'>
                  <BiSolidDish size={60} />
                  <p className='text-2xl mt-3'>Dishes</p>
                  </div>
              </div>
              <div>
                <div className='flex flex-row p-5 gap-1.5'>
                  <GiWashingMachine size={60}/>
                  <p className='text-2xl mt-3'>Washing Machine</p>
                  </div>
                <div className='flex flex-row p-5 gap-1.5'>
                  <BiSolidDryer size={60} />
                  <p className='text-2xl mt-3'>Dryer</p></div>
                <div className='flex flex-row p-5 gap-1.5'>
                  <TbIroning3Filled  size={60}/>
                  <p className='text-2xl mt-3'>Iron</p>
                  </div>
                <div className='flex flex-row p-5 gap-1.5'>
                  <RiBookShelfFill size={60} />
                  <p className='text-2xl mt-3'>Wardrobe</p>
                  </div>
              </div>

            </div>
        </Container>
    </div>
  )
}

export default Amenities