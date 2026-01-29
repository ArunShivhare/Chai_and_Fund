import React from 'react'

const Username = async ({params}) => {
    
    const {username} = await params;

  return (
    <div className='text-2xl text-black'>
      {username}
    </div>
  )
}

export default Username
