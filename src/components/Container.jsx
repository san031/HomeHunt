import React from 'react'

function Container({className="",width='w-full',height='h-170',children}) {
  return (
    <div className={`
   ${height}
   ${width}
    relative
    
    ${className}
    `}
    style={{ fontFamily: 'Inter, sans-serif' }}
    >{children}</div>
  )
}

export default Container