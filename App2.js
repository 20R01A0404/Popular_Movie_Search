import React,{useEffect, useState} from 'react'
import axios from "axios"
import "./App2.css"
import MovieCard from "./MovieCard"
import MovieNotFound from './MovieNotFound'

function App2() {
    const [popularMovies, setPopularMovies] = useState([])
    const [movieName, setMovieName] = useState([])
    const [searchedMovies, setSearchedMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () => { 
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
        .then((res) =>{
            setPopularMovies(res.data.results)
        })
    } ,[])

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716`)
        .then((res) =>{
            setIsLoading(false)
            setSearchedMovies(res.data.results)
        })
    },[movieName])


  return (
    <>
    <div style={{textAlign:"center"}}>
      <h1>Movie Search Engine</h1>
      <input 
      onChange = {(e) => {
        setIsLoading(true)
        setMovieName(e.target.value)
      }}
      value = {movieName}
      placeholder = "Enter Movie Name"/>
    </div>
    <div className="container mt-5">
        {movieName != "" && searchedMovies.length == 0 ? <MovieNotFound/> : ""}
        {isLoading == true ? <h3 style={{textAlign:"center"}}>Loading.....</h3> : ""}
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        { searchedMovies.length ==0 && movieName == "" ? popularMovies.map((item,i) =>{
            return <MovieCard 
            poster_path = {item.poster_path}
            title = {item.title}
            vote_average = {item.vote_average}
            release_date = {item.release_date}
            overview = {item.overview}
            />
        }) : isLoading == false ? searchedMovies.map((item,i) =>{
            return <MovieCard 
            poster_path = {item.poster_path}
            title = {item.title}
            vote_average = {item.vote_average}
            release_date = {item.release_date}
            overview = {item.overview}
            />
        }) : "" }
  </div>
  </div>
  </>
  )
}

export default App2
