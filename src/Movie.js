import React, { Component } from "react";
import "./Movie.css";
import PropTypes from "prop-types";

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string
  };

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("did mount");
  }

  render() {
    console.log("did render");
    // console.log("Movie Props================");
    // console.log(this.props);

    return (
      <div>
        <MoviePoster title={this.props.title} poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };

  render() {
    // console.log("MoviePoster Props================");
    // console.log(this.props);
    return <img src={this.props.poster} width="300" alt={this.props.title} />;
  }
}

export default Movie;
