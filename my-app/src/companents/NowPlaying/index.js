// import React from 'react'

import { useEffect, useState } from "react";
import fetchData from "../../helpers/fetch";
import Card from "../Card";
import { useNavigate } from "react-router-dom";

export default function NowPlaying() {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    fetchData("/movie/now_playing").then(setInfo);
  }, []);

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
