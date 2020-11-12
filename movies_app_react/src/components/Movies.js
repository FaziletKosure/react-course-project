import React from 'react'
const IMG_API="https://image.tmdb.org/t/p/w1280"
export default function Movies({title,vote_average,poster_path,overview}) {
    
    return (
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
    <span>{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
    <p>{overview}</p>
            </div>
          
        </div>
    )
}
