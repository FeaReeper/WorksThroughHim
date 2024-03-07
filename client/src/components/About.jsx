import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='victory-bg w-screen h-screen'>
      <div className='flex justify-end px-40 py-10'>
      <Link to={'/'} className="h-fit my-auto text-decoration-none font-bold hover:underline">Home</Link>
      </div>
    </div>
  )
}

export default About