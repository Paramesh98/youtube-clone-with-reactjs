import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default function VideoDetails({ video }) {
  if (video) {
    if (video.length === 0)
      return <h3 style={{ alignItems: "center" }}>Loading...</h3>;

    const link = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;

    return (
      <React.Fragment>
        <Paper elevation={6} style={{ height: "500px", marginRight: "50px" }}>
          <iframe
            frameBorder="0"
            height="100%"
            width="100%"
            title="Video Player"
            src={link}
          />
        </Paper>
        <Paper elevation={6} style={{ padding: "15px", marginRight: "50px" }}>
          <Typography variant="h4">
            {video.snippet.title} - {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle1">
            {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle2">
            {video.snippet.description}
          </Typography>
        </Paper>
      </React.Fragment>
    );
  } else {
    return <h3>Search a video</h3>;
  }
}
