import React from "react";

import "./moviecard.css";

const Moviecard = (movie) => {
  return (
    <div>
      <div className="main_card">
        <div className="card_left">
          <div className="card_datails">
            <h1>{movie.name}</h1>
            <div className="card_cat">
              <p className="PG">{movie.rating}</p>
              <p className="year">{movie.date}</p>
              <p className="genre">{movie.type}</p>
              <p className="time">{movie.time}</p>
            </div>
            <p className="disc">{movie.description}</p>
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
              Read More
            </a>
            <div>
              <fieldset className="rating">
                <input type="radio" id="star5" name="rating" defaultValue={5} />
                <label htmlFor="star5">5 stars</label>
                <input type="radio" id="star4" name="rating" defaultValue={4} />
                <label htmlFor="star4">4 stars</label>
                <input type="radio" id="star3" name="rating" defaultValue={3} />
                <label htmlFor="star3">3 stars</label>
                <input type="radio" id="star2" name="rating" defaultValue={2} />
                <label htmlFor="star2">2 stars</label>
                <input type="radio" id="star1" name="rating" defaultValue={1} />
                <label htmlFor="star1">1 star</label>
              </fieldset>
            </div>
            <div className="social-btn">
              {/* WATCH TRAILER*/}
              <button>
                <i className="fas fa-play" /> SEE TRAILER
              </button>
              {/* GET*/}
              <button>
                <i className="fas fa-download" /> DOWNLOAD
              </button>
              {/*USERS RATINGS*/}
              <button>
                <i className="fas fa-thumbs-up" /> 97%
              </button>
              {/*BOOKMARK*/}
              <button>
                <i className="fas fa-star" />
              </button>
            </div>
          </div>
        </div>
        <div className="card_right">
          <div className="img_container">
            <img src={movie.image} alt="" />
          </div>
          <div className="play_btn">
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
              <i className="fas fa-play-circle" />
            </a>
          </div>
          <div></div>
        </div>
      </div>
      {/* FOLLOW */}
      <a
        className="Follow"
        href="https://codepen.io/ZaynAlaoudi/"
        target="blank_"
      />
    </div>
  );
};

export default Moviecard;
