import React from 'react'

const Commonbtn = (props) => {
  return (
    <button className='font-archivo font-semibold text-[18px]  leading-[19px] text-white bg-lightgreen  sm:py-4 py-3 sm:px-[27px] px-[23px] hover:bg-green-900 duration-300 hover:shadow-btnshadow'>{props.name}</button>
  )
}

export default Commonbtn