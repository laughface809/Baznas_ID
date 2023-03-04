import React from 'react'
import { Drawer, Toolbar, IconButton } from '@mui/material'
import Navbar from '../Navbar';
import { Close } from '@mui/icons-material';

const SIDEBAR_WIDTH = 240;

const Sidebar = ({ open, onRequestClose, setPage, setOpen, status, setStatus }) => {
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
            <Navbar position='sidebar' setPage={setPage} setOpen={setOpen} status={status} setStatus={setStatus} />
        </Drawer>
    )
}

export default Sidebar