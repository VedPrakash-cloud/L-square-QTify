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

export default function RenderCard() {
  const [data, setData] = useState([]);

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
        <h4>Collapse</h4>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={40}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid container spacing={2}>
            {data.map((album) => {
              return (
                <SwiperSlide key={album.id}>
                  <AlbumCard album={album} />
                </SwiperSlide>
              );
            })}
          </Grid>
        </Box>
      </Swiper>
    </div>
  );
}
