import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../card/card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import classes from "../cards/TopAlbum.module.css";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Button from "@mui/material/Button";
import Prev from "../assets/prev.svg"
import Next from "../assets/next.svg"

export default function RenderCard() {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => setShowAll((prev) => !prev);

  const CardApi = async () => {
    try {
      const response = await axios.get(
        `https://qtify-backend-labs.crio.do/albums/top`
      );
      setData(response.data);
    } catch (err) {
      console.error("Please try again", err);
      alert(err.data.message.error);
    }
  };

  useEffect(() => {
    CardApi();
  }, []);

  return (
    <div className={classes.text}>
      <div className={classes.heading}>
        <h3>Top Albums</h3>
        <h4
          onClick={toggleShowAll}
          style={{ cursor: "pointer", color: "#34c94b" }}
        >
          {showAll ? "Collapse" : "Show All"}
        </h4>
      </div>
      {showAll ? (
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid container spacing={2}>
            {data.map((album) => (
              <Grid key={album.id}>
                <AlbumCard album={album} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <>
        <div className={classes.navigationButton}>
          <Button className="swiperPrev1">
            <img src={Prev} alt="Prev" />
            </Button>
          <Button className="swiperNext1">
            <img src={Next} alt="Next" />
          </Button>
        </div>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={40}
          slidesPerView={6}
          navigation={{
            prevEl:".swiperPrev1",
            nextEl:".swiperNext1",
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {data.map((album) => (
            <SwiperSlide key={album.id}>
              <AlbumCard album={album} />
            </SwiperSlide>
          ))}
        </Swiper>
        </>
      )}
    </div>
  );
}
