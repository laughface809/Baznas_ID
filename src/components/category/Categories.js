import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  height: "100%",
  width: "45%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  // backgroundPosition: "center center",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledTypography = styled(Typography)({
  // margin: "25% 50px 25% 50px",
});
const Categories = () => {
  return (
    <Box mb={2} sx={{}}>
      <Stack
        direction={{
          // xs: "column",
          sm: "row",
        }}
        spacing={{ xs: 1, sm: 1, md: 1 }}
        // mt={2}
        p={4}
        sx={{
          background: "#EED9BE",
          //  borderRadius: "20px",
          height: "30vh",
        }}
        justifyContent="center"
      >
        <StyledBox sx={{ background: "#3C734B", borderRadius: "15px" }}>
          <StyledTypography align="center" variant="h3" sx={{ color: "white" }}>
            Category1
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ background: "#3C734B", borderRadius: "15px" }}>
          <StyledTypography align="center" variant="h3" sx={{ color: "white" }}>
            Category2
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ background: "#3C734B", borderRadius: "15px" }}>
          <StyledTypography align="center" variant="h3" sx={{ color: "white" }}>
            Category3
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
