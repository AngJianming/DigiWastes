import React from 'react'

const Wrapper = ({children , classname}) => {
  return (
    <div className={`w-full max-w-[71vw] px-5 md:px-10 mx-auto ${classname || "" }`}>{children}</div>
  )
}

export default Wrapper;