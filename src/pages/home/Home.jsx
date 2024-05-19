import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/titleCards/TitleCards";
import Footer from "../../components/footer/Footer";
const Home = () => {
  
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner_img" />
          <div className="hero_caption">
          <img src={hero_title} alt="" className="caption_img" />
          <p>asfafafafafddfafadasdasdsadsadasdasdsa</p>
          <div className="hero_btn">
            <button className="btn">
              {" "}
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark_btn">
              {" "}
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>

        </div>
      </div>
      <div className="more_cards">
        <TitleCards title={"Now Playing"} category={"now_playing"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Rated"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
