import React, { useState } from 'react'
import { Container } from '@mui/material'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

const MainLayout = ({ 
    children,
    setPage,
    page,
    status,
    setStatus
 }) => {
    const [open, setOpen] = useState(false)
    const handleMenuClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <Container>
                <Header onMenuClick={handleMenuClick} setPage={setPage} page={page} status={status} setStatus={setStatus} />
                <Sidebar open={open} onRequestClose={handleMenuClick} setPage={setPage} setOpen={setOpen} status={status} setStatus={setStatus} />
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default MainLayout