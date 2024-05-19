import React, { useEffect, useState } from "react";
import "./player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { OPTION } from "../../constants/Constants";

const Player = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });
  
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US'`,
        OPTION
      )
      .then((response) => {
        setApiData(response.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={(()=>{navigate(-2)})} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="player_info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
