import React, { Component } from "react";
import axios from "axios";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
      }
    };
  }
  componentDidMount = async () => {
    console.log("movieid", this.props.movieId);
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=b19722fa&i=${this.props.movieId}&plot=full`
    );
    console.log(response);

    this.setState({ movie: response.data });
  };

  render() {
    return (
      <div className="card bg-dark text-light movieDetailWrapper ">
        <div className="row">
          <div className="col-12 text-right">
            <button
              className="m-2"
              onClick={(e) => {
                this.props.closeModal();
              }}
            >
              Close
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-8 p-4">
            <h3>{this.state.movie.Title}</h3>
            <div className="d-flex">
              <h6 className="mr-2 text-muted ">
                <span className="badge badge-warning">
                  IMDB {this.state.movie.imdbRating}
                </span>
              </h6>
              <h6 className="mx-2 text-muted">
                <span className="badge badge-info">
                  {this.state.movie.Runtime}
                </span>
              </h6>
              <h6 className="mx-2 text-muted">
                <span className="badge badge-dark">
                  {this.state.movie.Year}
                </span>
              </h6>
            </div>
            <div className="py-4">
              <p className="font-weight-light">{this.state.movie.Plot}</p>
            </div>
            <div className="row">
              <div className="col-6 text-secondary text-capitalize ">
                Director :
              </div>
              <div className="col-6 text-secondary text-capitalize">
                {this.state.movie.Director}
              </div>
              <div className="col-6 text-secondary text-capitalize">
                Starring
              </div>
              <div className="col-6 text-secondary text-capitalize">
                {this.state.movie.Actors}
              </div>
              <div className="col-6 text-secondary text-capitalize">Genre</div>
              <div className="col-6 text-secondary text-capitalize">
                {this.state.movie.Genre}
              </div>
              <div className="col-6 text-secondary text-capitalize">
                Language
              </div>
              <div className="col-6 text-secondary text-capitalize">
                {this.state.movie.Language}
              </div>
            </div>
          </div>
          <div className="col-4 p-4">
            <img
              className="rounded w-100 shadow-lg"
              src={this.state.movie.Poster}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
