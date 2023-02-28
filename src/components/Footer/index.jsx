import React from 'react'
import { Box, styled, Container, Grid, Stack, colors, Typography } from '@mui/material'
import LogoImage from '../../assets/logo-no-bg.png'
import { Logo } from '../Header'

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Grid container spacing={5}>
                    <Grid item md={8} xs={12}>
                        <Box>
                            <Logo src={LogoImage} />   
                            <Typography
                                color={colors.grey['500']}
                                sx={{ marginTop: 2 }}
                                variant="body2">
                                © 2023 UPZ Al Hidayah Gatsu.
                            </Typography> 
                        </Box>
                    </Grid>
                    <Grid item md={2} xs={6}>
                        <Typography>Halaman</Typography>
                        <Stack mt={2} spacing={1.5}>
                            <NavigationItem>Beranda</NavigationItem>
                            <NavigationItem>Tentang Kami</NavigationItem>
                            <NavigationItem>Promosi</NavigationItem>
                        </Stack>
                    </Grid>
                    <Grid item md={2} xs={6}>
                        <Typography>Kontak</Typography>
                        <Stack mt={2} spacing={1.5}>
                            <NavigationItem>admin@upzalhidayahgatsu.com</NavigationItem>
                            <NavigationItem>Jln. Gatot Subroto</NavigationItem>
                            <NavigationItem>Denpasar, Bali</NavigationItem>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </StyledFooter >
    )
}

const StyledFooter = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    paddingTop: 40,
    paddingBottom: 40,
}))

const NavigationItem = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    color: colors.grey['500'],
}))

export default Footer