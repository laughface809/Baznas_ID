import React from 'react'
import { MainLayout } from './components/'
import HomeView from './pages/HomeView'
import { ThemeProvider } from '@mui/material'
import theme from './config/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <HomeView />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App