import React, { useEffect, useState } from 'react'
import { get } from '../../services/Endpoint'

const Dashboard = () => {
const [posts, setPost] = useState([])
const [users, setUser] = useState([])
const [comments, setComment] = useState([])
  useEffect(() => {
    const Getdata  = async () => {
      try {
        const res = await get('/dashboard')
        const data = res.data
        setComment(data.Comments)
        setPost(data.Posts)
        setUser(data.Users)
      } catch (error) {
        console.log(error); 
      }  
    }
    Getdata()
  },[])
  
  return (
    <div className='p-4'>
        <div className='grid grid-cols-3 gap-4'>
        <div className='rounded-[4px] bg-sky-600 py-3  px-4'>
            <h4 className='text-[1.6rem] text-white font-medium'>Total Users</h4>
            <h4 className='text-[1.2rem] text-white'>{users && users.length}</h4>
        </div>
        <div className='rounded-[4px] bg-teal-600 py-3  px-4'>
            <h4 className='text-[1.6rem] text-white font-medium'>Total Posts</h4>
            <h4 className='text-[1.2rem] text-white'>{posts && posts.length}</h4>
        </div>
        <div className='rounded-[4px] bg-yellow-500 py-3  px-4'>
            <h4 className='text-[1.6rem] text-white font-medium'>Total Comments</h4>
            <h4 className='text-[1.2rem] text-white'>{comments && comments.length}</h4>
        </div>
        </div>
    </div>
  )
}

export default Dashboard