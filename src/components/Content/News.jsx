import React from 'react'
import { Box, Paper, styled, Grid, Typography, colors } from '@mui/material'

const News = ({ name, news }) => {
    return (
        <Grid xs={12} lg={4} item>
            <StyledPaper elevation={0}>
                <Box>
                    <Typography fontWeight={"medium"} mb={2}>{name}</Typography>
                    <Typography variant='caption' color={colors.grey[500]}>{news}</Typography>
                </Box>
            </StyledPaper>
        </Grid>
    )
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: 40,
    textAlign: "center",
    border: '1px solid ' + theme.palette.primary.main,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    boxShadow: '0px 9.04932px 26.5717px rgba(215, 228, 249, 0.5);'
}))

export default News