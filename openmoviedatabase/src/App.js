import React, { Component } from 'react';
import axios from 'axios'
import NavBar from "./NavBar/NavBar"
import Movielist from "./MovieList/MovieList"

import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          "Title": "Batman Begins",
          "Year": "2005",
          "imdbID": "tt0372784",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "Title": "Batman v Superman: Dawn of Justice",
          "Year": "2016",
          "imdbID": "tt2975590",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "Title": "Batman",
          "Year": "1989",
          "imdbID": "tt0096895",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
        },
        {
          "Title": "Batman Returns",
          "Year": "1992",
          "imdbID": "tt0103776",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
        },
        {
          "Title": "Batman Forever",
          "Year": "1995",
          "imdbID": "tt0112462",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "Title": "Batman & Robin",
          "Year": "1997",
          "imdbID": "tt0118688",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
        },
        {
          "Title": "The Lego Batman Movie",
          "Year": "2017",
          "imdbID": "tt4116284",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
        },
        {
          "Title": "Batman: The Animated Series",
          "Year": "1992–1995",
          "imdbID": "tt0103359",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
        },
        {
          "Title": "Batman: Under the Red Hood",
          "Year": "2010",
          "imdbID": "tt1569923",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
          "Title": "Batman: The Dark Knight Returns, Part 1",
          "Year": "2012",
          "imdbID": "tt2313197",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
        }
      ]
    };
  }

  searchMovies = async (name) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=b19722fa&s=${name}`)
    console.log(response)
    const tempMovies = response.data.Search

    this.setState({
      movies: tempMovies
    })



  }

  render() {
    return (
      <div>
        <NavBar searchMovies={this.searchMovies} />
        <Movielist movies={this.state.movies} />

      </div>
    );

  }
}

export default App

