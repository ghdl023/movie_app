import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    console.log("Movie Props================");
    console.log(this.props);

    return (
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    console.log("MoviePoster Props================");
    console.log(this.props);
    return <img src={this.props.poster} width="300" />;
  }
}

export default Movie;
