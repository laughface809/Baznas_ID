import React from "react";
import Carousel from "react-material-ui-carousel";
import Slider1 from '../../assets/slide-1.jpeg'
import Slider2 from '../../assets/slide-2.jpeg'
import Slider3 from '../../assets/slide-3.jpeg'
import Slider4 from '../../assets/slide-4.jpeg'
import { Paper } from "@mui/material";

function CarouselHero(props) {
  var items = [
    {
        src: Slider1,
    },
    {
        src: Slider2,
    },
    {
        src: Slider3,
    },
    {
        src: Slider4,
    },
  ];

  return (
    <Carousel sx={{borderRadius: '8px'}}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper sx={{backgroundImage: `url(${props.item.src})`, width: 'auto', minHeight: '33rem', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} />
  );
}

export default CarouselHero;