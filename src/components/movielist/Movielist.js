import React from "react";
import Moviecard from "../moviecard/Moviecard";
import "./movielist.css";

const Movielist = ({ movielist }) => {
  return (
    <div className="movie-list">
      {movielist.map((el) => {
        <Moviecard movie={el} />;
      })}
    </div>
  );
};

export default Movielist;
