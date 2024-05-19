import React, { useEffect, useRef, useState } from "react";
import "./titleCards.css";
import axios from "axios";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [movies, setMovies] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWM1Njg5YzdjNDg5YzA0ODlhYjExMTZiNDgyMjk3MSIsInN1YiI6IjY2NDVhYWUyZmRiMjE3NDI4N2VlZDgzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pLGCAHNLUJcCtRISCtw-OrdMe53bFJXS7lVNem8vbi0",
    },
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
        options
      )
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="title_cards">
      <h2>{title}</h2>
      <div className="card_list" ref={cardsRef}>
        {movies.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              alt=""
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
