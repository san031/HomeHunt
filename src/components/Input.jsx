import React, {useId} from 'react'

const Input =React.forwardRef (({
    label, type="text",height='h-10',margin='m-1',width='w-110' ,className = '', ...props
},ref) => { 
    const Id= useId()
  return (
    <div className='flex items-center justify-center gap-2'  >
        {label && <label className='inline-block  pl-1' htmlFor={Id}>{label}</label>}
        <input type={type} className={`bg-gray-300 rounded-md ${width} ${margin} ${className}  ${height}`} {...props} ref={ref} id={Id}/>
    </div>
  )
})

export default Input