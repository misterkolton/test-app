import React, { useState, useEffect } from "react"
import { Movie } from "./Movie"
import { Filter } from "../Filter"

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"

export function MoviesList() {
  const [filter, setFilter] = useState("")
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    try {
      const res = await fetch(API_URL)
      const movies = await res.json()
      setMovies(movies.results)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
      </ul>
    </div>
  )
}
