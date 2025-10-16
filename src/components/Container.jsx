import React from 'react'

function Container({className="",children}) {
  return (
    <div className={`
    h-170
    w-full
    relative
    
    ${className}
    `}
    style={{ fontFamily: 'Inter, sans-serif' }}
    >{children}</div>
  )
}

export default Container