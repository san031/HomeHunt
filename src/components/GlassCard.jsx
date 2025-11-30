import React from 'react'
import '../App.css'

function GlassCard({glassIcon, glassHead, glassText}) {
  return (
    <div className="glass ">
                  {/* <FaCalendarMinus style={{fontSize:'35px', margin:'0 auto'}}/> */}
                  {glassIcon}
                  <p className='font-bold'>{glassHead}</p>
                  <p className='text-[13px]'>{glassText}</p>
                </div>
  )
}

export default GlassCard