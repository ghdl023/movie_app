import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(currentMovie => {
      return (
        <Movie
          title={currentMovie.title_english}
          poster={currentMovie.medium_cover_image}
          key={currentMovie.id}
          genres={currentMovie.genres}
          synopsis={currentMovie.synopsis}
        />
      );
    });

    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch(
      "https://yts.am/api/v2/list_movies.json?sort_by=download_count"
    )
      .then(potato => potato.json())
      .then(json => json.data.movies)
      .catch(error => console.log(error));
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
