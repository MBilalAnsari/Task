import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Searchbar from '../components/Searchbar/Searchbar';
import Slides from '../components/Slides/Slides';
import Cards from '../components/Cards/Cards';
import axios from 'axios';

const Home = () => {
  const [data, setdata] = useState([]);
  const [search, setSearch] = useState("")

  async function apiIntg() {
    try {
      const apiResponse = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=2069fe59`);
      const apiData = apiResponse.data.Search; 
      setdata(apiData)
      console.log(apiData);
    } catch (error) {
      console.log("Error message", error.message);
    }
  }

  useEffect(() => {
    apiIntg();
  }, [search]);

  return (
    <div className='flex gap-5 ml-5 mr-5'>
      <Sidebar />
      <div className='mt-5'>
        <Searchbar setSearch={setSearch} />
        {data && data.length > 0 ? (
          data.map((movie, index) => (
            <CardsMovie key={index} data={movie} />
          ))
        ) : (
          <>
            <Slides />
            <Cards />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

const CardsMovie = ({ data }) => {
  return (
    <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      <div className=" gap-5 mt-5 border">
        <div className="h-full rounded-lg">
          <img src={data.Poster} alt={data.Title} className="h-[200px] rounded-lg w-[430px]" />
          <div className='font-serif'>
            <span className='ml-2'>{data.Year}</span><span className='ml-5'>HW</span><span className='ml-5'>H-P</span>
            <p className='mb-2 ml-2'>{data.Title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
