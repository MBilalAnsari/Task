import React from 'react'

const Searchbar = ({setSearch}) => {
  return (
        <div className='w-full  '>
            <input onChange={(e)=> setSearch(e.target.value) } type="text" name="" id="" className='bg-inherit w-[97%]  mx-5 placeholder:pl-5] h-10  ' placeholder='Search your Movies'  />
        </div>

  )
}

export default Searchbar
