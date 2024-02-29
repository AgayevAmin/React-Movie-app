import React from "react";
import "./stayle.css";
import { SMALL_IMG_COVER_BASE_URL } from "../config";

function MovieItem( {movie }) {
  
  return (
    <>
    <div className="cart">

      <img className="img" src={`${SMALL_IMG_COVER_BASE_URL + movie.poster_path}`} alt={movie.title} />
    
      <div className="cart-title">

      <h4 className="h4">{movie.title}</h4>
      <p  className="p">{movie.release_date}</p>
      
      </div>
    
    </div>
  
    </>
  
  );
}

export default MovieItem;
