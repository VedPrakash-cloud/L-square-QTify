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
import Button from "@mui/material/Button";
import Prev from "../assets/prev.svg"
import Next from "../assets/next.svg"


export default function FetchNewAlbum() {
  const [data, setData] = useState([]);
  const[showAll, setShowAll] = useState(false);
  
  const toggleShowAll = ()=> setShowAll((prev)=> !prev);

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
          <Button className="swiperPrev">
            <img src={Prev} alt="Prev"/>
            </Button>
          <Button className="swiperNext">
            <img src={Next} alt="Next"/>
          </Button>
        </div>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={40}
          slidesPerView={6}
          navigation={{
            prevEl:".swiperPrev",
            nextEl:".swiperNext",
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
