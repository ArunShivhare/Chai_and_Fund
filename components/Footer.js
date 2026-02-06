import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-50 flex justify-center px-4 h-12 items-center'>
      <p className='text-center'>Copyright &copy; {new Date().getFullYear()} Chai <span className="text-purple-600">&</span> Fund - All right reserved</p>
    </footer>
  )
}

export default Footer
