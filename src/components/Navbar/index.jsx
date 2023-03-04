import React from 'react'
import { Toolbar, styled, Typography, Box } from '@mui/material'

const Navbar = ({ 
    position,
    setPage,
    setOpen,
    status,
    setStatus
 }) => {

    return (
        <Box>
            <Nav position={position}>
                <Link status={status === 0 && 'active'} onClick={() => {setPage(0);setStatus(0);setOpen(false)}}><Typography>Beranda</Typography></Link>
                <Link status={status === 1 && 'active'} onClick={() => {setPage(1);setStatus(1);setOpen(false)}}><Typography>Galeri</Typography></Link>
                <Link status={status === 2 && 'active'} onClick={() => {setPage(2);setStatus(2);setOpen(false)}}><Typography>Kontak</Typography></Link>
            </Nav>
        </Box>
    )
}

const Nav = styled(Toolbar)(({ theme, position }) => ({
    justifyContent: "center",
    gap: 32,
    color: theme.palette.grey[500],
    display: 'flex',
    marginTop: 20,
    flexDirection: position === 'sidebar' ? 'column' : 'row',
    alignItems: position == 'sidebar' ? 'start' : 'center',
    [theme.breakpoints.down('md')]: {
        display: position == 'sidebar' ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'start',
    }
}))

const Link = styled(Box)(({ theme, status }) => ({
    borderBottom: status == 'active' ? `2px solid ${theme.palette.primary.main}` : 'none',
    paddingBottom: 5,
    '&:hover': {
        cursor: "pointer",
    },
    '& .MuiTypography-root': {
        color: status == 'active' ? theme.palette.info.main : theme.palette.grey[500],
    }
}))

export default Navbar