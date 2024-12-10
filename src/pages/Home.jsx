import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Searchbar from '../components/Searchbar/Searchbar'
import Slides from '../components/Slides/Slides'
import Cards from '../components/Cards/Cards'

const Home = () => {
  return (
    <div className=' flex  gap-5 ml-5 mr-5  '>  
      <Sidebar/>
      <div className=' border mt-5 '>
            <Searchbar/>
            <Slides/>
            <Cards/>
      </div>
    </div>
  )
}

export default Home
