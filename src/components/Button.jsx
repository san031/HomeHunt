import React from 'react'

function Button({
    children,
    type = 'button',
    textColor = 'text-white',
    margin='0 auto',
    className  = '',
    ...props
}) 

{
  return (
    <button
    className={`px-4 py-2 rounded-full  w-3xs bg-green-900 text-center 
      pointer
      ${textColor} ${margin} ${className} ${type}`}
    {...props}
    >{children}</button>
  )
}

export default Button