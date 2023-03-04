import React from 'react'
import { Box } from '@mui/material'

const Slider = ({ children }) => {
    return (
        <Box mb={8} sx={{ display: { xs: 'none', md: 'block' } }}>
            {children}
        </Box>
    )
}

export default Slider