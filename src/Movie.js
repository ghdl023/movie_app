import React, { Component } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import "./Movie.css";
import PropTypes from "prop-types";

// stateless functional component(멍청한 컴포넌트, state가 없는 컴포넌트)
const Movie = ({ title, poster, genres, synopsis }) => {
  console.log("******");
  console.log(genres);
  console.log("******");
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster title={title} poster={poster} />
      </div>
      <div className="Movie__Column">
        <h1 className="Movie__Title">{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => {
            console.log(genre);
            return <MovieGenre genre={genre} key={index} />;
          })}
        </div>
        <div className="Movie__Synopsis">
          {
            <LinesEllipsis
              text={synopsis}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          }
        </div>
      </div>
    </div>
  );
};

// stateless functional component(멍청한 컴포넌트, state가 없는 컴포넌트)
const MoviePoster = ({ title, poster }) => {
  return <img className="Movie__Poster" src={poster} alt={title} />;
};

const MovieGenre = genre => {
  console.log("무비장르안에 genre", genre);
  return <span className="Movie__Genre">{genre.genre}</span>;
};
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};
MoviePoster.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default Movie;
