import React from 'react'
import { MainLayout } from './components/'
import HomeView from './pages/HomeView'
import { ThemeProvider } from '@mui/material'
import theme from './config/theme'

const App = () => {
  const [page, setPage] = React.useState(0)
  const [status, setStatus] = React.useState(0)
  return (
    <ThemeProvider theme={theme}>
      <MainLayout setPage={setPage} page={page} status={status} setStatus={setStatus}>
        <HomeView page={page} setPage={setPage} status={status} setStatus={setStatus} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App