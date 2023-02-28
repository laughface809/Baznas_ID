import React from 'react'
import { Drawer, Toolbar, IconButton } from '@mui/material'
import Navbar from '../Navbar';
import { Close } from '@mui/icons-material';

const SIDEBAR_WIDTH = 240;

const Sidebar = ({ open, onRequestClose }) => {
    return (
        <Drawer
            open={open}
            onClose={onRequestClose}
            sx={{
                width: SIDEBAR_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: SIDEBAR_WIDTH,
                },
            }}
            variant='temporary'>
            <Toolbar sx={{ justifyContent: 'end' }}>
                <IconButton onClick={() => onRequestClose()}>
                    <Close />
                </IconButton>
            </Toolbar>
            <Navbar position='sidebar' />
        </Drawer>
    )
}

export default Sidebar