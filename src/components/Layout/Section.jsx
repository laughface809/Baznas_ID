import React from 'react'
import { Stack, Typography, Box } from '@mui/material'

const Section = ({ children, title }) => {
    return (
        <Box mb={8}>
            <Stack direction={"row"} justifyContent={"space-between"} mb={5}>
                {title && <>
                    <Typography fontWeight={"bold"} variant="h5" color={"info.main"}>{title}</Typography>
                    <Typography fontWeight={"medium"} color={"gray"}>View All</Typography>
                </>}
            </Stack>
            {children}
        </Box>
    )
}

export default Section