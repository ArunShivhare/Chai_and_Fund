import React from 'react'

const Username = async ({params}) => {
    
    const {username} = await params;

  return (
    <>
    {username}
    <div className=''>
      <img className='object-cover w-full' src="cover.png" alt="" />
    </div>
    </>
  )
}

export default Username
