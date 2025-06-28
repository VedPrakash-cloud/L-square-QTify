import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import classes from "../NewAlbum/newalbum.module.css";
import AlbumCard from "../card/card";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


export default function FetchNewAlbum() {
  const [data, setData] = useState([]);

  const NewAlbum = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    NewAlbum();
  }, []);

  return (
    <div className={classes.text}>
      <div className={classes.heading}>
        <h3>New Albums</h3>
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
