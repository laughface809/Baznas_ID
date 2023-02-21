import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Carousel1(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      sx={{ padding: "10px" }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: "#3C734B", // 2
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "150px", // 5
          //   textAlign: "right", // 4
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper sx={{ margin: "" }}>
      <h2>{props.item.name} --1</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Carousel1;
