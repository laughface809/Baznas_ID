import React from 'react'
import { Paper, styled, Grid } from '@mui/material';

const News = ({ src, alt }) => {
    return (
        <Grid xs={12} lg={4} item>
            <StyledPaper elevation={0}>
            <img src={src} alt={alt} style={{width: '100%', borderRadius: '4px'}} />
            </StyledPaper>
        </Grid>
    )
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    boxShadow: '0px 9.04932px 26.5717px rgba(215, 228, 249, 0.5);'
}))

export default News