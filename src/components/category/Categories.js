import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "white",
  opacity: "0.8",
});
const Categories = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={5}
      >
        <StyledBox sx={{ background: 'lightgray' }}>
          <StyledTypography align="center" variant="h3">
            Category1
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ background: 'lightgray' }}>
          <StyledTypography align="center" variant="h3">
            Category2
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ background: 'lightgray' }}>
          <StyledTypography align="center" variant="h3">
            Category3
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
