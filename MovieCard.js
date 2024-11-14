import React from 'react'

function MovieCard(props) {
  return (
    <div class="col">
            <div class="card h-100">
              <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.poster_path}`} class="card-img-top movie-img" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"><b>Title:</b>{props.title}</h5>
                <p><b>Rating:</b> {props.vote_average}/10</p>
                <p><b>Release year: </b> {props.release_date}</p>
                <p class="card-text">{props.overview.slice(0,150)}</p>
              </div>
            </div>
          </div>
  )
}

export default MovieCard
