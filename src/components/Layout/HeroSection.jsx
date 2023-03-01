import React from 'react'
import { Paper, styled } from '@mui/material'

const HeroSection = ({ children, heroSx, sx }) => {
    return (
        <StyledPaper elevation={0} sx={heroSx}>
            {children}
        </StyledPaper>
    )
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    paddingRight: 80,
    paddingLeft: 80,
    borderRadius: 8,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        padding: 40,
        minHeight: '300px',
    }
}))

export default HeroSection