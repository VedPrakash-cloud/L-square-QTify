import React from "react"
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import styles from "../card/card.module.css";
import Tooltip from "@mui/material/Tooltip"

export default function CardDisplay({ album, isSong = false }) {

  const navigate = useNavigate();
  const theme = useTheme();


  const handleClick = ()=>{
    navigate(`/album/${album.id}`);
  }
  
  if (!album) return null;

  return (
      <div className={styles.container}>
        <Tooltip title={`${album?.songs?.length || 0} Songs`} arrow placement="top">
        <Card sx={{ minWidth: 160, borderRadius:"15px" }}
        key={album.id}
        >
          <CardActionArea
          onClick={handleClick}
          >
            <CardMedia
              component="img"
              height="164"
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
          </Tooltip>
          <p className={styles.text}>{album.title}</p>
      </div>
  );
}
