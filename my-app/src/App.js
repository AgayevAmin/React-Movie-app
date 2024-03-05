import './App.css';
import HeaderComponent from './shared/Header/index.js';
import logo from './companents/sekil/heci.jpeg'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './companents/Home';
import NowPlaying from './companents/NowPlaying';
import Movie_Info from './companents/Movie_Info/index.js';




function App() {


 

  return (
    <>

      <Router>
          <HeaderComponent
            title='Movie App'
            subtitle='The best movie site'
            img={logo}
          />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/nowplaying" element={<NowPlaying/>} />
          <Route path="/movie/:id" element={<Movie_Info/>} />
        </Routes>

      </Router>
    
      </>
  );
}

export default App;

