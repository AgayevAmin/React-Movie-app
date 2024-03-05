import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import { FiveStarRating } from "../Fivestarrating";

const Movie_Info = () => {
    const location = useLocation();
    const {state} = location;
    const [data,setData] = useState([]);
    useEffect(()=>{
        setData(state);
    },[state]);
    const rating= data.vote_average / 2;
    return (
        <div>        
            <div key={data.id}>
                <img src={`${SMALL_IMG_COVER_BASE_URL}${data.poster_path}`} alt={data.title} />
                <FiveStarRating rating={rating} />
                <h1>{data.title}</h1>
                <p>{data.overview}</p>
            </div>
        </div>
    );
}


export default Movie_Info;