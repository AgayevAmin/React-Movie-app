

import { SMALL_IMG_COVER_BASE_URL } from '../../config';
import { FiveStarRating } from '../Fivestarrating';

const Card = ({data,onClick}) =>{
  const handleClick = () => {
      onClick(data);
  };
  const rating= data.vote_average /2
  // const rating= Math.random()*5
    return (
      <div   onClick={handleClick} >
          <img  src={SMALL_IMG_COVER_BASE_URL + data.poster_path}   alt={data.title}/>
        <div>
        <FiveStarRating rating={rating} />
          <h5 className='movie-name'>{data.title}</h5>
          <p className='movie-date'>{data.release_date}</p>
          </div> 
      </div>
    );
  };
  
  export default Card;
  