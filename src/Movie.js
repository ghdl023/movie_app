import React, { Component } from "react";
import "./Movie.css";
import PropTypes from "prop-types";

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string
  };

  render() {
    return (
      <div>
        <MoviePoster title={this.props.title} poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
// 똑똑한 컴포넌트

// class MoviePoster extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   };

//   render() {
//     return <img src={this.props.poster} width="300" alt={this.props.title} />;
//   }
// }

// stateless functional component(멍청한 컴포넌트)
const MoviePoster = ({ title, poster }) => {
  return <img src={poster} width="300" alt={title} />;
};

MoviePoster.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
