import React from "react";
import postImage from "../../static/HeroImage.jpg";
import { Box, Grid } from "@mui/material";
import Card from "../card/Card";
const Recents = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid item>
          <Card cardImage={postImage} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card cardImage={postImage} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card cardImage={postImage} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card cardImage={postImage} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card cardImage={postImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
