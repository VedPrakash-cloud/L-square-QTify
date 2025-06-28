import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import styles from "../card/card.module.css";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import { Swiper } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default function CardDisplay({ album }) {
  const theme = useTheme();

  if (!album) return null;

  return (
    // <Swiper
    //   modules={[Navigation, Pagination, Scrollbar, A11y]}
    //   spaceBetween={50}
    //   slidesPerView={7}
    //   navigaltion
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => {
    //     console.log("slide change");
    //   }}
    // >
      <div className={styles.container}>
        <Card sx={{ minWidth: 159 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              src={album.image}
              alt={album.title}
            />
          </CardActionArea>
          <CardActions>
            <Chip
              className={styles.pills}
              label={`${album.follows} Follows`}
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.tertiary.main,
              }}
            />
          </CardActions>
        </Card>
        <p className={styles.text}>{album.title}</p>
      </div>
    // </Swiper>
  );
}
