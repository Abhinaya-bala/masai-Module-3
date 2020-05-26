import React, { Component } from "react";
import MovieItem from "./MovieItem/MovieItem";
import MovieDetail from "./MovieDetail/MovieDetail";

class Movielist extends Component {
  constructor(props) {
    super(props);
    this.state = { movieId: null };
  }
  showDetails = (movieId) => {
    this.setState({ movieId: movieId });
  };
  closeModal = () => {
    this.setState({ movieId: null });
  };

  render() {
    return (
      <div className="d-flex flex-wrap  bg-dark">
        {this.props.movies.map((movie) => (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
            showDetails={this.showDetails}
          />
        ))}
        {this.state.movieId ? (
          <MovieDetail
            movieId={this.state.movieId}
            closeModal={this.closeModal}
          />
        ) : (
            ""
          )}
      </div>
    );
  }
}

export default Movielist;
