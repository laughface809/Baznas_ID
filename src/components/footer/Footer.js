import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "white",
});

const Footer = () => {
  return (
    <Box mt={2} sx={{ background: "#6a6a6a", height: "300px" }}>
      <Stack direction={{ xs: "row", md: "row" }} p={7}>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Contact Us
          </Typography>
          <Typography color={"white"} align={"center"}>
            Contact Us
          </Typography>
          <Typography color={"white"} align={"center"}>
            Contact Us
          </Typography>
          <Typography color={"white"} align={"center"}>
            Contact Us
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Data policy
          </Typography>
          <Typography color={"white"} align={"center"}>
            cookies
          </Typography>
          <Typography color={"white"} align={"center"}>
            Data Safety
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Categories
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            Category1
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            Category3
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            Category2
          </Typography>
        </Box>
        <Box>
          <Typography color={"white"} align={"center"}>
            Follow Us
          </Typography>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
