import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "10px",
          flexDirection: "column",
          marginTop: "20px",
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "20px", marginTop: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};
