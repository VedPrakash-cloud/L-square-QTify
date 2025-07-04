import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import axios from "axios";
import classes from "../Songs/SongTab.module.css";
import AlbumCard from "../card/card";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Button from "@mui/material/Button";
import Prev from "../assets/prev.svg";
import Next from "../assets/next.svg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [genres, setGenres] = useState([]);
  const [songByGenre, setSongByGenre] = useState({});
  const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);

  useEffect(() => {
    const fetchGenre = async () => {
      try {

        const [genreRes, songRes] = await Promise.all([
          axios.get("https://qtify-backend-labs.crio.do/genres"),
          axios.get("https://qtify-backend-labs.crio.do/songs"),
        ]);

        const apiGenre = genreRes.data.data;
        const allSongs = songRes.data;

        const genreList = [{ key: "all", label: "all" }, ...apiGenre];
        setGenres(genreList);

        const groupedSongs = {
          all:allSongs,
        }

        for (const genre of apiGenre) {
          groupedSongs[genre.label] = allSongs.filter(
            (song)=>song.genre.label === genre.label
          )
        }

        setSongByGenre(groupedSongs);
      } catch (err) {
        console.error("Error fetching genre:", err);
      }
    };

    fetchGenre();
  }, []);

  useEffect(() => {
  if (swiperRef.current) {
    swiperRef.current.update();
    setIsStart(swiperRef.current.isBeginning);
    setIsEnd(swiperRef.current.isEnd);
  }
},[songByGenre]);

  const handleChange = (event, newValue)=>{
    setValue(newValue);
  }

  return (
    <>
      <h3 className={classes.mainHeading}>Songs</h3>
      <Box sx={{ width: "100%" }}>
        <Box
          className={classes.tabBox}
          sx={{ borderBottom: 1, color: "text", borderColor: "divider" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="genre tabs"
            className={classes.tab}
          >
            {genres.map((genre, index) => (
              <Tab
                key={genre.key}
                label={genre.label}
                className={classes.tab}
                id={`simple-tab-${index}`}
                aria-controls={`simple-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>
        {genres.map((genre, index) => (
          <CustomTabPanel key={genre.key} value={value} index={index}>
            <div className={classes.navigationButton1}
              style={{ display: isStart ? "none" : "block"}}
            >
              <Button className="swiperPrev2">
                <img src={Prev} alt="Prev" />
              </Button>
            </div>
            <div className={classes.navigationButton}
            style={{ display: isEnd ? "none" : "block"}}>
              <Button className="swiperNext2">
                <img src={Next} alt="Next" />
              </Button>
            </div>
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={40}
              slidesPerView={7}
              onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsStart(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              swiper.on("slideChange", () => {
                setIsStart(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              });
            }}
              navigation={{
                prevEl: ".swiperPrev2",
                nextEl: ".swiperNext2",
              }}
            >
              {songByGenre[genre.label]?.map((song) => (
                <SwiperSlide key={song.id} style={{width: "160px"}} className={classes.mySlide}>
                  <AlbumCard album={song} isSong={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          </CustomTabPanel>
        ))}
      </Box>
    </>
  );
}
