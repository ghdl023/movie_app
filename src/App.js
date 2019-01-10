import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  state = {};

  componentDidMount() {
    console.log(
      fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    );
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((currentMovie, index) => {
      return (
        <Movie
          title={currentMovie.title}
          poster={currentMovie.poster}
          key={index}
        />
      );
    });

    return movies;
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading.."}
      </div>
    );
  }
}

export default App;
