import React, { useEffect, useState } from 'react'
import Card from '../Card';
import { API_KEY, BASE_URL } from '../../config';
import  axios from 'axios';
import fetchData from '../../helpers/fetch';
import { useLocation, useNavigate } from 'react-router-dom';


//  const searchInput = new URLSearchParams(location.search).get('search') || '';

export default function Home() {
    const [info, setInfo] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const searchInput = new URLSearchParams(location.search).get('search') || '';

      useEffect(()=>{
        fetchData("/movie/popular").then(setInfo);
      },[])

  
    useEffect(() => {
      const filteredData = info.filter((movie) =>
        movie.title.toLowerCase().includes(searchInput.toLocaleLowerCase())
      );
      setInfo(filteredData);
    }, [searchInput, info]);

  const handleCardClick = (cardData) => {
    navigate(`/movie/${cardData.id}`, {state: cardData});
};
  return (
    <div className='container'>
      <div className='movies'>
      {info.map((movie) => {
            return (
              <div className='item' key={movie.id}>
                <Card  onClick={handleCardClick} data={movie} />             
              </div>
              )
            })
            }
      </div>
    </div>
  )
}


// {filteredInfo.map((movie, index) => (
//   <div className="item" key={movie.id}>
//     <Card key={index} info={movie} klikle={handleCardClick} />
//   </div>
// ))}