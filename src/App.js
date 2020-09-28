import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetails";

import youtube from "./api/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  console.log(videos);
  return (
    <Grid style={{ justifyContent: "center" }} container>
      <Grid item xs={11}>
        <Grid container>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCOCjyhBJJX2hrdio-4tPM9HXzN4tQK3Tc",
        q: searchTerm,
      },
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
};
