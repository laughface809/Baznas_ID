import React from 'react'
import { Toolbar, styled, Box, Typography, useTheme, InputBase, IconButton } from '@mui/material'
import LogoImage from '../../assets/logo.jpg'
import { Search, Menu } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
import Navbar from '../Navbar'
import TranslateIcon from '@mui/icons-material/Translate';

const Header = ({ 
    onMenuClick,
    setPage,
    page,
    status,
    setStatus
 }) => {
    // const theme = useTheme()

    function keyPress(e){
        if(e.keyCode == 13){
            window.open(`https://www.google.com/search?q=UPZ+Alhidayah+Gatsu+${e.target.value}`, '_blank');
        }
     }

    return (
        <Box component={'header'} mb={5}>
            <MainHeader>
                <LeftMenu>
                    <IconButton onClick={onMenuClick} sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Menu color='info' />
                    </IconButton>
                    <Logo src={LogoImage} sx={{ display: { xs: 'none', md: 'block' } }} />
                </LeftMenu>
                <SearchBar>
                    <InputBase sx={{ fontSize: 14, width: "100%" }} placeholder='Coba cari informasi' onKeyDown={(e) => keyPress(e)} />
                    <Search htmlColor={grey['400']} sx={{cursor: 'pointer'}} />
                </SearchBar>
                <RightMenu>

                    <Typography sx={{cursor: 'pointer'}} >
                        <TranslateIcon sx={{ opacity: 0 }} />
                    </Typography>
                    <Typography sx={{cursor: 'pointer'}} >
                        <TranslateIcon sx={{ opacity: 0 }} />
                    </Typography>

                    <Typography sx={{cursor: 'pointer'}} >
                        <TranslateIcon sx={{ color: '#463C74' }} />
                    </Typography>
                </RightMenu>
            </MainHeader>
            <Navbar position='header' setPage={setPage} page={page} status={status} setStatus={setStatus} />
        </Box>
    )
}

const MainHeader = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    gap: 15,
})

export const Logo = styled('img')(({ theme }) => ({
    height: "6rem",
    display: 'block',
}))

const RightMenu = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down('md')]: {
        gap: '15px'
    }
}))

const SearchBar = styled(Box)(({ theme }) => ({
    backgroundColor: "#F8F7F5",
    width: "500px",
    display: "flex",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: '10px',
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const LeftMenu = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 10
}))

export default Header