import React from 'react'
import RecentPost from '../Components/RecentPost'

const Home = () => {
  return (
    <>
    <div className='bg-cover h-[80vh] justify-center items-center flex text-white ' >
        <div className='text-center'>
            <h2 className='text-[2.8rem] font-semibold'>Hero Section</h2>
            <h3 className='text-[1rem] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus.</h3>
        </div>
    </div>

    <div className='max-w-screen-2xl  mx-auto'>
        <div className='p-5'> 
            <div><RecentPost/></div>
        </div>
    </div>
    </> 

  )
}

export default Home