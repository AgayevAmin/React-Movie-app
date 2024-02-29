
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import MovieItem from "./companents/Pages1";
import { API_KEY, BASE_URL } from "./companents/config";
import Header from "./shared/Header";
import logo from "./companents/sekil/heci.jpeg";
import { BrowserRouter as Router, Routes  } from "react-router-dom";



function App() {
  
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {

    fetchMovies();
  }, []);

  return (
    <>
   <Router>
    <Header logo={logo} title="Movie Site" subTitle="The Best Movie Site" />
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> */}
    </Routes>

    
   </Router>
    <div className="div">
     
      
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
          ))}
      
    </div>
          </>
  );
}

export default App;

