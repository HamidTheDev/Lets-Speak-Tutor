import React from 'react'
import { loginstyle, parent } from './login.module.css'
export default function login() {
  return (
    <div className={`w-full h-[100vh] ${parent}`}>
      <div className='grid grid-cols-2 gap-8 justify-center items-center  h-full bg-gray-800 p-7 rounded shadow-lg w-[80vw] mx-auto'>
        <div className={`${loginstyle} h-full rounded`}></div>
        <div className='flex flex-col text-white justify-center  h-full '>
          <h3 className='text-2xl font-bold mb-3'>Login</h3>
          <p className='text-sm font-semibold'>
            you don't have an account?
            <span className='text-transparent bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500'>
              create your account
            </span>
          </p>
          <div className='relative'>
            <input
              type='text'
              className='border-b-4 border-cyan-500 border-dashed outline-none bg-[#141414] my-3 p-2 w-[70%] '
              placeholder='user name'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 absolute bottom-[35%] right-[30%]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
              />
            </svg>
          </div>
          <div className='relative'>
            <input
              type='text'
              className='border-b-4 outline-none border-cyan-500 border-dashed bg-[#141414] my-2 p-2 w-[70%] '
              placeholder='password'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 absolute bottom-[35%] right-[30%]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
              />
            </svg>
          </div>
          <div className=''>
            <div className='flex items-center m-2'>
              <div className='flex items-center mr-[30%]'>
                <input
                  type='checkbox'
                  className='checkbox checkbox-info mr-3'
                />
                <span className='label-text text-white'>Remember me</span>
              </div>
              <a href=''>forgot password</a>
            </div>

            <button className='text-white rounded-lg px-7 py-2 absolute bg-gradient-to-r from-cyan-500 to-blue-500 mt-4'>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
