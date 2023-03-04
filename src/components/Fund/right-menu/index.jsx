import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Paper, Typography, useTheme, useMediaQuery } from '@mui/material';
import Button from '../../Button';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '2rem',
  borderRadius: '1rem',
  border: '3px solid #FBF4E2',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: '1rem',
    backgroundColor: theme.palette.mode === 'light' ? '#B4D51E' : '#308fe8',
  },
}));

export default function RightMenuProgress({
  setPage,
  setStatus,
  users
}) {

  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper sx={{padding: '1rem'}}>
        <BorderLinearProgress variant="determinate" value={users.length > 0 ? (users[0].Target / users[0].Terkumpul) * 100 : '50'} />
        <Paper sx={{display: 'flex', placeContent: 'space-between', padding: '1rem', boxShadow: 'none'}}>
          <div>
            <Typography sx={{fontWeight: 'bold', fontSize: '1.3rem'}}>
              {users.length > 0 ? users[0].Terkumpul : 'Rp. 5000.000'}
            </Typography>
            <Typography sx={{fontSize: '1.4rem'}}>
              Terkumpul
            </Typography>
          </div>
          <div>
            <Typography sx={{fontWeight: 'bold', fontSize: '1.3rem'}}>
            {users.length > 0 ? users.length - 1 : '20'} 
            </Typography>
            <Typography sx={{fontSize: '1.4rem'}}>
              Donatur
            </Typography>
          </div>
          <div>
            <Typography sx={{fontWeight: 'bold', fontSize: '1.3rem'}}>
              {users.length > 0 ? users[0].Target : 'Rp. Rp. 20.000.000'}
            </Typography>
            <Typography sx={{fontSize: '1.4rem'}}>
              Target
            </Typography>
          </div>
        </Paper>
        <Button fullWidth={isMobile ? true : false} sx={{width: '100%', marginTop: '1rem'}} onClick={() => {setPage(2);setStatus(2)}}>Donasi</Button>
      </Paper>
    </Box>
  );
}