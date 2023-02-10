import { Box, CardContent, CardMedia, Link, Typography } from "@mui/material";
import React from "react";

const Card = ({ cardImage }) => {
  return (
    <Box>
      <Link
        href="/details"
        sx={{ textDecoration: "none" }}
      >
        {" "}
        <CardMedia
          component="img"
          alt="green iguana"
          height="100%"
          image={cardImage}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            align="center"
            component="div"
            color={"tomato"}
          >
            LINK1
          </Typography>
          <Typography gutterBottom variant="h5" align="center" component="div">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            align="center"
            component="div"
            color="text.secondary"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default Card;
