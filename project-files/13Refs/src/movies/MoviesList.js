import React, { useState, useRef } from 'react'
import { Movie } from './Movie'
import { Filter } from '../Filter'

const movies = [
  {
    name: "36th Chamber"
  },
  {
    name: "5 Deadly Venoms"
  },
  {
    name: "Man of Iron"
  },
]


export function MoviesList() {
  const [filter, setFilter] = useState("")
  // const varName = useRef(initialValue)
  const ulRef = useRef(null)
  const ref = useRef(null)

  return (
    <div ref={ulRef}>
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log(ref.current.value)
      }}>
        <input ref={ref} />
        <button />
      </form>
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        {movies.filter((movie) =>
          movie.name.toLowerCase().includes(filter.toLowerCase())
        ).map(( movie ) => (
          <Movie key={movie.name} movie={movie} />
        )
        )}
      </ul>
    </div>
  )
}