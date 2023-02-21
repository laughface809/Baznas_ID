import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "../carousel/Carousel";
const Hero = () => {
  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 600,
        width: "100%",
        display: "flex",
        justifyContent: "left",
        backgroundColor: "#ECEBE9",
        // borderRadius: "20px",
      }}
    >
      {/* backgroundColor: "#ECEBE9",
          // opacity: "0.8",
          backgroundImage: "radial-gradient(#3C734B 3px, #ECEBE9 3px)",
          backgroundSize: "69px 69px",

          borderRadius: "0 40px 40px 0px", */}

      <Box
        sx={{
          width: { xs: "100%", sm: "50%", md: "80%" },
          // padding: { xs: 3, sm: 2, md: "10px 10px 60px 10px" },
          paddingRight: 8,
          paddingLeft: 3,
          // backgroundColor: "#F6D087",
          //
          // backgroundColor: "red",
          borderRadius: "0 40px 40px 0px",
          background:
            "linear-gradient(270deg, rgba(61,116,76,1) 7%, rgba(246,207,138,1) 7%)",
        }}

        /* 
background: rgb(61,116,76);
background: linear-gradient(270deg, rgba(61,116,76,1) 7%, rgba(246,207,138,1) 7%);
        */
      >
        <Box
          sx={{
            height: "40px",
            width: "100%",
            backgroundColor: "green",
            marginBottom: "15px",
            backgroundImage: "radial-gradient(#3C734B 3px,#F6D18A 3px)",
            backgroundSize: "15px 15px",
          }}
        ></Box>
        <Box
          sx={{
            padding: { xs: 3, sm: 2, md: 1 },
            border: "4px solid #255130",
            borderRadius: "20px",
            height: "450px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              // background: "#3C734B",
              background: "#EED9BE",
              borderRadius: "15px",
              padding: "5px",
              width: "550px",
              height: "400px",
            }}
          >
            <Carousel />
          </Box>
        </Box>
        <Box
          sx={{
            height: "50px",
            width: "100%",
            backgroundColor: "green",
            marginTop: "15px",
            backgroundImage: "radial-gradient(#3C734B 3px,#F6D18A 3px)",
            backgroundSize: "30px 30px",
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "50%", md: "40%" },
          padding: { xs: 3, sm: 2, md: 10 },
          // backgroundColor: "#F6D087",
          // backgroundColor: "red",
          // borderRadius: "0 40px 40px 0px",
          backgroundColor: "#ECEBE9",
          // opacity: "0.8",
          backgroundImage: "radial-gradient(#3C734B 3px, #ECEBE9 3px)",
          backgroundSize: "69px 69px",

          borderRadius: "0 40px 40px 0px",
          // ==============
          // backgroundColor: " #ECEBE9",
          // // opacity: "0.8",
          // backgroundImage:
          //   " linear-gradient(135deg, #3C734B 25%, transparent 25%), linear-gradient(225deg, #3C734B 25%, transparent 25%), linear-gradient(45deg, #3C734B 25%, transparent 25%), linear-gradient(315deg, #3C734B 25%, #ECEBE9 25%)",
          // backgroundPosition: "39px 0, 39px 0, 0 0, 0 0",
          // backgroundSize: "78px 78px",
          // backgroundRepeat: "repeat",
        }}

        /* 
background: rgb(60,115,75);
background: linear-gradient(270deg, rgba(60,115,75,1) 3%, rgba(13,115,19,1) 7%, rgba(246,207,138,1) 7%);
        */
      >
        <Box
          sx={{
            // padding: { xs: 3, sm: 2, md: 3 },
            // border: "1px solid #3C734B",
            borderRadius: "20px",
            width: "390px",
            height: "350px",
            marginBottom: "10px",
            // justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#255130",
              borderRadius: "15px",
              height: "100px",
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTop: "8px solid #F6D18A",
              borderBottom: "8px solid #F6D18A",

              // border: "3px solid #3C734B",
            }}
          >
            <Typography
              sx={{ marginLeft: "10px", color: "white" }}
              variant={"h3"}
            >
              Bantu Kami !
            </Typography>
          </Box>
          <Box
            sx={{
              border: "3px solid #255130",
              backgroundColor: "#255130",
              borderRadius: "15px",
              height: "200px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              // border: "3px solid #3C734B",
            }}
          >
            dengan mengirimkan donasi anda
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
