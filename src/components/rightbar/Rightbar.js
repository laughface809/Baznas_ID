import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import postImage from "../../static/HeroImage.jpg";
import React from "react";
import Card from "../card/Card";

const Rightbar = () => {
  return (
    <Box>
      <Typography align="center" bgcolor={"#6a6a6a"} color="white">
        Most Activity
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — Lorem Ipsum is simply dummy text of the printing and typesetting industry.…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — Lorem Ipsum is simply dummy text of the printing and typesetting industry.…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — Lorem Ipsum is simply dummy text of the printing and typesetting industry.…"}
          />
        </ListItem>
        <Divider variant="inset" component={"li"} />
      </List>
      <Typography align="center" bgcolor={"#6a6a6a"} color="white">
        About Us
      </Typography>
      <Card cardImage={postImage} />
    </Box>
  );
};

export default Rightbar;
