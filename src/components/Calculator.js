import React from 'react'

function Calculator({children}) {
  return (
    <div className='calculator'>
        <h1>{children}</h1>
    </div>
  )
}

export default Calculator