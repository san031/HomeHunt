import React, { useId } from 'react'

function Select({options,label, classname,size,optionClass,...props}, ref) {

    const Id = useId()  
  return (
    <div className='w-[55%]'>
        {label && <label htmlFor={Id} className='inline-block mb-1 pl-1'>{label}</label>}
        <select size={size} className={`px-3 py-2 rounded-lg bg-gray-300
        text-black outline-none focus:bg-gray-00 w-full
        checked:bg-green-300

        ${classname}`} id={Id} ref={ref} {...props}>{
            options?.map((option) => (
                <option className={optionClass} key={option} value={option}>{option}</option>
            ))
            }</select>
    </div>
  )
}

export default React.forwardRef(Select)