import React, { Component } from "react";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="card m-3 rounded bg-dark text-white  shadow-lg"
        onClick={(e) => this.props.showDetails(this.props.movie.imdbID)}
      >
        <img src={this.props.movie.Poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{this.props.movie.Title}</p>
          <p className="card-badge">{this.props.movie.Year}</p>
          <p className="card-badge">{this.props.movie.Type}</p>
        </div>
      </div>
    );
  }
}

export default MovieItem;
