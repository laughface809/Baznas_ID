import React from "react";
import { Box, Typography } from "@mui/material";
const Hero = () => {
  return (
    <Box>
      {/* <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Sample<b style={{ color: "red" }}> Template</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Typography> */}
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightgray",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography variant={"h6"} color="tomato" align="center" pt={8}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
            <Typography variant="h4" align="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
