import React from 'react'
export default function conversation() {
  return (
    <div className='bg-gradient-to-r from-gray-100 to-blue-200'>
      <div className=' w-[100%] h-[95vh] my-5 grid'>
        <div className='h-1/2'></div>

        <div className='bg-gradient-to-r from-gray-100 to-blue-200 rounded-md h-full w-[70%] mx-auto overflow-y-auto p-5  text-xl grid gap-5 font-semibold text-gray-700 scroll-think'>
          <div className='flex justify-end'>
            <p className='bg-blue-500 p-5 text-white  rounded-xl w-fit  max-w-[75%] text-justify bg-gradient-to-r from-cyan-600 to-blue-500 shadow-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.,
            </p>
          </div>

          <div className=''>
            <p className='p-5 text-black  rounded-xl w-fit  max-w-[75%] text-justify shadow-lg bg-slate-100'>
              Lorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.t,
            </p>
          </div>

          <div className='flex justify-center'>
            <button className='flex bg-black text-white btn'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z'
                />
              </svg>
              start Record
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
