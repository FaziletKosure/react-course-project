import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Movies from './components/Movies'

import './App.css';

function App() {
  const FEATURED_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
  // const IMG_API="https://image.tmdb.org/t/p/w1280"
  const SEARCH_API="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

  // const apiKey='http://www.omdbapi.com/?apikey=fb9a766c&s=iron&page=20'
  const [movies, setMovies] = useState([])
const [searchTerm, setSearchTerm]=useState('')
 
  const fetchMovies=async(API)=>{
   const {data}= await axios.get( API)
      console.log(data.results);
      setMovies(data.results)
      console.log(movies);  
  }

  useEffect(() => {
  fetchMovies(FEATURED_API)
  }, [])
  const handleOnSubmit=(e)=>{
    e.preventDefault();

    searchTerm ? fetchMovies(SEARCH_API + searchTerm) : setSearchTerm('');
      
  }

  const handleOnChange=(e)=>{
   setSearchTerm(e.target.value)
   console.log(e.target.value);
  }
  
  
  return (
    <div className="container"> 
    
     <header>
       <form onSubmit={handleOnSubmit}> 
       <input
        className="search" 
        type="search" 
        placeholder="Search..."
        value={searchTerm} 
        onChange={handleOnChange}
        name="" id=""/>
        </form>
   
  </header>
    <div className="movie-container">
      {movies.map(movie=>
        <Movies key={movie.id} {...movie}/>)}
    </div>
    </div>
  );
}

export default App;
