import { Link } from 'gatsby'
import React from 'react'
import '../styles/global.css'
export default function Home() {
  return (
    <>
      <div className='heroImg'>
        <nav className='w-[75%] mx-auto flex justify-between pt-6'>
          <img src='../assests/banner(1).jpeg' alt='' />
          <div className='flex list-none text-white'>
            <li className='ml-6 px-7 py-3 rounded-md font-semibold'>
              Lis of Conversation
            </li>
            <li className='ml-6 px-7 py-3 rounded-md font-semibold'>Sing Up</li>
            <Link href='/login'>
              <li className='ml-6 px-7 py-3 rounded-md font-semibold  bg-gradient-to-r from-cyan-500 to-blue-500'>
                Sing In
              </li>
            </Link>
          </div>
        </nav>

        <div className='flex items-center justify-center h-[70vh] w-[52%]'>
          <div className='grid gap-5'>
            <div className='text-white'>
              <h2 className='text-3xl font-bold'>One link to start a</h2>
              <h3 className='text-3xl my-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500'>
                voice conversation
              </h3>
              <h3 className='text-3xl font-bold'>with anyone.</h3>
              <p className='text-sm my-2'>
                sign-up optional Completely private conversations
              </p>
            </div>

            <div className='mt-3 relative'>
              <input
                type='text'
                placeholder='Type here'
                className='input bg-white input-bordered w-[400px] '
              />
              <button className='text-white rounded-lg px-6 py-3 absolute right-0 bg-gradient-to-r from-cyan-500 to-blue-500'>
                Get Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
