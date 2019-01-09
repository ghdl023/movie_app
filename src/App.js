import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

const movieTitles = [
  "신비한 동물 사전1",
  "신비한 동물 사전2 : 그린델왈드의 범죄",
  "해리포터와 비밀의 방",
  "해리포터와 마법사의 돌"
];
const moviePosters = [
  "http://ticketimage.interpark.com/Movie/still_image/V16/V1601682p_s01.gif",
  "http://img.movist.com/?img=/x00/05/00/80_p1.jpg",
  "https://upload.wikimedia.org/wikipedia/ko/thumb/8/80/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B9%84%EB%B0%80%EC%9D%98_%EB%B0%A9_%EC%98%81%ED%99%94.jpg/250px-%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B9%84%EB%B0%80%EC%9D%98_%EB%B0%A9_%EC%98%81%ED%99%94.jpg",
  "https://upload.wikimedia.org/wikipedia/ko/thumb/d/dd/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%A7%88%EB%B2%95%EC%82%AC%EC%9D%98_%EB%8F%8C_%EC%98%81%ED%99%94.jpg/250px-%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%A7%88%EB%B2%95%EC%82%AC%EC%9D%98_%EB%8F%8C_%EC%98%81%ED%99%94.jpg"
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={moviePosters[0]} />
        <Movie title={movieTitles[1]} poster={moviePosters[1]} />
        <Movie title={movieTitles[2]} poster={moviePosters[2]} />
        <Movie title={movieTitles[3]} poster={moviePosters[3]} />
      </div>
    );
  }
}

export default App;
