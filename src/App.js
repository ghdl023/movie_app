import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  state = {
    movies: [
      {
        title: "신비한 동물 사전 1",
        poster:
          "http://ticketimage.interpark.com/Movie/still_image/V16/V1601682p_s01.gif"
      },
      {
        title: "신비한 동물 사전 2",
        poster: "http://img.movist.com/?img=/x00/05/00/80_p1.jpg"
      },
      {
        title: "해리포터와 비밀의 방",
        poster:
          "https://upload.wikimedia.org/wikipedia/ko/thumb/8/80/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B9%84%EB%B0%80%EC%9D%98_%EB%B0%A9_%EC%98%81%ED%99%94.jpg/250px-%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B9%84%EB%B0%80%EC%9D%98_%EB%B0%A9_%EC%98%81%ED%99%94.jpg"
      },
      {
        title: "해리포터와 마법사의 돌",
        poster:
          "https://upload.wikimedia.org/wikipedia/ko/thumb/d/dd/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%A7%88%EB%B2%95%EC%82%AC%EC%9D%98_%EB%8F%8C_%EC%98%81%ED%99%94.jpg/250px-%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%A7%88%EB%B2%95%EC%82%AC%EC%9D%98_%EB%8F%8C_%EC%98%81%ED%99%94.jpg"
      }
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "해리포터와 아즈카반의 죄수",
            poster:
              "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a4/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EC%95%84%EC%A6%88%EC%B9%B4%EB%B0%98%EC%9D%98_%EC%A3%84%EC%88%98_%EC%98%81%ED%99%94.jpg/250px-%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EC%95%84%EC%A6%88%EC%B9%B4%EB%B0%98%EC%9D%98_%EC%A3%84%EC%88%98_%EC%98%81%ED%99%94.jpg"
          }
        ]
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((currentMovie, index) => {
          return (
            <Movie
              title={currentMovie.title}
              poster={currentMovie.poster}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
