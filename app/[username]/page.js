import React from 'react'

const Username = async ({params}) => {
    
    const {username} = await params;

  return (
    <>
    <div className='cover relative'>
      <img className='object-cover w-full' src="cover.png" alt="" />
      <div className=' -bottom-18 absolute right-[46%] border-2 border-black rounded-full'>
        <img className='rounded-full' width={123} height={123} src="profile.png" alt="" />
      </div>
    </div>
    <div className="info flex justify-center items-center my-19">
      @{username}
      <div></div>
      <div></div>
    </div>
    </>
  )
}

export default Username
