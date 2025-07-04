import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Style from "../SongList/SongList.module.css";
import shuffle from "../assets/shuffle.svg";






function AlbumPage() {
  // const theme = useTheme();
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchAlbum = async () => {
    try {
      const [response1, response2] = await axios.all([
        axios.get(`https://qtify-backend-labs.crio.do/albums/top`),
        axios.get(`https://qtify-backend-labs.crio.do/albums/new`),
      ]);

      const allAlbumData = [
        ...response1.data,
        ...response2.data
      ];

      const foundAlbum = allAlbumData.find((item) => item.id === albumId);
      setAlbum(foundAlbum);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch album data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbum();
  });

  if (loading) return <div className={Style.loading}>Loading...</div>;
  if (!album) return <div className={Style.errorMessage}>Album not found...</div>;

  const totalMs = album.songs.reduce(
    (sum, songs) => sum + songs.durationInMs,
    0
  );
  const totalDuration = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds % 3600) / 60);

    const pad = (num) => String(num).padStart(2, "0");
    return `${pad(hour)} ${"hr"} ${pad(minute)}${"min"}`;
  };
  const finalDuration = totalDuration(totalMs);

  const totalLikes = album.songs.reduce((sum, songs) => sum + songs.likes, 0);

  return (
    <div className={Style.container}>
      <div className={Style.albumHeader}>
        <img
          src={album.image}
          alt={album.title}
          height={200}
          width={200}
          className={Style.headImg}
        />
        <div className={Style.inside}>
          <h2 className={Style.heading}>{album.title}</h2>
          <p>{album.description}</p>
          <div className={Style.extras}>
            <p>{album.songs.length} Songs</p>
            <p>{finalDuration}</p>
            <p>{totalLikes} Follows</p>
          </div>
          <img src={shuffle} alt="Shuffle.svg" className={Style.shuffle}/>
        </div>
      </div>
      <div>
          <div className={Style.rowHeading}>
            <p>Title</p>
            <p>Artist</p>
            <p>Duration</p>
          </div>
          {album.songs.map((song) => (
            <div key={uuidv4()}>
              <div className={Style.albumRow}>
                <div className={Style.innerAlbum}>
                  <img
                    src={song.image}
                    alt={song.title}
                    height={50}
                    width={50}
                  />
                  <p>{song.title}</p>
                </div>
                <div className={Style.artistName}>
                  <p>{song.artists}</p>
                </div>
                <p>{Math.floor(song.durationInMs / 1000)} sec</p>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
}

export default AlbumPage;
