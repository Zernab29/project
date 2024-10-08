import React from 'react'

const Wrapper = ({Children}) => {
  return (
    <div className="bg-slate-200 h-[100vh] max-w-6xl mx-auto">
      {Children}
    </div>
  )
}

export default Wrapper
