import { Stack, Typography, Box, styled, InputBase, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import Button from '../Button'
import HeroSection from '../Layout/HeroSection'

const Recomended = () => {
    const { breakpoints } = useTheme()
    const isMobile = useMediaQuery(breakpoints.down('md'))

    return (
        <Box mb={10}>
            <HeroSection>
                <Content>
                    <Typography textAlign={"center"} variant="h4" color="info.main" fontWeight={"bold"}>
                        Kami tidak seberapa<br /> tanpa bantuanmu
                    </Typography>

                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 5, md: 2 }}>
                        <FormControl>
                            <InputBase placeholder='Tulis harapan dan masukan' fullWidth />
                        </FormControl>
                        <Button fullWidth={isMobile ? true : false}>Kirim</Button>
                    </Stack>
                </Content>
            </HeroSection>
        </Box>
    )
}

const Content = styled(Box)({
    margin: 'auto',
    paddingBottom: 100,
    paddingTop: 100,
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
})

const FormControl = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    width: 400,
    [theme.breakpoints.down('md')]: {
        width: 'auto'
    }
}))

export default Recomended