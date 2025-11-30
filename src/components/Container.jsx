import React from 'react'

function Container({className="",width='w-full',height='h-170',children}) {
  return (
    <div className={`
   ${height}
   ${width}
    relative
    top-16
    
    ${className}
    `}
    style={{ fontFamily: 'Inter, sans-serif' }}
    >{children}</div>
  )
}

export default Container