import React from 'react'

export default function footer() {
    var date = new Date()
  return (
    <div className='footer'>
        <p> Team Member Allocation</p>
        <p>&copy;{date.getFullYear()}</p>
    </div>
  )
}
