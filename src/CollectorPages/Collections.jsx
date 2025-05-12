import React from 'react'

export default function Collections() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Collections</h1>
      <div className='flex flex-wrap justify-center'>
        <div className='bg-gray-200 p-4 m-2 rounded shadow-lg'>
          <h2 className='text-xl font-semibold'>Collection 1</h2>
          <p>Description of Collection 1</p>
        </div>
        <div className='bg-gray-200 p-4 m-2 rounded shadow-lg'>
          <h2 className='text-xl font-semibold'>Collection 2</h2>
          <p>Description of Collection 2</p>
        </div>
        {/* Add more collections as needed */}
      </div>
    </div>
  )
}
