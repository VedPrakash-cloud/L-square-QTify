import React from "react"
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import styles from "../card/card.module.css";

export default function CardDisplay({ album, isSong = false }) {

  const navigate = useNavigate();
  const theme = useTheme();


  const handleClick = ()=>{
    navigate(`/album/${album.id}`);
  }
  
  if (!album) return null;

  return (
      <div className={styles.container}>
        <Card sx={{ minWidth: 159 }}
        key={album.id}
        >
          <CardActionArea
          onClick={handleClick}>
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
              label={
                isSong
                ? `${album.likes} Likes`
                : `${album.follows} Follows`
              }
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.text.main,
              }}
            />
          </CardActions>
        </Card>
        <p className={styles.text}>{album.title}</p>
      </div>
  );
}
